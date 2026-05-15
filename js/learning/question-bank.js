/**
 * 题库模块 — 本地备用题库 + Supabase云端题库接口
 * Question Bank — Local fallback + Supabase cloud interface
 *
 * Supabase 接入后调用 initSupabase(supabaseUrl, supabaseKey) 激活云端题库
 */
let supabaseClient = null;
let cloudAvailable = false;

export function initSupabase(url, key) {
    // Dynamic Supabase client — will be wired when credentials provided
    try {
        // When supabase JS SDK loaded: supabaseClient = supabase.createClient(url, key)
        window.__supabaseConfig = { url, key };
        cloudAvailable = true;
        return true;
    } catch (e) {
        console.warn('Supabase init failed, using local bank');
        return false;
    }
}

// Local question bank (~60 questions across principles, domains, processes)
const localBank = [
    // ===== 原则1: 整体视角 =====
    { id:'L_P1_Q1', category:'principle', categoryId:1, difficulty:'easy', question:'PMBOK第8版中"整体视角"原则强调什么？', options:['A. 只关注自己负责的模块','B. 从全局出发理解项目在组织中的位置和关联','C. 把项目拆得越细越好','D. 忽略外部环境变化'], correct:1, explanation:'整体视角要求项目经理从全局出发，理解项目与组织战略、其他系统、外部环境的相互关联。' },
    { id:'L_P1_Q2', category:'principle', categoryId:1, difficulty:'medium', question:'以下哪项最能体现"整体视角"原则的应用？', options:['A. 只与直接上级沟通','B. 绘制系统交互图并建立跨部门协调机制','C. 每个团队成员独立工作','D. 等到上线前再考虑系统集成'], correct:1, explanation:'绘制系统交互图和建立跨部门协调机制体现了系统思维和对依赖关系的管理。' },
    { id:'L_P1_Q3', category:'principle', categoryId:1, difficulty:'hard', question:'系统思维(整体视角)与线性思维的主要区别是什么？', options:['A. 没有区别','B. 系统思维关注整体关联，线性思维关注单线因果','C. 线性思维更高级','D. 系统思维仅适用于IT项目'], correct:1, explanation:'系统思维强调整体性和相互关联，反对简单的线性因果思维。' },
    // ===== 原则2: 聚焦价值 =====
    { id:'L_P2_Q1', category:'principle', categoryId:2, difficulty:'easy', question:'"聚焦价值"原则的核心是什么？', options:['A. 按时完成所有计划功能','B. 优先交付对组织最有价值的成果','C. 尽可能多地完成功能','D. 只关注成本控制'], correct:1, explanation:'聚焦价值意味着资源有限时优先交付高价值成果，而非盲目完成所有计划功能。' },
    { id:'L_P2_Q2', category:'principle', categoryId:2, difficulty:'medium', question:'以下哪项最能衡量项目是否在"聚焦价值"？', options:['A. 完成了多少个用户故事','B. 交付的功能是否产生了预期的商业成果','C. 团队成员加班时长','D. 文档的完整程度'], correct:1, explanation:'价值的衡量标准是商业成果(outcome)，而非产出数量(output)。' },
    { id:'L_P2_Q3', category:'principle', categoryId:2, difficulty:'medium', question:'价值交付应该何时进行评估？', options:['A. 仅在项目结束时','B. 仅在项目开始时','C. 贯穿整个项目生命周期','D. 不需要评估'], correct:2, explanation:'价值交付需要持续评估，贯穿整个项目生命周期。' },
    // ===== 原则3: 融入质量 =====
    { id:'L_P3_Q1', category:'principle', categoryId:3, difficulty:'easy', question:'"融入质量"与传统质量管理的根本区别是什么？', options:['A. 没有区别','B. 质量是设计和构建进去的，不是最后检查出来的','C. 传统质量管理更好','D. 不需要质量检查'], correct:1, explanation:'融入质量强调质量前置和内置，通过过程控制预防缺陷。' },
    { id:'L_P3_Q2', category:'principle', categoryId:3, difficulty:'medium', question:'以下哪项最能体现"融入质量"的实践？', options:['A. 等所有开发完成后再统一测试','B. 在开发前定义验收标准，边开发边测试','C. 只由QA团队负责质量','D. 跳过测试以加快进度'], correct:1, explanation:'前置定义验收标准并持续测试，体现质量融入过程的理念。' },
    // ===== 原则4: 负责任领导 =====
    { id:'L_P4_Q1', category:'principle', categoryId:4, difficulty:'easy', question:'"负责任领导"原则强调什么？', options:['A. 领导力只是项目经理的事','B. 通过诚信、道德和担当来影响和带领团队','C. 领导力就是发号施令','D. 领导力是天生的无法培养'], correct:1, explanation:'负责任领导强调领导力是行为而非职位，任何人都可以展现领导力。' },
    { id:'L_P4_Q2', category:'principle', categoryId:4, difficulty:'medium', question:'以下哪项最能体现"负责任领导"的行为？', options:['A. 项目出问题时推卸责任给团队','B. 主动承担问题责任并带领团队寻找解决方案','C. 只做上级交代的事','D. 隐瞒问题避免被批评'], correct:1, explanation:'负责任领导在困难面前不推卸责任，而是主动承担并带领团队解决问题。' },
    // ===== 原则5: 协作团队 =====
    { id:'L_P5_Q1', category:'principle', categoryId:5, difficulty:'easy', question:'"协作团队"原则中，以下哪项做法最有效？', options:['A. 建立开放沟通机制，鼓励知识共享和相互支持','B. 严格管控信息流通，避免信息泄露','C. 让团队成员独立工作减少沟通成本','D. 只在出问题时才进行团队沟通'], correct:0, explanation:'开放沟通、知识共享和相互支持是高效协作团队的三大基石。' },
    { id:'L_P5_Q2', category:'principle', categoryId:5, difficulty:'medium', question:'心理安全(Psychological Safety)对团队意味着什么？', options:['A. 不用承担任何工作压力','B. 团队成员可以自由表达意见而不担心被惩罚或嘲笑','C. 只允许说正面的话','D. 不需要任何问责机制'], correct:1, explanation:'心理安全让成员敢于表达真实想法、承认错误、提出异议。' },
    // ===== 原则6: 管家精神 =====
    { id:'L_P6_Q1', category:'principle', categoryId:6, difficulty:'easy', question:'"管家精神"原则的核心是什么？', options:['A. 项目经理拥有所有项目资源','B. 以组织利益为重，负责任地管理受托资源','C. 只管自己的任务','D. 最大化个人收益'], correct:1, explanation:'管家精神强调项目经理是资源的管家而非所有者。' },
    { id:'L_P6_Q2', category:'principle', categoryId:6, difficulty:'medium', question:'以下哪项行为最符合"管家精神"原则？', options:['A. 隐瞒项目问题避免被上级批评','B. 如实汇报项目状态，即使可能影响自己的绩效评估','C. 把预算花得一分不剩以争取下期更多','D. 把所有决策权都抓在自己手里'], correct:1, explanation:'如实汇报体现了诚信和以组织利益为重的管家精神。' },
    // ===== 绩效域 =====
    { id:'L_D1_Q1', category:'domain', categoryId:1, difficulty:'easy', question:'治理绩效域的主要关注点是什么？', options:['A. 仅关注项目进度','B. 建立决策流程、监督机制和问责制度','C. 只关注成本控制','D. 替代项目经理进行日常管理'], correct:1, explanation:'治理绩效域的核心是建立有效的决策和监督框架。' },
    { id:'L_D2_Q1', category:'domain', categoryId:2, difficulty:'easy', question:'以下哪项是防止范围蔓延最有效的方法？', options:['A. 拒绝所有变更请求','B. 通过正式的变更控制流程评估每个变更的价值和影响','C. 接受所有客户提出的变更','D. 在项目开始时把范围尽量做大'], correct:1, explanation:'通过正式的变更控制流程，确保每个变更经过价值评估。' },
    { id:'L_D3_Q1', category:'domain', categoryId:3, difficulty:'medium', question:'关键路径法(CPM)在进度管理中的主要作用是？', options:['A. 确定项目中所有任务的优先级','B. 识别决定项目最短工期的任务序列','C. 分配团队成员的工作','D. 计算项目的总成本'], correct:1, explanation:'关键路径法用于识别决定最短工期的任务序列。' },
    { id:'L_D4_Q1', category:'domain', categoryId:4, difficulty:'medium', question:'挣值管理(EVM)中CPI=0.85表示什么？', options:['A. 项目进度超前','B. 每花1元钱只完成了0.85元价值的工作','C. 项目成本优于计划','D. 项目应该立即终止'], correct:1, explanation:'CPI<1表示实际花费超过已完成工作价值，成本效率不佳。' },
    { id:'L_D5_Q1', category:'domain', categoryId:5, difficulty:'medium', question:'对"高影响力、低支持度"的相关方应采什么策略？', options:['A. 忽视他们','B. 重点沟通和管理，争取支持或消除反对','C. 只需定期发送邮件通知','D. 将他们排除在项目之外'], correct:1, explanation:'高影响力低支持度的相关方是风险管理的关键对象。' },
    { id:'L_D6_Q1', category:'domain', categoryId:6, difficulty:'easy', question:'资源平衡(Resource Leveling)的主要目的是？', options:['A. 最大化每个资源的加班时间','B. 在资源约束下优化资源使用避免过度分配','C. 尽可能缩短项目工期','D. 让所有资源平均分配工作'], correct:1, explanation:'资源平衡旨在资源有限情况下解决过度分配问题。' },
    { id:'L_D7_Q1', category:'domain', categoryId:7, difficulty:'medium', question:'对"高概率高影响"的负面风险最合适的应对策略是？', options:['A. 接受(Accept)','B. 规避(Avoid)或减轻(Mitigate)','C. 忽略(Ignore)','D. 仅记录在风险登记册中'], correct:1, explanation:'高概率高影响的风险需要主动应对：规避消除风险源，减轻降低概率或影响。' },
    // ===== 流程 =====
    { id:'L_PR1_Q1', category:'process', categoryId:1, difficulty:'easy', question:'制定项目章程的输出是什么？', options:['A. 项目管理计划','B. 项目章程和假设日志','C. 工作绩效数据','D. 风险登记册'], correct:1, explanation:'制定项目章程(#1)输出项目章程和假设日志。' },
    { id:'L_PR2_Q1', category:'process', categoryId:2, difficulty:'easy', question:'识别相关方的主要输出是？', options:['A. 项目章程','B. 相关方登记册','C. 沟通管理计划','D. 风险登记册'], correct:1, explanation:'识别相关方(#2)输出包括相关方登记册和变更请求。' },
    { id:'L_PR3_Q1', category:'process', categoryId:3, difficulty:'medium', question:'制定项目管理计划整合了哪些内容？', options:['A. 仅进度计划','B. 所有子管理计划和三大基准','C. 仅成本预算','D. 仅风险计划'], correct:1, explanation:'项目管理计划整合了所有子计划和范围/进度/成本基准。' },
    { id:'L_PR14_Q1', category:'process', categoryId:14, difficulty:'medium', question:'规划质量管理的主要输出包括？', options:['A. 质量管理计划和质量测量指标','B. 项目章程','C. 工作绩效报告','D. 验收的可交付成果'], correct:0, explanation:'规划质量管理(#14)输出质量管理计划和质量测量指标。' },
    { id:'L_PR18_Q1', category:'process', categoryId:18, difficulty:'easy', question:'识别风险属于哪个过程组？', options:['A. 启动','B. 规划','C. 执行','D. 监控'], correct:1, explanation:'识别风险(#18)属于规划过程组。' },
    { id:'L_PR23_Q1', category:'process', categoryId:23, difficulty:'easy', question:'指导与管理项目工作属于哪个过程组？', options:['A. 启动','B. 规划','C. 执行','D. 收尾'], correct:2, explanation:'指导与管理项目工作(#23)属于执行过程组，是项目工作的主要执行流程。' },
    { id:'L_PR31_Q1', category:'process', categoryId:31, difficulty:'medium', question:'监控项目工作的输入包括？', options:['A. 仅项目章程','B. 项目管理计划、项目文件和工作绩效信息','C. 仅可交付成果','D. 仅风险登记册'], correct:1, explanation:'监控项目工作(#31)输入包括项目管理计划、项目文件和工作绩效信息。' },
    { id:'L_PR32_Q1', category:'process', categoryId:32, difficulty:'medium', question:'变更请求应该由哪个流程来处理？', options:['A. 监控项目工作','B. 实施整体变更控制','C. 结束项目或阶段','D. 管理团队'], correct:1, explanation:'所有变更请求都应通过实施整体变更控制(#32)流程来审查和审批。' },
    { id:'L_PR40_Q1', category:'process', categoryId:40, difficulty:'easy', question:'结束项目或阶段属于哪个过程组？', options:['A. 启动','B. 规划','C. 监控','D. 收尾'], correct:3, explanation:'结束项目或阶段(#40)是收尾过程组的唯一流程。' },
    // ===== ITTO =====
    { id:'L_ITTO1', category:'process', categoryId:0, difficulty:'hard', question:'"专家判断"在多少个流程中被作为工具使用？', options:['A. 只有少数几个','B. 36个流程（几乎全覆盖）','C. 仅启动过程组','D. 仅规划过程组'], correct:1, explanation:'专家判断在40个流程中36个被作为工具使用，是应用最广泛的技术。' },
    { id:'L_ITTO2', category:'process', categoryId:0, difficulty:'hard', question:'工作绩效数据的正确流转顺序是？', options:['A. 数据→报告→信息','B. 数据→信息→报告','C. 信息→数据→报告','D. 报告→信息→数据'], correct:1, explanation:'工作绩效数据→工作绩效信息→工作绩效报告，三级递进。' },
    // ===== Agile =====
    { id:'L_AG1', category:'agile', categoryId:0, difficulty:'easy', question:'敏捷宣言中，"个体和互动"胜过什么？', options:['A. 客户协作','B. 流程和工具','C. 遵循计划','D. 详尽的文档'], correct:1, explanation:'敏捷宣言第一项：个体和互动 胜过 流程和工具。' },
    { id:'L_AG2', category:'agile', categoryId:0, difficulty:'easy', question:'Scrum框架中三个角色是什么？', options:['A. PM/BA/DEV','B. PO/SM/Developers','C. Sponsor/PM/Team','D. Leader/Manager/Worker'], correct:1, explanation:'Scrum三个角色：Product Owner(产品负责人)、Scrum Master(敏捷教练)、Developers(开发团队)。' },
    { id:'L_AG3', category:'agile', categoryId:0, difficulty:'medium', question:'Kanban中限制WIP的主要目的是？', options:['A. 提高个人效率','B. 避免多任务并行和过载','C. 增加流程步骤','D. 降低质量标准'], correct:1, explanation:'限制在制品(WIP)避免多任务并行，减少上下文切换成本。' },
    { id:'L_AG4', category:'agile', categoryId:0, difficulty:'medium', question:'以下哪项是混合方法的典型场景？', options:['A. 纯软件开发','B. 硬件瀑布+软件敏捷同步进行','C. 只有预测型方法','D. 只有敏捷方法'], correct:1, explanation:'硬件瀑布+软件敏捷是混合方法的典型应用，兼顾变更成本和灵活性。' },
    // ===== PMP综合 =====
    { id:'L_PMP1', category:'mixed', categoryId:0, difficulty:'hard', question:'项目经理发现CPI=0.75, SPI=0.85，项目的BAC=100万。以下哪项措施最合适？', options:['A. 申请追加50万预算','B. 分析根本原因后制定纠正措施','C. 立即终止项目','D. 忽略偏差继续执行'], correct:1, explanation:'CPI和SPI均<1表示成本和进度都有问题，应先分析根本原因再制定纠正措施。' },
    { id:'L_PMP2', category:'mixed', categoryId:0, difficulty:'hard', question:'关键相关方在项目中期要求增加新功能。项目经理首先应该？', options:['A. 直接接受请求开始开发','B. 评估对范围、进度、成本和质量的影响后走变更流程','C. 直接拒绝','D. 让团队投票决定'], correct:1, explanation:'面对变更请求，应始终评估影响并通过整体变更控制流程处理。' },
    { id:'L_PMP3', category:'mixed', categoryId:0, difficulty:'medium', question:'项目团队完成了可交付成果，下一步应该做什么？', options:['A. 直接交付给客户','B. 进行质量控制(核实)→确认范围(验收)','C. 关闭项目','D. 更新项目章程'], correct:1, explanation:'可交付成果完成后的流程：控制质量(核实)→确认范围(验收)→结束项目。' },
    { id:'L_PMP4', category:'mixed', categoryId:0, difficulty:'medium', question:'项目经理识别到供应商可能延迟交付，应首先更新哪个文件？', options:['A. 项目章程','B. 风险登记册','C. 工作分解结构','D. 项目进度计划'], correct:1, explanation:'识别到新风险后应首先更新风险登记册，记录风险特征和应对策略。' },
    { id:'L_PMP5', category:'mixed', categoryId:0, difficulty:'hard', question:'在项目执行中，团队成员之间发生冲突影响进度。作为项目经理，最佳做法是？', options:['A. 直接解雇双方','B. 私下分别谈话，了解根本原因后引导双方解决','C. 要求上级介入处理','D. 忽视冲突让团队自行解决'], correct:1, explanation:'冲突管理应采用直接、协作的方式，了解根本原因并引导团队解决。' }
];

