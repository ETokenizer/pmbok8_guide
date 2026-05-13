/**
 * PMBOK 第 8 版 - 40 个项目管理流程（完整 ITTO）
 * 40 Processes with full Inputs, Tools & Techniques, Outputs
 * 按 5 个焦点领域组织：启动(2) / 规划(20) / 执行(8) / 监控(9) / 收尾(1)
 */
export const processes = [
    // ==================== 启动 ====================
    {
        number: 1, focusArea: '启动', focusAreaEn: 'Initiating',
        name: '制定项目章程', nameEn: 'Develop Project Charter',
        icon: '\u{1f4dc}', color: '#005A9D',
        description: '正式授权项目或阶段启动的文件。确立项目的存在性，定义项目目标，并授予项目经理调动资源的权力。',
        descriptionEn: 'Develop Project Charter is the process of developing a document that formally authorizes the existence of a project and provides the project manager with the authority to apply organizational resources.',
        inputs: ['项目工作说明书 (SOW)', '商业论证', '效益管理计划', '协议', '事业环境因素', '组织过程资产'],
        tools: ['专家判断', '数据收集', '人际关系与团队技能', '会议'],
        outputs: ['项目章程', '假设日志'],
        performanceDomain: '治理绩效域'
    },
    {
        number: 2, focusArea: '启动', focusAreaEn: 'Initiating',
        name: '识别相关方', nameEn: 'Identify Stakeholders',
        icon: '\u{1f465}', color: '#0077C8',
        description: '定期识别项目相关方，分析和记录他们的利益、参与度、相互依赖性、影响力和对项目成功的潜在影响。',
        descriptionEn: 'Identify Stakeholders is the process of identifying project stakeholders regularly and analyzing relevant information regarding their interests and influence.',
        inputs: ['项目章程', '采购文件', '事业环境因素', '组织过程资产'],
        tools: ['专家判断', '数据收集', '数据分析', '数据表现', '人际关系与团队技能', '会议'],
        outputs: ['相关方登记册', '变更请求'],
        performanceDomain: '相关方绩效域'
    },
    // ==================== 规划 ====================
    {
        number: 3, focusArea: '规划', focusAreaEn: 'Planning',
        name: '制定项目管理计划', nameEn: 'Develop Project Management Plan',
        icon: '\u{1f4cb}', color: '#2E8B57',
        description: '定义、准备和协调所有子管理计划，并将其整合为综合项目管理计划。',
        descriptionEn: 'Develop Project Management Plan is the process of defining, preparing, and coordinating all subsidiary plans and integrating them into a comprehensive project management plan.',
        inputs: ['项目章程', '其他规划过程的输出', '事业环境因素', '组织过程资产'],
        tools: ['专家判断', '数据收集', '人际关系与团队技能', '会议'],
        outputs: ['项目管理计划'],
        performanceDomain: '范围绩效域'
    },
    {
        number: 4, focusArea: '规划', focusAreaEn: 'Planning',
        name: '收集需求', nameEn: 'Collect Requirements',
        icon: '\u{1f4dd}', color: '#D4AF37',
        description: '为实现项目目标而确定、记录和管理相关方需求的过程。',
        descriptionEn: 'Collect Requirements is the process of determining, documenting, and managing stakeholder needs and requirements to meet project objectives.',
        inputs: ['项目管理计划', '项目文件', '协议', '事业环境因素', '组织过程资产'],
        tools: ['专家判断', '数据收集', '数据分析', '决策', '数据表现', '人际关系与团队技能', '原型法'],
        outputs: ['需求文件', '需求跟踪矩阵', '变更请求'],
        performanceDomain: '范围绩效域'
    },
    {
        number: 5, focusArea: '规划', focusAreaEn: 'Planning',
        name: '定义范围', nameEn: 'Define Scope',
        icon: '\u{1f3af}', color: '#8B4513',
        description: '制定项目和产品的详细描述的过程。',
        descriptionEn: 'Define Scope is the process of developing a detailed description of the project and product.',
        inputs: ['项目章程', '项目管理计划', '项目文件', '事业环境因素', '组织过程资产'],
        tools: ['专家判断', '数据分析', '决策', '人际关系与团队技能', '产品分析'],
        outputs: ['范围管理计划', '项目范围说明书', '变更请求'],
        performanceDomain: '范围绩效域'
    },
    {
        number: 6, focusArea: '规划', focusAreaEn: 'Planning',
        name: '创建 WBS', nameEn: 'Create WBS',
        icon: '\u{1f4ca}', color: '#C71585',
        description: '将项目可交付成果和项目工作分解为更小、更易于管理的组件的过程。',
        descriptionEn: 'Create WBS is the process of subdividing project deliverables and project work into smaller, more manageable components.',
        inputs: ['项目管理计划', '项目文件', '事业环境因素', '组织过程资产'],
        tools: ['专家判断', '分解'],
        outputs: ['范围基准', '项目文件更新'],
        performanceDomain: '范围绩效域'
    },
    {
        number: 7, focusArea: '规划', focusAreaEn: 'Planning',
        name: '定义活动', nameEn: 'Define Activities',
        icon: '⚡', color: '#4B0082',
        description: '识别和记录为完成项目可交付成果而需采取的具体行动的过程。',
        descriptionEn: 'Define Activities is the process of identifying and documenting the specific actions to be performed to produce the project deliverables.',
        inputs: ['项目管理计划', '项目文件', '事业环境因素', '组织过程资产'],
        tools: ['专家判断', '分解', '滚动式规划', '会议'],
        outputs: ['活动清单', '活动属性', '里程碑清单', '变更请求'],
        performanceDomain: '进度绩效域'
    },
    {
        number: 8, focusArea: '规划', focusAreaEn: 'Planning',
        name: '排列活动顺序', nameEn: 'Sequence Activities',
        icon: '\u{1f517}', color: '#FF6347',
        description: '识别和记录项目活动之间逻辑关系的过程。',
        descriptionEn: 'Sequence Activities is the process of identifying and documenting relationships among the project activities.',
        inputs: ['项目管理计划', '项目文件', '事业环境因素', '组织过程资产'],
        tools: ['专家判断', '提前量和滞后量', '项目管理信息系统', '紧前关系绘图法'],
        outputs: ['项目进度网络图', '项目文件更新'],
        performanceDomain: '进度绩效域'
    },
    {
        number: 9, focusArea: '规划', focusAreaEn: 'Planning',
        name: '估算活动持续时间', nameEn: 'Estimate Activity Durations',
        icon: '⏱️', color: '#00CED1',
        description: '根据资源估算的结果，估算完成单项活动所需工作时段数的过程。',
        descriptionEn: 'Estimate Activity Durations is the process of estimating the number of work periods needed to complete individual activities with estimated resources.',
        inputs: ['项目管理计划', '项目文件', '事业环境因素', '组织过程资产'],
        tools: ['专家判断', '类比估算', '参数估算', '三点估算', '自下而上估算', '数据分析', '会议'],
        outputs: ['持续时间估算', '项目文件更新'],
        performanceDomain: '进度绩效域'
    },
    {
        number: 10, focusArea: '规划', focusAreaEn: 'Planning',
        name: '估算成本', nameEn: 'Estimate Costs',
        icon: '\u{1f4b0}', color: '#FFD700',
        description: '对完成项目工作所需资源成本进行近似估算的过程。',
        descriptionEn: 'Estimate Costs is the process of developing an approximation of the cost of the resources needed to complete project work.',
        inputs: ['项目管理计划', '项目文件', '事业环境因素', '组织过程资产'],
        tools: ['专家判断', '类比估算', '参数估算', '自下而上估算', '数据分析', '项目管理信息系统', '决策'],
        outputs: ['成本估算', '估算依据', '项目文件更新'],
        performanceDomain: '财务绩效域'
    },
    {
        number: 11, focusArea: '规划', focusAreaEn: 'Planning',
        name: '估算资源', nameEn: 'Estimate Activity Resources',
        icon: '\u{1f9d1}', color: '#32CD32',
        description: '估算执行项目活动所需的材料、人员、设备或用品的种类和数量的过程。',
        descriptionEn: 'Estimate Activity Resources is the process of estimating the type and quantities of material, people, equipment, or supplies required to perform project activities.',
        inputs: ['项目管理计划', '项目文件', '事业环境因素', '组织过程资产'],
        tools: ['专家判断', '自下而上估算', '类比估算', '参数估算', '数据分析', '项目管理信息系统', '会议'],
        outputs: ['资源需求', '估算依据', '资源分解结构', '项目文件更新'],
        performanceDomain: '资源绩效域'
    },
    {
        number: 12, focusArea: '规划', focusAreaEn: 'Planning',
        name: '制定进度计划', nameEn: 'Develop Schedule',
        icon: '\u{1f4c5}', color: '#9370DB',
        description: '分析活动顺序、持续时间、资源需求和进度制约因素，创建项目进度模型的过程。',
        descriptionEn: 'Develop Schedule is the process of analyzing activity sequences, durations, resource requirements, and schedule constraints to create the project schedule model.',
        inputs: ['项目管理计划', '项目文件', '协议', '事业环境因素', '组织过程资产'],
        tools: ['进度网络分析', '关键路径法', '资源优化', '数据分析', '提前量和滞后量', '进度压缩', '项目管理信息系统'],
        outputs: ['进度基准', '项目进度计划', '进度数据', '项目日历', '变更请求'],
        performanceDomain: '进度绩效域'
    },
    {
        number: 13, focusArea: '规划', focusAreaEn: 'Planning',
        name: '制定预算', nameEn: 'Determine Budget',
        icon: '\u{1f4b5}', color: '#20B2AA',
        description: '汇总所有单个活动或工作包的估算成本，建立一个经批准的成本基准的过程。',
        descriptionEn: 'Determine Budget is the process of aggregating the estimated costs of individual activities or work packages to establish an authorized cost baseline.',
        inputs: ['项目管理计划', '项目文件', '商业文件', '协议', '事业环境因素', '组织过程资产'],
        tools: ['专家判断', '资金限制平衡', '数据分析', '历史信息', '资金筹措'],
        outputs: ['成本基准', '项目资金需求', '项目文件更新'],
        performanceDomain: '财务绩效域'
    },
    {
        number: 14, focusArea: '规划', focusAreaEn: 'Planning',
        name: '规划质量管理', nameEn: 'Plan Quality Management',
        icon: '⭐', color: '#FF69B4',
        description: '识别项目及其可交付成果的质量要求和标准，并准备如何确保符合这些要求的过程。',
        descriptionEn: 'Plan Quality Management is the process of identifying quality requirements and/or standards for the project and its deliverables.',
        inputs: ['项目章程', '项目管理计划', '项目文件', '事业环境因素', '组织过程资产'],
        tools: ['专家判断', '数据收集', '数据分析', '决策', '数据表现', '测试和检查的规划'],
        outputs: ['质量管理计划', '质量测量指标', '项目文件更新'],
        performanceDomain: '范围绩效域'
    },
    {
        number: 15, focusArea: '规划', focusAreaEn: 'Planning',
        name: '规划资源管理', nameEn: 'Plan Resource Management',
        icon: '\u{1f4e6}', color: '#DAA520',
        description: '定义如何估算、获取、管理和利用项目所需的实物资源和团队资源的过程。',
        descriptionEn: 'Plan Resource Management is the process of defining how to estimate, acquire, manage, and utilize physical and team resources.',
        inputs: ['项目章程', '项目管理计划', '项目文件', '事业环境因素', '组织过程资产'],
        tools: ['专家判断', '数据表现', '组织理论', '会议'],
        outputs: ['资源管理计划', '团队章程', '项目文件更新'],
        performanceDomain: '资源绩效域'
    },
    {
        number: 16, focusArea: '规划', focusAreaEn: 'Planning',
        name: '规划沟通管理', nameEn: 'Plan Communications Management',
        icon: '\u{1f4e2}', color: '#4169E1',
        description: '基于每个相关方或相关方群体的信息需求和要求，制定适当的沟通策略的过程。',
        descriptionEn: 'Plan Communications Management is the process of developing an appropriate approach and plan for project communications based on stakeholder information needs.',
        inputs: ['项目章程', '项目管理计划', '项目文件', '事业环境因素', '组织过程资产'],
        tools: ['专家判断', '沟通需求分析', '沟通技术', '沟通模型', '沟通方法', '数据表现', '会议'],
        outputs: ['沟通管理计划', '项目文件更新'],
        performanceDomain: '相关方绩效域'
    },
    {
        number: 17, focusArea: '规划', focusAreaEn: 'Planning',
        name: '规划风险管理', nameEn: 'Plan Risk Management',
        icon: '\u{1f6e1}', color: '#DC143C',
        description: '定义如何进行风险管理活动的过程。',
        descriptionEn: 'Plan Risk Management is the process of defining how to conduct risk management activities for a project.',
        inputs: ['项目章程', '项目管理计划', '项目文件', '事业环境因素', '组织过程资产'],
        tools: ['专家判断', '数据分析', '会议'],
        outputs: ['风险管理计划'],
        performanceDomain: '风险绩效域'
    },
    {
        number: 18, focusArea: '规划', focusAreaEn: 'Planning',
        name: '识别风险', nameEn: 'Identify Risks',
        icon: '⚠️', color: '#FF4500',
        description: '识别单个项目风险以及风险来源的整体过程，并记录风险的特征。',
        descriptionEn: 'Identify Risks is the process of identifying individual project risks as well as source of overall risk, and documenting their characteristics.',
        inputs: ['项目管理计划', '项目文件', '协议', '采购文件', '事业环境因素', '组织过程资产'],
        tools: ['专家判断', '数据收集', '数据分析', '风险类别', '提示清单', '会议'],
        outputs: ['风险登记册', '风险报告', '项目文件更新'],
        performanceDomain: '风险绩效域'
    },
    {
        number: 19, focusArea: '规划', focusAreaEn: 'Planning',
        name: '实施定性风险分析', nameEn: 'Perform Qualitative Risk Analysis',
        icon: '\u{1f4ca}', color: '#8A2BE2',
        description: '评估和综合分析风险的概率和影响，对风险进行优先排序的过程。',
        descriptionEn: 'Perform Qualitative Risk Analysis is the process of prioritizing individual project risks for further analysis or action by assessing their probability and impact.',
        inputs: ['项目管理计划', '项目文件', '事业环境因素', '组织过程资产'],
        tools: ['专家判断', '数据收集', '数据分析', '人际关系与团队技能', '风险分类', '数据表现', '会议'],
        outputs: ['项目文件更新'],
        performanceDomain: '风险绩效域'
    },
    {
        number: 20, focusArea: '规划', focusAreaEn: 'Planning',
        name: '实施定量风险分析', nameEn: 'Perform Quantitative Risk Analysis',
        icon: '\u{1f4c8}', color: '#00FA9A',
        description: '就已识别的单个项目风险和其他不确定性来源对项目整体目标的综合影响进行定量分析的过程。',
        descriptionEn: 'Perform Quantitative Risk Analysis is the process of numerically analyzing the combined effect of identified risks on overall project objectives.',
        inputs: ['项目管理计划', '项目文件', '事业环境因素', '组织过程资产'],
        tools: ['专家判断', '数据收集', '人际关系与团队技能', '模拟', '敏感性分析', '决策树分析', '影响图'],
        outputs: ['风险报告', '项目文件更新'],
        performanceDomain: '风险绩效域'
    },
    {
        number: 21, focusArea: '规划', focusAreaEn: 'Planning',
        name: '规划风险应对', nameEn: 'Plan Risk Responses',
        icon: '\u{1f3af}', color: '#FFE4B5',
        description: '为处理整体项目风险暴露，以及管理单个项目风险而制定可选方案、选择应对策略并商定应对行动的过程。',
        descriptionEn: 'Plan Risk Responses is the process of developing options, selecting strategies, and agreeing on actions to address overall project risk exposure.',
        inputs: ['项目管理计划', '项目文件', '事业环境因素', '组织过程资产'],
        tools: ['专家判断', '数据收集', '人际关系与团队技能', '威胁应对策略', '机会应对策略', '应急应对策略', '数据分析', '决策'],
        outputs: ['变更请求', '项目文件更新'],
        performanceDomain: '风险绩效域'
    },
    {
        number: 22, focusArea: '规划', focusAreaEn: 'Planning',
        name: '规划相关方参与', nameEn: 'Plan Stakeholder Engagement',
        icon: '\u{1f91d}', color: '#1E90FF',
        description: '基于对相关方需求、利益、潜在影响及参与程度的分析，制定管理策略和行动计划的过程。',
        descriptionEn: 'Plan Stakeholder Engagement is the process of developing approaches to involve project stakeholders based on their needs and influence.',
        inputs: ['项目管理计划', '项目文件', '事业环境因素', '组织过程资产'],
        tools: ['专家判断', '数据收集', '数据分析', '决策', '数据表现', '会议'],
        outputs: ['相关方参与计划', '项目文件更新'],
        performanceDomain: '相关方绩效域'
    },
    // ==================== 执行 ====================
    {
        number: 23, focusArea: '执行', focusAreaEn: 'Executing',
        name: '指导与管理项目工作', nameEn: 'Direct and Manage Project Work',
        icon: '\u{1f3ac}', color: '#005A9D',
        description: '领导和执行项目管理计划中所确定的工作，并实施已批准的变更的过程。',
        descriptionEn: 'Direct and Manage Project Work is the process of leading and performing the work defined in the project management plan and implementing approved changes.',
        inputs: ['项目管理计划', '项目文件', '批准的变更请求', '事业环境因素', '组织过程资产'],
        tools: ['专家判断', '项目管理信息系统', '会议'],
        outputs: ['可交付成果', '工作绩效数据', '问题日志', '变更请求', '项目文件更新'],
        performanceDomain: '资源绩效域'
    },
    {
        number: 24, focusArea: '执行', focusAreaEn: 'Executing',
        name: '获取资源', nameEn: 'Acquire Resources',
        icon: '\u{1f9d1}', color: '#2E8B57',
        description: '获取项目所需的团队成员、设施、设备、材料、用品和其他资源的过程。',
        descriptionEn: 'Acquire Resources is the process of obtaining team members, facilities, equipment, materials, supplies, and other resources necessary to complete project work.',
        inputs: ['项目管理计划', '项目文件', '事业环境因素', '组织过程资产'],
        tools: ['专家判断', '人际关系与团队技能', '预分派', '虚拟团队', '分析'],
        outputs: ['实物资源分配单', '项目团队派工单', '资源日历', '变更请求', '项目文件更新'],
        performanceDomain: '资源绩效域'
    },
    {
        number: 25, focusArea: '执行', focusAreaEn: 'Executing',
        name: '建设团队', nameEn: 'Develop Team',
        icon: '\u{1f465}', color: '#D4AF37',
        description: '提高团队成员的能力、互动和整体环境，以增强项目绩效的过程。',
        descriptionEn: 'Develop Team is the process of improving competencies, team member interaction, and the overall team environment to enhance project performance.',
        inputs: ['项目管理计划', '项目文件', '事业环境因素', '组织过程资产'],
        tools: ['人际关系与团队技能', '培训', '团队建设活动', '集中办公', '虚拟团队', '认可与奖励'],
        outputs: ['团队绩效评价', '项目文件更新'],
        performanceDomain: '资源绩效域'
    },
    {
        number: 26, focusArea: '执行', focusAreaEn: 'Executing',
        name: '管理团队', nameEn: 'Manage Team',
        icon: '\u{1f91d}', color: '#8B4513',
        description: '跟踪团队成员绩效、提供反馈、解决问题并管理变更以优化项目绩效的过程。',
        descriptionEn: 'Manage Team is the process of tracking team member performance, providing feedback, resolving issues, and managing changes to optimize project performance.',
        inputs: ['项目管理计划', '项目文件', '工作绩效报告', '团队绩效评价', '事业环境因素', '组织过程资产'],
        tools: ['人际关系与团队技能', '项目管理信息系统'],
        outputs: ['变更请求', '项目管理计划更新', '项目文件更新'],
        performanceDomain: '资源绩效域'
    },
    {
        number: 27, focusArea: '执行', focusAreaEn: 'Executing',
        name: '管理沟通', nameEn: 'Manage Communications',
        icon: '\u{1f4e1}', color: '#C71585',
        description: '确保项目信息的生成、收集、分发、存储、检索和最终处置的过程。',
        descriptionEn: 'Manage Communications is the process of ensuring timely and appropriate collection, distribution, and disposition of project information.',
        inputs: ['项目管理计划', '项目文件', '工作绩效报告', '事业环境因素', '组织过程资产'],
        tools: ['专家判断', '沟通技能', '反馈', '人际关系与团队技能', '项目管理信息系统'],
        outputs: ['项目沟通', '项目管理计划更新', '项目文件更新'],
        performanceDomain: '相关方绩效域'
    },
    {
        number: 28, focusArea: '执行', focusAreaEn: 'Executing',
        name: '实施风险应对', nameEn: 'Implement Risk Responses',
        icon: '\u{1f3b2}', color: '#4B0082',
        description: '执行商定的风险应对计划的过程。',
        descriptionEn: 'Implement Risk Responses is the process of implementing agreed-upon risk response plans.',
        inputs: ['项目管理计划', '项目文件', '事业环境因素', '组织过程资产'],
        tools: ['专家判断', '人际关系与团队技能', '项目管理信息系统'],
        outputs: ['变更请求', '项目文件更新'],
        performanceDomain: '风险绩效域'
    },
    {
        number: 29, focusArea: '执行', focusAreaEn: 'Executing',
        name: '实施采购', nameEn: 'Conduct Procurements',
        icon: '\u{1f6d2}', color: '#FF6347',
        description: '获取卖方响应、评估建议、选择卖方并授予合同的过程。',
        descriptionEn: 'Conduct Procurements is the process of obtaining seller responses, selecting a seller, and awarding a contract.',
        inputs: ['项目管理计划', '项目文件', '采购文件', '卖方建议书', '事业环境因素', '组织过程资产'],
        tools: ['专家判断', '广告', '投标人会议', '建议书评价', '数据分析', '人际关系与团队技能'],
        outputs: ['选定的卖方', '协议', '变更请求', '项目文件更新'],
        performanceDomain: '财务绩效域'
    },
    {
        number: 30, focusArea: '执行', focusAreaEn: 'Executing',
        name: '管理相关方参与', nameEn: 'Manage Stakeholder Engagement',
        icon: '\u{1f5e3}', color: '#00CED1',
        description: '与相关方沟通和协作，以满足其需求与期望，解决问题，并促进相关方合理参与的过程。',
        descriptionEn: 'Manage Stakeholder Engagement is the process of communicating and working with stakeholders to meet their needs, address issues, and foster engagement.',
        inputs: ['项目管理计划', '项目文件', '事业环境因素', '组织过程资产'],
        tools: ['专家判断', '沟通技能', '反馈', '人际关系与团队技能', '基本规则', '会议'],
        outputs: ['变更请求', '项目管理计划更新', '项目文件更新'],
        performanceDomain: '相关方绩效域'
    },
    // ==================== 监控 ====================
    {
        number: 31, focusArea: '监控', focusAreaEn: 'Monitoring & Controlling',
        name: '监控项目工作', nameEn: 'Monitor and Control Project Work',
        icon: '\u{1f4ca}', color: '#FFD700',
        description: '跟踪、审查和报告整体项目进展，以实现项目管理计划中确定的绩效目标的过程。',
        descriptionEn: 'Monitor and Control Project Work is the process of tracking, reviewing, and reporting the overall progress to meet the performance objectives.',
        inputs: ['项目管理计划', '项目文件', '工作绩效信息', '事业环境因素', '组织过程资产'],
        tools: ['专家判断', '数据分析', '决策', '数据表现', '会议'],
        outputs: ['工作绩效报告', '变更请求', '项目管理计划更新', '项目文件更新'],
        performanceDomain: '治理绩效域'
    },
    {
        number: 32, focusArea: '监控', focusAreaEn: 'Monitoring & Controlling',
        name: '实施整体变更控制', nameEn: 'Perform Integrated Change Control',
        icon: '\u{1f504}', color: '#32CD32',
        description: '审查所有变更请求、审批变更、管理对可交付成果、项目文件、项目管理计划和项目沟通的变更的过程。',
        descriptionEn: 'Perform Integrated Change Control is the process of reviewing all change requests; approving changes and managing changes to deliverables.',
        inputs: ['项目管理计划', '项目文件', '工作绩效报告', '变更请求', '事业环境因素', '组织过程资产'],
        tools: ['专家判断', '变更控制工具', '数据分析', '决策', '会议'],
        outputs: ['批准的变更请求', '变更日志', '项目管理计划更新', '项目文件更新'],
        performanceDomain: '治理绩效域'
    },
    {
        number: 33, focusArea: '监控', focusAreaEn: 'Monitoring & Controlling',
        name: '确认范围', nameEn: 'Validate Scope',
        icon: '✅', color: '#9370DB',
        description: '正式验收项目已完成的可交付成果的过程。',
        descriptionEn: 'Validate Scope is the process of formalizing acceptance of the completed project deliverables.',
        inputs: ['项目管理计划', '项目文件', '核实的可交付成果', '工作绩效数据'],
        tools: ['专家判断', '检查', '决策'],
        outputs: ['验收的可交付成果', '变更请求', '工作绩效信息', '项目文件更新'],
        performanceDomain: '范围绩效域'
    },
    {
        number: 34, focusArea: '监控', focusAreaEn: 'Monitoring & Controlling',
        name: '控制范围', nameEn: 'Control Scope',
        icon: '\u{1f4cf}', color: '#20B2AA',
        description: '监督项目和产品的范围状态，管理范围基准变更的过程。',
        descriptionEn: 'Control Scope is the process of monitoring the status of the project and product scope and managing changes to the scope baseline.',
        inputs: ['项目管理计划', '项目文件', '工作绩效数据', '事业环境因素', '组织过程资产'],
        tools: ['专家判断', '数据分析'],
        outputs: ['工作绩效信息', '变更请求', '项目管理计划更新', '项目文件更新'],
        performanceDomain: '范围绩效域'
    },
    {
        number: 35, focusArea: '监控', focusAreaEn: 'Monitoring & Controlling',
        name: '控制进度', nameEn: 'Control Schedule',
        icon: '⏰', color: '#FF69B4',
        description: '监督项目状态，以更新项目进度和管理进度基准变更的过程。',
        descriptionEn: 'Control Schedule is the process of monitoring the status of the project to update the project schedule and manage changes to the schedule baseline.',
        inputs: ['项目管理计划', '项目文件', '工作绩效数据', '事业环境因素', '组织过程资产'],
        tools: ['专家判断', '数据分析', '关键路径法', '项目管理信息系统'],
        outputs: ['工作绩效信息', '进度预测', '变更请求', '项目管理计划更新', '项目文件更新'],
        performanceDomain: '进度绩效域'
    },
    {
        number: 36, focusArea: '监控', focusAreaEn: 'Monitoring & Controlling',
        name: '控制成本', nameEn: 'Control Costs',
        icon: '\u{1f4b2}', color: '#DAA520',
        description: '监督项目状态，以更新项目成本和管理成本基准变更的过程。',
        descriptionEn: 'Control Costs is the process of monitoring the status of the project to update the project costs and managing changes to the cost baseline.',
        inputs: ['项目管理计划', '项目文件', '工作绩效数据', '事业环境因素', '组织过程资产'],
        tools: ['专家判断', '数据分析', '完工尚需绩效指数', '项目管理信息系统'],
        outputs: ['工作绩效信息', '成本预测', '变更请求', '项目管理计划更新', '项目文件更新'],
        performanceDomain: '财务绩效域'
    },
    {
        number: 37, focusArea: '监控', focusAreaEn: 'Monitoring & Controlling',
        name: '控制质量', nameEn: 'Control Quality',
        icon: '\u{1f50d}', color: '#4169E1',
        description: '评估绩效，确保项目输出完整、正确，并满足客户期望，监督和记录质量管理活动执行结果的过程。',
        descriptionEn: 'Control Quality is the process of monitoring and recording results of executing quality activities to assess performance.',
        inputs: ['项目管理计划', '项目文件', '工作绩效数据', '批准的变更请求', '可交付成果', '事业环境因素', '组织过程资产'],
        tools: ['检查', '测试', '数据收集', '数据分析', '会议'],
        outputs: ['质量控制测量结果', '核实的可交付成果', '工作绩效信息', '变更请求', '项目文件更新'],
        performanceDomain: '范围绩效域'
    },
    {
        number: 38, focusArea: '监控', focusAreaEn: 'Monitoring & Controlling',
        name: '控制沟通', nameEn: 'Monitor Communications',
        icon: '\u{1f4f1}', color: '#DC143C',
        description: '确保向项目相关方分发、存储、检索和最终处置项目信息的过程。',
        descriptionEn: 'Monitor Communications is the process of ensuring the information needs of the project and its stakeholders are met.',
        inputs: ['项目管理计划', '项目文件', '工作绩效数据', '事业环境因素', '组织过程资产'],
        tools: ['专家判断', '项目管理信息系统', '数据表现', '人际关系与团队技能', '会议'],
        outputs: ['工作绩效信息', '变更请求', '项目管理计划更新', '项目文件更新'],
        performanceDomain: '相关方绩效域'
    },
    {
        number: 39, focusArea: '监控', focusAreaEn: 'Monitoring & Controlling',
        name: '监督相关方参与', nameEn: 'Monitor Stakeholder Engagement',
        icon: '\u{1f441}', color: '#FF4500',
        description: '监督项目相关方关系，并通过调整参与策略和计划来调动相关方参与的过程。',
        descriptionEn: 'Monitor Stakeholder Engagement is the process of monitoring project stakeholder relationships and tailoring strategies for engaging stakeholders.',
        inputs: ['项目管理计划', '项目文件', '工作绩效数据', '事业环境因素', '组织过程资产'],
        tools: ['专家判断', '数据分析', '决策', '数据表现', '人际关系与团队技能', '会议'],
        outputs: ['工作绩效信息', '变更请求', '项目管理计划更新', '项目文件更新'],
        performanceDomain: '相关方绩效域'
    },
    // ==================== 收尾 ====================
    {
        number: 40, focusArea: '收尾', focusAreaEn: 'Closing',
        name: '结束项目或阶段', nameEn: 'Close Project or Phase',
        icon: '\u{1f3c1}', color: '#00FA9A',
        description: '完结所有项目管理过程组的所有活动，以正式结束项目或阶段的过程。',
        descriptionEn: 'Close Project or Phase is the process of finalizing all activities for the project, phase, or contract.',
        inputs: ['项目章程', '项目管理计划', '项目文件', '验收的可交付成果', '商业文件', '协议', '采购文件', '事业环境因素', '组织过程资产'],
        tools: ['专家判断', '数据分析', '会议'],
        outputs: ['最终产品、服务或成果移交', '最终报告', '项目文件更新', '组织过程资产更新'],
        performanceDomain: '治理绩效域'
    }
];

// 焦点领域配置
export const focusAreaConfig = {
    '启动': { icon: '\u{1f680}', count: 2, color: '#005A9D', en: 'Initiating' },
    '规划': { icon: '\u{1f4cb}', count: 20, color: '#2E8B57', en: 'Planning' },
    '执行': { icon: '⚡', count: 8, color: '#0077C8', en: 'Executing' },
    '监控': { icon: '\u{1f4ca}', count: 9, color: '#4B0082', en: 'M&C' },
    '收尾': { icon: '\u{1f3c1}', count: 1, color: '#D4AF37', en: 'Closing' }
};
