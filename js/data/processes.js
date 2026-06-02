/**
 * PMBOK 第8版 — 40个项目管理流程（完整ITTO）
 * 40 Processes with full Inputs, Tools & Techniques, Outputs
 * 按 7个绩效域 (Performance Domains) 组织
 * 数据来源：PMBOK Guide 8th Edition 官方规范 + ITTO.txt
 */
export const processes = [
  {
    number: 1, performanceDomain: '治理绩效域', performanceDomainEn: 'Governance',
    name: '启动项目或阶段', nameEn: 'Initiate Project or Phase',
    icon: '🚀', color: '#005A9D',
    description: '正式授权项目或阶段启动的过程。确立项目的存在性，定义项目目标，并授予项目经理调动资源的权力。',
    descriptionEn: 'The process of developing a document that formally authorizes the existence of a project and provides the project manager with authority to apply organizational resources.',
    inputs: ['商业论证 (Business Case)', '效益管理计划 (Benefits Management Plan)', '协议 (Agreements)', '事业环境因素 (EEFs)', '组织过程资产 (OPAs)'],
    tools: ['专家判断', '数据收集（头脑风暴、焦点小组、访谈）', '人际关系与团队技能（冲突管理、引导、会议管理）', '项目画布 (Project Canvas)', '职责分配矩阵'],
    outputs: ['项目章程', '假设日志']
  },
  {
    number: 2, performanceDomain: '治理绩效域', performanceDomainEn: 'Governance',
    name: '整合与对齐项目计划', nameEn: 'Integrate and Align Project Plans',
    icon: '📋', color: '#0077C8',
    description: '定义、准备和协调所有子管理计划，并将其整合为综合项目管理计划，确保与组织战略对齐。',
    descriptionEn: 'The process of defining, preparing, and coordinating all subsidiary plans and integrating them into a comprehensive project management plan aligned with organizational strategy.',
    inputs: ['项目章程'],
    tools: ['专家判断', '数据收集（头脑风暴、核对表、焦点小组、访谈）', '人际关系与团队技能（引导、会议管理）', '会议', '项目画布'],
    outputs: ['项目管理计划']
  },
  {
    number: 3, performanceDomain: '治理绩效域', performanceDomainEn: 'Governance',
    name: '规划采购策略', nameEn: 'Plan Sourcing Strategy',
    icon: '🛒', color: '#2E8B57',
    description: '制定采购策略，包括自制或外购决策、采购方法和合同类型选择的过程。',
    descriptionEn: 'The process of developing a sourcing strategy including make-or-buy decisions, procurement methods, and contract type selection.',
    inputs: ['项目章程', '项目管理计划组件（范围、质量、进度、财务、资源管理计划及范围基准）', '项目文件（里程碑清单、需求文件、需求跟踪矩阵、质量指标、资源需求、派工单、风险登记册、相关方登记册）', 'EEFs', 'OPAs'],
    tools: ['专家判断', '市场调研', '自制或外购分析', '源头选择分析', '文件分析'],
    outputs: ['采购策略计划（含自制或外购决策、供方选择标准）']
  },
  {
    number: 4, performanceDomain: '治理绩效域', performanceDomainEn: 'Governance',
    name: '管理项目执行', nameEn: 'Manage Project Execution',
    icon: '🎬', color: '#D4AF37',
    description: '领导和执行项目管理计划中所确定的工作，并实施已批准的变更的过程。',
    descriptionEn: 'The process of leading and performing the work defined in the project management plan and implementing approved changes.',
    inputs: ['项目管理计划', '批准的变更请求 (来自 #8)', '工作绩效报告', '经验教训登记册', '里程碑清单', '项目进度计划', '需求跟踪矩阵', '风险登记册/报告', 'EEFs', 'OPAs'],
    tools: ['专家判断', '项目管理信息系统 (PMIS)', '会议（如每日协调会）'],
    outputs: ['可交付成果', '工作绩效数据', '问题日志', '变更请求']
  },
  {
    number: 5, performanceDomain: '治理绩效域', performanceDomainEn: 'Governance',
    name: '管理质量保证', nameEn: 'Manage Quality Assurance',
    icon: '⭐', color: '#8B4513',
    description: '确保项目过程符合质量政策和标准，通过审计和过程改进持续提升质量管理能力。',
    descriptionEn: 'The process of auditing quality requirements and results from quality control measurements to ensure appropriate quality standards and operational definitions are used.',
    inputs: ['项目管理计划（所有组件）', '项目文件（质量指标、质量控制测量结果）', '组织过程资产（质量政策与程序）'],
    tools: ['质量审计 (Audits)', '核对表', '数据表现（鱼骨图、流程图）', '决策制定', '问题解决', '过程改进'],
    outputs: ['质量报告', '变更请求', '项目管理计划/文件更新']
  },
  {
    number: 6, performanceDomain: '治理绩效域', performanceDomainEn: 'Governance',
    name: '管理项目知识', nameEn: 'Manage Project Knowledge',
    icon: '📚', color: '#C71585',
    description: '使用现有知识并创造新知识，以实现项目目标并促进组织学习的过程。',
    descriptionEn: 'The process of using existing knowledge and creating new knowledge to achieve the project objectives and contribute to organizational learning.',
    inputs: ['项目管理计划', '可交付成果 (来自 #4)', '项目团队派工单', '资源分解结构 (RBS)', '相关方登记册', 'EEFs', 'OPAs'],
    tools: ['专家判断', '知识管理（事后回顾 AAR、故事讲述、回顾会议）', '信息管理', '人际关系与团队技能（积极倾听、政治意识）'],
    outputs: ['经验教训登记册']
  },
  {
    number: 7, performanceDomain: '治理绩效域', performanceDomainEn: 'Governance',
    name: '监控项目绩效', nameEn: 'Monitor and Control Project Performance',
    icon: '📊', color: '#4B0082',
    description: '跟踪、审查和报告整体项目进展，以实现项目管理计划中确定的绩效目标的过程。',
    descriptionEn: 'The process of tracking, reviewing, and reporting overall progress to meet the performance objectives defined in the project management plan.',
    inputs: ['项目管理计划', '工作绩效信息 (WPI) (来自 #14, #18, #22, #28, #29, #34, #40 监控流的转化)', '各类预测（成本预测、进度预测）', '问题日志', '假设日志', '估算依据', '质量报告', '风险报告', '协议'],
    tools: ['专家判断', '数据分析（挣值分析 EVM、变动分析、趋势分析、根本原因分析）', '项目仪表盘', '信息辐射体', '会议'],
    outputs: ['工作绩效报告', '变更请求', '项目文件更新（成本/进度预测、问题日志更新）']
  },
  {
    number: 8, performanceDomain: '治理绩效域', performanceDomainEn: 'Governance',
    name: '评估与实施变更', nameEn: 'Assess and Implement Changes',
    icon: '🔄', color: '#FF6347',
    description: '审查所有变更请求、评估影响、审批变更，并管理对可交付成果和项目文件的变更的过程。',
    descriptionEn: 'The process of reviewing all change requests, assessing impact, approving changes, and managing changes to deliverables and project documents.',
    inputs: ['变更请求 (来自全书 11 个过程的汇总抛出)', '项目管理计划（变更/配置管理计划、三大基准）', '估算依据', '变更日志', '需求跟踪矩阵', '风险报告', '工作绩效报告', 'EEFs', 'OPAs'],
    tools: ['专家判断', '变更控制工具', '数据分析（备选方案分析、成本效益分析）', '决策制定（多标准决策分析、投票）', '整体变更控制', '待办列表管理（敏捷适用）'],
    outputs: ['批准的变更请求', '变更日志更新']
  },
  {
    number: 9, performanceDomain: '治理绩效域', performanceDomainEn: 'Governance',
    name: '收尾项目或阶段', nameEn: 'Close Project or Phase',
    icon: '🏁', color: '#00FA9A',
    description: '完结所有项目管理过程组的所有活动，以正式结束项目或阶段的过程。',
    descriptionEn: 'The process of finalizing all activities for the project, phase, or contract.',
    inputs: ['项目章程', '项目管理计划（所有组件）', '验收的可交付成果 (来自 #15)', '最终报告', '商业文件', '协议', '采购文档', '变更日志', '问题日志', '经验教训登记册', '质量控制测量结果', '风险报告'],
    tools: ['专家判断', '数据分析（文件分析、回归分析、趋势分析）', '会议'],
    outputs: ['最终产品/服务或成果的移交', '最终报告', '组织过程资产更新（经验教训、收尾资产归档）']
  },
  {
    number: 10, performanceDomain: '范围绩效域', performanceDomainEn: 'Scope',
    name: '规划范围管理', nameEn: 'Plan Scope Management',
    icon: '🎯', color: '#2E8B57',
    description: '',
    descriptionEn: '',
    inputs: ['项目章程', '项目管理计划', '需求文件', '风险登记册', '相关方登记册', 'EEFs', 'OPAs'],
    tools: ['专家判断', '数据收集（访谈、问卷调查）', '数据分析', '测试和检查规划'],
    outputs: ['范围管理计划', '需求管理计划']
  },
  {
    number: 11, performanceDomain: '范围绩效域', performanceDomainEn: 'Scope',
    name: '启发与分析需求', nameEn: 'Elicit and Analyze Requirements',
    icon: '📝', color: '#D4AF37',
    description: '',
    descriptionEn: '',
    inputs: ['项目章程', '范围与需求管理计划', '商业论证', '协议', '假设日志', '经验教训登记册', '相关方登记册'],
    tools: ['专家判断', '数据收集（标杆对照、头脑风荒、访谈、问卷）', '人际技能（名义小组技术 NGT）', '设计思维', '优先级排序/分级', '会议'],
    outputs: ['需求文件', '需求跟踪矩阵']
  },
  {
    number: 12, performanceDomain: '范围绩效域', performanceDomainEn: 'Scope',
    name: '定义范围', nameEn: 'Define Scope',
    icon: '🔍', color: '#8B4513',
    description: '',
    descriptionEn: '',
    inputs: ['项目章程', '范围管理计划', '需求文件', '假设日志', 'EEFs', 'OPAs'],
    tools: ['专家判断', '产品分析 (Product Analysis)', '数据分析', '分解技术', '引导'],
    outputs: ['项目范围说明书', '项目文件更新（需求文件修正更新）']
  },
  {
    number: 13, performanceDomain: '范围绩效域', performanceDomainEn: 'Scope',
    name: '制定范围结构', nameEn: 'Develop Scope Structure',
    icon: '📊', color: '#C71585',
    description: '',
    descriptionEn: '',
    inputs: ['项目管理计划', '项目范围说明书', '需求文件', '批准的变更 (来自 #8)'],
    tools: ['专家判断', '头脑风暴', '分解技术 (Decomposition)'],
    outputs: ['范围基准 (Scope Baseline，含 WBS 及 WBS词典)', '用户故事 (User Stories)、产品待办列表']
  },
  {
    number: 14, performanceDomain: '范围绩效域', performanceDomainEn: 'Scope',
    name: '监督与控制范围', nameEn: 'Monitor and Control Scope',
    icon: '📏', color: '#0077C8',
    description: '',
    descriptionEn: '',
    inputs: ['范围/质量管理计划', '需求文件', '绩效测量基准', '质量指标', '工作绩效数据 (来自 #4)', '批准的变更请求', '可交付成果'],
    tools: ['数据分析（偏差分析、趋势分析、根本原因分析）', '绩效审查', '审计与检查', '测试/产品评估', '流程自动化'],
    outputs: ['工作绩效信息 (WPI \- 范围状态)', '确认的可交付成果', '质量控制测量结果', '质量报告', '变更请求']
  },
  {
    number: 15, performanceDomain: '范围绩效域', performanceDomainEn: 'Scope',
    name: '确认范围', nameEn: 'Validate Scope',
    icon: '✅', color: '#9370DB',
    description: '',
    descriptionEn: '',
    inputs: ['范围基准', '需求文件', '确认的可交付成果 (来自 #14)', '质量控制测量结果', '质量报告', '工作绩效数据'],
    tools: ['检查 (Inspection)', '数据分析', '决策制定', '客户会谈与测试', '审查会议'],
    outputs: ['验收的可交付成果', '变更请求', '工作绩效信息（验收状态报告）']
  },
  {
    number: 16, performanceDomain: '进度绩效域', performanceDomainEn: 'Schedule',
    name: '规划进度管理', nameEn: 'Plan Schedule Management',
    icon: '📅', color: '#0077C8',
    description: '',
    descriptionEn: '',
    inputs: ['项目章程', '项目管理计划（范围管理计划）', '开发方法', 'EEFs', 'OPAs'],
    tools: ['专家判断', '数据分析（备选方案分析）', '会议'],
    outputs: ['进度管理计划']
  },
  {
    number: 17, performanceDomain: '进度绩效域', performanceDomainEn: 'Schedule',
    name: '开发进度模型', nameEn: 'Develop Schedule',
    icon: '📅', color: '#9370DB',
    description: '',
    descriptionEn: '',
    inputs: ['项目章程', '进度管理计划', '项目范围说明书', '开发方法', '协议', 'EEFs', 'OPAs'],
    tools: ['分解技术', '滚动波浪规划', '紧前关系绘图法 PDM', '提前/滞后量', '估算技术：参数', '类比', '三点', '自下而上', '敏捷估算', '储备分析', '关键路径法 CPM', '进度压缩：赶工/快跟', '资源优化：资源平衡/平滑', 'PMIS'],
    outputs: ['进度基准', '项目进度计划', '项目日历', '项目文件更新（确立/修正后的活动清单、活动属性、里程碑清单、进度网络图）']
  },
  {
    number: 18, performanceDomain: '进度绩效域', performanceDomainEn: 'Schedule',
    name: '监督与控制进度', nameEn: 'Monitor and Control Schedule',
    icon: '⏰', color: '#FF69B4',
    description: '',
    descriptionEn: '',
    inputs: ['进度管理计划', '进度基准', '绩效测量基准', '项目进度计划', '工作绩效数据 (来自 #4)', '产品待办列表', '项目日历', '资源日历', '风险登记册'],
    tools: ['数据分析（挣值分析、燃尽图/燃起图、趋势/偏差分析、假设情景分析）', '关键路径法', '进度压缩', '资源优化', '团队速度 (Velocity)', '每日协调会', '迭代评审会', '待办列表精炼'],
    outputs: ['工作绩效信息 (WPI \- 进度偏差)', '进度预测', '变更请求', '项目管理计划/文件更新']
  },
  {
    number: 19, performanceDomain: '财务绩效域', performanceDomainEn: 'Finance',
    name: '规划财务管理', nameEn: 'Plan Financial Management',
    icon: '💰', color: '#D4AF37',
    description: '',
    descriptionEn: '',
    inputs: ['项目章程', '项目管理计划（进度管理计划、风险管理计划）', 'EEFs', 'OPAs'],
    tools: ['专家判断', '数据分析（备选方案分析）', '会议'],
    outputs: ['财务管理计划', '资金筹措策略']
  },
  {
    number: 20, performanceDomain: '财务绩效域', performanceDomainEn: 'Finance',
    name: '估算成本', nameEn: 'Estimate Costs',
    icon: '💲', color: '#FFD700',
    description: '',
    descriptionEn: '',
    inputs: ['质量管理计划', '范围基准', '项目进度计划', '【穿透输入：活动清单】', '资源需求', '自制或外购决策 (来自 #3)', '经验教训登记册', '风险登记册', 'EEFs', 'OPAs'],
    tools: ['专家判断', '估算技术（类比估算、参数估算、自下而上估算、三点估算）', '数据分析（储备分析、质量成本 COQ）', 'PMIS', '决策制定'],
    outputs: ['成本估算', '估算依据', '项目文件更新']
  },
  {
    number: 21, performanceDomain: '财务绩效域', performanceDomainEn: 'Finance',
    name: '制定预算', nameEn: 'Develop Budget',
    icon: '💵', color: '#20B2AA',
    description: '',
    descriptionEn: '',
    inputs: ['财务管理计划', '范围基准', '项目进度计划', '成本估算', '估算依据', '风险登记册', '商业论证', '效益管理计划', '协议', 'EEFs', 'OPAs'],
    tools: ['专家判断', '成本汇总 (Cost Aggregation)', '数据分析（储备分析）', '历史信息审查', '资金限制平衡 (Funding Limit Reconciliation)', '融资 (Financing)'],
    outputs: ['成本基准', '项目资金需求', '项目文件更新（成本估算/进度模型微调）']
  },
  {
    number: 22, performanceDomain: '财务绩效域', performanceDomainEn: 'Finance',
    name: '监督与控制财务', nameEn: 'Monitor and Control Finances',
    icon: '📈', color: '#DAA520',
    description: '',
    descriptionEn: '',
    inputs: ['财务管理计划', '成本基准', '绩效测量基准', '项目资金需求', '工作绩效数据 (来自 #4)', '经验教训登记册'],
    tools: ['专家判断', '数据分析（挣值分析 EVM、趋势分析、储备分析）', '完工尚需绩效指数 (TCPI)', 'PMIS'],
    outputs: ['工作绩效信息 (WPI \- 成本偏差)', '收益与成本预测', '变更请求', '资金提案']
  },
  {
    number: 23, performanceDomain: '相关方绩效域', performanceDomainEn: 'Stakeholders',
    name: '识别相关方', nameEn: 'Identify Stakeholders',
    icon: '👥', color: '#C71585',
    description: '',
    descriptionEn: '',
    inputs: ['项目章程', '商业论证', '效益管理计划', '协议', '变更日志 (来自 #8)', '问题日志', '需求文件', '沟通/相关方参与计划', 'EEFs', 'OPAs'],
    tools: ['专家判断', '数据收集（问卷和调查、头脑风暴）', '数据分析（相关方分析 Stakeholder Analysis、文件分析）', '数据表现（相关方映射 Stakeholder Mapping）', '会议'],
    outputs: ['相关方登记册', '项目管理计划/文件更新']
  },
  {
    number: 24, performanceDomain: '相关方绩效域', performanceDomainEn: 'Stakeholders',
    name: '规划相关方参与', nameEn: 'Plan Stakeholder Engagement',
    icon: '🤝', color: '#1E90FF',
    description: '',
    descriptionEn: '',
    inputs: ['项目章程', '资源/沟通/风险管理计划', '相关方登记册', '假设日志', '变更日志', '问题日志', '项目进度计划', '风险报告', 'EEFs', 'OPAs'],
    tools: ['专家判断', '数据收集（标杆对照）', '数据分析（假设和约束分析、根本原因分析）', '决策制定（优先级排序）', '数据表现（思维导图、相关方参与度评估矩阵）', '会议'],
    outputs: ['相关方参与计划']
  },
  {
    number: 25, performanceDomain: '相关方绩效域', performanceDomainEn: 'Stakeholders',
    name: '规划沟通管理', nameEn: 'Plan Communications Management',
    icon: '📢', color: '#4169E1',
    description: '',
    descriptionEn: '',
    inputs: ['项目章程', '资源管理计划', '相关方参与计划', '需求文件', '相关方登记册', 'EEFs', 'OPAs'],
    tools: ['专家判断', '沟通需求分析', '沟通技术', '沟通模型', '沟通方法', '人际与团队技能（沟通风格评估、政治与文化意识）', '数据表现（相关方参与度评估矩阵）', '会议'],
    outputs: ['沟通管理计划', '项目文件更新']
  },
  {
    number: 26, performanceDomain: '相关方绩效域', performanceDomainEn: 'Stakeholders',
    name: '管理相关方参与', nameEn: 'Manage Stakeholder Engagement',
    icon: '🗣️', color: '#00CED1',
    description: '',
    descriptionEn: '',
    inputs: ['相关方参与计划', '沟通管理计划', '变更管理计划', '风险管理计划', '变更日志', '问题日志', '经验教训登记册', '相关方登记册', '项目进度计划', '风险登记册', '状态报告', 'EEFs', 'OPAs'],
    tools: ['专家判断', '沟通技能（反馈）', '人际与团队技能（冲突管理、文化意识、谈判、观察/对话、政治意识）', '基本规则 (Ground Rules)', '会议'],
    outputs: ['变更请求', '项目管理计划/文件更新（变更日志、问题日志、相关方登记册更新）']
  },
  {
    number: 27, performanceDomain: '相关方绩效域', performanceDomainEn: 'Stakeholders',
    name: '管理沟通', nameEn: 'Manage Communications',
    icon: '📡', color: '#FF6347',
    description: '',
    descriptionEn: '',
    inputs: ['沟通管理计划', '资源管理计划', '相关方参与计划', '工作绩效报告 (来自 #7)', '变更日志', '问题日志', '经验教训登记册', '质量报告', '风险报告', '相关方登记册', 'EEFs', 'OPAs'],
    tools: ['沟通技术', '沟通方法', '沟通技能（沟通能力、反馈、非语言沟通、演示）', '项目管理信息系统 (PMIS)', '项目报告 (Project Reporting)', '人际与团队技能（积极倾听、冲突管理、会议管理、人际交往、政治意识）', '会议'],
    outputs: ['项目沟通工件', '组织过程资产更新（项目演示资料、沟通备忘录归档）']
  },
  {
    number: 28, performanceDomain: '相关方绩效域', performanceDomainEn: 'Stakeholders',
    name: '监督相关方参与', nameEn: 'Monitor Stakeholder Engagement',
    icon: '👁️', color: '#FF4500',
    description: '',
    descriptionEn: '',
    inputs: ['相关方参与计划', '沟通管理计划', '资源管理计划', '问题日志', '经验教训登记册', '项目沟通工件', '风险登记册', '相关方登记册', '工作绩效数据 (来自 #4)', 'EEFs', 'OPAs'],
    tools: ['数据分析（备选方案分析、根本原因分析、相关方分析）', '决策制定（多标准决策分析、投票）', '数据表现（相关方参与度评估矩阵）', '沟通技能（反馈、演示）', '人际与团队技能（积极倾听、文化意识、领导力、人际交往、政治意识）', '会议'],
    outputs: ['工作绩效信息 (WPI \- 相关方参与状态)', '变更请求', '项目管理计划/文件更新']
  },
  {
    number: 29, performanceDomain: '相关方绩效域', performanceDomainEn: 'Stakeholders',
    name: '监督沟通', nameEn: 'Monitor Communications',
    icon: '📱', color: '#DC143C',
    description: '',
    descriptionEn: '',
    inputs: ['沟通管理计划', '相关方参与计划', '资源管理计划', '项目沟通工件 (来自 #27)', '问题日志', '经验教训登记册', '工作绩效数据 (来自 #4)', 'EEFs', 'OPAs'],
    tools: ['专家判断', '项目管理信息系统 (PMIS)', '数据表现（相关方参与度评估矩阵）', '人际与团队技能（观察/对话）', '会议'],
    outputs: ['工作绩效信息 (WPI \- 沟通有效性)', '变更请求', '项目管理计划更新（沟通管理计划更新）']
  },
  {
    number: 30, performanceDomain: '资源绩效域', performanceDomainEn: 'Resources',
    name: '规划资源 management', nameEn: 'Plan Resource Management',
    icon: '📦', color: '#4B0082',
    description: '',
    descriptionEn: '',
    inputs: ['项目章程', '质量管理计划', '范围基准', '团队章程 (Team Charter)', '项目进度计划', '假设日志', '需求文件', '风险登记册', '相关方登记册', 'EEFs', 'OPAs'],
    tools: ['专家判断', '数据收集（访谈）', '数据分析（SWOT分析）', '数据表现（组织结构图、RACI矩阵、文本型描述）', '组织理论', '绿色人力资源管理 (Green HRM)', '资源基础观 (RBV)', '会议'],
    outputs: ['资源管理计划', '团队章程更新与项目文件更新']
  },
  {
    number: 31, performanceDomain: '资源绩效域', performanceDomainEn: 'Resources',
    name: '估算资源', nameEn: 'Estimate Resources',
    icon: '🧮', color: '#32CD32',
    description: '',
    descriptionEn: '',
    inputs: ['资源管理计划', '进度管理计划', '范围基准', '项目进度计划', '【穿透输入：活动清单】', '活动属性', '假设日志', '成本估算', '资源日历', '风险登记册', 'EEFs', 'OPAs'],
    tools: ['专家判断', '估算技术（自下而上估算、类比估算、参数估算）', '数据分析（备选方案分析）', '数据收集（访谈）', 'PMIS', '人工智能（AI与生成式AI）', '预测性分析', '虚拟/增强现实 (VR/AR)', '分支与绑定', 'COCOMO模型', '会议'],
    outputs: ['资源需求', '估算依据', '资源分解结构', '项目文件更新（活动属性、风险登记册更新）']
  },
  {
    number: 32, performanceDomain: '资源绩效域', performanceDomainEn: 'Resources',
    name: '获取资源', nameEn: 'Acquire Resources',
    icon: '👥', color: '#DAA520',
    description: '',
    descriptionEn: '',
    inputs: ['资源管理计划', '成本基准', '项目进度计划', '资源需求', '资源日历', '相关方登记册', 'EEFs', 'OPAs'],
    tools: ['决策制定（多标准决策分析 MCDA）', '人际与团队技能（谈判、问题解决）', '预分派 (Pre-assignment)', '虚拟团队 (Virtual Teams)'],
    outputs: ['资源分配单（实物/虚拟资源分配文件）', '项目团队派工单', '资源日历', '变更请求']
  },
  {
    number: 33, performanceDomain: '资源绩效域', performanceDomainEn: 'Resources',
    name: '领导团队', nameEn: 'Lead the Team',
    icon: '🌟', color: '#FF69B4',
    description: '',
    descriptionEn: '',
    inputs: ['资源管理计划', '项目团队派工单', '团队章程', '资源日历', '问题日志', '经验教训登记册', '项目进度计划', '工作绩效报告 (来自 #7)', '团队绩效评价 (自评/互评)', 'EEFs', 'OPAs'],
    tools: ['沟通技术', '情商 (Emotional Intelligence)', '文化智力 (CQ)', '领导力模型（分布式领导力、仆人领导力等）', '塔克曼阶梯 (Tuckman Ladder)', '人际与团队技能（冲突管理、影响力、激励、谈判、团队建设、决策制定、批判性思维、教练与指导、培训、问题解决/六顶思考帽）', '回顾会议 (Retrospectives)', '认可与奖励', '个体和团队测评', '数据分析（SWOT分析）', 'PMIS', '虚拟协作工具'],
    outputs: ['项目团队绩效报告', '团队绩效评价更新/变更请求']
  },
  {
    number: 34, performanceDomain: '资源绩效域', performanceDomainEn: 'Resources',
    name: '监督与控制资源利用', nameEn: 'Monitor and Control Resourcing',
    icon: '📊', color: '#9370DB',
    description: '',
    descriptionEn: '',
    inputs: ['资源管理计划', '资源分配文件 (来自 #32)', '资源分解结构 (RBS)', '项目进度计划', '问题日志', '经验教训登记册', '风险登记册', '工作绩效数据 (来自 #4)', '协议', 'OPAs'],
    tools: ['数据分析（备选方案分析、成本效益分析、绩效审查、趋势分析）', '问题解决', '人际与团队技能（谈判、影响力）', '价值流映射 (Value Stream Mapping)', '持续改进', '约束理论 (TOC)', '控制图', '分支与绑定', 'PMIS'],
    outputs: ['工作绩效信息 (WPI \- 资源利用率与缺口)', '变更请求', '项目管理计划/文件更新']
  },
  {
    number: 35, performanceDomain: '风险绩效域', performanceDomainEn: 'Risk',
    name: '规划风险管理', nameEn: 'Plan Risk Management',
    icon: '🛡️', color: '#DC143C',
    description: '',
    descriptionEn: '',
    inputs: ['项目章程', '项目管理计划（所有组件）', '相关方登记册', 'EEFs', 'OPAs'],
    tools: ['专家判断', '数据收集（访谈）', '数据分析（相关方分析）', '会议'],
    outputs: ['风险管理计划']
  },
  {
    number: 36, performanceDomain: '风险绩效域', performanceDomainEn: 'Risk',
    name: '识别风险', nameEn: 'Identify Risks',
    icon: '⚠️', color: '#FF4500',
    description: '',
    descriptionEn: '',
    inputs: ['项目管理计划（所有管理计划和三大基准）', '【穿透输入：活动清单】', '活动属性', '假设日志', '成本/工期估算', '问题日志', '经验教训登记册', '需求文件', '资源需求', '相关方登记册', '协议', 'EEFs', 'OPAs'],
    tools: ['专家判断', '提示清单 (Prompt Lists)', '数据收集（头脑风暴、核对表、访谈）', '数据分析（根本原因分析、假设条件与约束条件分析、SWOT分析、文件分析）', '人际与团队技能（引导）', '人工智能 (AI)', '会议'],
    outputs: ['风险登记册', '风险报告']
  },
  {
    number: 37, performanceDomain: '风险绩效域', performanceDomainEn: 'Risk',
    name: '执行风险分析', nameEn: 'Perform Risk Analysis',
    icon: '📊', color: '#8A2BE2',
    description: '',
    descriptionEn: '',
    inputs: ['风险管理计划', '三大基准（范围、进度、成本基准）', '风险登记册', '风险报告', '假设日志', '成本/工期估算', '资源需求', '相关方登记册', 'EEFs', 'OPAs'],
    tools: ['专家判断', '数据收集与分析（访谈）', '风险分类 (Risk Categorization)', '数据表现（概率和影响矩阵）', '数据分析（风险概率与影响评估、蒙特卡洛模拟 Monte Carlo Simulation、敏感性分析、决策树分析、影响图）', '人际与团队技能（引导）'],
    outputs: ['项目文件更新（带权重的风险登记册更新、定量定量分析后的风险报告更新）', '假设日志/问题日志更新']
  },
  {
    number: 38, performanceDomain: '风险绩效域', performanceDomainEn: 'Risk',
    name: '规划风险应对', nameEn: 'Plan Risk Responses',
    icon: '🎯', color: '#FFE4B5',
    description: '',
    descriptionEn: '',
    inputs: ['资源/风险/财务/质量管理计划', '三大基准', '风险登记册', '风险报告 (由 #37 迭代校准更新后的最新版本)', '经验教训登记册', '项目进度计划', '团队派工单', '资源日历', '相关方登记册', 'EEFs', 'OPAs'],
    tools: ['专家判断', '数据收集（访谈）', '人际与团队技能（引导）', '策略应用（**威胁应对策略、机会应对策略、应急应对策略、整体风险应对策略**）', '数据分析（备选方案分析、成本效益分析）', '决策制定（多标准决策分析 MCDA）'],
    outputs: ['应对措施', '变更请求', '项目管理计划/文件更新（成本预测、进度计划更新）']
  },
  {
    number: 39, performanceDomain: '风险绩效域', performanceDomainEn: 'Risk',
    name: '实施风险应对', nameEn: 'Implement Risk Responses',
    icon: '🎲', color: '#4B0082',
    description: '',
    descriptionEn: '',
    inputs: ['风险管理计划', '项目文件（风险登记册、风险报告、经验教训登记册）', '组织过程资产'],
    tools: ['专家判断', '项目管理信息系统 (PMIS)', '人际与团队技能（影响力 Influence）'],
    outputs: ['变更请求', '项目文件更新（问题日志、经验教训登记册、团队派工单、风险登记册/报告更新）']
  },
  {
    number: 40, performanceDomain: '风险绩效域', performanceDomainEn: 'Risk',
    name: '监督风险', nameEn: 'Monitor Risks',
    icon: '📡', color: '#FFD700',
    description: '',
    descriptionEn: '',
    inputs: ['风险管理计划', '风险登记册', '风险报告', '问题日志', '经验教训登记册', '工作绩效数据 (来自 #4)', '工作绩效报告 (来自 #7)'],
    tools: ['数据分析（技术绩效分析 Technical Performance Analysis、储备分析 Reserve Analysis）', '风险审计 (Risk Audits)', '会议'],
    outputs: ['工作绩效信息 (WPI \- 风险残余与最新暴露度)', '变更请求', '项目管理计划/文件更新/组织过程资产更新']
  }
];

// 绩效域配置
export const performanceDomainConfig = {
  '治理绩效域':   { icon: '🏛️', count: 9, color: '#005A9D', en: 'Governance' },
  '范围绩效域':   { icon: '🎯', count: 6, color: '#2E8B57', en: 'Scope' },
  '进度绩效域':   { icon: '📅', count: 3, color: '#0077C8', en: 'Schedule' },
  '财务绩效域':   { icon: '💰', count: 4, color: '#D4AF37', en: 'Finance' },
  '相关方绩效域': { icon: '👥', count: 7, color: '#C71585', en: 'Stakeholders' },
  '资源绩效域':   { icon: '📦', count: 5, color: '#4B0082', en: 'Resources' },
  '风险绩效域':   { icon: '⚠️', count: 6, color: '#FF6347', en: 'Risk' }
};