// Get questions from bank
export function getQuestions(category = 'all', count = 10) {
    let pool = [...localBank];
    if (category && category !== 'all') pool = pool.filter(q => q.category === category);
    // Shuffle and take count
    for (let i = pool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    return pool.slice(0, Math.min(count, pool.length));
}

// Get question count by category
export function getQuestionCount(category = 'all') {
    if (category === 'all') return localBank.length;
    return localBank.filter(q => q.category === category).length;
}

// Generate exam questions (PMP-style: 180 questions from all categories)
export function generateExamQuestions(count = 50) {
    // Proportional distribution: 30% principles, 30% domains, 25% processes, 10% agile, 5% mixed
    const principleQs = getQuestions('principle', Math.round(count * 0.3));
    const domainQs = getQuestions('domain', Math.round(count * 0.3));
    const processQs = getQuestions('process', Math.round(count * 0.25));
    const agileQs = getQuestions('agile', Math.round(count * 0.1));
    const mixedQs = getQuestions('mixed', Math.round(count * 0.05));

    let all = [...principleQs, ...domainQs, ...processQs, ...agileQs, ...mixedQs];
    // Shuffle
    for (let i = all.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [all[i], all[j]] = [all[j], all[i]];
    }
    return all.slice(0, count);
}

export function getBankSize() { return localBank.length; }
export function isCloudAvailable() { return cloudAvailable; }
