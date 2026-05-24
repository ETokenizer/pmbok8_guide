/**
 * 认证服务 — Supabase Auth + License 管理
 * Auth Service — Login, Register, License verification
 */
import { state, saveState, setToStorage, STORAGE_KEYS } from '../core/state.js';
import { enableDemoMode, isDemoMode, disableDemoMode } from './demo-mode.js';

const AUTH_URL = 'https://afuesynrviwicnjisuma.supabase.co';
const AUTH_KEY = 'sb_publishable_fIEpAlMH3j4qgc9CXDP6Dw__31BR7pN';

let authClient = null;

// Wait for Supabase SDK to load (retry up to 10s)
async function waitForSupabase() {
    if (window.supabase) return true;
    for (let i = 0; i < 100; i++) {
        await new Promise(r => setTimeout(r, 100));
        if (window.supabase) return true;
    }
    return false;
}

// Get or create auth client (async to wait for SDK)
async function getAuth() {
    if (authClient) return authClient;
    const ready = await waitForSupabase();
    if (!ready) return null;
    authClient = window.supabase.createClient(AUTH_URL, AUTH_KEY, {
        auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: false }
    });
    return authClient;
}

// ==================== Auth Methods ====================

// Sign up
export async function signUp(email, password) {
    const auth = await getAuth();
    if (!auth) return { error: 'Supabase SDK 未加载' };
    const { data, error } = await auth.auth.signUp({ email, password });
    if (error) {
        const msg = error.message.includes('already registered') ? '该邮箱已注册，请直接登录'
            : '注册失败: ' + error.message;
        return { error: msg };
    }
    if (data.user) {
        state.currentUser = { id: data.user.id, email: data.user.email };
        saveState();
    }
    return { data, success: true };
}

// Sign in
export async function signIn(email, password) {
    const auth = await getAuth();
    if (!auth) return { error: '网络连接不可用，请尝试"离线演示模式"' };
    const { data, error } = await auth.auth.signInWithPassword({ email, password });
    if (error) {
        const msg = error.message.includes('Invalid login') ? '邮箱或密码错误，请重试'
            : error.message.includes('Email not confirmed') ? '邮箱尚未验证，请检查收件箱中的确认邮件'
            : '登录失败: ' + error.message;
        return { error: msg };
    }
    if (data.user) {
        state.currentUser = { id: data.user.id, email: data.user.email };
        saveState();
        // Check if user has active license
        await checkLicenseStatus(data.user.email);
    }
    return { data, success: true };
}

// Sign out
export async function signOut() {
    if (isDemoMode()) {
        disableDemoMode();
        return;
    }
    const auth = await getAuth();
    if (auth) await auth.auth.signOut();
    state.currentUser = null;
    state.isPremiumUser = false;
    state.licenseKey = null;
    saveState();
}

// Get current session
export async function getSession() {
    const auth = await getAuth();
    if (!auth) return null;
    const { data } = await auth.auth.getSession();
    if (data?.session?.user) {
        state.currentUser = { id: data.session.user.id, email: data.session.user.email };
        saveState();
        await checkLicenseStatus(data.session.user.email);
        return data.session;
    }
    return null;
}

// ==================== License Management ====================

// Activate license key
export async function activateLicense(licenseKey) {
    const auth = await getAuth();
    if (!auth) return { error: 'Supabase SDK 未加载' };
    if (!state.currentUser) return { error: '请先登录后再激活 License' };

    const cleanKey = licenseKey.trim().toUpperCase();

    // Demo/offline mode shortcut
    if (cleanKey === 'DEMO' || cleanKey === 'OFFLINE') {
        enableDemoMode();
        return { success: true, demo: true };
    }

    if (!/^[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$/.test(cleanKey)) {
        // Also try without dashes
        if (cleanKey.length !== 16 && cleanKey.length !== 19) {
            return { error: 'License Key 格式无效。格式: XXXX-XXXX-XXXX-XXXX (16位)，或输入 DEMO 进入离线模式' };
        }
    }

    try {
        // Check if license exists and is active via RPC or direct query
        const { data, error } = await auth.rpc('activate_license_key', {
            p_key: cleanKey,
            p_device_id: state.licenseDeviceId || 'web',
            p_email: state.currentUser.email
        });

        if (error) {
            // Try direct query approach
            const { data: licData, error: licErr } = await auth
                .from('licenses')
                .select('key,is_active,expires_at')
                .eq('key', cleanKey)
                .single();

            if (licErr || !licData) return { error: 'License Key 无效或不存在' };
            if (!licData.is_active) return { error: '该 License 已被使用或已过期' };

            // Activate it
            const { error: updErr } = await auth
                .from('licenses')
                .update({ is_active: true, device_id: state.licenseDeviceId || 'web', email: state.currentUser.email, activated_at: new Date().toISOString() })
                .eq('key', cleanKey);

            if (updErr) return { error: '激活失败: ' + updErr.message };
        }

        // Success
        state.isPremiumUser = true;
        state.licenseKey = cleanKey;
        state.licenseExpiresAt = null; // no expiry for now
        setToStorage(STORAGE_KEYS.PREMIUM, true);
        setToStorage(STORAGE_KEYS.LICENSE_KEY, cleanKey);
        saveState();
        return { success: true };
    } catch (e) {
        return { error: '激活失败: ' + (e.message || '未知错误') };
    }
}

// Check license status for current user
export async function checkLicenseStatus(email) {
    const auth = await getAuth();
    if (!auth || !email) return false;

    try {
        const { data, error } = await auth
            .from('licenses')
            .select('key,is_active')
            .eq('email', email)
            .eq('is_active', true)
            .limit(1);

        if (!error && data && data.length > 0) {
            state.isPremiumUser = true;
            state.licenseKey = data[0].key;
            setToStorage(STORAGE_KEYS.PREMIUM, true);
            setToStorage(STORAGE_KEYS.LICENSE_KEY, data[0].key);
            saveState();
            return true;
        }
    } catch (e) {
        // Fallback to local
    }
    return state.isPremiumUser;
}

// ==================== Cloud Sync ====================

// Sync learning progress to Supabase
export async function syncProgressToCloud() {
    const auth = await getAuth();
    if (!auth || !state.isPremiumUser || !state.currentUser) return;

    try {
        const raw = localStorage.getItem('pmbok8_learning_progress');
        const wrongRaw = localStorage.getItem('pmbok8_wrong_book');
        if (!raw && !wrongRaw) return;

        // Upsert learning progress
        await auth.from('learning_progress').upsert({
            license_key: state.licenseKey,
            user_email: state.currentUser.email,
            progress_data: raw ? JSON.parse(raw) : {},
            wrong_book_data: wrongRaw ? JSON.parse(wrongRaw) : [],
            updated_at: new Date().toISOString()
        }, { onConflict: 'license_key' });
    } catch (e) {
        console.warn('Cloud sync failed:', e.message);
    }
}

// Check if user is authenticated
export function isLoggedIn() {
    return !!state.currentUser;
}

// Check premium status
export function isPremium() {
    return state.isPremiumUser === true;
}
