/**
 * PMBOK Edition 8 - 试用与 Premium 系统
 * Trial & Premium Access Management
 */
export const TRIAL_PRINCIPLES = [1, 2, 3, 4, 5, 6]; // 6 原则全部免费基础访问
export const TRIAL_DOMAINS = [1, 2, 3, 4, 5, 6, 7]; // 7 绩效域全部免费基础访问
export const TRIAL_QUIZZES_PER_ITEM = 3; // 每项前3题免费
export const TRIAL_CASE_STUDIES = 4; // 前4个案例免费

export function checkTrialAccess(type, number) {
    const trialLimits = {
        principle: { allowed: TRIAL_PRINCIPLES, name: '原则' },
        domain: { allowed: TRIAL_DOMAINS, name: '绩效域' }
    };
    const config = trialLimits[type];
    if (!config) return { isTrial: false, canAccess: true, message: '' };
    if (config.allowed.includes(number)) {
        return { isTrial: true, canAccess: true, message: '✅ 免费内容' };
    }
    return { isTrial: true, canAccess: false, message: `🔒 ${config.name} #${number} 需要 Premium` };
}

export function canAccessContent(isPremium, type, number) {
    if (isPremium) return true;
    if (type === 'principle') return TRIAL_PRINCIPLES.includes(number);
    if (type === 'domain') return TRIAL_DOMAINS.includes(number);
    return true;
}

export function getTrialUpgradeMessage() {
    return `
        <div class="upgrade-banner">
            <div class="upgrade-banner-header">
                <span style="font-size:24px;">👑</span>
                <div>
                    <div style="font-weight:600;color:#92400e;font-size:15px;">升级 Premium，解锁全部内容</div>
                    <div style="font-size:12px;color:#78350f;">Upgrade to Premium for Full Access</div>
                </div>
            </div>
            <div class="upgrade-grid">
                <div class="upgrade-item">
                    <div class="check">✅ 6 项原则完整习题库（30题）</div>
                    <div class="en">Full Quiz Bank for all 6 Principles</div>
                </div>
                <div class="upgrade-item">
                    <div class="check">✅ 7 个绩效域完整习题库（7题）</div>
                    <div class="en">Full Quiz Bank for all 7 Domains</div>
                </div>
                <div class="upgrade-item">
                    <div class="check">✅ 12 个完整案例研究</div>
                    <div class="en">All 12 Case Studies</div>
                </div>
                <div class="upgrade-item">
                    <div class="check">✅ 学习进度追踪与成绩分析</div>
                    <div class="en">Learning Progress Tracking</div>
                </div>
            </div>
            <button class="upgrade-btn" onclick="window.openPremiumModal()">
                👑 立即升级 Premium
            </button>
            <div class="license-section">
                <p style="font-size:12px;color:#6b7280;margin-bottom:8px;">已有 License Key？输入激活码 | Already have a key?</p>
                <div class="license-input-group">
                    <input class="license-input" id="licenseKeyInput" placeholder="输入 License Key...">
                    <button class="license-btn" onclick="window.activateLicense()">激活</button>
                </div>
                <div id="licenseStatus" class="license-status unknown"></div>
            </div>
        </div>
    `;
}
