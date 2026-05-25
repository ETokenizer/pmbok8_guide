/**
 * PMBOK 第 8 版 - 7 个绩效域数据
 * 7 Performance Domains of PMBOK 8th Edition (2025/2026)
 * 含：实际案例、自测题、原则关联
 */
export const performanceDomains = [
    {
        number: 1,
        name: '治理绩效域',
        nameEn: 'Governance Performance Domain',
        icon: '\u{1f3db}',
        color: '#005A9D',
        summary: '建立项目治理框架，确保有效监督和决策',
        summaryEn: 'Establish governance framework for effective oversight and decision-making',
        description: '治理绩效域涉及建立项目治理框架，包括决策流程、监督机制和与控制其他绩效域的互动。治理确保项目与组织战略保持一致，提供明确的问责制和决策权。',
        descriptionEn: 'Governance Performance Domain involves establishing project governance frameworks including decision-making processes, oversight mechanisms, and interactions with other performance domains.',
        keyActivities: [
            '建立项目治理结构和决策流程',
            '定义角色、职责和权限',
            '设置阶段审查和决策点（Gate Reviews）',
            '提供监督和指导',
            '确保合规和道德标准'
        ],
        keyActivitiesEn: [
            'Establish project governance structure and decision-making processes',
            'Define roles, responsibilities, and authorities',
            'Set stage reviews and decision points (Gate Reviews)',
            'Provide oversight and guidance',
            'Ensure compliance and ethical standards'
        ],
        expectedOutcomes: [
            '清晰的治理框架和流程',
            '有效的决策机制',
            '透明的监督和报告',
            '与组织战略保持一致'
        ],
        expectedOutcomesEn: [
            'Clear governance framework and processes',
            'Effective decision-making mechanisms',
            'Transparent oversight and reporting',
            'Alignment with organizational strategy'
        ],
        example: {
            title: '实际案例：大型基建项目治理',
            scenario: '某大型基础设施项目涉及多个政府部门和私有合作伙伴。项目治理委员会建立了清晰的三层治理架构：',
            actions: [
                '✅ 建立战略层（董事会级）、管理层（PMO级）、执行层（项目级）三层治理架构',
                '✅ 明确定义每个层级的决策权限和升级路径',
                '✅ 设置5个阶段审查点（Gate 0-4），每个阶段需通过治理委员会审批',
                '✅ 实施月度治理报告和季度战略对齐审查'
            ],
            outcome: '项目决策效率提升50%，重大问题升级路径清晰，无一例决策混乱导致的返工。'
        },
        quiz: {
            question: '项目治理绩效域的主要关注点是什么？',
            options: [
                'A. 仅关注项目进度',
                'B. 建立决策流程、监督机制和问责制度',
                'C. 只关注成本控制',
                'D. 替代项目经理进行日常管理'
            ],
            correct: 1,
            explanation: '治理绩效域的核心是建立有效的决策和监督框架，确保项目有清晰的问责和决策路径。'
        },
        relatedPrinciples: [4, 6]
    },
    {
        number: 2,
        name: '范围绩效域',
        nameEn: 'Scope Performance Domain',
        icon: '\u{1f3af}',
        color: '#2E8B57',
        summary: '定义和管理项目范围，确保交付所需成果',
        summaryEn: 'Define and manage project scope to deliver required outcomes',
        description: '范围绩效域涉及定义和管理项目的工作范围，确保项目交付所需的可交付成果，同时防止范围蔓延。范围管理从需求收集开始，贯穿整个项目生命周期。',
        descriptionEn: 'Scope Performance Domain involves defining and managing the project scope to ensure required deliverables are produced while preventing scope creep.',
        keyActivities: [
            '收集和管理相关方需求',
            '定义项目和产品范围',
            '创建工作分解结构（WBS）',
            '管理范围基准',
            '控制范围变更'
        ],
        keyActivitiesEn: [
            'Collect and manage stakeholder requirements',
            'Define project and product scope',
            'Create Work Breakdown Structure (WBS)',
            'Manage scope baseline',
            'Control scope changes'
        ],
        expectedOutcomes: [
            '清晰定义的项目范围',
            '完整的需求文档和跟踪矩阵',
            '有效的范围变更控制',
            '防止范围蔓延'
        ],
        expectedOutcomesEn: [
            'Clearly defined project scope',
            'Complete requirements documentation and traceability matrix',
            'Effective scope change control',
            'Prevention of scope creep'
        ],
        example: {
            title: '实际案例：电商平台范围管控',
            scenario: '某电商平台升级项目初期需求不断膨胀，范围失控风险严重。项目经理建立了严格的范围管控机制：',
            actions: [
                '✅ 建立需求跟踪矩阵，每个需求必须关联到具体的商业目标',
                '✅ 设置变更控制委员会（CCB），所有范围变更必须通过正式评审',
                '✅ 使用MoSCoW方法将需求分为Must/Should/Could/Would四个等级',
                '✅ 每周范围健康检查，对比实际完成vs基准计划'
            ],
            outcome: '范围蔓延被有效控制，变更通过率从100%降到40%，只有真正有价值的变更被批准。'
        },
        quiz: {
            question: '以下哪项是防止范围蔓延最有效的方法？',
            options: [
                'A. 拒绝所有变更请求',
                'B. 通过正式的变更控制流程评估每个变更的价值和影响',
                'C. 接受所有客户提出的变更',
                'D. 在项目开始时把范围尽量做大'
            ],
            correct: 1,
            explanation: '通过正式的变更控制流程，确保每个变更都经过价值评估和影响分析，是最有效的范围管理方法。'
        },
        relatedPrinciples: [1, 2, 3]
    },
    {
        number: 3,
        name: '进度绩效域',
        nameEn: 'Schedule Performance Domain',
        icon: '\u{1f4c5}',
        color: '#0077C8',
        summary: '规划和管理项目进度，确保按时交付',
        summaryEn: 'Plan and manage project schedule for timely delivery',
        description: '进度绩效域涉及规划、管理和控制项目进度，确保项目按时完成。包括活动定义、排序、估算、进度制定、监控和变更管理。',
        descriptionEn: 'Schedule Performance Domain involves planning, managing, and controlling the project schedule to ensure timely completion.',
        keyActivities: [
            '定义和排序项目活动',
            '估算活动持续时间',
            '制定项目进度计划（含关键路径）',
            '监控进度绩效（SV/SPI）',
            '管理进度变更和赶工'
        ],
        keyActivitiesEn: [
            'Define and sequence project activities',
            'Estimate activity durations',
            'Develop project schedule (including critical path)',
            'Monitor schedule performance (SV/SPI)',
            'Manage schedule changes and compression'
        ],
        expectedOutcomes: [
            '现实可行的进度计划',
            '关键路径清晰',
            '进度偏差受控',
            '按时或提前交付'
        ],
        expectedOutcomesEn: [
            'Realistic and feasible schedule',
            'Clear critical path identified',
            'Schedule variance under control',
            'On-time or early delivery'
        ],
        example: {
            title: '实际案例：游戏开发项目进度赶工',
            scenario: '某游戏开发项目因技术难点导致进度滞后2周，离E3展会演示只剩6周。项目经理采取了组合进度策略：',
            actions: [
                '✅ 重新分析关键路径，识别出3个真正制约进度的核心任务',
                '✅ 对核心任务采用赶工（增加资源）和快速跟进（并行化）',
                '✅ 将非关键路径的任务推迟到演示后，释放资源支援关键路径',
                '✅ 建立每日进度仪表盘，实时追踪缓冲消耗情况'
            ],
            outcome: 'E3演示版本按时交付，核心功能全部就绪，获得媒体好评。次要功能在后续2周内补齐。'
        },
        quiz: {
            question: '关键路径法（CPM）在进度管理中的主要作用是？',
            options: [
                'A. 确定项目中所有任务的优先级',
                'B. 识别决定项目最短工期的任务序列',
                'C. 分配团队成员的工作',
                'D. 计算项目的总成本'
            ],
            correct: 1,
            explanation: '关键路径法用于识别项目中决定最短工期的任务序列，帮助项目经理聚焦最关键的活动。'
        },
        relatedPrinciples: [1, 2]
    },
    {
        number: 4,
        name: '财务绩效域',
        nameEn: 'Finance Performance Domain',
        icon: '\u{1f4b0}',
        color: '#D4AF37',
        summary: '管理项目财务，确保在预算内交付',
        summaryEn: 'Manage project finances to deliver within budget',
        description: '财务绩效域涉及规划、管理和控制项目成本和预算，确保项目在批准的财务框架内完成。包括成本估算、预算制定、成本控制和财务风险管理。',
        descriptionEn: 'Finance Performance Domain involves planning, managing, and controlling project costs and budget to ensure completion within the approved financial framework.',
        keyActivities: [
            '估算项目成本',
            '制定项目预算和成本基准',
            '监控成本绩效（CV/CPI/EAC）',
            '管理财务风险和现金流',
            '控制成本变更'
        ],
        keyActivitiesEn: [
            'Estimate project costs',
            'Develop project budget and cost baseline',
            'Monitor cost performance (CV/CPI/EAC)',
            'Manage financial risks and cash flow',
            'Control cost changes'
        ],
        expectedOutcomes: [
            '准确的成本估算',
            '现实的预算',
            '成本偏差受控',
            '在预算内成功交付'
        ],
        expectedOutcomesEn: [
            'Accurate cost estimates',
            'Realistic budget',
            'Cost variance under control',
            'Successful delivery within budget'
        ],
        example: {
            title: '实际案例：建筑项目成本控制',
            scenario: '某商业建筑项目因原材料价格波动面临15%的成本超支风险。项目经理实施了主动的成本控制策略：',
            actions: [
                '✅ 使用挣值管理（EVM）每周追踪CPI和EAC，提前发现趋势',
                '✅ 与关键供应商签订价格锁定协议，对冲原材料波动风险',
                '✅ 识别可替代材料方案，在不影响质量的前提下降低成本',
                '✅ 建立应急储备释放的审批流程，防止随意动用储备'
            ],
            outcome: '项目成本偏差控制在3%以内，管理储备金几乎未被动用。'
        },
        quiz: {
            question: '挣值管理（EVM）中，CPI=0.85表示什么？',
            options: [
                'A. 项目进度超前',
                'B. 每花1元钱只完成了0.85元价值的工作',
                'C. 项目成本优于计划',
                'D. 项目应该立即终止'
            ],
            correct: 1,
            explanation: 'CPI（成本绩效指数）=EV/AC，CPI<1意味着实际花费超过了已完成工作的价值，成本效率不佳。'
        },
        relatedPrinciples: [2, 6]
    },
    {
        number: 5,
        name: '相关方绩效域',
        nameEn: 'Stakeholders Performance Domain',
        icon: '\u{1f465}',
        color: '#C71585',
        summary: '识别和参与相关方，建立有效关系',
        summaryEn: 'Identify and engage stakeholders to build effective relationships',
        description: '相关方绩效域涉及识别所有相关方，分析他们的期望和影响力，并制定持续的参与策略。相关方管理是动态的过程，贯穿整个项目生命周期。',
        descriptionEn: 'Stakeholders Performance Domain involves identifying all stakeholders, analyzing their expectations and influence, and maintaining continuous engagement throughout the project lifecycle.',
        keyActivities: [
            '识别所有相关方和个人',
            '分析相关方期望、利益和影响力',
            '制定相关方参与策略和沟通计划',
            '持续沟通和反馈',
            '管理相关方期望和冲突'
        ],
        keyActivitiesEn: [
            'Identify all stakeholders and individuals',
            'Analyze stakeholder expectations, interests, and influence',
            'Develop stakeholder engagement strategies and communication plans',
            'Maintain continuous communication and feedback',
            'Manage stakeholder expectations and conflicts'
        ],
        expectedOutcomes: [
            '相关方理解和支持项目目标',
            '有效的相关方沟通机制',
            '相关方积极参与和贡献',
            '冲突得到及时妥善解决'
        ],
        expectedOutcomesEn: [
            'Stakeholders understand and support project objectives',
            'Effective stakeholder communication mechanisms',
            'Active stakeholder participation and contribution',
            'Conflicts resolved promptly and properly'
        ],
        example: {
            title: '实际案例：ERP系统的相关方管理',
            scenario: '某ERP实施项目识别出50+相关方，包括高层、业务部门、IT团队、供应商和最终用户。初期部分业务部门抵制变革。项目经理制定了差异化参与策略：',
            actions: [
                '✅ 使用影响力-利益矩阵将所有相关方分为四类，制定不同策略',
                '✅ 对高影响力低支持度的部门主管，安排一对一会谈和个性化演示',
                '✅ 邀请关键用户参与需求评审和验收测试，变阻力为参与',
                '✅ 每月发布项目通讯，展示阶段性成果和用户反馈'
            ],
            outcome: '业务部门的支持率从30%提升到85%，关键用户成为最积极的项目推广者。'
        },
        quiz: {
            question: '在管理相关方时，对"高影响力、低支持度"的相关方应该采取什么策略？',
            options: [
                'A. 忽视他们，专注支持者',
                'B. 重点沟通和管理，争取他们的支持或至少消除反对',
                'C. 只需定期发送邮件通知',
                'D. 将他们排除在项目之外'
            ],
            correct: 1,
            explanation: '高影响力低支持度的相关方是风险管理的关键对象，需要重点投入沟通和管理精力。'
        },
        relatedPrinciples: [1, 4, 5]
    },
    {
        number: 6,
        name: '资源绩效域',
        nameEn: 'Resources Performance Domain',
        icon: '\u{1f4e6}',
        color: '#4B0082',
        summary: '获取和管理项目资源，确保有效利用',
        summaryEn: 'Acquire and manage project resources for effective utilization',
        description: '资源绩效域涉及识别、获取和管理项目所需的实物资源和团队资源，确保资源的有效利用。包括资源规划、获取、团队建设和绩效管理。',
        descriptionEn: 'Resources Performance Domain involves identifying, acquiring, and managing both physical and team resources to ensure effective utilization.',
        keyActivities: [
            '识别所需的实物资源和人力资源',
            '获取和分配资源',
            '建设和管理团队绩效',
            '优化资源利用和解决冲突',
            '管理资源变更和释放'
        ],
        keyActivitiesEn: [
            'Identify required physical and human resources',
            'Acquire and assign resources',
            'Develop and manage team performance',
            'Optimize resource utilization and resolve conflicts',
            'Manage resource changes and release'
        ],
        expectedOutcomes: [
            '资源及时可用且匹配需求',
            '团队高效协作',
            '资源有效利用无浪费',
            '资源冲突最小化'
        ],
        expectedOutcomesEn: [
            'Resources available on time and matched to needs',
            'Efficient team collaboration',
            'Effective resource utilization without waste',
            'Minimized resource conflicts'
        ],
        example: {
            title: '实际案例：多项目资源优化',
            scenario: '某IT部门同时运行5个项目，核心架构师资源严重冲突。PMO负责人建立了资源优化机制：',
            actions: [
                '✅ 建立全部门资源池视图，每周更新资源使用率和预测',
                '✅ 按项目优先级和商业价值分配稀缺资源',
                '✅ 识别可以外部采购的非核心工作，释放内部专家资源',
                '✅ 建立资源共享和轮换机制，避免资源闲置'
            ],
            outcome: '核心资源利用率从60%提升到85%，项目排队等待时间减少40%。'
        },
        quiz: {
            question: '资源平衡（Resource Leveling）的主要目的是什么？',
            options: [
                'A. 最大化每个资源的加班时间',
                'B. 在资源约束下优化资源使用，避免过度分配',
                'C. 尽可能缩短项目工期',
                'D. 让所有资源平均分配工作'
            ],
            correct: 1,
            explanation: '资源平衡旨在在资源有限的情况下，解决资源过度分配问题，优化资源使用。'
        },
        relatedPrinciples: [4, 5, 6]
    },
    {
        number: 7,
        name: '风险绩效域',
        nameEn: 'Risk Performance Domain',
        icon: '⚠️',
        color: '#FF6347',
        summary: '识别、分析和管理项目风险与机会',
        summaryEn: 'Identify, analyze, and manage project risks and opportunities',
        description: '风险绩效域涉及识别、分析、规划应对和管理项目风险，包括威胁（负面风险）和机会（正面风险）。风险管理应是主动的、持续的，贯穿整个项目生命周期。',
        descriptionEn: 'Risk Performance Domain involves identifying, analyzing, planning responses, and managing project risks, including both threats and opportunities.',
        keyActivities: [
            '识别风险和不确定性来源',
            '分析风险概率和影响（定性+定量）',
            '规划风险应对策略（威胁5种+机会5种）',
            '实施风险应对措施',
            '持续监控风险触发因素'
        ],
        keyActivitiesEn: [
            'Identify risks and sources of uncertainty',
            'Analyze risk probability and impact (qualitative + quantitative)',
            'Plan risk response strategies (5 threat + 5 opportunity)',
            'Implement risk responses',
            'Continuously monitor risk triggers'
        ],
        expectedOutcomes: [
            '充分的风险意识和准备',
            '适当的应对措施就位',
            '威胁影响最小化',
            '机会最大化利用'
        ],
        expectedOutcomesEn: [
            'Adequate risk awareness and preparedness',
            'Appropriate response measures in place',
            'Minimized threat impact',
            'Maximized opportunity utilization'
        ],
        example: {
            title: '实际案例：供应链风险应对',
            scenario: '某制造项目关键零部件依赖单一海外供应商，面临地缘政治风险。项目经理采取了全面的风险管理：',
            actions: [
                '✅ 识别并评估单一供应商风险为"高概率高影响"（风险分析）',
                '✅ 采取"减轻"策略：开发本地备选供应商并保持安全库存',
                '✅ 同时识别到本地供应商报价更低的机会（机会利用）',
                '✅ 建立供应商风险仪表盘，监控交货准时率、质量合格率、价格波动'
            ],
            outcome: '海外供应中断时无缝切换到本地供应商，不仅未受影响，成本还降低了8%。'
        },
        quiz: {
            question: '对"高概率高影响"的负面风险，最合适的应对策略是？',
            options: [
                'A. 接受（Accept）',
                'B. 规避（Avoid）或减轻（Mitigate）',
                'C. 忽略（Ignore）',
                'D. 仅记录在风险登记册中'
            ],
            correct: 1,
            explanation: '高概率高影响的风险需要主动应对：规避是消除风险源，减轻是降低概率或影响。'
        },
        relatedPrinciples: [1, 2, 3]
    }
];
