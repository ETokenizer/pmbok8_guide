/**
 * Supabase 客户端初始化
 * Supabase Client — connects PMBOK8 to cloud database
 */
const SUPABASE_URL = 'https://afuesynrviwicnjisuma.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_fIEpAlMH3j4qgc9CXDP6Dw__31BR7pN';

let supabase = null;
let supabaseReady = false;

// Initialize when Supabase SDK loads
export function initSupabaseClient() {
    if (typeof window.supabase === 'undefined') {
        console.warn('Supabase SDK not loaded, using local fallback');
        return false;
    }
    try {
        supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
            auth: { persistSession: false },
            db: { schema: 'public' }
        });
        supabaseReady = true;
        console.log('Supabase connected');
        return true;
    } catch (e) {
        console.error('Supabase init error:', e);
        return false;
    }
}

export function getClient() { return supabase; }
export function isReady() { return supabaseReady; }

// ============ PMBOK7 → PMBOK8 类别映射 ============
// PMBOK7 has 12 principles, PMBOK8 has 6 (consolidated)
export const PMBOK7_TO_8_PRINCIPLE = {
    1: 1,  // 管家式管理 → 管家精神 (#6 in PMBOK8) ... actually these don't map neatly
    // We'll use a rough mapping for exam filtering purposes:
    // PMBOK8 principle 1 (整体视角): PMBOK7 系统思考(5)+驾驭复杂(9)
    // PMBOK8 principle 2 (聚焦价值): PMBOK7 价值聚焦(4)
    // PMBOK8 principle 3 (融入质量): PMBOK7 质量融入(8)
    // PMBOK8 principle 4 (负责任领导): PMBOK7 领导力(6)+管家式管理(1)
    // PMBOK8 principle 5 (协作团队): PMBOK7 团队协作(2)+干系人(3)
    // PMBOK8 principle 6 (管家精神): PMBOK7 管家式管理(1)+适应与韧性(11)+变革推动(12)
};

// For practical purposes, we query all questions and filter client-side
export function mapPmbok7To8Category(category, categoryId) {
    if (category === 'principle') {
        // Map PMBOK7 12 principles to PMBOK8 6 principles
        const mapping = {
            1: 6, 2: 5, 3: 5, 4: 2, 5: 1, 6: 4,
            7: 1, 8: 3, 9: 1, 10: 2, 11: 6, 12: 4
        };
        return { category: 'principle', categoryId: mapping[categoryId] || categoryId };
    }
    if (category === 'domain') {
        // PMBOK8 has 7 domains instead of 8
        // Rough mapping (domains 1-7 mostly align, domain 8 merged)
        if (categoryId === 8) return { category: 'domain', categoryId: 7 };
        return { category: 'domain', categoryId };
    }
    return { category, categoryId };
}

// Category labels for display
export const CATEGORY_LABELS = {
    'principle': { zh: '原则', en: 'Principles', icon: '📘' },
    'domain': { zh: '绩效域', en: 'Domains', icon: '🌐' },
    'process': { zh: '流程', en: 'Processes', icon: '🔄' },
    'agile': { zh: '敏捷', en: 'Agile', icon: '🚀' },
    'scrum': { zh: 'Scrum', en: 'Scrum', icon: '🏉' },
    'kanban': { zh: '看板', en: 'Kanban', icon: '📋' },
    'hybrid': { zh: '混合方法', en: 'Hybrid', icon: '🔀' },
    'comprehensive': { zh: '综合', en: 'Comprehensive', icon: '📋' },
    'business': { zh: '商业', en: 'Business', icon: '💼' },
    'ethics': { zh: '道德', en: 'Ethics', icon: '⚖️' },
    'final': { zh: '期末', en: 'Final', icon: '🏁' },
    'cost': { zh: '成本', en: 'Cost', icon: '💰' },
    'scope': { zh: '范围', en: 'Scope', icon: '🎯' },
    'schedule': { zh: '进度', en: 'Schedule', icon: '📅' },
    'risk': { zh: '风险', en: 'Risk', icon: '⚠️' },
    'quality': { zh: '质量', en: 'Quality', icon: '⭐' },
    'resource': { zh: '资源', en: 'Resource', icon: '📦' },
    'procurement': { zh: '采购', en: 'Procurement', icon: '🛒' },
    'stakeholder': { zh: '相关方', en: 'Stakeholder', icon: '👥' },
    'integration': { zh: '整合', en: 'Integration', icon: '🔗' },
    'estimating': { zh: '估算', en: 'Estimating', icon: '⏱️' },
    'organizational': { zh: '组织', en: 'Organizational', icon: '🏢' },
    'opm': { zh: 'OPM', en: 'OPM', icon: '📊' },
    'pbq': { zh: 'PBQ', en: 'PBQ', icon: '📝' }
};
