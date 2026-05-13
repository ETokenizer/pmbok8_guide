/**
 * PMBOK Edition 8 - 状态管理模块
 * State Management Module
 */
export const state = {
    currentUser: null,
    isPremiumUser: false,
    licenseKey: null,
    licenseDeviceId: null,
    licenseExpiresAt: null,
    currentView: 'principles',
    selectedPrinciple: null,
    selectedDomain: null,
    selectedProcess: null,
    selectedAgile: null,
    quizScores: {}
};

export const STORAGE_KEYS = {
    PREMIUM: 'pmbok8_premium',
    PREMIUM_EXPIRY: 'pmbok8_premium_expiry',
    LICENSE_KEY: 'pmbok8_license_key',
    DEVICE_ID: 'pmbok8_device_id',
    QUIZ_SCORES: 'pmbok8_quiz_scores',
    USER: 'pmbok8_user'
};

export function getFromStorage(key) {
    try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    } catch (e) {
        console.warn('Storage read error:', e);
        return null;
    }
}

export function setToStorage(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
    } catch (e) {
        console.warn('Storage write error:', e);
        return false;
    }
}

export function loadState() {
    const premium = getFromStorage(STORAGE_KEYS.PREMIUM);
    const premiumExpiry = getFromStorage(STORAGE_KEYS.PREMIUM_EXPIRY);
    const licenseKey = getFromStorage(STORAGE_KEYS.LICENSE_KEY);
    const deviceId = getFromStorage(STORAGE_KEYS.DEVICE_ID);
    const quizScores = getFromStorage(STORAGE_KEYS.QUIZ_SCORES);
    const user = getFromStorage(STORAGE_KEYS.USER);

    let isPremium = false;
    if (premium && premiumExpiry) {
        isPremium = new Date(premiumExpiry) > new Date();
    }
    if (premium === 'forever') isPremium = true;

    state.isPremiumUser = isPremium;
    state.licenseKey = licenseKey;
    state.licenseDeviceId = deviceId;
    state.quizScores = quizScores || {};
    state.currentUser = user;
    return state;
}

export function saveState() {
    setToStorage(STORAGE_KEYS.PREMIUM, state.isPremiumUser);
    if (state.licenseExpiresAt) setToStorage(STORAGE_KEYS.PREMIUM_EXPIRY, state.licenseExpiresAt);
    if (state.licenseKey) setToStorage(STORAGE_KEYS.LICENSE_KEY, state.licenseKey);
    if (state.licenseDeviceId) setToStorage(STORAGE_KEYS.DEVICE_ID, state.licenseDeviceId);
    if (state.quizScores) setToStorage(STORAGE_KEYS.QUIZ_SCORES, state.quizScores);
    if (state.currentUser) setToStorage(STORAGE_KEYS.USER, state.currentUser);
}

export function getDeviceId() {
    let deviceId = getFromStorage(STORAGE_KEYS.DEVICE_ID);
    if (!deviceId) {
        const fp = [navigator.userAgent, navigator.language, screen.colorDepth, screen.width, screen.height, new Date().getTimezoneOffset(), Date.now()].join('|');
        let hash = 0;
        for (let i = 0; i < fp.length; i++) {
            const c = fp.charCodeAt(i);
            hash = ((hash << 5) - hash) + c;
            hash |= 0;
        }
        deviceId = 'DEV' + Math.abs(hash).toString(16).toUpperCase().padStart(8, '0');
        setToStorage(STORAGE_KEYS.DEVICE_ID, deviceId);
    }
    return deviceId;
}
