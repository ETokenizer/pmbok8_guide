/**
 * 题库模块 — Supabase云端题库 + 本地备用题库
 * Question Bank — Supabase cloud (1000+ Q) + local fallback (60 Q)
 */
import { getClient, isReady, initSupabaseClient, mapPmbok7To8Category, CATEGORY_LABELS } from './supabase-client.js';

let cloudCache = null;       // Full question cache from Supabase
let cacheLoaded = false;
let isLoading = false;

// Initialize on load
initSupabaseClient();

// Fetch all questions from Supabase
export async function fetchCloudQuestions() {
    if (cacheLoaded) return cloudCache;
    if (isLoading) return null;

    const client = getClient();
    if (!client) return null;

    isLoading = true;
    try {
        const allQuestions = [];
        let from = 0;
        const batchSize = 1000;

        while (true) {
            const { data, error } = await client
                .from('questions')
                .select('code,category,category_id,question,options,correct,explanation,difficulty')
                .eq('is_active', true)
                .range(from, from + batchSize - 1);

            if (error) throw error;
            if (!data || data.length === 0) break;
            allQuestions.push(...data.map(q => ({
                id: q.code,
                category: q.category,
                categoryId: q.category_id || 0,
                question: q.question,
                options: q.options,
                correct: q.correct,
                explanation: q.explanation,
                difficulty: q.difficulty || 'medium'
            })));
            from += batchSize;
            if (data.length < batchSize) break;
        }

        cloudCache = allQuestions;
        cacheLoaded = true;
        console.log(`Loaded ${allQuestions.length} questions from Supabase`);
        return allQuestions;
    } catch (e) {
        console.warn('Supabase fetch failed, using local bank:', e.message);
        return null;
    } finally {
        isLoading = false;
    }
}

