/**
 * Demo / Offline Mode — 一键解锁全部功能
 * Demo Mode — One-click full access without network
 */
import { state, saveState, setToStorage, STORAGE_KEYS } from '../core/state.js';

export function enableDemoMode() {
    state.currentUser = { id: 'demo', email: 'demo@offline.local' };
    state.isPremiumUser = true;
    state.licenseKey = 'DEMO-OFFLINE-MODE';
    setToStorage(STORAGE_KEYS.PREMIUM, true);
    setToStorage(STORAGE_KEYS.LICENSE_KEY, 'DEMO-OFFLINE-MODE');
    setToStorage(STORAGE_KEYS.USER, state.currentUser);
    saveState();
}

export function isDemoMode() {
    return state.licenseKey === 'DEMO-OFFLINE-MODE';
}

export function disableDemoMode() {
    state.currentUser = null;
    state.isPremiumUser = false;
    state.licenseKey = null;
    setToStorage(STORAGE_KEYS.PREMIUM, false);
    setToStorage(STORAGE_KEYS.LICENSE_KEY, null);
    setToStorage(STORAGE_KEYS.USER, null);
    saveState();
}
