/**
 * PMBOK 第 8 版 - 6 项原则数据
 * 6 Principles of PMBOK 8th Edition (2025/2026)
 * 含：白话解释、实际案例、自测题库（5题/原则）、绩效域关联
 */
export const principles = [
    {
        number: 1,
        name: '采取整体观',
        nameEn: 'Adopt a Holistic View',
        icon: '\u{1f310}',
        summary: '采用系统思考管理项目复杂性和相互依赖性',
        summaryEn: 'Use systems thinking to manage complexity and interdependencies',
        description: '不再孤立地看待各个任务或知识领域，而是采用系统思考的方式，去管理项目中高度的复杂性和各要素间的相互依赖性。打破知识领域壁垒，实现跨领域的系统性整合。',
        descriptionEn: 'Move beyond isolated tasks and knowledge areas by adopting systems thinking to manage the high degree of complexity and interdependencies among project elements. Break down domain silos to achieve cross-domain systemic integration.',
        simpleExplain: '说人话：见树又见林。做项目不能只看自己的一亩三分地，要看到项目与组织战略、其他项目、外部环境的关联。打破部门墙，用系统思维看全局。',
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
        description: '项目成功不再局限于传统的"按时、按预算交付"，而是要确保项目生命周期的每一步都在持续对齐业务目标和组织的战略期望。第8版引入"价值交付系统"概念，要求项目经理不仅要交付有形的财务收益，还要创造商誉、合规、员工福祉等无形价值。',
        descriptionEn: 'Project success is no longer limited to "on time, on budget" delivery. Every step of the project lifecycle must continuously align with business objectives and organizational strategic expectations. PMBOK8 introduces the "Value Delivery System" concept, requiring project managers to deliver both tangible financial benefits and intangible value such as goodwill, compliance, and employee well-being.',
        simpleExplain: '说人话：一切向"值"看。项目的成功不只是按时、按预算交付，更是交付真正对业务有意义的成果。有形的钱要赚，无形的品牌、合规、员工幸福也要创造。',
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
        name: '将质量融入过程与交付物',
        nameEn: 'Embed Quality Into Processes and Deliverables',
        icon: '⭐',
        summary: '从始至终将质量内建于过程和产出中',
        summaryEn: 'Build quality into processes and deliverables from start to finish',
        description: '质量不是靠最后一步检查出来的，而是要从始至终内建于过程和产出中，从而最大化满足相关方期望并符合合规要求。第8版将质量控制直接合并到"范围绩效域"的监控与确认过程中，将质量指标视为交付物本身的核心属性。',
        descriptionEn: 'Quality is not achieved through final inspection but by being built into processes and deliverables from start to finish, maximizing stakeholder satisfaction and ensuring compliance. PMBOK8 integrates quality control directly into the Scope Performance Domain monitoring and validation processes, treating quality metrics as core attributes of deliverables themselves.',
        simpleExplain: '说人话：一次做对，全程把关。质量靠的是预防和过程控制，不是最后一刻的突击检查。第8版甚至把质量控制直接融入范围管理——质量就是交付物本身的一部分。',
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
        name: '成为有担当的领导者',
        nameEn: 'Be an Accountable Leader',
        icon: '\u{1f31f}',
        summary: '在多元化和充满冲突的环境中展现诚信与担当',
        summaryEn: 'Demonstrate integrity, accountability, and adaptability in diverse environments',
        description: '倡导项目管理者在面临多元化且充满冲突的环境中，展现出诚信、勇于自省以及灵活变通的领导力。第8版在AI专项附录中特别强调"人负责决策，人承担最终责任"的原则，并在资源管理领域大力引入情商、仆人式领导力和冲突管理等软技能。',
        descriptionEn: 'Advocates that project managers demonstrate integrity, self-reflection, and adaptable leadership in diverse and conflict-filled environments. PMBOK8 emphasizes "humans make decisions and bear ultimate accountability" in its AI appendix, while introducing emotional intelligence, servant leadership, and conflict management into resource management.',
        simpleExplain: '说人话：带好头、负好责。无论AI多强大，最终做决策和承担责任的是人。领导者要有担当，敢承认错误，能灵活应对变化，在复杂环境中做正确的事。',
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
        name: '在所有项目领域融入可持续性',
        nameEn: 'Integrate Sustainability Within All Project Areas',
        icon: '\u{267b}',
        summary: '平衡人、利润、地球的三重底线，负责任地使用资源',
        summaryEn: 'Balance the triple bottom line of people, profit, and planet',
        description: '强调项目运作必须平衡"人、利润、地球"的三重底线（Triple Bottom Line），在全生命周期中负责任地使用各类资源。第8版在"规划资源管理"过程中明确引入了"绿色人力资源管理（Green HRM）"等前沿概念，将可持续性融入项目管理的每个领域。',
        descriptionEn: 'Emphasizes that project operations must balance the triple bottom line of "People, Profit, Planet" by responsibly using all types of resources throughout the project lifecycle. PMBOK8 explicitly introduces forward-looking concepts like "Green Human Resource Management (Green HRM)" in the Plan Resource Management process, embedding sustainability into every project domain.',
        simpleExplain: '说人话：既要赚钱，也要对人和地球负责。做项目不能只看短期利润，要关注对员工、社会和环境的影响。第8版甚至把"绿色HRM"写进了资源管理——可持续不是口号，是具体行动。',
        keyAspects: [
            { icon: '\u{1f30d}', title: '三重底线', titleEn: 'Triple Bottom Line', desc: '平衡人（People）、利润（Profit）、地球（Planet）' },
            { icon: '\u{267b}', title: '资源责任', titleEn: 'Resource Responsibility', desc: '全生命周期中负责任、高效地使用资源' },
            { icon: '\u{1f33f}', title: '绿色实践', titleEn: 'Green Practices', desc: '引入Green HRM等可持续管理工具和技术' },
            { icon: '\u{1f4c8}', title: '长期视角', titleEn: 'Long-Term Perspective', desc: '考虑项目对社会和环境的长期影响' }
        ],
        example: {
            title: '实际案例：绿色数据中心建设项目',
            scenario: '某科技公司计划建设一座大型数据中心。项目经理张伟在项目启动时就确立了可持续性目标，将三重底线贯穿整个项目：',
            actions: [
                '✅ 选择可再生能源供电方案，虽然前期投入高15%，但10年运营成本降低40%（地球维度+利润维度）',
                '✅ 采用绿色人力资源管理，优先招聘本地人才并建立技能培训体系，为当地创造200+就业岗位（人的维度）',
                '✅ 在设计阶段引入"模块化+可回收"建筑材料，减少建筑垃圾60%，获得LEED铂金认证（绿色实践）',
                '✅ 建立供应商可持续性评估体系，将碳排放指标纳入采购决策（长期视角）'
            ],
            outcome: '项目不仅获得LEED铂金级认证，还因其可持续设计将运营成本降低了40%，成为行业绿色数据中心标杆，当地社区满意度达95%。'
        },
        quizzes: [
            { id: 'P5_Q1', question: 'PMBOK第8版中"可持续性"原则的核心是什么？', options: ['A. 只关注项目利润', 'B. 平衡人、利润、地球三重底线，负责任地使用资源', 'C. 忽略环境影响追求速度', 'D. 仅关注短期经济效益'], correct: 1, explanation: '三重底线（Triple Bottom Line）是可持续性原则的核心——平衡人（People）、利润（Profit）、地球（Planet）。', difficulty: 'easy' },
            { id: 'P5_Q2', question: 'PMBOK第8版在哪个具体过程中引入了"绿色人力资源管理（Green HRM）"？', options: ['A. 规划沟通管理', 'B. 规划资源管理', 'C. 估算成本', 'D. 识别风险'], correct: 1, explanation: '第8版在"规划资源管理"过程中明确引入了Green HRM等可持续性前沿概念作为工具技术。', difficulty: 'medium' },
            { id: 'P5_Q3', question: '三重底线（Triple Bottom Line）不包括以下哪项？', options: ['A. 人（People）', 'B. 利润（Profit）', 'C. 速度（Speed）', 'D. 地球（Planet）'], correct: 2, explanation: '三重底线是"人、利润、地球"（People, Profit, Planet），不包含速度。', difficulty: 'easy' },
            { id: 'P5_Q4', question: '在可持续性原则下，项目经理在做采购决策时应考虑什么？', options: ['A. 仅考虑最低价格', 'B. 将供应商的碳排放和可持续性表现纳入评估标准', 'C. 只考虑交付速度', 'D. 不考虑环境因素'], correct: 1, explanation: '可持续性要求将环境和社会影响纳入采购决策，包括供应商的碳排放和可持续性表现。', difficulty: 'medium' },
            { id: 'P5_Q5', question: '以下哪项最能体现"在全生命周期中负责任地使用资源"？', options: ['A. 只在项目结束时关注资源使用', 'B. 从规划、执行到收尾全程考虑资源的效率和可持续性', 'C. 只关注人力资源', 'D. 最大化短期产出而不计长期影响'], correct: 1, explanation: '全生命周期意味着从项目启动到收尾的每个阶段都要考虑资源的可持续使用，而非仅在某一阶段。', difficulty: 'hard' }
        ],
        performanceDomains: ['资源绩效域', '财务绩效域', '治理绩效域']
    },
    {
        number: 6,
        name: '构建赋能文化',
        nameEn: 'Build an Empowered Culture',
        icon: '\u{1f31f}',
        summary: '促进信任、尊重多样性，打造积极协作的工作环境',
        summaryEn: 'Foster trust, respect diversity, and build a collaborative environment',
        description: '旨在促进团队成员和相关方之间的相互信任，尊重多样性，从而打造出一个积极向上、高度协作的工作环境。为了落实这一原则，第8版将传统的"相关方管理"与"沟通管理"合二为一，强调利用积极的沟通机制来赋能相关方，打破信息孤岛。',
        descriptionEn: 'Aims to foster mutual trust among team members and stakeholders, respect diversity, and build a positive, highly collaborative work environment. To implement this principle, PMBOK8 consolidates traditional "Stakeholder Management" and "Communications Management" into one domain, emphasizing active communication to empower stakeholders and break down information silos.',
        simpleExplain: '说人话：一个好汉三个帮，一个好团队靠赋能。不是管控和命令，而是信任和赋能，让每个人都能发挥最大潜力。第8版甚至把相关方管理和沟通管理合并了——沟通的目的不仅是传递信息，更是赋能他人。',
        keyAspects: [
            { icon: '\u{1f91d}', title: '相互信任', titleEn: 'Mutual Trust', desc: '在团队和相关方间建立深厚的信任关系' },
            { icon: '\u{1f308}', title: '尊重多样性', titleEn: 'Respect Diversity', desc: '尊重和包容不同背景、观点和文化' },
            { icon: '\u{1f4e2}', title: '积极沟通', titleEn: 'Active Communication', desc: '以沟通赋能相关方，打破信息孤岛' },
            { icon: '\u{1f3e2}', title: '文化塑造', titleEn: 'Culture Building', desc: '打造积极向上、高度协作的组织文化' }
        ],
        example: {
            title: '实际案例：金融科技初创公司的文化变革',
            scenario: '某金融科技公司因快速增长，从30人扩张到200人，出现了部门割据、信息不透明和员工离职率飙升的问题。CTO王敏被任命为"组织效能项目"负责人，以赋能文化为目标推动变革：',
            actions: [
                '✅ 推行"开放日历"制度，所有高管的日程和决策公开透明，任何员工可以预约30分钟一对一沟通（相互信任）',
                '✅ 建立多元化和包容性委员会，由来自不同国家、性别和背景的员工组成，定期审查公司政策和招聘实践（尊重多样性）',
                '✅ 将原有的周报邮件文化改为实时协作平台+每周15分钟团队站会，相关方管理直接融入沟通流程（积极沟通）',
                '✅ 引入"失败分享会"——每月一次，鼓励团队分享项目中的失误和教训，并将其转化为团队的集体知识（文化塑造）'
            ],
            outcome: '6个月后，员工NPS从-10提升到+60，跨部门协作效率提升50%，离职率从25%降至8%。更重要的是，团队开始主动识别和解决问题，而非等待指令。'
        },
        quizzes: [
            { id: 'P6_Q1', question: 'PMBOK第8版中"构建赋能文化"原则的核心是什么？', options: ['A. 严格控制团队行为', 'B. 促进信任、尊重多样性，打造积极协作的工作环境', 'C. 只关注技术能力提升', 'D. 减少团队成员之间的沟通'], correct: 1, explanation: '赋能文化的核心是信任和尊重多样性，打造积极协作环境，让团队主动而非被动工作。', difficulty: 'easy' },
            { id: 'P6_Q2', question: '为了落实"赋能文化"原则，PMBOK第8版在结构上做了什么调整？', options: ['A. 未做任何调整', 'B. 将相关方管理与沟通管理合并为一个绩效域', 'C. 删除了沟通管理', 'D. 将相关方管理从原则中移除'], correct: 1, explanation: '第8版将传统的相关方管理和沟通管理合二为一，强调用沟通赋能相关方、打破信息孤岛。', difficulty: 'medium' },
            { id: 'P6_Q3', question: '赋能文化中"信息孤岛"指的是什么？', options: ['A. 物理上的岛屿', 'B. 部门或团队之间信息不流通、各自为政的状态', 'C. 数据中心的位置', 'D. 一种软件架构'], correct: 1, explanation: '信息孤岛指组织内部信息流通不畅，各部门或团队各自为政，缺乏有效沟通和协作。', difficulty: 'easy' },
            { id: 'P6_Q4', question: '以下哪项最能体现"赋能文化"而非"命令控制"的管理方式？', options: ['A. 所有决策需经理审批', 'B. 团队成员自主制定方案，领导提供支持和资源', 'C. 严格执行自上而下的指令', 'D. 限制团队成员之间的非正式沟通'], correct: 1, explanation: '赋能文化强调给予团队自主权和资源支持，而非自上而下的命令和控制。', difficulty: 'medium' },
            { id: 'P6_Q5', question: '赋能文化中，失败应该被如何看待？', options: ['A. 必须严惩', 'B. 被视为学习机会，鼓励分享教训并转化为团队知识', 'C. 完全忽略', 'D. 仅由当事人自行处理'], correct: 1, explanation: '赋能文化将失败视为学习和改进的机会，鼓励透明分享，转化为组织的集体智慧。', difficulty: 'hard' }
        ],
        performanceDomains: ['相关方绩效域', '资源绩效域', '治理绩效域']
    }
];