// Get questions — tries cloud first, falls back to local
async function getQuestionsAsync(category, count) {
    const cloud = await fetchCloudQuestions();
    let pool = cloud || [...localBank];
    if (category && category !== 'all') {
        pool = pool.filter(q => q.category === category);
    }
    // Shuffle
    for (let i = pool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    return pool.slice(0, Math.min(count, pool.length));
}

// Synchronous fallback version (for immediate rendering)
export function getQuestions(category = 'all', count = 10) {
    // Try cache first
    if (cacheLoaded && cloudCache) {
        let pool = [...cloudCache];
        if (category && category !== 'all') pool = pool.filter(q => q.category === category);
        for (let i = pool.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [pool[i], pool[j]] = [pool[j], pool[i]];
        }
        return pool.slice(0, Math.min(count, pool.length));
    }
    // Fallback to local
    let pool = [...localBank];
    if (category && category !== 'all') pool = pool.filter(q => q.category === category);
    for (let i = pool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    return pool.slice(0, Math.min(count, pool.length));
}

// Generate exam questions with proportional distribution
export async function generateExamQuestions(count = 50) {
    const cloud = await fetchCloudQuestions();
    const pool = cloud || localBank;

    // Distribution: 20% principles, 20% domains, 20% processes, 15% agile/scrum, 10% comprehensive, 15% other
    const categories = {};
    pool.forEach(q => { if (!categories[q.category]) categories[q.category] = []; categories[q.category].push(q); });

    let selected = [];
    const catKeys = Object.keys(categories);
    const perCat = Math.ceil(count / Math.max(catKeys.length, 1));

    catKeys.forEach(cat => {
        const items = categories[cat];
        const shuffled = [...items].sort(() => Math.random() - 0.5);
        const take = Math.min(Math.ceil(count * 0.25), shuffled.length);
        selected.push(...shuffled.slice(0, Math.min(perCat, shuffled.length)));
    });

    // Shuffle final selection and trim
    for (let i = selected.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [selected[i], selected[j]] = [selected[j], selected[i]];
    }
    return selected.slice(0, count);
}

export function getQuestionCount(category = 'all') {
    if (cacheLoaded && cloudCache) {
        if (category === 'all') return cloudCache.length;
        return cloudCache.filter(q => q.category === category).length;
    }
    if (category === 'all') return localBank.length;
    return localBank.filter(q => q.category === category).length;
}

export function getBankSize() {
    if (cacheLoaded && cloudCache) return cloudCache.length;
    return localBank.length;
}

export function isCloudAvailable() { return cacheLoaded && isReady(); }
export function getCategoryStats() {
    const pool = (cacheLoaded && cloudCache) ? cloudCache : localBank;
    const stats = {};
    pool.forEach(q => { stats[q.category] = (stats[q.category] || 0) + 1; });
    return stats;
}

// ============ Local Fallback Bank ============
const localBank = [
    { id:'L_P1_Q1', category:'principle', categoryId:1, difficulty:'easy', question:'PMBOK第8版中"整体视角"原则强调什么？', options:['A. 只关注自己负责的模块','B. 从全局出发理解项目在组织中的位置和关联','C. 把项目拆得越细越好','D. 忽略外部环境变化'], correct:1, explanation:'整体视角要求项目经理从全局出发，理解项目与组织战略、其他系统、外部环境的相互关联。' },
    { id:'L_P1_Q2', category:'principle', categoryId:1, difficulty:'medium', question:'以下哪项最能体现"整体视角"原则的应用？', options:['A. 只与直接上级沟通','B. 绘制系统交互图并建立跨部门协调机制','C. 每个团队成员独立工作','D. 等到上线前再考虑系统集成'], correct:1, explanation:'绘制系统交互图和建立跨部门协调机制体现了系统思维和对依赖关系的管理。' },
    { id:'L_P1_Q3', category:'principle', categoryId:1, difficulty:'hard', question:'系统思维(整体视角)与线性思维的主要区别是什么？', options:['A. 没有区别','B. 系统思维关注整体关联，线性思维关注单线因果','C. 线性思维更高级','D. 系统思维仅适用于IT项目'], correct:1, explanation:'系统思维强调整体性和相互关联，反对简单的线性因果思维。' },
    { id:'L_P2_Q1', category:'principle', categoryId:2, difficulty:'easy', question:'"聚焦价值"原则的核心是什么？', options:['A. 按时完成所有计划功能','B. 优先交付对组织最有价值的成果','C. 尽可能多地完成功能','D. 只关注成本控制'], correct:1, explanation:'聚焦价值意味着资源有限时优先交付高价值成果。' },
    { id:'L_P2_Q2', category:'principle', categoryId:2, difficulty:'medium', question:'以下哪项最能衡量项目是否在"聚焦价值"？', options:['A. 完成了多少个用户故事','B. 交付的功能是否产生了预期的商业成果','C. 团队成员加班时长','D. 文档的完整程度'], correct:1, explanation:'价值的衡量标准是商业成果(outcome)，而非产出数量(output)。' },
    { id:'L_P3_Q1', category:'principle', categoryId:3, difficulty:'easy', question:'"融入质量"与传统质量管理的根本区别是什么？', options:['A. 没有区别','B. 质量是设计和构建进去的，不是最后检查出来的','C. 传统质量管理更好','D. 不需要质量检查'], correct:1, explanation:'融入质量强调质量前置和内置，通过过程控制预防缺陷。' },
    { id:'L_P4_Q1', category:'principle', categoryId:4, difficulty:'easy', question:'"负责任领导"原则强调什么？', options:['A. 领导力只是项目经理的事','B. 通过诚信、道德和担当来影响和带领团队','C. 领导力就是发号施令','D. 领导力是天生的无法培养'], correct:1, explanation:'负责任领导强调领导力是行为而非职位。' },
    { id:'L_P5_Q1', category:'principle', categoryId:5, difficulty:'easy', question:'"协作团队"原则最有效的做法是？', options:['A. 建立开放沟通机制，鼓励知识共享和相互支持','B. 严格管控信息流通','C. 让团队成员独立工作减少沟通成本','D. 只在出问题时才进行团队沟通'], correct:0, explanation:'开放沟通、知识共享和相互支持是高效协作团队的三大基石。' },
    { id:'L_P6_Q1', category:'principle', categoryId:6, difficulty:'easy', question:'"管家精神"原则的核心是什么？', options:['A. 项目经理拥有所有项目资源','B. 以组织利益为重，负责任地管理受托资源','C. 只管自己的任务','D. 最大化个人收益'], correct:1, explanation:'管家精神强调项目经理是资源的管家而非所有者。' },
    { id:'L_D1_Q1', category:'domain', categoryId:1, difficulty:'easy', question:'治理绩效域的主要关注点是什么？', options:['A. 仅关注项目进度','B. 建立决策流程、监督机制和问责制度','C. 只关注成本控制','D. 替代项目经理进行日常管理'], correct:1, explanation:'治理绩效域的核心是建立有效的决策和监督框架。' },
    { id:'L_D2_Q1', category:'domain', categoryId:2, difficulty:'easy', question:'防止范围蔓延最有效的方法是？', options:['A. 拒绝所有变更请求','B. 通过正式的变更控制流程评估每个变更的价值和影响','C. 接受所有客户提出的变更','D. 在项目开始时把范围尽量做大'], correct:1, explanation:'通过正式的变更控制流程管理范围。' },
    { id:'L_D3_Q1', category:'domain', categoryId:3, difficulty:'medium', question:'关键路径法(CPM)的主要作用是？', options:['A. 确定所有任务优先级','B. 识别决定项目最短工期的任务序列','C. 分配团队成员工作','D. 计算项目总成本'], correct:1, explanation:'CPM识别决定最短工期的任务序列。' },
    { id:'L_D4_Q1', category:'domain', categoryId:4, difficulty:'medium', question:'挣值管理中CPI=0.85表示什么？', options:['A. 项目进度超前','B. 每花1元钱只完成了0.85元价值的工作','C. 项目成本优于计划','D. 项目应立即终止'], correct:1, explanation:'CPI<1表示实际花费超过已完成工作价值。' },
    { id:'L_D5_Q1', category:'domain', categoryId:5, difficulty:'medium', question:'对高影响力低支持度的相关方应采什么策略？', options:['A. 忽视他们','B. 重点沟通管理争取支持或消除反对','C. 定期邮件通知即可','D. 排除在项目之外'], correct:1, explanation:'高影响力低支持度的相关方是风险管理关键。' },
    { id:'L_D6_Q1', category:'domain', categoryId:6, difficulty:'easy', question:'资源平衡的主要目的是？', options:['A. 最大化加班时间','B. 资源约束下优化使用避免过度分配','C. 尽可能缩短工期','D. 平均分配所有工作'], correct:1, explanation:'资源平衡解决过度分配问题。' },
    { id:'L_D7_Q1', category:'domain', categoryId:7, difficulty:'medium', question:'对高概率高影响的负面风险最合适的策略是？', options:['A. 接受','B. 规避或减轻','C. 忽略','D. 仅记录'], correct:1, explanation:'高概率高影响风险需主动规避或减轻。' },
    { id:'L_PR1_Q1', category:'process', categoryId:1, difficulty:'easy', question:'制定项目章程的输出是什么？', options:['A. 项目管理计划','B. 项目章程和假设日志','C. 工作绩效数据','D. 风险登记册'], correct:1, explanation:'制定项目章程(#1)输出项目章程和假设日志。' },
    { id:'L_PR14_Q1', category:'process', categoryId:14, difficulty:'medium', question:'规划质量管理的主要输出包括？', options:['A. 质量管理计划和质量测量指标','B. 项目章程','C. 工作绩效报告','D. 验收的可交付成果'], correct:0, explanation:'质量管理计划和质量测量指标是主要输出。' },
    { id:'L_PR23_Q1', category:'process', categoryId:23, difficulty:'easy', question:'指导与管理项目工作属于哪个过程组？', options:['A. 启动','B. 规划','C. 执行','D. 收尾'], correct:2, explanation:'属于执行过程组。' },
    { id:'L_PR32_Q1', category:'process', categoryId:32, difficulty:'medium', question:'变更请求应由哪个流程处理？', options:['A. 监控项目工作','B. 实施整体变更控制','C. 结束项目或阶段','D. 管理团队'], correct:1, explanation:'所有变更请求通过实施整体变更控制处理。' },
    { id:'L_PR40_Q1', category:'process', categoryId:40, difficulty:'easy', question:'结束项目或阶段属于哪个过程组？', options:['A. 启动','B. 规划','C. 监控','D. 收尾'], correct:3, explanation:'收尾过程组的唯一流程。' },
    { id:'L_AG1', category:'agile', categoryId:0, difficulty:'easy', question:'敏捷宣言中"个体和互动"胜过什么？', options:['A. 客户协作','B. 流程和工具','C. 遵循计划','D. 详尽的文档'], correct:1, explanation:'个体和互动 胜过 流程和工具。' },
    { id:'L_AG2', category:'agile', categoryId:0, difficulty:'easy', question:'Scrum框架中三个角色是什么？', options:['A. PM/BA/DEV','B. PO/SM/Developers','C. Sponsor/PM/Team','D. Leader/Manager/Worker'], correct:1, explanation:'PO(产品负责人)、SM(敏捷教练)、Developers(开发团队)。' },
    { id:'L_AG3', category:'agile', categoryId:0, difficulty:'medium', question:'Kanban中限制WIP的主要目的是？', options:['A. 提高个人效率','B. 避免多任务并行和过载','C. 增加流程步骤','D. 降低质量标准'], correct:1, explanation:'限制WIP避免多任务并行和上下文切换。' },
    { id:'L_AG4', category:'agile', categoryId:0, difficulty:'medium', question:'以下哪项是混合方法的典型场景？', options:['A. 纯软件开发','B. 硬件瀑布+软件敏捷同步进行','C. 只有预测型方法','D. 只有敏捷方法'], correct:1, explanation:'硬件瀑布+软件敏捷是混合方法的典型应用。' },
    { id:'L_PMP1', category:'comprehensive', categoryId:0, difficulty:'hard', question:'项目经理发现CPI=0.75,SPI=0.85,BAC=100万。最合适的措施？', options:['A. 申请追加50万预算','B. 分析根本原因后制定纠正措施','C. 立即终止项目','D. 忽略偏差继续执行'], correct:1, explanation:'先分析根因再制定纠正措施。' },
    { id:'L_PMP2', category:'comprehensive', categoryId:0, difficulty:'hard', question:'关键相关方要求增加新功能，项目经理首先应？', options:['A. 直接接受开始开发','B. 评估对范围/进度/成本/质量的影响后走变更流程','C. 直接拒绝','D. 让团队投票决定'], correct:1, explanation:'面对变更请求应评估影响并通过变更控制流程。' },
    { id:'L_PMP3', category:'comprehensive', categoryId:0, difficulty:'medium', question:'完成可交付成果后下一步应该？', options:['A. 直接交付客户','B. 控制质量(核实)→确认范围(验收)','C. 关闭项目','D. 更新项目章程'], correct:1, explanation:'可交付成果→控制质量→确认范围→结束项目。' },
    { id:'L_PMP4', category:'comprehensive', categoryId:0, difficulty:'medium', question:'识别到供应商可能延迟交付，应首先更新？', options:['A. 项目章程','B. 风险登记册','C. 工作分解结构','D. 项目进度计划'], correct:1, explanation:'识别新风险后首先更新风险登记册。' },
    { id:'L_PMP5', category:'comprehensive', categoryId:0, difficulty:'hard', question:'团队成员发生冲突影响进度，最佳做法是？', options:['A. 直接解雇双方','B. 私下分别谈话了解根因后引导解决','C. 要求上级介入','D. 忽视冲突让其自行解决'], correct:1, explanation:'采用直接协作方式了解根因并引导团队解决冲突。' }
];
