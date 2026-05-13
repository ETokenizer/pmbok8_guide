/**
 * PMBOK 第 8 版 - 敏捷/混合方法数据
 * Agile & Hybrid Approaches
 * 内容：敏捷宣言、Scrum、Kanban、混合方法
 */
export const agileApproaches = [
    {
        number: 1,
        title: '敏捷宣言',
        titleEn: 'Agile Manifesto',
        icon: '\u{1f4dc}',
        color: '#10b981',
        summary: '敏捷软件开发的核心价值与原则',
        summaryEn: 'Core values and principles of agile software development',
        values: [
            { title: '个体和互动', titleEn: 'Individuals and Interactions', description: '胜过流程和工具', descriptionEn: 'Over processes and tools' },
            { title: '可工作的软件', titleEn: 'Working Software', description: '胜过详尽的文档', descriptionEn: 'Over comprehensive documentation' },
            { title: '客户协作', titleEn: 'Customer Collaboration', description: '胜过合同谈判', descriptionEn: 'Over contract negotiation' },
            { title: '响应变化', titleEn: 'Responding to Change', description: '胜过遵循计划', descriptionEn: 'Over following a plan' }
        ],
        principles: [
            '最高优先级是通过尽早持续交付有价值的软件来满足客户需求',
            '欢迎需求变更，即使是在开发后期。敏捷过程利用变更为客户创造竞争优势',
            '频繁交付可工作的软件，交付间隔从数周到数月，越短越好',
            '业务人员和开发人员必须在整个项目中每天协作',
            '围绕有积极性的个体构建项目，信任他们，提供所需的环境和支持',
            '向开发团队传递信息以及在团队内部传递信息最有效的方法是面对面沟通',
            '可工作的软件是衡量进度的首要标准',
            '敏捷过程促进可持续发展。发起人、开发人员和用户应能始终保持稳定节奏',
            '持续关注技术卓越和良好设计可增强敏捷性',
            '简单——最大化未完成工作量的艺术——至关重要',
            '最好的架构、需求和设计来自自组织团队',
            '团队定期反思如何变得更有效，然后相应地调整行为'
        ]
    },
    {
        number: 2,
        title: 'Scrum 框架',
        titleEn: 'Scrum Framework',
        icon: '\u{1f3c9}',
        color: '#059669',
        summary: '最广泛使用的敏捷框架，以Sprint为核心的迭代增量开发',
        summaryEn: 'Most popular agile framework with Sprint-based iterative incremental development',
        roles: [
            { name: 'Product Owner', nameZh: '产品负责人', icon: '\u{1f464}', responsibility: '最大化产品价值，管理Product Backlog', responsibilityEn: 'Maximize product value, manage Product Backlog' },
            { name: 'Scrum Master', nameZh: '敏捷教练', icon: '\u{1f465}', responsibility: '确保Scrum被理解和实施，清除障碍', responsibilityEn: 'Ensure Scrum is understood and enacted, remove impediments' },
            { name: 'Developers', nameZh: '开发团队', icon: '\u{1f4bb}', responsibility: '3-9人跨职能团队，自组织交付增量', responsibilityEn: '3-9 person cross-functional, self-organizing team' }
        ],
        events: [
            { name: 'Sprint Planning', nameZh: 'Sprint计划会', duration: 'Sprint开始时 | 最多8小时/月Sprint', purpose: '确定Sprint目标和Sprint Backlog' },
            { name: 'Daily Scrum', nameZh: '每日站会', duration: '每天15分钟', purpose: '同步进展，识别障碍，规划当天工作' },
            { name: 'Sprint Review', nameZh: 'Sprint评审会', duration: 'Sprint结束时 | 最多4小时/月Sprint', purpose: '演示增量，获取反馈，调整Product Backlog' },
            { name: 'Sprint Retrospective', nameZh: 'Sprint回顾会', duration: 'Sprint结束时 | 最多3小时/月Sprint', purpose: '反思过程，制定改进计划' }
        ],
        artifacts: [
            { name: 'Product Backlog', nameZh: '产品待办列表', description: '按优先级排序的所有已知需求的动态列表' },
            { name: 'Sprint Backlog', nameZh: 'Sprint待办列表', description: '当前Sprint要完成的工作项+行动计划' },
            { name: 'Increment', nameZh: '增量', description: 'Sprint结束时完成的、符合DoD的可交付成果' }
        ]
    },
    {
        number: 3,
        title: 'Kanban 看板',
        titleEn: 'Kanban Method',
        icon: '\u{1f4cb}',
        color: '#7c3aed',
        summary: '可视化工作流管理方法，渐进式变革',
        summaryEn: 'Visual workflow management with evolutionary change',
        practices: [
            { name: '可视化工作流', nameEn: 'Visualize the Workflow', icon: '\u{1f3af}', description: '将工作流程可视化在看板上，让所有工作项一目了然' },
            { name: '限制在制品(WIP)', nameEn: 'Limit WIP', icon: '⚖️', description: '限制每个阶段的同时进行工作数，避免多任务并行' },
            { name: '管理流动', nameEn: 'Manage Flow', icon: '\u{1f4ca}', description: '测量和优化工作项在看板上的流动效率' },
            { name: '明确流程规则', nameEn: 'Make Policies Explicit', icon: '\u{1f4dd}', description: '明确定义DoD、准入/准出标准等流程规则' },
            { name: '实施反馈循环', nameEn: 'Implement Feedback Loops', icon: '\u{1f504}', description: '建立服务交付评审、运营评审等反馈机制' },
            { name: '协作改进', nameEn: 'Improve Collaboratively', icon: '\u{1f9ea}', description: '基于数据和实验进行持续改进（Kaizen改善）' }
        ]
    },
    {
        number: 4,
        title: '混合方法',
        titleEn: 'Hybrid Approaches',
        icon: '\u{1f500}',
        color: '#0284c7',
        summary: '结合预测型和适应型方法的优势',
        summaryEn: 'Combine the strengths of predictive and adaptive approaches',
        models: [
            { name: '瀑布规划 + 敏捷执行', nameEn: 'Waterfall Planning + Agile Execution', description: '前期进行全面的需求分析和架构规划（瀑布），执行阶段采用Scrum迭代交付。适用于强监管行业或大型系统集成项目。' },
            { name: '敏捷开发 + 阶段门审批', nameEn: 'Agile Dev + Stage-Gate Approval', description: '开发团队使用Scrum/Kanban，但在关键里程碑设置阶段门（Stage Gate）进行治理审查和资金审批。兼顾敏捷性和治理需求。' },
            { name: '硬件瀑布 + 软件敏捷', nameEn: 'Hardware Waterfall + Software Agile', description: '适用于软硬结合项目：硬件部分按瀑布式开发（变更成本高），软件部分按敏捷迭代（需求灵活）。' }
        ],
        whenToUse: [
            '组织文化转型期：组织文化偏传统但需要敏捷灵活性 | Organization transitioning from traditional culture',
            '多样化工作类型：项目包含多种不同性质的工作（如硬件+软件+培训） | Diverse work types in the project',
            '强监管行业：金融、医疗、航空等监管要求严格但市场变化快的行业 | Regulated industries with fast-changing markets',
            '渐进式过渡：团队敏捷成熟度不高，需要逐步过渡到敏捷 | Team with low agile maturity transitioning gradually',
            '多供应商协作：不同供应商使用不同方法，需要统一的混合框架 | Multiple vendors using different approaches'
        ]
    }
];
