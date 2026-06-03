/**
 * PMBOK 第8版 — 40个项目管理流程（完整ITTO）
 * 数据来源：ITTO.txt + PMBOK Guide 8th Edition
 */
export const processes = [
  {
    number: 1, performanceDomain: '治理绩效域', performanceDomainEn: 'Governance',
    name: '启动项目或阶段', nameEn: 'Initiate Project or Phase',
    icon: '🚀', color: '#005A9D',
    description: '正式授权项目或阶段启动的过程。确立项目的存在性，定义项目目标，并授予项目经理调动资源的权力。',
    descriptionEn: 'The process of developing a document that formally authorizes the existence of a project and provides the project manager with authority to apply organizational resources.',
    inputs: ['商业论证', '效益管理计划', '协议', '事业环境因素', '组织过程资产'],
    tools: ['专家判断', '数据收集', '人际关系与团队技能', '项目画布', '职责分配矩阵'],
    outputs: ['项目章程', '假设日志']
  },
  {
    number: 2, performanceDomain: '治理绩效域', performanceDomainEn: 'Governance',
    name: '整合与对齐项目计划', nameEn: 'Integrate and Align Project Plans',
    icon: '📋', color: '#0077C8',
    description: '定义、准备和协调所有子管理计划，并将其整合为综合项目管理计划，确保与组织战略对齐。',
    descriptionEn: 'The process of defining, preparing, and coordinating all subsidiary plans and integrating them into a comprehensive project management plan aligned with organizational strategy.',
    inputs: ['项目章程', '其他规划过程的输出'],
    tools: ['专家判断', '数据收集', '人际关系与团队技能', '会议', '项目画布'],
    outputs: ['项目管理计划']
  },
  {
    number: 3, performanceDomain: '治理绩效域', performanceDomainEn: 'Governance',
    name: '规划采购策略', nameEn: 'Plan Sourcing Strategy',
    icon: '🛒', color: '#2E8B57',
    description: '制定采购策略，包括自制或外购决策、采购方法和合同类型选择的过程。',
    descriptionEn: 'The process of developing a sourcing strategy including make-or-buy decisions, procurement methods, and contract type selection.',
    inputs: ['项目章程', '项目管理计划组件（范围、质量、进度、财务、资源管理计划及范围基准）', '项目文件', '事业环境因素', '组织过程资产'],
    tools: ['专家判断', '市场调研', '自制或外购分析', '源头选择分析', '文件分析'],
    outputs: ['采购策略计划（含自制或外购决策）']
  },
  {
    number: 4, performanceDomain: '治理绩效域', performanceDomainEn: 'Governance',
    name: '管理项目执行', nameEn: 'Manage Project Execution',
    icon: '🎬', color: '#D4AF37',
    description: '领导和执行项目管理计划中所确定的工作，并实施已批准的变更的过程。',
    descriptionEn: 'The process of leading and performing the work defined in the project management plan and implementing approved changes.',
    inputs: ['项目管理计划', '批准的变更请求', '工作绩效报告', '经验教训登记册', '里程碑清单', '项目进度计划', '需求跟踪矩阵', '风险登记册/报告', '事业环境因素', '组织过程资产'],
    tools: ['专家判断', '项目管理信息系统（PMIS）', '会议（如每日协调会）'],
    outputs: ['可交付成果', '工作绩效数据', '问题日志', '变更请求']
  },
  {
    number: 5, performanceDomain: '治理绩效域', performanceDomainEn: 'Governance',
    name: '管理质量保证', nameEn: 'Manage Quality Assurance',
    icon: '⭐', color: '#8B4513',
    description: '确保项目过程符合质量政策和标准，通过审计和过程改进持续提升质量管理能力。',
    descriptionEn: 'The process of auditing quality requirements and results from quality control measurements to ensure appropriate quality standards and operational definitions are used.',
    inputs: ['项目管理计划（所有组件）', '项目文件', '组织过程资产'],
    tools: ['质量审计 (Audits)', '核对表', '数据表现（鱼骨图、流程图）', '决策制定', '问题解决', '过程改进'],
    outputs: ['质量报告', '变更请求', '项目管理计划/文件更新']
  },
  {
    number: 6, performanceDomain: '治理绩效域', performanceDomainEn: 'Governance',
    name: '管理项目知识', nameEn: 'Manage Project Knowledge',
    icon: '📚', color: '#C71585',
    description: '使用现有知识并创造新知识，以实现项目目标并促进组织学习的过程。',
    descriptionEn: 'The process of using existing knowledge and creating new knowledge to achieve the project objectives and contribute to organizational learning.',
    inputs: ['项目管理计划', '可交付成果', '项目团队派工单', '资源分解结构（RBS）', '相关方登记册', '事业环境因素', '组织过程资产'],
    tools: ['专家判断', '知识管理（AAR、故事讲述）', '信息管理', '人际关系与团队技能'],
    outputs: ['经验教训登记册']
  },
  {
    number: 7, performanceDomain: '治理绩效域', performanceDomainEn: 'Governance',
    name: '监控项目绩效', nameEn: 'Monitor and Control Project Performance',
    icon: '📊', color: '#4B0082',
    description: '跟踪、审查和报告整体项目进展，以实现项目管理计划中确定的绩效目标的过程。',
    descriptionEn: 'The process of tracking, reviewing, and reporting overall progress to meet the performance objectives defined in the project management plan.',
    inputs: ['项目管理计划', '工作绩效信息', '各类预测（成本预测、进度预测）', '问题日志', '假设日志', '估算依据', '质量报告', '风险报告', '协议'],
    tools: ['专家判断', '数据分析', '项目仪表盘', '信息辐射体', '会议'],
    outputs: ['工作绩效报告', '变更请求', '项目文件更新']
  },
  {
    number: 8, performanceDomain: '治理绩效域', performanceDomainEn: 'Governance',
    name: '评估与实施变更', nameEn: 'Assess and Implement Changes',
    icon: '🔄', color: '#FF6347',
    description: '审查所有变更请求、评估影响、审批变更，并管理对可交付成果和项目文件的变更的过程。',
    descriptionEn: 'The process of reviewing all change requests, assessing impact, approving changes, and managing changes to deliverables and project documents.',
    inputs: ['变更请求', '项目管理计划', '估算依据', '变更日志', '需求跟踪矩阵', '风险报告', '工作绩效报告', '事业环境因素', '组织过程资产'],
    tools: ['专家判断', '变更控制工具', '数据分析', '决策制定', '整体变更控制', '待办列表管理（敏捷适用）'],
    outputs: ['批准的变更请求', '变更日志更新']
  },
  {
    number: 9, performanceDomain: '治理绩效域', performanceDomainEn: 'Governance',
    name: '收尾项目或阶段', nameEn: 'Close Project or Phase',
    icon: '🏁', color: '#00FA9A',
    description: '完结所有项目管理过程组的所有活动，以正式结束项目或阶段的过程。',
    descriptionEn: 'The process of finalizing all activities for the project, phase, or contract.',
    inputs: ['项目章程', '项目管理计划（所有组件）', '验收的可交付成果', '最终报告', '商业文件', '协议', '采购文档', '变更日志', '问题日志', '经验教训登记册', '质量控制测量结果', '风险报告'],
    tools: ['专家判断', '数据分析', '会议'],
    outputs: ['最终产品/服务或成果的移交 (Final Product/Service Transition)', '最终报告', '组织过程资产更新']
  },
  {
    number: 10, performanceDomain: '范围绩效域', performanceDomainEn: 'Scope',
    name: '规划范围管理', nameEn: 'Plan Scope Management',
    icon: '🎯', color: '#2E8B57',
    description: '为范围管理和需求管理制定计划，定义如何定义、确认和控制项目范围的过程。',
    descriptionEn: 'The process of creating a scope management plan that documents how the project scope will be defined, validated, and controlled.',
    inputs: ['项目章程', '项目管理计划', '需求文件', '风险登记册', '相关方登记册', '事业环境因素', '组织过程资产'],
    tools: ['专家判断', '数据收集', '数据分析', '测试和检查规划'],
    outputs: ['范围管理计划', '需求管理计划']
  },
  {
    number: 11, performanceDomain: '范围绩效域', performanceDomainEn: 'Scope',
    name: '启发与分析需求', nameEn: 'Elicit and Analyze Requirements',
    icon: '📝', color: '#D4AF37',
    description: '为实现项目目标而确定、记录和分析相关方需求的过程。使用设计思维等方法深入理解需求。',
    descriptionEn: 'The process of determining, documenting, and analyzing stakeholder needs and requirements to meet project objectives.',
    inputs: ['项目章程', '范围与需求管理计划', '商业论证', '协议', '假设日志', '经验教训登记册', '相关方登记册'],
    tools: ['专家判断', '数据收集', '人际技能（名义小组技术 NGT）', '设计思维', '优先级排序/分级', '会议'],
    outputs: ['需求文件', '需求跟踪矩阵 (Requirements Traceability Matrix)']
  },
  {
    number: 12, performanceDomain: '范围绩效域', performanceDomainEn: 'Scope',
    name: '定义范围', nameEn: 'Define Scope',
    icon: '🔍', color: '#8B4513',
    description: '制定项目和产品的详细描述，明确项目边界和可交付成果的过程。',
    descriptionEn: 'The process of developing a detailed description of the project and product, establishing project boundaries.',
    inputs: ['项目章程', '范围管理计划', '需求文件', '假设日志', '事业环境因素', '组织过程资产'],
    tools: ['专家判断', '产品分析', '数据分析', '分解技术', '引导'],
    outputs: ['项目范围说明书', '项目文件更新']
  },
  {
    number: 13, performanceDomain: '范围绩效域', performanceDomainEn: 'Scope',
    name: '制定范围结构', nameEn: 'Develop Scope Structure',
    icon: '📊', color: '#C71585',
    description: '将项目可交付成果和项目工作分解为更小、更易于管理的组件，创建WBS、用户故事和产品待办列表的过程。',
    descriptionEn: 'The process of subdividing project deliverables and work into smaller, more manageable components including WBS, user stories, and product backlog.',
    inputs: ['项目管理计划', '项目范围说明书', '需求文件', '批准的变更'],
    tools: ['专家判断', '头脑风暴', '分解技术'],
    outputs: ['范围基准', '用户故事 (User Stories)、产品待办列表 (Product Backlog)']
  },
  {
    number: 14, performanceDomain: '范围绩效域', performanceDomainEn: 'Scope',
    name: '监督与控制范围', nameEn: 'Monitor and Control Scope',
    icon: '📏', color: '#0077C8',
    description: '监督项目和产品的范围状态，管理范围基准变更，并通过质量检查确保可交付成果符合标准的过程。',
    descriptionEn: 'The process of monitoring the status of project and product scope, managing changes to the scope baseline, and verifying deliverables through quality inspections.',
    inputs: ['范围/质量管理计划', '需求文件', '绩效测量基准', '质量指标', '工作绩效数据', '批准的变更请求', '可交付成果'],
    tools: ['数据分析', '绩效审查', '审计与检查', '测试/产品评估', '流程自动化'],
    outputs: ['工作绩效信息', '确认的可交付成果', '质量控制测量结果', '质量报告', '变更请求']
  },
  {
    number: 15, performanceDomain: '范围绩效域', performanceDomainEn: 'Scope',
    name: '确认范围', nameEn: 'Validate Scope',
    icon: '✅', color: '#9370DB',
    description: '正式验收项目已完成的可交付成果，确保其满足需求和验收标准的过程。',
    descriptionEn: 'The process of formalizing acceptance of the completed project deliverables.',
    inputs: ['范围基准', '需求文件', '确认的可交付成果', '质量控制测量结果', '质量报告', '工作绩效数据'],
    tools: ['检查', '数据分析', '决策制定', '客户会谈与测试', '审查会议'],
    outputs: ['验收的可交付成果', '变更请求', '工作绩效信息']
  },
  {
    number: 16, performanceDomain: '进度绩效域', performanceDomainEn: 'Schedule',
    name: '规划进度管理', nameEn: 'Plan Schedule Management',
    icon: '📅', color: '#0077C8',
    description: '制定进度管理策略和方法，定义如何规划、开发和监控项目进度的过程。',
    descriptionEn: 'The process of establishing the policies, procedures, and documentation for planning, developing, and controlling the project schedule.',
    inputs: ['项目章程', '项目管理计划', '开发方法', '事业环境因素', '组织过程资产'],
    tools: ['专家判断', '数据分析', '会议'],
    outputs: ['进度管理计划']
  },
  {
    number: 17, performanceDomain: '进度绩效域', performanceDomainEn: 'Schedule',
    name: '开发进度模型', nameEn: 'Develop Schedule',
    icon: '📅', color: '#9370DB',
    description: '整合活动定义、排序、估算和进度制定为一体，创建包含关键路径的项目进度模型的过程。PMBOK第8版将第6版中活动定义、排序、估算合并为此单一流程。',
    descriptionEn: 'The streamlined process that integrates activity definition, sequencing, estimation, and schedule development into one cohesive schedule model, absorbing what were previously separate processes in PMBOK 6th Edition.',
    inputs: ['项目章程', '进度管理计划', '项目范围说明书', '开发方法', '协议', '事业环境因素', '组织过程资产'],
    tools: ['分解技术', '滚动波浪规划', '紧前关系绘图法 PDM', '提前/滞后量', '类比', '三点', '自下而上', '储备分析', '关键路径法 CPM', '参数', '敏捷估算', '项目管理信息系统（PMIS）', '敏捷发布规划', '投票'],
    outputs: ['进度基准', '项目进度计划', '项目日历', '项目文件更新']
  },
  {
    number: 18, performanceDomain: '进度绩效域', performanceDomainEn: 'Schedule',
    name: '监督与控制进度', nameEn: 'Monitor and Control Schedule',
    icon: '⏰', color: '#FF69B4',
    description: '监督项目状态，更新项目进度和管理进度基准变更，使用敏捷工具如燃尽图/燃起图的过程。',
    descriptionEn: 'The process of monitoring the status of the project to update the schedule and managing changes to the schedule baseline using both traditional and agile tools.',
    inputs: ['进度管理计划', '进度基准', '绩效测量基准', '项目进度计划', '工作绩效数据', '产品待办列表', '项目日历', '资源日历', '风险登记册'],
    tools: ['数据分析', '关键路径法', '进度压缩', '资源优化', '团队速度（Velocity）', '每日协调会', '迭代评审会', '待办列表精炼'],
    outputs: ['工作绩效信息', '进度预测', '变更请求', '项目管理计划/文件更新']
  },
  {
    number: 19, performanceDomain: '财务绩效域', performanceDomainEn: 'Finance',
    name: '规划财务管理', nameEn: 'Plan Financial Management',
    icon: '💰', color: '#D4AF37',
    description: '制定财务管理计划，包括资金筹措策略和财务控制方法的过程。',
    descriptionEn: 'The process of developing a financial management plan including funding strategy and financial control methods.',
    inputs: ['项目章程', '项目管理计划', '事业环境因素', '组织过程资产'],
    tools: ['专家判断', '数据分析', '会议'],
    outputs: ['财务管理计划', '资金筹措策略']
  },
  {
    number: 20, performanceDomain: '财务绩效域', performanceDomainEn: 'Finance',
    name: '估算成本', nameEn: 'Estimate Costs',
    icon: '💲', color: '#FFD700',
    description: '对完成项目工作所需资源成本进行近似估算的过程。',
    descriptionEn: 'The process of developing an approximation of the cost of the resources needed to complete project work.',
    inputs: ['质量管理计划', '范围基准', '项目进度计划', '*【穿透输入：活动清单】**', '资源需求', '自制或外购决策', '经验教训登记册', '风险登记册', '事业环境因素', '组织过程资产'],
    tools: ['专家判断', '*估算技术（类比估算、参数估算、自下而上估算、三点估算）**', '数据分析', '项目管理信息系统（PMIS）', '决策制定'],
    outputs: ['成本估算', '估算依据', '项目文件更新']
  },
  {
    number: 21, performanceDomain: '财务绩效域', performanceDomainEn: 'Finance',
    name: '制定预算', nameEn: 'Develop Budget',
    icon: '💵', color: '#20B2AA',
    description: '汇总所有单个活动或工作包的估算成本，建立一个经批准的成本基准的过程。',
    descriptionEn: 'The process of aggregating the estimated costs of individual activities or work packages to establish an authorized cost baseline.',
    inputs: ['财务管理计划', '范围基准', '项目进度计划', '成本估算', '估算依据', '风险登记册', '商业论证', '效益管理计划', '协议', '事业环境因素', '组织过程资产'],
    tools: ['专家判断', '成本汇总', '数据分析', '历史信息审查', '资金限制平衡', '融资'],
    outputs: ['成本基准', '项目资金需求', '项目文件更新']
  },
  {
    number: 22, performanceDomain: '财务绩效域', performanceDomainEn: 'Finance',
    name: '监督与控制财务', nameEn: 'Monitor and Control Finances',
    icon: '📈', color: '#DAA520',
    description: '监督项目财务状况，使用挣值分析（EVM）和TCPI等工具确保项目在预算内完成的过程。',
    descriptionEn: 'The process of monitoring the status of the project to update costs and managing changes to the cost baseline using EVM, TCPI, and other financial analysis tools.',
    inputs: ['财务管理计划', '成本基准', '绩效测量基准', '项目资金需求', '工作绩效数据', '经验教训登记册'],
    tools: ['专家判断', '数据分析', '完工尚需绩效指数（TCPI）', '项目管理信息系统（PMIS）'],
    outputs: ['工作绩效信息', '收益与成本预测', '变更请求', '资金提案 (Funding Proposals)']
  },
  {
    number: 23, performanceDomain: '相关方绩效域', performanceDomainEn: 'Stakeholders',
    name: '识别相关方', nameEn: 'Identify Stakeholders',
    icon: '👥', color: '#C71585',
    description: '定期识别项目相关方，分析和记录他们的利益、参与度、相互依赖性和影响力的过程。',
    descriptionEn: 'The process of identifying project stakeholders regularly and analyzing relevant information regarding their interests, involvement, interdependencies, and influence.',
    inputs: ['项目章程', '商业论证', '效益管理计划', '协议', '变更日志', '问题日志', '需求文件', '沟通/相关方参与计划', '事业环境因素', '组织过程资产'],
    tools: ['专家判断', '数据收集', '数据分析', '数据表现', '会议'],
    outputs: ['相关方登记册', '项目管理计划/文件更新']
  },
  {
    number: 24, performanceDomain: '相关方绩效域', performanceDomainEn: 'Stakeholders',
    name: '规划相关方参与', nameEn: 'Plan Stakeholder Engagement',
    icon: '🤝', color: '#1E90FF',
    description: '基于对相关方需求、利益和潜在影响的分析，制定管理策略和行动计划的过程。',
    descriptionEn: 'The process of developing approaches to involve project stakeholders based on their needs, expectations, and potential impact.',
    inputs: ['项目章程', '资源/沟通/风险管理计划', '相关方登记册', '假设日志', '变更日志', '问题日志', '项目进度计划', '风险报告', '事业环境因素', '组织过程资产'],
    tools: ['专家判断', '数据收集', '数据分析', '决策制定', '数据表现', '会议'],
    outputs: ['相关方参与计划']
  },
  {
    number: 25, performanceDomain: '相关方绩效域', performanceDomainEn: 'Stakeholders',
    name: '规划沟通管理', nameEn: 'Plan Communications Management',
    icon: '📢', color: '#4169E1',
    description: '基于每个相关方或相关方群体的信息需求和要求，制定适当的沟通策略和计划的过程。',
    descriptionEn: 'The process of developing an appropriate approach and plan for project communications based on stakeholder information needs and requirements.',
    inputs: ['项目章程', '资源管理计划', '相关方参与计划', '需求文件', '相关方登记册', '事业环境因素', '组织过程资产'],
    tools: ['专家判断', '沟通需求分析', '沟通技术', '沟通模型', '沟通方法', '人际与团队技能（沟通风格评估、政治与文化意识）', '数据表现', '会议'],
    outputs: ['沟通管理计划', '项目文件更新']
  },
  {
    number: 26, performanceDomain: '相关方绩效域', performanceDomainEn: 'Stakeholders',
    name: '管理相关方参与', nameEn: 'Manage Stakeholder Engagement',
    icon: '🗣️', color: '#00CED1',
    description: '与相关方沟通和协作，以满足其需求与期望，解决问题，并促进相关方合理参与的过程。',
    descriptionEn: 'The process of communicating and working with stakeholders to meet their needs and expectations, address issues, and foster appropriate engagement.',
    inputs: ['相关方参与计划', '沟通管理计划', '变更管理计划', '风险管理计划', '变更日志', '问题日志', '经验教训登记册', '相关方登记册', '项目进度计划', '风险登记册', '状态报告', '事业环境因素', '组织过程资产'],
    tools: ['专家判断', '沟通技能（反馈）', '人际与团队技能（冲突管理、文化意识、谈判、观察/对话、政治意识）', '基本规则 (Ground Rules)', '会议'],
    outputs: ['变更请求', '项目管理计划/文件更新']
  },
  {
    number: 27, performanceDomain: '相关方绩效域', performanceDomainEn: 'Stakeholders',
    name: '管理沟通', nameEn: 'Manage Communications',
    icon: '📡', color: '#FF6347',
    description: '确保项目信息的及时生成、收集、分发、存储、检索和最终处置的过程。',
    descriptionEn: 'The process of ensuring timely and appropriate collection, creation, distribution, storage, retrieval, and disposition of project information.',
    inputs: ['沟通管理计划', '资源管理计划', '相关方参与计划', '工作绩效报告', '变更日志', '问题日志', '经验教训登记册', '质量报告', '风险报告', '相关方登记册', '事业环境因素', '组织过程资产'],
    tools: ['沟通技术', '沟通方法', '沟通技能（沟通能力、反馈、非语言沟通、演示）', '项目管理信息系统（PMIS）', '项目报告', '人际与团队技能（积极倾听、冲突管理、会议管理、人际交往、政治意识）', '会议'],
    outputs: ['项目沟通工件', '组织过程资产更新']
  },
  {
    number: 28, performanceDomain: '相关方绩效域', performanceDomainEn: 'Stakeholders',
    name: '监督相关方参与', nameEn: 'Monitor Stakeholder Engagement',
    icon: '👁️', color: '#FF4500',
    description: '监督项目相关方关系，并通过调整参与策略和计划来调动相关方参与的过程。',
    descriptionEn: 'The process of monitoring project stakeholder relationships and tailoring strategies for engaging stakeholders through modification of engagement strategies and plans.',
    inputs: ['相关方参与计划', '沟通管理计划', '资源管理计划', '问题日志', '经验教训登记册', '项目沟通工件', '风险登记册', '相关方登记册', '工作绩效数据', '事业环境因素', '组织过程资产'],
    tools: ['数据分析', '决策制定', '数据表现', '沟通技能（反馈、演示）', '人际与团队技能（积极倾听、文化意识、领导力、人际交往、政治意识）', '会议'],
    outputs: ['工作绩效信息', '变更请求', '项目管理计划/文件更新']
  },
  {
    number: 29, performanceDomain: '相关方绩效域', performanceDomainEn: 'Stakeholders',
    name: '监督沟通', nameEn: 'Monitor Communications',
    icon: '📱', color: '#DC143C',
    description: '确保满足项目及其相关方的信息需求，监督沟通效果的过程。',
    descriptionEn: 'The process of ensuring the information needs of the project and its stakeholders are met through monitoring communication effectiveness.',
    inputs: ['沟通管理计划', '相关方参与计划', '资源管理计划', '项目沟通工件', '问题日志', '经验教训登记册', '工作绩效数据', '事业环境因素', '组织过程资产'],
    tools: ['专家判断', '项目管理信息系统（PMIS）', '数据表现', '人际与团队技能（观察/对话）', '会议'],
    outputs: ['工作绩效信息', '变更请求', '项目管理计划更新']
  },
  {
    number: 30, performanceDomain: '资源绩效域', performanceDomainEn: 'Resources',
    name: '规划资源 management', nameEn: 'Plan Resource Management',
    icon: '📦', color: '#4B0082',
    description: '定义如何估算、获取、管理和利用项目所需的实物资源和团队资源的过程。',
    descriptionEn: 'The process of defining how to estimate, acquire, manage, and utilize physical and team resources.',
    inputs: ['项目章程', '质量管理计划', '范围基准', '团队章程', '项目进度计划', '假设日志', '需求文件', '风险登记册', '相关方登记册', '事业环境因素', '组织过程资产'],
    tools: ['专家判断', '数据收集', '数据分析', '数据表现', '组织理论', '绿色人力资源管理（Green HRM）', '资源基础观 (RBV)', '会议'],
    outputs: ['资源管理计划', '团队章程更新与项目文件更新']
  },
  {
    number: 31, performanceDomain: '资源绩效域', performanceDomainEn: 'Resources',
    name: '估算资源', nameEn: 'Estimate Resources',
    icon: '🧮', color: '#32CD32',
    description: '估算执行项目活动所需的材料、人员、设备或用品的种类和数量的过程。引入AI与生成式AI等新兴估算技术。',
    descriptionEn: 'The process of estimating the type and quantities of material, people, equipment, or supplies required to perform project activities, incorporating emerging technologies like AI.',
    inputs: ['资源管理计划', '进度管理计划', '范围基准', '项目进度计划', '*【穿透输入：活动清单】**', '活动属性', '假设日志', '成本估算', '资源日历', '风险登记册', '事业环境因素', '组织过程资产'],
    tools: ['专家判断', '*估算技术（自下而上估算、类比估算、参数估算）**', '数据分析', '数据收集', '项目管理信息系统（PMIS）', '人工智能（AI）', '预测性分析', '虚拟/增强现实 (VR/AR)', '分支与绑定', 'COCOMO模型', '会议'],
    outputs: ['资源需求', '估算依据', '资源分解结构（RBS）', '项目文件更新']
  },
  {
    number: 32, performanceDomain: '资源绩效域', performanceDomainEn: 'Resources',
    name: '获取资源', nameEn: 'Acquire Resources',
    icon: '👥', color: '#DAA520',
    description: '获取项目所需的团队成员、设施、设备、材料、用品和其他资源的过程。',
    descriptionEn: 'The process of obtaining team members, facilities, equipment, materials, supplies, and other resources necessary to complete project work.',
    inputs: ['资源管理计划', '成本基准', '项目进度计划', '资源需求', '资源日历', '相关方登记册', '事业环境因素', '组织过程资产'],
    tools: ['决策制定', '人际与团队技能（谈判、问题解决）', '预分派', '虚拟团队'],
    outputs: ['资源分配单（实物/虚拟资源分配文件）', '项目团队派工单 (Team Assignments)', '资源日历', '变更请求']
  },
  {
    number: 33, performanceDomain: '资源绩效域', performanceDomainEn: 'Resources',
    name: '领导团队', nameEn: 'Lead the Team',
    icon: '🌟', color: '#FF69B4',
    description: '通过仆人领导力、情商和冲突管理等现代领导方法，提升团队绩效和协作能力的过程。第8版将原建设团队和管理团队合并为此流程。',
    descriptionEn: 'The process of improving team competencies, interaction, and collaboration through modern leadership approaches including servant leadership and emotional intelligence, consolidating what were previously Develop Team and Manage Team into one process.',
    inputs: ['资源管理计划', '项目团队派工单', '团队章程', '资源日历', '问题日志', '经验教训登记册', '项目进度计划', '工作绩效报告', '团队绩效评价', '事业环境因素', '组织过程资产'],
    tools: ['沟通技术', '情商', '文化智力 (CQ)', '领导力模型（分布式领导力、仆人领导力等）', '塔克曼阶梯 (Tuckman Ladder)', '人际与团队技能（冲突管理、影响力、激励、谈判、团队建设、决策制定、批判性思维、教练与指导、培训、问题解决/六顶思考帽）', '回顾会议', '认可与奖励', '个体和团队测评', '数据分析', '项目管理信息系统（PMIS）', '虚拟协作工具'],
    outputs: ['项目团队绩效报告', '团队绩效评价更新/变更请求']
  },
  {
    number: 34, performanceDomain: '资源绩效域', performanceDomainEn: 'Resources',
    name: '监督与控制资源利用', nameEn: 'Monitor and Control Resourcing',
    icon: '📊', color: '#9370DB',
    description: '监督资源使用情况，使用约束理论和价值流映射等工具，确保资源被高效利用的过程。',
    descriptionEn: 'The process of monitoring resource expenditure and ensuring efficient resource utilization using Theory of Constraints and value stream mapping.',
    inputs: ['资源管理计划', '资源分配文件', '资源分解结构（RBS）', '项目进度计划', '问题日志', '经验教训登记册', '风险登记册', '工作绩效数据', '协议', '组织过程资产'],
    tools: ['数据分析', '问题解决', '人际与团队技能（谈判、影响力）', '价值流映射', '持续改进', '约束理论', '控制图', '分支与绑定', '项目管理信息系统（PMIS）'],
    outputs: ['工作绩效信息', '变更请求', '项目管理计划/文件更新']
  },
  {
    number: 35, performanceDomain: '风险绩效域', performanceDomainEn: 'Risk',
    name: '规划风险管理', nameEn: 'Plan Risk Management',
    icon: '🛡️', color: '#DC143C',
    description: '定义如何进行风险管理活动，建立风险管理框架和策略的过程。',
    descriptionEn: 'The process of defining how to conduct risk management activities for a project, establishing the risk management framework and strategy.',
    inputs: ['项目章程', '项目管理计划（所有组件）', '相关方登记册', '事业环境因素', '组织过程资产'],
    tools: ['专家判断', '数据收集', '数据分析', '会议'],
    outputs: ['风险管理计划']
  },
  {
    number: 36, performanceDomain: '风险绩效域', performanceDomainEn: 'Risk',
    name: '识别风险', nameEn: 'Identify Risks',
    icon: '⚠️', color: '#FF4500',
    description: '识别单个项目风险和整体风险来源，并记录风险特征的过程。利用AI和提示清单等现代工具。',
    descriptionEn: 'The process of identifying individual project risks and sources of overall risk, and documenting their characteristics using modern tools including AI.',
    inputs: ['项目管理计划', '*【穿透输入：活动清单】**', '活动属性', '假设日志', '成本/工期估算', '问题日志', '经验教训登记册', '需求文件', '资源需求', '相关方登记册', '协议', '事业环境因素', '组织过程资产'],
    tools: ['专家判断', '提示清单', '数据收集', '数据分析', '人际与团队技能（引导）', '人工智能（AI）', '会议'],
    outputs: ['风险登记册', '风险报告']
  },
  {
    number: 37, performanceDomain: '风险绩效域', performanceDomainEn: 'Risk',
    name: '执行风险分析', nameEn: 'Perform Risk Analysis',
    icon: '📊', color: '#8A2BE2',
    description: '综合定性和定量分析方法，评估风险的概率和影响，对风险进行优先排序和量化分析的过程。第8版将定性分析和定量分析合并为一个统一的风险分析流程。',
    descriptionEn: 'An integrated process combining qualitative and quantitative risk analysis to assess probability, impact, and numerical effect of risks on project objectives, consolidating what were previously two separate processes.',
    inputs: ['风险管理计划', '三大基准（范围、进度、成本基准）', '风险登记册', '风险报告', '假设日志', '成本/工期估算', '资源需求', '相关方登记册', '事业环境因素', '组织过程资产'],
    tools: ['专家判断', '数据收集与分析（访谈）', '风险分类 (Risk Categorization)', '数据表现', '数据分析', '人际与团队技能（引导）'],
    outputs: ['项目文件更新', '假设日志/问题日志更新']
  },
  {
    number: 38, performanceDomain: '风险绩效域', performanceDomainEn: 'Risk',
    name: '规划风险应对', nameEn: 'Plan Risk Responses',
    icon: '🎯', color: '#FFE4B5',
    description: '为管理整体项目风险和单个项目风险，制定可选方案、选择应对策略并商定应对行动的过程。',
    descriptionEn: 'The process of developing options, selecting strategies, and agreeing on actions to address overall and individual project risks.',
    inputs: ['资源/风险/财务/质量管理计划', '三大基准', '风险登记册', '风险报告', '经验教训登记册', '项目进度计划', '团队派工单', '资源日历', '相关方登记册', '事业环境因素', '组织过程资产'],
    tools: ['专家判断', '数据收集', '人际与团队技能（引导）', '策略应用（**威胁应对策略、机会应对策略、应急应对策略、整体风险应对策略**）', '数据分析', '决策制定'],
    outputs: ['应对措施', '变更请求', '项目管理计划/文件更新']
  },
  {
    number: 39, performanceDomain: '风险绩效域', performanceDomainEn: 'Risk',
    name: '实施风险应对', nameEn: 'Implement Risk Responses',
    icon: '🎲', color: '#4B0082',
    description: '执行商定的风险应对计划，确保风险应对措施被有效执行的过程。',
    descriptionEn: 'The process of implementing agreed-upon risk response plans, ensuring risk responses are executed effectively.',
    inputs: ['风险管理计划', '项目文件', '组织过程资产'],
    tools: ['专家判断', '项目管理信息系统（PMIS）', '人际与团队技能（影响力 Influence）'],
    outputs: ['变更请求', '项目文件更新']
  },
  {
    number: 40, performanceDomain: '风险绩效域', performanceDomainEn: 'Risk',
    name: '监督风险', nameEn: 'Monitor Risks',
    icon: '📡', color: '#FFD700',
    description: '持续监控风险触发因素、评估风险应对效果、识别新风险，并通过风险审计和储备分析确保项目弹性的过程。',
    descriptionEn: 'The process of monitoring risk triggers, evaluating risk response effectiveness, identifying new risks, and building project resilience through risk audits and reserve analysis.',
    inputs: ['风险管理计划', '风险登记册', '风险报告', '问题日志', '经验教训登记册', '工作绩效数据', '工作绩效报告'],
    tools: ['数据分析', '风险审计', '会议'],
    outputs: ['工作绩效信息', '变更请求', '项目管理计划/文件更新/组织过程资产更新']
  }
];

export const performanceDomainConfig = {
  '治理绩效域':   { icon: '🏛️', count: 9, color: '#005A9D', en: 'Governance' },
  '范围绩效域':   { icon: '🎯', count: 6, color: '#2E8B57', en: 'Scope' },
  '进度绩效域':   { icon: '📅', count: 3, color: '#0077C8', en: 'Schedule' },
  '财务绩效域':   { icon: '💰', count: 4, color: '#D4AF37', en: 'Finance' },
  '相关方绩效域': { icon: '👥', count: 7, color: '#C71585', en: 'Stakeholders' },
  '资源绩效域':   { icon: '📦', count: 5, color: '#4B0082', en: 'Resources' },
  '风险绩效域':   { icon: '⚠️', count: 6, color: '#FF6347', en: 'Risk' }
};
