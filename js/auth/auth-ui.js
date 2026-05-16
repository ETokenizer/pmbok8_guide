/**
 * 认证 UI — 登录/注册/License激活弹窗
 * Auth UI — Login, Register, License activation modal
 */
import { signIn, signUp, signOut, activateLicense, isLoggedIn, isPremium, getSession, syncProgressToCloud } from './auth-service.js';
import { state } from '../core/state.js';

// ==================== Auth Modal ====================
let authTab = 'login'; // 'login' | 'register' | 'license' | 'forgot'

export function openAuthModal(initialTab = 'login') {
    authTab = initialTab;
    let modal = document.getElementById('authModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'authModal';
        modal.className = 'modal-overlay';
        modal.innerHTML = `<div class="modal-content" style="max-width:450px">
            <div class="modal-header" style="background:linear-gradient(135deg,#1e40af,#3b82f6)">
                <h3 id="authModalTitle">🔐 登录 | Sign In</h3>
                <button class="modal-close" onclick="window.closeAuthModal()">×</button>
            </div>
            <div class="modal-body" id="authBody" style="padding:30px"></div>
        </div>`;
        document.body.appendChild(modal);
        modal.addEventListener('click', e => { if (e.target === modal) closeAuthModal(); });
    }
    renderAuthContent();
    modal.style.display = 'flex';
}

export function closeAuthModal() {
    const m = document.getElementById('authModal');
    if (m) m.style.display = 'none';
}

function renderAuthContent() {
    const body = document.getElementById('authBody');
    const title = document.getElementById('authModalTitle');
    if (!body) return;

    // Filter tabs based on login state
    let tabs = isLoggedIn() ? ['license'] : ['login', 'register'];
    const tabLabels = { login: '登录', register: '注册', license: '激活码' };
    if (!tabs.includes(authTab)) authTab = tabs[0];

    body.innerHTML = `
        ${tabs.length > 1 ? `<div class="auth-tabs">${tabs.map(t => `
            <button class="auth-tab${authTab===t?' active':''}" onclick="window.switchAuthTab('${t}')">${tabLabels[t]}</button>
        `).join('')}</div>` : ''}
        <div id="authFormContent">${renderAuthForm()}</div>
    `;
    if (title) title.textContent = authTab === 'login' ? '🔐 登录 | Sign In' : authTab === 'register' ? '📝 注册 | Sign Up' : '🔑 激活 License | Activate';
}

function renderAuthForm() {
    switch (authTab) {
        case 'login': return `
            <form id="loginForm" onsubmit="window.handleLogin(event)">
                <div class="auth-field"><label>📧 邮箱 Email</label><input type="email" id="loginEmail" class="auth-input" placeholder="your@email.com" required></div>
                <div class="auth-field"><label>🔒 密码 Password</label><input type="password" id="loginPassword" class="auth-input" placeholder="••••••••" required minlength="8"></div>
                <div id="loginError" class="auth-error" style="display:none"></div>
                <button type="submit" class="auth-submit-btn">登录 Sign In</button>
            </form>`;
        case 'register': return `
            <form id="registerForm" onsubmit="window.handleRegister(event)">
                <div class="auth-field"><label>📧 邮箱 Email</label><input type="email" id="regEmail" class="auth-input" placeholder="your@email.com" required></div>
                <div class="auth-field"><label>🔒 密码 Password</label><input type="password" id="regPassword" class="auth-input" placeholder="至少8位含大小写字母+数字+符号" required minlength="8"></div>
                <div class="auth-field"><label>🔒 确认密码 Confirm</label><input type="password" id="regConfirm" class="auth-input" placeholder="再次输入密码" required></div>
                <div id="regError" class="auth-error" style="display:none"></div>
                <div id="regSuccess" class="auth-success" style="display:none"></div>
                <button type="submit" class="auth-submit-btn">注册 Sign Up</button>
            </form>`;
        case 'license': return isLoggedIn() ? `
            <form id="licenseForm" onsubmit="window.handleLicenseActivate(event)">
                <div style="text-align:center;padding:10px 0">
                    <p style="font-size:14px;color:#555;margin-bottom:15px">输入16位激活码解锁 Premium 功能</p>
                </div>
                <div class="auth-field"><label>🔑 License Key</label><input type="text" id="licenseKeyInput" class="auth-input" placeholder="XXXX-XXXX-XXXX-XXXX" required style="font-family:monospace;font-size:18px;text-align:center;letter-spacing:2px"></div>
                <div id="licenseError" class="auth-error" style="display:none"></div>
                <div id="licenseSuccess" class="auth-success" style="display:none"></div>
                <button type="submit" class="auth-submit-btn">激活 Activate</button>
            </form>` : `
            <div style="text-align:center;padding:30px 0">
                <p style="font-size:14px;color:#888;margin-bottom:15px">请先登录后再激活 License</p>
                <button class="auth-submit-btn" onclick="window.switchAuthTab('login')">先去登录 →</button>
            </div>`;
        default: return '';
    }
}

window.switchAuthTab = (tab) => { authTab = tab; renderAuthContent(); };

// ==================== Form Handlers ====================
window.handleLogin = async (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail')?.value?.trim();
    const password = document.getElementById('loginPassword')?.value;
    const errEl = document.getElementById('loginError');
    if (!email || !password) return;
    if (errEl) { errEl.style.display = 'none'; }

    const btn = e.target.querySelector('button');
    if (btn) { btn.disabled = true; btn.textContent = '登录中...'; }

    const result = await signIn(email, password);
    if (btn) { btn.disabled = false; btn.textContent = '登录 Sign In'; }

    if (result.error) {
        if (errEl) { errEl.textContent = result.error; errEl.style.display = 'block'; }
    } else {
        closeAuthModal();
        updateAccountUI();
    }
};

