/**
 * PMBOK 第 8 版 - 6 项原则数据
 * 6 Principles of PMBOK 8th Edition (2025/2026)
 * 含：白话解释、实际案例、自测题库（5题/原则）、绩效域关联
 */
export const principles = [
    {
        number: 1,
        name: '整体视角',
        nameEn: 'Adopt a Holistic View',
        icon: '\u{1f310}',
        summary: '从整体视角理解项目生态系统',
        summaryEn: 'Consider the entire project ecosystem',
        description: '考虑整个项目生态系统，包括相互依赖关系、相关方和更广泛的组织背景。项目不是孤立的，要与组织战略和其他系统协调一致，用系统思维理解各要素之间的关系和相互影响。',
        descriptionEn: 'Consider the entire project ecosystem, including interdependencies, stakeholders, and the broader organizational context. Projects are not isolated; they must align with organizational strategy and coordinate with other systems.',
        simpleExplain: '说人话：见树又见林。做项目不能只看自己的一亩三分地，要看到项目与组织战略、其他项目、外部环境的关联。大局观决定成败。',
        keyAspects: [
            { icon: '\u{1f30d}', title: '系统思维', titleEn: 'Systems Thinking', desc: '理解系统间的相互关联' },
            { icon: '\u{1f517}', title: '依赖管理', titleEn: 'Dependency Management', desc: '识别和管理内外部依赖关系' },
            { icon: '\u{1f465}', title: '相关方视角', titleEn: 'Stakeholder Perspectives', desc: '考虑所有相关方的影响和需求' },
            { icon: '\u{1f3e2}', title: '组织背景', titleEn: 'Organizational Context', desc: '理解组织环境、文化和战略方向' }
        ],
        example: {
            title: '实际案例：某银行核心系统升级',
            scenario: '某大型银行启动核心系统升级项目。项目经理陈明没有只看技术层面，而是：',
            actions: [
                '✅ 绘制系统交互全景图，识别了12个关联系统和5个业务部门的影响（系统思维）',
                '✅ 建立跨部门协调委员会，每周同步进展和风险（依赖管理）',
                '✅ 走访各业务部门，收集不同角色的需求和顾虑（相关方视角）',
                '✅ 将项目目标与银行三年数字化战略对齐，获得高管持续支持（组织背景）'
            ],
            outcome: '项目不仅成功上线，还意外发现并优化了3个长期存在的系统集成瓶颈，整体效率提升40%。'
        },
        quizzes: [
            { id: 'P1_Q1', question: 'PMBOK第8版中的"整体视角"原则强调什么？', options: ['A. 只关注自己负责的模块', 'B. 从全局出发，理解项目在组织中的位置和关联', 'C. 把项目拆得越细越好', 'D. 忽略外部环境变化'], correct: 1, explanation: '整体视角要求项目经理从全局出发，理解项目与组织战略、其他系统、外部环境的相互关联。', difficulty: 'easy' },
            { id: 'P1_Q2', question: '以下哪项最能体现"整体视角"原则的应用？', options: ['A. 只与直接上级沟通', 'B. 绘制系统交互图并建立跨部门协调机制', 'C. 每个团队成员独立工作', 'D. 等到上线前再考虑系统集成'], correct: 1, explanation: '绘制系统交互图和建立跨部门协调机制体现了系统思维和对依赖关系的管理。', difficulty: 'medium' },
            { id: 'P1_Q3', question: '"整体视角"原则中，依赖管理包括哪些内容？', options: ['A. 只管理技术依赖', 'B. 识别和管理项目内外部所有依赖关系', 'C. 忽略外部依赖', 'D. 只关注时间依赖'], correct: 1, explanation: '依赖管理需要识别和管理项目内部和外部所有的依赖关系，包括技术、组织、资源等。', difficulty: 'medium' },
            { id: 'P1_Q4', question: '系统思维与线性思维的主要区别是什么？', options: ['A. 没有区别', 'B. 系统思维关注整体关联，线性思维关注单线因果', 'C. 线性思维更高级', 'D. 系统思维只适用于IT项目'], correct: 1, explanation: '系统思维强调整体性和相互关联，反对简单的线性因果思维，认为系统各要素相互影响。', difficulty: 'hard' },
            { id: 'P1_Q5', question: '在项目中应用"整体视角"原则，以下做法最不合适的是？', options: ['A. 定期与各相关方同步信息', 'B. 只关注项目内部进度，无视组织战略变化', 'C. 识别跨项目依赖和共享资源', 'D. 理解项目对组织变革的影响'], correct: 1, explanation: '只关注内部进度而无视组织战略变化，恰恰违背了整体视角原则的核心要求。', difficulty: 'easy' }
        ],
        performanceDomains: ['治理绩效域', '范围绩效域', '相关方绩效域']
    },
    {
        number: 2,
        name: '聚焦价值',
        nameEn: 'Focus on Value',
        icon: '\u{1f48e}',
        summary: '优先交付价值，确保与组织目标一致',
        summaryEn: 'Prioritize delivering value aligned with organizational goals',
        description: '项目的最终目标是向相关方交付价值，确保项目成果与组织目标一致。所有决策都应围绕价值最大化，持续评估项目是否仍在创造预期价值，必要时调整方向。',
        descriptionEn: 'The ultimate goal of projects is to deliver value to stakeholders. All decisions should focus on maximizing value and ensuring alignment with organizational objectives.',
        simpleExplain: '说人话：一切向"值"看。做项目不是为了完成任务清单，而是为了创造实实在在的价值。时刻问自己：这个决定能增加价值吗？如果不能，为什么还要做？',
        keyAspects: [
            { icon: '\u{1f3af}', title: '价值定义', titleEn: 'Define Value', desc: '明确什么对组织才是真正的价值' },
            { icon: '\u{1f4c8}', title: '价值最大化', titleEn: 'Maximize Value', desc: '优先做高价值的事，低价值可舍弃' },
            { icon: '\u{1f4b0}', title: '商业收益', titleEn: 'Business Benefits', desc: '关注投资回报和商业成果' },
            { icon: '✅', title: '成果验证', titleEn: 'Validate Outcomes', desc: '持续确认价值是否在实现' }
        ],
        example: {
            title: '实际案例：电商平台功能优先级决策',
            scenario: '某电商平台项目原计划包含30个功能，但预算和时间有限。项目经理李娜进行了价值导向的优先级分析：',
            actions: [
                '✅ 与业务方共同定义价值评估标准：收入影响、用户留存、技术可行性（价值定义）',
                '✅ 使用MoSCoW方法对所有功能进行价值排序，砍掉12个低价值功能（价值最大化）',
                '✅ 建立价值仪表盘，实时追踪核心指标（商业收益）',
                '✅ 每个迭代结束后验证功能是否产生了预期的用户行为变化（成果验证）'
            ],
            outcome: '产品提前3周上线，核心收入指标提升45%，低价值功能的放弃没有对用户满意度产生负面影响。'
        },
        quizzes: [
            { id: 'P2_Q1', question: 'PMBOK第8版中"聚焦价值"原则的核心是什么？', options: ['A. 按时完成所有计划功能', 'B. 优先交付对组织最有价值的成果', 'C. 尽可能多地完成功能', 'D. 只关注成本控制'], correct: 1, explanation: '聚焦价值意味着资源有限时优先交付高价值成果，而非盲目完成所有计划功能。', difficulty: 'easy' },
            { id: 'P2_Q2', question: '以下哪项最能衡量项目是否在"聚焦价值"？', options: ['A. 完成了多少个用户故事', 'B. 交付的功能是否产生了预期的商业成果', 'C. 团队成员加班时长', 'D. 文档的完整程度'], correct: 1, explanation: '价值的衡量标准是商业成果（outcome），而非产出数量（output）。', difficulty: 'medium' },
            { id: 'P2_Q3', question: '在资源有限时，聚焦价值原则建议项目经理如何决策？', options: ['A. 平均分配资源到所有功能', 'B. 优先完成高价值功能，必要时舍弃低价值功能', 'C. 要求增加资源完成所有功能', 'D. 随机选择功能进行开发'], correct: 1, explanation: '聚焦价值要求在资源约束下做出取舍，优先保障高价值功能的交付。', difficulty: 'medium' },
            { id: 'P2_Q4', question: '价值交付应该何时进行评估？', options: ['A. 仅在项目结束时', 'B. 仅在项目开始时', 'C. 贯穿整个项目生命周期', 'D. 不需要评估'], correct: 2, explanation: '价值交付需要持续评估，贯穿整个项目生命周期，以便及时调整方向。', difficulty: 'easy' },
            { id: 'P2_Q5', question: '以下哪项不是"聚焦价值"原则关注的内容？', options: ['A. 投资回报率', 'B. 客户满意度', 'C. 完成任务的数量', 'D. 商业目标的实现'], correct: 2, explanation: '聚焦价值关注的是成果的质量和影响，而非简单地追求任务完成数量。', difficulty: 'hard' }
        ],
        performanceDomains: ['财务绩效域', '范围绩效域', '相关方绩效域']
    },
    {
        number: 3,
        name: '融入质量',
        nameEn: 'Embed Quality',
        icon: '⭐',
        summary: '在整个项目活动中融入质量管理',
        summaryEn: 'Integrate quality management throughout all activities',
        description: '将质量管理融入所有项目活动中，而不是作为最后的检查环节。质量是设计和构建进去的，不是检查出来的。每个环节都要确保产出合格，形成持续改进的闭环。',
        descriptionEn: 'Integrate quality into all project activities rather than treating it as a final inspection. Quality is designed and built in, not inspected in.',
        simpleExplain: '说人话：一次做对，全程把关。质量靠的是预防和过程控制，不是最后一刻的突击检查。每个环节都做好，最后自然质量好。',
        keyAspects: [
            { icon: '\u{1f4d0}', title: '质量标准', titleEn: 'Quality Standards', desc: '明确质量要求和验收标准' },
            { icon: '\u{1f527}', title: '过程设计', titleEn: 'Process Design', desc: '设计防止缺陷产生的工作流程' },
            { icon: '✅', title: '持续验证', titleEn: 'Continuous Verification', desc: '边做边检查，不是做完再查' },
            { icon: '\u{1f4ca}', title: '持续改进', titleEn: 'Continuous Improvement', desc: '基于数据和反馈不断优化' }
        ],
        example: {
            title: '实际案例：医疗设备软件开发',
            scenario: '某医疗设备软件需要满足严格的FDA合规要求。质量负责人赵敏将质量融入整个开发过程：',
            actions: [
                '✅ 在需求阶段就明确每个功能的验收标准和测试用例（质量标准）',
                '✅ 设计代码审查+自动化测试+持续集成的质量流水线（过程设计）',
                '✅ 每个功能完成后立即进行单元测试和集成测试（持续验证）',
                '✅ 每月分析缺陷趋势，识别根本原因并优化开发流程（持续改进）'
            ],
            outcome: '产品一次性通过FDA审核，上市后客户投诉率为零，质量成本同比下降60%。'
        },
        quizzes: [
            { id: 'P3_Q1', question: '"融入质量"原则与传统质量管理的根本区别是什么？', options: ['A. 没有区别', 'B. 质量是设计和构建进去的，不是最后检查出来的', 'C. 传统质量管理更好', 'D. 不需要质量检查'], correct: 1, explanation: '融入质量强调质量是前置和内置的，通过过程控制预防缺陷，而非依赖最终检查。', difficulty: 'easy' },
            { id: 'P3_Q2', question: '以下哪项最能体现"融入质量"的实践？', options: ['A. 等所有开发完成后再统一测试', 'B. 在开发前定义验收标准，边开发边测试', 'C. 只由QA团队负责质量', 'D. 跳过测试以加快进度'], correct: 1, explanation: '前置定义验收标准并持续测试，体现了质量融入过程的理念。', difficulty: 'medium' },
            { id: 'P3_Q3', question: '持续改进（Continuous Improvement）在质量管理中意味着？', options: ['A. 一次做好就不需要改进了', 'B. 永远可以做得更好，基于数据持续优化', 'C. 等到出问题再改进', 'D. 只在大项目中做改进'], correct: 1, explanation: '持续改进是质量管理的核心理念，认为永远有改进空间，应基于数据驱动决策。', difficulty: 'medium' },
            { id: 'P3_Q4', question: '质量成本包括哪些类型？', options: ['A. 只有检验成本', 'B. 预防成本、评估成本、内部失败成本、外部失败成本', 'C. 只有返工成本', 'D. 只有培训成本'], correct: 1, explanation: '质量成本包括预防成本、评估成本、内部失败成本和外部失败成本四大类。', difficulty: 'hard' },
            { id: 'P3_Q5', question: '在项目中，谁应该对质量负责？', options: ['A. 只有QA团队', 'B. 只有项目经理', 'C. 整个项目团队', 'D. 只有开发人员'], correct: 2, explanation: '质量是团队中每个人的责任，融入质量意味着每个角色都在自己的工作中保证质量。', difficulty: 'easy' }
        ],
        performanceDomains: ['范围绩效域', '财务绩效域', '风险绩效域']
    },
    {
        number: 4,
        name: '负责任领导',
        nameEn: 'Be an Accountable Leader',
        icon: '\u{1f31f}',
        summary: '展现负责任、诚信和道德的领导力',
        summaryEn: 'Demonstrate responsible, ethical, and accountable leadership',
        description: '展现负责任、诚信和道德的领导力。领导者要对项目、团队和相关方负责，做出符合道德标准的决策。领导力不是职位，而是行为——无论什么角色都可以展现领导力。',
        descriptionEn: 'Demonstrate responsible, ethical leadership. Leaders are accountable to the project, team, and stakeholders, making decisions that meet ethical standards.',
        simpleExplain: '说人话：带好头、负好责。领导力不是"管人"，而是通过行动影响他人、敢于担当、做正确的事。出了问题是"我的责任"，有了成绩是"团队的功劳"。',
        keyAspects: [
            { icon: '\u{1f3af}', title: '愿景引领', titleEn: 'Vision & Direction', desc: '描绘清晰的目标和方向，激励团队前行' },
            { icon: '\u{1f6e1}', title: '诚信行事', titleEn: 'Act with Integrity', desc: '诚实守信，说到做到，做正确的事' },
            { icon: '\u{1f525}', title: '激励他人', titleEn: 'Motivate & Inspire', desc: '激发团队成员的潜力和热情' },
            { icon: '⚖️', title: '道德决策', titleEn: 'Ethical Decisions', desc: '在困难情况下做出符合道德的决策' }
        ],
        example: {
            title: '实际案例：新手项目经理的逆袭',
            scenario: '新手项目经理小陈接手了一个濒临失败的数据平台项目。团队士气低落，客户不信任。他展现了以下领导力：',
            actions: [
                '✅ 与团队一起重新描绘项目成功后的愿景，让每个人看到自己的贡献意义（愿景引领）',
                '✅ 如实向客户承认前期问题，提出详实的补救方案和承诺（诚信行事）',
                '✅ 公开表扬每位成员的进步，每周评选"本周之星"（激励他人）',
                '✅ 在供应商提出给回扣换取合同时，坚决拒绝并更换供应商（道德决策）'
            ],
            outcome: '团队士气从低谷回升到历史最高，项目不仅追回进度，还获得了年度最佳项目奖。'
        },
        quizzes: [
            { id: 'P4_Q1', question: 'PMBOK第8版中的"负责任领导"原则强调什么？', options: ['A. 领导力只是项目经理的事', 'B. 通过诚信、道德和担当来影响和带领团队', 'C. 领导力就是发号施令', 'D. 领导力是天生的，后天无法培养'], correct: 1, explanation: '负责任领导强调领导力是行为而非职位，任何人都可以通过诚信、担当和道德行为来展现领导力。', difficulty: 'easy' },
            { id: 'P4_Q2', question: '以下哪项最能体现"负责任领导"的行为？', options: ['A. 项目出问题时推卸责任给团队', 'B. 主动承担问题责任，带领团队寻找解决方案', 'C. 只做上级交代的事', 'D. 隐瞒问题避免被批评'], correct: 1, explanation: '负责任领导在困难面前不推卸责任，而是主动承担并带领团队解决问题。', difficulty: 'medium' },
            { id: 'P4_Q3', question: '服务型领导（Servant Leadership）的核心是什么？', options: ['A. 控制团队成员的一举一动', 'B. 以服务和支持团队的成长与成功为首要任务', 'C. 只关注上级的满意度', 'D. 让团队自行其是，完全不干预'], correct: 1, explanation: '服务型领导以支持和服务团队为核心，关注团队成员的成长与发展。', difficulty: 'medium' },
            { id: 'P4_Q4', question: '面对道德困境时，负责任的项目经理应该如何做？', options: ['A. 选择对自己最有利的方案', 'B. 遵循道德准则和组织价值观，即使这可能是更困难的选择', 'C. 征求上级同意后选择捷径', 'D. 让团队成员来决定'], correct: 1, explanation: '负责任领导要求在道德困境中坚持原则，做出符合道德标准的决策。', difficulty: 'hard' },
            { id: 'P4_Q5', question: '项目经理的领导力与职能经理的管理有何不同？', options: ['A. 完全相同', 'B. 领导力侧重影响和激励，管理侧重控制和协调', 'C. 管理比领导力重要', 'D. 二者不可兼得'], correct: 1, explanation: '领导力侧重愿景、影响和激励，而管理侧重计划、控制和协调，两者互补。', difficulty: 'easy' }
        ],
        performanceDomains: ['治理绩效域', '资源绩效域', '相关方绩效域']
    },
    {
        number: 5,
        name: '协作团队',
        nameEn: 'Foster a Collaborative Team Environment',
        icon: '\u{1f465}',
        summary: '培养协作的项目团队环境',
        summaryEn: 'Build a collaborative project team environment',
        description: '培养协作的项目团队环境，促进开放沟通、知识共享和相互支持。高效团队不是靠命令凝聚，而是靠共享的愿景、信任和协作文化。让团队成员发挥最大潜力。',
        descriptionEn: 'Foster a collaborative team environment that promotes open communication, knowledge sharing, and mutual support to enable team members to reach their full potential.',
        simpleExplain: '说人话：众人拾柴火焰高。打造一个人人愿意说话、互相帮助、一起成长的团队环境。好的氛围不是靠制度管出来的，是靠信任和尊重建立的。',
        keyAspects: [
            { icon: '\u{1f5e3}', title: '开放沟通', titleEn: 'Open Communication', desc: '信息透明，鼓励畅所欲言' },
            { icon: '\u{1f4da}', title: '知识共享', titleEn: 'Knowledge Sharing', desc: '分享经验和技能，共同成长' },
            { icon: '\u{1f932}', title: '相互支持', titleEn: 'Mutual Support', desc: '互相帮助，不让任何人掉队' },
            { icon: '\u{1f389}', title: '团队文化', titleEn: 'Team Culture', desc: '建立积极、包容的团队规范' }
        ],
        example: {
            title: '实际案例：跨国团队的协作突破',
            scenario: '某跨国项目团队分布在5个时区，初期协作效率低下，成员之间缺乏信任。项目经理王芳采取措施：',
            actions: [
                '✅ 建立团队共享知识库，所有决策和讨论都在公开频道进行（开放沟通）',
                '✅ 设立"周五技术分享会"，轮流由成员分享专长领域（知识共享）',
                '✅ 实施"伙伴制度"，每位新成员配备一名资深伙伴帮助融入（相互支持）',
                '✅ 共同制定团队章程，包括沟通规范、决策流程和冲突处理方式（团队文化）'
            ],
            outcome: '跨时区协作效率提升60%，团队成员NPS从-20提升到+75，项目提前交付。'
        },
        quizzes: [
            { id: 'P5_Q1', question: '"协作团队"原则中，以下哪项做法最有效？', options: ['A. 建立开放沟通机制，鼓励知识共享和相互支持', 'B. 严格管控信息流通，避免信息泄露', 'C. 让团队成员独立工作，减少沟通成本', 'D. 只在出问题时才进行团队沟通'], correct: 0, explanation: '开放沟通、知识共享和相互支持是高效协作团队的三大基石。', difficulty: 'easy' },
            { id: 'P5_Q2', question: '高效协作团队的特征不包括？', options: ['A. 清晰的目标和角色', 'B. 相互指责和推诿', 'C. 良好的沟通和信任', 'D. 知识共享和学习氛围'], correct: 1, explanation: '相互指责和推诿会破坏团队信任，是高效协作团队的最大杀手。', difficulty: 'easy' },
            { id: 'P5_Q3', question: '团队章程（Team Charter）的主要作用是什么？', options: ['A. 只是一个形式文件', 'B. 明确团队的沟通规范、决策流程和行为准则', 'C. 仅用于分配任务', 'D. 仅项目经理需要遵守'], correct: 1, explanation: '团队章程是团队共同制定的"宪法"，明确了工作规范和协作方式。', difficulty: 'medium' },
            { id: 'P5_Q4', question: '冲突在协作团队中应该如何处理？', options: ['A. 完全避免任何冲突', 'B. 建设性的冲突可以促进创新和更好的决策', 'C. 由项目经理单方面裁决', 'D. 让冲突双方自行解决，不加干预'], correct: 1, explanation: '适度的建设性冲突可以激发创新和更全面的思考，关键是有效管理和引导。', difficulty: 'hard' },
            { id: 'P5_Q5', question: '心理安全（Psychological Safety）对团队协作意味着什么？', options: ['A. 不用承担任何工作压力', 'B. 团队成员可以自由表达意见而不担心被惩罚或嘲笑', 'C. 只允许说正面的话', 'D. 不需要任何问责机制'], correct: 1, explanation: '心理安全让成员敢于表达真实想法、承认错误、提出异议，是高效协作的基础。', difficulty: 'medium' }
        ],
        performanceDomains: ['资源绩效域', '治理绩效域', '相关方绩效域']
    },
    {
        number: 6,
        name: '管家精神',
        nameEn: 'Demonstrate Stewardship',
        icon: '\u{1f91d}',
        summary: '负责任地管理资源，展现管家精神',
        summaryEn: 'Manage resources responsibly as a steward',
        description: '负责任地管理组织资源，为组织和相关方的最佳利益行事。管家精神包括诚信行事、关怀团队成员、高效利用资源，以及对社会和环境负责。项目经理是组织资源的管家，而非所有者。',
        descriptionEn: 'Manage organizational resources responsibly, acting in the best interest of the organization and stakeholders. Stewardship includes integrity, care for team members, efficient resource use, and social/environmental responsibility.',
        simpleExplain: '说人话：当家做主、不负所托。项目资源不是你的，是组织的。要用好每一分钱、每一个人，对得起组织的信任。不仅要对项目负责，还要对社会和环境负责。',
        keyAspects: [
            { icon: '\u{1f3af}', title: '诚信行事', titleEn: 'Act with Integrity', desc: '诚实守信，以组织利益为重' },
            { icon: '❤️', title: '关怀团队', titleEn: 'Care for People', desc: '关心成员成长、福祉和工作负荷' },
            { icon: '\u{1f4ca}', title: '资源管理', titleEn: 'Resource Stewardship', desc: '高效、可持续地利用组织资源' },
            { icon: '\u{1f91d}', title: '建立信任', titleEn: 'Build Trust', desc: '言行一致，赢得相关方信任' }
        ],
        example: {
            title: '实际案例：ERP项目的资源管家',
            scenario: '某ERP实施项目预算5000万，涉及30人团队和10家供应商。项目经理张华展现了管家精神：',
            actions: [
                '✅ 建立透明的资源使用台账，每月向管理委员会汇报资源使用效率（诚信行事）',
                '✅ 关注团队成员的工作负荷，及时调整任务分配避免 burnout（关怀团队）',
                '✅ 通过谈判将供应商成本降低15%，同时保证质量不降（资源管理）',
                '✅ 主动向发起人报告项目风险和改进机会，即使这意味着承认之前的决策需要调整（建立信任）'
            ],
            outcome: '项目在预算范围内交付，节省的500万资源被重新分配到其他战略项目，团队零离职率。'
        },
        quizzes: [
            { id: 'P6_Q1', question: 'PMBOK第8版中"管家精神"原则的核心是什么？', options: ['A. 项目经理拥有所有项目资源', 'B. 以组织利益为重，负责任地管理受托资源', 'C. 只管自己的任务', 'D. 最大化个人收益'], correct: 1, explanation: '管家精神强调项目经理是资源的管家而非所有者，要以组织最佳利益来管理资源。', difficulty: 'easy' },
            { id: 'P6_Q2', question: '以下哪项行为最符合"管家精神"原则？', options: ['A. 隐瞒项目问题，避免被上级批评', 'B. 如实汇报项目状态，即使可能影响自己的绩效评估', 'C. 把项目预算花得一分不剩以争取下期更多', 'D. 把所有决策权都抓在自己手里'], correct: 1, explanation: '如实汇报体现了诚信和以组织利益为重的管家精神。', difficulty: 'medium' },
            { id: 'P6_Q3', question: '管家精神中的"可持续性"考虑包括？', options: ['A. 只关注经济利益', 'B. 平衡经济、社会和环境三方面的影响', 'C. 忽略环境影响', 'D. 只关注短期结果'], correct: 1, explanation: '管家精神要求考虑项目对经济、社会和环境的长期影响，追求可持续的价值创造。', difficulty: 'hard' },
            { id: 'P6_Q4', question: '作为项目资源的管家，项目经理应该如何对待团队？', options: ['A. 将团队视为可替换的资源', 'B. 关心成员的发展和福祉，防止过度使用', 'C. 不断加压以获取最大产出', 'D. 只关注技术能力强的成员'], correct: 1, explanation: '管家精神要求项目经理关心团队成员的成长和福祉，避免将人视为可无限使用的资源。', difficulty: 'medium' },
            { id: 'P6_Q5', question: '管家精神与负责任领导有何关系？', options: ['A. 完全相同没有区别', 'B. 管家精神侧重资源管理责任，负责任领导侧重带领和影响他人', 'C. 两者互不相关', 'D. 管家精神只适用于高级管理层'], correct: 1, explanation: '管家精神侧重对资源的受托责任，负责任领导侧重对人的带领和影响，两者互补。', difficulty: 'easy' }
        ],
        performanceDomains: ['治理绩效域', '财务绩效域', '资源绩效域']
    }
];