window.handleRegister = async (e) => {
    e.preventDefault();
    const email = document.getElementById('regEmail')?.value?.trim();
    const password = document.getElementById('regPassword')?.value;
    const confirm = document.getElementById('regConfirm')?.value;
    const errEl = document.getElementById('regError');
    const okEl = document.getElementById('regSuccess');
    if (errEl) errEl.style.display = 'none';
    if (okEl) okEl.style.display = 'none';

    if (password !== confirm) {
        if (errEl) { errEl.textContent = '两次输入的密码不一致'; errEl.style.display = 'block'; }
        return;
    }
    if (password.length < 8) {
        if (errEl) { errEl.textContent = '密码至少需要8位'; errEl.style.display = 'block'; }
        return;
    }

    const btn = e.target.querySelector('button');
    if (btn) { btn.disabled = true; btn.textContent = '注册中...'; }

    const result = await signUp(email, password);
    if (btn) { btn.disabled = false; btn.textContent = '注册 Sign Up'; }

    if (result.error) {
        if (errEl) { errEl.textContent = result.error; errEl.style.display = 'block'; }
    } else {
        if (okEl) { okEl.innerHTML = '✅ 注册成功！请检查邮箱确认链接，然后返回登录。<br><small>Registration successful! Check your email to confirm.</small>'; okEl.style.display = 'block'; }
    }
};

window.handleLicenseActivate = async (e) => {
    e.preventDefault();
    const key = document.getElementById('licenseKeyInput')?.value?.trim().toUpperCase();
    const errEl = document.getElementById('licenseError');
    const okEl = document.getElementById('licenseSuccess');
    if (errEl) errEl.style.display = 'none';
    if (okEl) okEl.style.display = 'none';
    if (!key) return;

    const btn = e.target.querySelector('button');
    if (btn) { btn.disabled = true; btn.textContent = '验证中...'; }

    const result = await activateLicense(key);
    if (btn) { btn.disabled = false; btn.textContent = '激活 Activate'; }

    if (result.error) {
        if (errEl) { errEl.textContent = result.error; errEl.style.display = 'block'; }
    } else {
        if (okEl) { okEl.innerHTML = '✅ License 激活成功！你现在是 Premium 会员。<br><small>License activated! Premium features unlocked.</small>'; okEl.style.display = 'block'; }
        setTimeout(() => { closeAuthModal(); updateAccountUI(); }, 1500);
    }
};

// ==================== Account Menu Update ====================
export function updateAccountUI() {
    const btn = document.getElementById('accountBtn');
    if (!btn) return;

    if (state.isPremiumUser && state.currentUser) {
        btn.innerHTML = `<span class="account-icon">👑</span><span class="account-text">${state.currentUser.email?.split('@')[0] || 'Premium'}</span><span class="account-arrow">▼</span>`;
        const dd = document.getElementById('accountDropdown');
        if (dd) dd.innerHTML = `
            <div class="dropdown-item"><span class="item-icon">👑</span><span class="item-text">Premium 会员</span><span class="item-badge">已激活</span></div>
            <div class="dropdown-divider"></div>
            <div class="dropdown-item" onclick="openAuthModal('license')"><span class="item-icon">🔑</span><span class="item-text">License 管理</span></div>
            <div class="dropdown-item" onclick="window.handleSignOut()"><span class="item-icon">🚪</span><span class="item-text">退出登录</span></div>`;
    } else if (state.currentUser) {
        btn.innerHTML = `<span class="account-icon">👤</span><span class="account-text">${state.currentUser.email?.split('@')[0] || '用户'}</span><span class="account-arrow">▼</span>`;
        const dd = document.getElementById('accountDropdown');
        if (dd) dd.innerHTML = `
            <div class="dropdown-item" onclick="openAuthModal('license')"><span class="item-icon">🔑</span><span class="item-text">激活 License</span><span class="item-tag premium">升级</span></div>
            <div class="dropdown-divider"></div>
            <div class="dropdown-item" onclick="window.handleSignOut()"><span class="item-icon">🚪</span><span class="item-text">退出登录</span></div>`;
    } else {
        btn.innerHTML = '<span class="account-icon">👤</span><span class="account-text">未登录</span><span class="account-arrow">▼</span>';
        const dd = document.getElementById('accountDropdown');
        if (dd) dd.innerHTML = `
            <div class="dropdown-item" onclick="openAuthModal('login')"><span class="item-icon">🔐</span><span class="item-text">登录 / 注册</span></div>
            <div class="dropdown-divider"></div>
            <div class="dropdown-item" onclick="openAuthModal('license')"><span class="item-icon">🔑</span><span class="item-text">激活 License</span></div>
            <div class="dropdown-divider"></div>
            <div class="dropdown-item"><span class="item-icon">📘</span><span class="item-text">6 项原则（免费）</span></div>
            <div class="dropdown-item"><span class="item-icon">🌐</span><span class="item-text">7 个绩效域（免费）</span></div>
            <div class="dropdown-item"><span class="item-icon">🔄</span><span class="item-text">40 个流程（免费）</span></div>
            <div class="dropdown-item"><span class="item-icon">🚀</span><span class="item-text">敏捷方法（免费）</span></div>`;
    }
    if (window._refreshSidebar) window._refreshSidebar();
}

window.handleSignOut = async () => {
    if (confirm('确定退出登录？')) {
        await signOut();
        updateAccountUI();
        location.reload();
    }
};

// Initialize: restore session on load
export async function initAuth() {
    await getSession();
    updateAccountUI();
    if (window._refreshSidebar) window._refreshSidebar();
    if (state.isPremiumUser) {
        syncProgressToCloud();
    }
}

// Expose globals
window.openAuthModal = openAuthModal;
window.closeAuthModal = closeAuthModal;
