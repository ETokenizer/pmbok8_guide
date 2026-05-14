/**
 * ITTO 双语定义库 — PMI 官方术语解释
 * Bilingual ITTO Definitions based on PMI PMBOK Guide
 */
export const ittoDefinitions = {
    // ===== 关键可交付成果 / Key Deliverables =====
    '项目章程': {
        zh: '项目章程是由项目发起人或委托人正式签署的文件，正式授权项目的存在，并授予项目经理动用组织资源开展项目活动的权力。它建立了项目与组织战略目标之间的直接联系，定义了项目的高层级目标、范围、关键相关方、总体里程碑和预算概要。',
        en: 'A document issued by the project sponsor that formally authorizes the existence of a project and provides the project manager with the authority to apply organizational resources to project activities. It establishes the connection between the project and organizational strategy.',
        category: 'output'
    },
    '项目管理计划': {
        zh: '项目管理计划是定义如何执行、监控、控制和收尾项目的综合文件。它整合了所有子管理计划（范围、进度、成本、质量、资源、沟通、风险、采购、相关方）和三大基准（范围基准、进度基准、成本基准），是项目执行和控制的根本依据。',
        en: 'The document that describes how the project will be executed, monitored, controlled, and closed. It integrates all subsidiary management plans and baselines into a comprehensive whole.',
        category: 'output'
    },
    '工作绩效数据': {
        zh: '工作绩效数据是在项目执行过程中收集的原始观察和测量数据，未经任何分析和加工。它反映了项目活动的实际执行状态，例如实际开始/完成日期、实际成本、已完成工作百分比、缺陷数量等。',
        en: 'The raw observations and measurements identified during activities being performed to carry out the project work. Data is the lowest level of detail from which information is derived.',
        category: 'output'
    },
    '工作绩效信息': {
        zh: '工作绩效信息是将工作绩效数据与计划基准进行对比分析后得到的有意义的信息。它通常基于偏差分析来评估项目在各知识领域的绩效状态，例如可交付成果的完成状态、进度偏差和成本偏差等。',
        en: 'The performance data collected from various controlling processes, analyzed in context. Performance information typically includes analysis of variances against baselines.',
        category: 'output'
    },
    '工作绩效报告': {
        zh: '工作绩效报告是将工作绩效信息进行汇总、整理并以适合相关方需求的格式呈现的实体或电子文档。它为决策提供依据，例如状态报告、进展报告、趋势分析、挣值报告和预测报告。',
        en: 'The physical or electronic representation of work performance information compiled in project documents, intended to generate decisions, actions, or awareness.',
        category: 'output'
    },
    '变更请求': {
        zh: '变更请求是对项目范围、进度、成本、质量、资源、沟通、风险或采购等方面提出的正式修改建议。变更请求可能包括纠正措施、预防措施、缺陷补救和更新。所有变更请求都需经过实施整体变更控制流程的审查。',
        en: 'A formal proposal to modify any document, deliverable, or baseline. Change requests may include corrective action, preventive action, defect repair, and updates.',
        category: 'output'
    },
    '可交付成果': {
        zh: '可交付成果是在项目执行过程中产生的独特且可验证的产品、成果或服务能力。它可以是最终交付给客户的产品，也可以是项目过程中产生的中间组件。可交付成果在完成质量控制后方可提交验收。',
        en: 'Any unique and verifiable product, result, or capability to perform a service that is produced to complete a process, phase, or project. Deliverables may be tangible or intangible.',
        category: 'output'
    },
    '核实的可交付成果': {
        zh: '核实的可交付成果是经过质量控制流程验证，确认其完整性和正确性符合质量要求的可交付成果。核实是通过检查、测试和评审来确认可交付成果是否满足既定标准。',
        en: 'Deliverables that have been checked for correctness and completeness through the Control Quality process. Verified deliverables are inputs to Validate Scope for formal acceptance.',
        category: 'output'
    },
    '验收的可交付成果': {
        zh: '验收的可交付成果是经过客户或发起人正式审查并签署确认的可交付成果。验收标志着相关方正式接收项目产出，是项目或阶段收尾的前提条件。',
        en: 'Deliverables that have been formally accepted and signed off by the customer or sponsor through the Validate Scope process. Accepted deliverables are an input to Close Project or Phase.',
        category: 'output'
    },
    '假设日志': {
        zh: '假设日志是记录项目所有假设条件和制约因素的文件。假设是在规划过程中被认为是真实、确定的条件，制约因素是对项目执行有限制作用的因素。假设日志需在整个项目生命周期中持续更新和监控。',
        en: 'A project document that records all assumptions and constraints identified for the project. Assumptions are factors considered true for planning purposes; constraints are limiting factors.',
        category: 'output'
    },
    '相关方登记册': {
        zh: '相关方登记册是记录已识别的项目相关方信息的文件，包括相关方的基本信息、评估信息（期望、利益、影响力）和相关方分类。它是制定相关方参与策略和沟通计划的基础。',
        en: 'A project document that includes identification, assessment, and classification of project stakeholders. It is the foundation for stakeholder engagement and communication planning.',
        category: 'output'
    },
    '需求文件': {
        zh: '需求文件是描述各个相关方对项目的具体需求和期望的文件。它将相关方的需求进行整理、分析和记录，包括功能需求、非功能需求、业务需求、质量需求等，并逐步详细化。',
        en: 'A document that describes the individual stakeholder needs and expectations for the project. It progressively elaborates requirements including functional, non-functional, business, and quality requirements.',
        category: 'output'
    },
    '需求跟踪矩阵': {
        zh: '需求跟踪矩阵是将产品需求从其来源连接到满足需求的可交付成果的表格。它确保每个需求都能在项目成果中得到实现，并用于追踪需求的状态和变更。',
        en: 'A grid that links product requirements from their origin to the deliverables that satisfy them. It ensures each requirement adds business value and is tracked throughout the project.',
        category: 'output'
    },
    '范围管理计划': {
        zh: '范围管理计划是项目管理计划的子计划，描述如何定义、制定、监控、控制和验证项目范围。它指导项目团队如何准备范围说明书、创建WBS、管理范围变更。',
        en: 'A subsidiary plan of the project management plan that describes how the scope will be defined, developed, monitored, controlled, and validated.',
        category: 'output'
    },
    '项目范围说明书': {
        zh: '项目范围说明书是对项目范围和主要可交付成果的详细描述。它包括产品范围描述、可交付成果、验收标准以及项目的除外责任，为后续的WBS分解和范围管理提供依据。',
        en: 'A detailed description of the project scope and major deliverables. It includes product scope description, deliverables, acceptance criteria, and project exclusions.',
        category: 'output'
    },
    '范围基准': {
        zh: '范围基准是经过批准的项目范围说明书、工作分解结构(WBS)及其关联的WBS词典的组合。它是衡量项目范围绩效的参照标准，只有通过正式的变更控制流程才能修改。',
        en: 'The approved version of the scope statement, work breakdown structure (WBS), and its associated WBS dictionary. It serves as the reference for scope performance measurement.',
        category: 'output'
    },
    '活动清单': {
        zh: '活动清单是包含项目所需全部活动的详细列表。每个活动都有唯一的标识符和详细的工作范围描述，确保团队成员清楚了解需要完成的所有工作。',
        en: 'A documented tabulation of all scheduled activities on the project. Each activity has a unique identifier and detailed scope of work description.',
        category: 'output'
    },
    '活动属性': {
        zh: '活动属性是对活动清单中每一项活动的扩展描述，包括活动的前置关系、后续关系、资源需求、约束条件、假设条件和执行人等信息，随着项目的推进逐步完善。',
        en: 'Multiple attributes associated with each schedule activity, including predecessors, successors, resource requirements, constraints, and assumptions. Attributes are progressively elaborated.',
        category: 'output'
    },
    '里程碑清单': {
        zh: '里程碑清单是项目中的重要时间点或事件的列表。里程碑没有持续时间，是项目进度中的重要检查点，通常与阶段审查、交付物完成或关键决策点相关联。',
        en: 'A list of significant points or events in the project. Milestones have zero duration and serve as important checkpoints, typically associated with phase reviews or key decisions.',
        category: 'output'
    },
    '项目进度网络图': {
        zh: '项目进度网络图是展示项目活动之间逻辑依赖关系的图形化表示。它使用节点表示活动，用箭头表示依赖关系，帮助识别关键路径和潜在进度风险。',
        en: 'A graphical representation of the logical relationships (dependencies) among project schedule activities. It helps identify critical paths and potential schedule risks.',
        category: 'output'
    },
    '持续时间估算': {
        zh: '持续时间估算是完成每个项目活动所需的工作时段数的定量评估。它基于资源能力、工作量和可用性等因素，可结合类比估算、参数估算、三点估算等多种方法得出。',
        en: 'A quantitative assessment of the likely number of work periods required to complete an activity. It considers resource capabilities, effort, and availability.',
        category: 'output'
    },
    '成本估算': {
        zh: '成本估算是对完成项目活动所需资源的成本进行的近似计算。它包括完成项目所需的所有成本要素（人力、材料、设备、服务等），并随项目进展逐步精确化。',
        en: 'An approximation of the cost of resources needed to complete project work. It includes all cost elements and becomes progressively more accurate as the project evolves.',
        category: 'output'
    },
    '估算依据': {
        zh: '估算依据是支持成本估算或时间估算的详细说明文件。它记录估算所使用的假设条件、参考数据、计算方法和置信水平，为估算的可信度和可追溯性提供支撑。',
        en: 'Supporting documentation outlining the details used to establish cost or time estimates. It documents assumptions, data sources, methodology, and confidence levels.',
        category: 'output'
    },
    '资源需求': {
        zh: '资源需求是完成项目活动所需的资源类型和数量的详细列表。它明确了每个活动所需的人员、设备、材料和用品，是资源获取和分配的基础。',
        en: 'The types and quantities of resources required for each activity in the project. It identifies the specific personnel, equipment, materials, and supplies needed.',
        category: 'output'
    },
    '资源分解结构': {
        zh: '资源分解结构是按资源类别和类型对项目资源进行分层分解的表格。它帮助项目经理了解资源需求的全貌，并支持资源管理、成本估算和采购规划。',
        en: 'A hierarchical representation of resources by category and type. It provides a comprehensive view of resource needs for planning, estimating, and procurement.',
        category: 'output'
    },
    '进度基准': {
        zh: '进度基准是经过批准的进度计划版本，包含开始日期、完成日期和里程碑。它是衡量进度绩效的参照标准，只能通过正式的变更控制流程进行修改。',
        en: 'The approved version of the schedule model that includes start and finish dates and milestones. It serves as the reference for measuring schedule performance.',
        category: 'output'
    },
    '项目进度计划': {
        zh: '项目进度计划是展示项目活动计划开始和完成日期的模型。它可以是摘要级别的里程碑图，也可以是详细的网络图和甘特图，用于指导项目执行和监控。',
        en: 'An output of a schedule model that presents linked activities with planned dates, durations, milestones, and resources. It guides project execution and monitoring.',
        category: 'output'
    },
    '进度数据': {
        zh: '进度数据是用于创建和更新项目进度计划的所有支持性信息，包括进度活动、活动属性、假设条件和约束条件等。',
        en: 'The collection of information for describing and controlling the schedule, including schedule activities, activity attributes, assumptions, and constraints.',
        category: 'output'
    },
    '项目日历': {
        zh: '项目日历是标明项目工作可以执行的时间段的日历。它定义了工作日、非工作日和班次安排，用于确定项目活动的可行日期。',
        en: 'A calendar that identifies working days and shifts on which project activities can be performed. It distinguishes between available and unavailable periods.',
        category: 'output'
    },
    '成本基准': {
        zh: '成本基准是经过批准的、按时间段分配资金的完工预算（BAC）。它是衡量成本绩效的参照标准，包含应急储备，但不包括管理储备。',
        en: 'The approved version of the time-phased project budget (BAC), excluding management reserves. It serves as the reference for measuring cost performance.',
        category: 'output'
    },
    '项目资金需求': {
        zh: '项目资金需求是根据成本基准和预计支出模式确定的项目各阶段所需资金量的预测，包括总资金需求和阶段性资金需求。',
        en: 'The forecast of total and periodic funding requirements for the project, derived from the cost baseline and expected expenditure patterns.',
        category: 'output'
    },
    '质量管理计划': {
        zh: '质量管理计划是项目管理计划的子计划，描述项目团队如何执行质量政策、实施质量保证和控制质量活动。它定义了质量标准、角色职责以及质量管理工具和技术。',
        en: 'A subsidiary plan that describes how the project team will implement the quality policy, perform quality assurance, and control quality throughout the project.',
        category: 'output'
    },
    '质量测量指标': {
        zh: '质量测量指标是用于衡量项目过程和可交付成果质量水平的具体标准。它定义了"什么是合格"的可量化标准，为质量控制活动提供判断依据。',
        en: 'Specific, measurable standards that describe what quality means for a project process or deliverable. They provide the basis for quality control measurements.',
        category: 'output'
    },
    '资源管理计划': {
        zh: '资源管理计划描述如何识别、获取、管理、监控和释放项目所需实物资源和人力资源。它包括角色定义、责任分配、资源获取策略和资源释放计划。',
        en: 'A subsidiary plan that describes how physical and human resources will be identified, acquired, managed, monitored, and released throughout the project.',
        category: 'output'
    },
    '团队章程': {
        zh: '团队章程是团队共同制定的文件，明确团队成员的行为准则、沟通规范、决策流程和冲突解决方法。它为团队建立了共享的价值观和工作标准。',
        en: 'A document established by the team that clarifies team values, agreements, and operating guidelines. It sets shared expectations for team behavior and collaboration.',
        category: 'output'
    },
    '沟通管理计划': {
        zh: '沟通管理计划描述项目信息如何被规划、创建、分发、存储、检索、监控和处置。它定义了相关方的沟通需求、沟通方式、频率和责任人。',
        en: 'A subsidiary plan that describes how project communications will be planned, created, distributed, stored, retrieved, managed, and monitored.',
        category: 'output'
    },
    '风险管理计划': {
        zh: '风险管理计划是描述如何安排和实施项目风险管理活动的文件。它定义风险管理的方法论、角色职责、风险类别、风险概率和影响的定义标准、定期审查频率。',
        en: 'A subsidiary plan that describes how risk management activities will be structured and performed. It defines methodology, roles, risk categories, and probability/impact scales.',
        category: 'output'
    },
    '风险登记册': {
        zh: '风险登记册是记录已识别风险及其特征的文件，包括每个风险的原因、事件描述、潜在影响、风险应对策略和责任人。它是风险管理最重要的输出之一。',
        en: 'A document that records identified risks and their characteristics, including causes, events, potential impacts, planned responses, and risk owners.',
        category: 'output'
    },
    '风险报告': {
        zh: '风险报告是汇总项目整体风险敞口信息的文件，包括整体风险等级、风险趋势、关键风险的详细信息以及储备金使用分析。它支持高层管理决策。',
        en: 'A document that consolidates information on overall project risk exposure, including risk rankings, trends, detailed analysis of critical risks, and reserve usage.',
        category: 'output'
    },
    '相关方参与计划': {
        zh: '相关方参与计划是描述如何让相关方参与项目决策和执行的具体策略和行动计划。它基于相关方分析结果，定义了针对不同相关方的参与方式和沟通频率。',
        en: 'A subsidiary plan that describes the strategies and actions required to promote productive involvement of stakeholders in project decision making and execution.',
        category: 'output'
    },
    '问题日志': {
        zh: '问题日志是记录项目过程中出现的问题及其处理状态的文件。每个问题都记录其描述、提出人、优先级、责任人、解决措施和当前状态（开启/进行中/已解决）。',
        en: 'A project document that records issues that arise during the project and their resolution status. Issues are tracked from identification through to closure.',
        category: 'output'
    },
    '实物资源分配单': {
        zh: '实物资源分配单是记录项目所需材料、设备、用品等实物资源如何分配到各项活动中的文件，确保资源在需要的时间和地点可用。',
        en: 'A document that records the allocation of physical resources (materials, equipment, supplies) to project activities, ensuring availability at the right time and place.',
        category: 'output'
    },
    '项目团队派工单': {
        zh: '项目团队派工单是记录团队成员及其在项目中的具体角色和职责分配的文件。它将具体的人员分配到各个角色上，并提供联系信息和报告关系。',
        en: 'A document that records team members and their specific roles and responsibilities for the project. It assigns individuals to roles with contact and reporting information.',
        category: 'output'
    },
    '资源日历': {
        zh: '资源日历是标明每个项目资源（人员、设备等）可用时间段的日历。它用于确定资源的可用性、工作时间和休假时间，支持进度和资源规划。',
        en: 'A calendar that identifies the working days and availability periods for each resource (human and physical), supporting schedule and resource planning.',
        category: 'output'
    },
    '团队绩效评价': {
        zh: '团队绩效评价是对项目团队整体和个体成员绩效的正式评估，包括技术能力、协作能力、团队凝聚力和改进趋势。它为认可奖励和个人发展提供依据。',
        en: 'A formal assessment of the project team\'s overall and individual performance, including technical competencies, collaboration, cohesion, and improvement trends.',
        category: 'output'
    },
    '项目沟通': {
        zh: '项目沟通是项目执行过程中产生和分发的所有信息记录，包括会议纪要、状态报告、演示文档、邮件往来等。有效的项目沟通确保干系人及时获取所需信息。',
        en: 'All information artifacts generated and distributed during project execution, including meeting minutes, status reports, presentations, and correspondence.',
        category: 'output'
    },
    '选定的卖方': {
        zh: '选定的卖方是通过正式的采购评审和评估流程后被选中授予合同的供应商。选择基于预先确定的标准，如技术能力、价格、交付能力和过往业绩。',
        en: 'The sellers that have been selected through a formal procurement evaluation process and will be awarded contracts based on predetermined selection criteria.',
        category: 'output'
    },
    '协议': {
        zh: '协议是双方或多方之间达成的具有法律约束力的文件，定义了各方的权利、义务和交付内容。在项目管理中，协议通常指合同、服务级别协议(SLA)、谅解备忘录(MOU)等。',
        en: 'A legally binding document between two or more parties defining rights, obligations, and deliverables. In project management, this includes contracts, SLAs, and MOUs.',
        category: 'output'
    },
    '批准的变更请求': {
        zh: '批准的变更请求是经过实施整体变更控制流程审查并获批准的变更请求。只有批准的变更才能被实施并更新到项目管理计划和项目文件中。',
        en: 'Change requests that have been reviewed and approved through the Perform Integrated Change Control process. Only approved changes can be implemented.',
        category: 'output'
    },
    '变更日志': {
        zh: '变更日志是记录项目所有变更请求及其处理状态的文件，包括变更描述、提出人、审批人和处理结果。它提供项目所有变更的完整审计轨迹。',
        en: 'A comprehensive list of all change requests submitted during the project and their current status. It provides a complete audit trail of project changes.',
        category: 'output'
    },
    '质量控制测量结果': {
        zh: '质量控制测量结果是执行质量控制活动所产生的测量数据和结果。它包括缺陷率、一次通过率、返工率等指标，用于评估质量绩效和改进过程。',
        en: 'The documented results of Control Quality activities, including defect rates, first-pass yield, and rework rates. They are used to assess quality performance and drive improvements.',
        category: 'output'
    },
    '进度预测': {
        zh: '进度预测是根据当前进度绩效数据对项目未来完成日期进行的估算。它基于趋势分析，帮助项目经理判断项目是否能按计划完工或需要采取纠正措施。',
        en: 'Estimates of future project completion dates based on current schedule performance data and trend analysis. They help determine if corrective action is needed.',
        category: 'output'
    },
    '成本预测': {
        zh: '成本预测是根据当前成本绩效数据对项目完工总成本（EAC）进行的估算。它基于挣值分析等工具，帮助判断项目是否在预算内完成。',
        en: 'Estimates of the total project cost at completion (EAC) based on current cost performance data and earned value analysis. They support budget management decisions.',
        category: 'output'
    },
    '最终报告': {
        zh: '最终报告是项目或阶段结束时产生的总结性文件，包括项目目标达成情况、最终绩效数据、经验教训总结、剩余事项和项目移交确认等信息。',
        en: 'A summary document produced at project or phase closure, including achievement of objectives, final performance data, lessons learned, and handover confirmation.',
        category: 'output'
    },
    // ===== 输入文件 / Input Documents =====
    '项目工作说明书 (SOW)': {
        zh: '项目工作说明书是由项目发起人或客户提供的对项目所需交付的产品、服务或成果的书面叙述性描述。它包括业务需求、产品范围描述和战略计划三部分。',
        en: 'A narrative description of products, services, or results to be delivered by the project, provided by the sponsor or customer. It includes business need, product scope, and strategic plan.',
        category: 'input'
    },
    '商业论证': {
        zh: '商业论证是论证项目是否值得投资的文档，包含项目的商业需求分析和成本效益分析。它用于判断项目的可行性和预期投资回报，是项目启动阶段的关键决策依据。',
        en: 'A documented economic feasibility study that validates the business need for the project. It includes cost-benefit analysis and ROI justification for project authorization.',
        category: 'input'
    },
    '效益管理计划': {
        zh: '效益管理计划是描述项目产生效益的方式、时间和衡量标准的文件。它定义了如何实现和跟踪项目效益，确保项目交付的价值能被持续监测和验证。',
        en: 'A document that describes how and when the benefits of the project will be delivered, measured, and sustained. It ensures project value is tracked and validated.',
        category: 'input'
    },
    '事业环境因素': {
        zh: '事业环境因素是项目团队不能直接控制但会影响项目的内外部条件，包括组织文化、人力资源政策、市场条件、法律法规、技术基础设施、相关方的期望和风险承受力等。',
        en: 'Conditions not under the control of the project team that influence, constrain, or direct the project. This includes organizational culture, market conditions, regulations, and infrastructure.',
        category: 'input'
    },
    '组织过程资产': {
        zh: '组织过程资产是组织拥有的可被项目利用的任何过程相关资产，包括正式和非正式的计划、政策、流程、指南、模板、知识库和以往项目的经验教训。',
        en: 'The plans, processes, policies, procedures, and knowledge bases specific to and used by the performing organization. This includes templates, guidelines, and lessons learned repositories.',
        category: 'input'
    },
    '采购文件': {
        zh: '采购文件是用于向潜在卖方征求建议或报价的文件，包括招标文件（RFP/RFQ/IFB）、采购工作说明书、合同条款等。它们是实施采购流程的基础输入。',
        en: 'Documents used to solicit proposals or bids from potential sellers, including RFPs, RFQs, IFBs, procurement SOW, and contract terms.',
        category: 'input'
    },
    '卖方建议书': {
        zh: '卖方建议书是潜在供应商为响应采购文件而提交的正式回复文件，包括技术方案、商业报价和实施计划。项目团队通过评估建议书来选择最佳供应商。',
        en: 'Formal responses submitted by potential sellers in response to procurement documents, including technical proposals, commercial offers, and implementation plans.',
        category: 'input'
    },
    '项目文件': {
        zh: '项目文件是项目中产生的各类文件的总称，包括需求文件、活动清单、风险登记册、相关方登记册、假设日志、变更日志等。项目管理过程中的多数流程都会参考和更新项目文件。',
        en: 'The collective term for all documents produced during the project, including requirements documentation, activity lists, risk register, stakeholder register, and change log.',
        category: 'input'
    },
    '商业文件': {
        zh: '商业文件是项目启动前的商业分析文档，包括商业论证和效益管理计划。它们为项目提供商业合理性支撑，是制定预算和评估项目价值的重要参考依据。',
        en: 'Pre-project business analysis documents including the business case and benefits management plan. They provide business justification and value assessment references.',
        category: 'input'
    },
    // ===== 工具与技术 / Tools & Techniques =====
    '专家判断': {
        zh: '专家判断是基于特定知识领域或行业具有专业知识和经验的个人或小组提供的意见和见解。专家判断几乎应用于所有项目管理流程，为决策提供专业支撑，弥补数据和信息不足。',
        en: 'Judgment provided based upon expertise in an application area, knowledge area, discipline, or industry. It is the most widely used technique across all project management processes.',
        category: 'tool'
    },
    '数据收集': {
        zh: '数据收集是获取项目决策所需信息的各种方法的统称，包括头脑风暴、访谈、焦点小组、核对单、问卷和调查、标杆对照等。数据收集是分析和决策的基础前提。',
        en: 'A set of techniques used to gather information for project decisions, including brainstorming, interviews, focus groups, checklists, questionnaires, and benchmarking.',
        category: 'tool'
    },
    '数据分析': {
        zh: '数据分析是检查和解释项目数据的各种技术的统称，包括偏差分析、趋势分析、挣值分析、根本原因分析、备选方案分析、成本效益分析和决策树分析。',
        en: 'A set of techniques used to examine and interpret project data, including variance analysis, trend analysis, earned value analysis, root cause analysis, and alternatives analysis.',
        category: 'tool'
    },
    '人际关系与团队技能': {
        zh: '人际关系与团队技能是项目经理和团队成员用于有效互动和协作的软技能组合，包括领导力、沟通、谈判、冲突管理、激励、团队建设、情商和影响力。',
        en: 'The set of soft skills used by project managers and team members for effective interaction, including leadership, communication, negotiation, conflict management, and emotional intelligence.',
        category: 'tool'
    },
    '会议': {
        zh: '会议是项目相关方为讨论、决策和协调而聚集在一起的正式或非正式活动。会议可以是面对面的、虚拟的或混合形式的，是项目沟通和决策的最常用方式之一。',
        en: 'Formal or informal gatherings where project stakeholders come together to discuss, decide, and coordinate. Meetings can be face-to-face, virtual, or hybrid.',
        category: 'tool'
    },
    '数据表现': {
        zh: '数据表现是将数据和信息以可视化形式呈现的技术，包括矩阵图、流程图、因果图、直方图、散点图、控制图和思维导图。可视化有助于识别模式、趋势和异常。',
        en: 'Techniques for visualizing data and information, including matrix diagrams, flowcharts, cause-and-effect diagrams, histograms, scatter diagrams, and control charts.',
        category: 'tool'
    },
    '项目管理信息系统': {
        zh: '项目管理信息系统是用于收集、整合和分发项目管理信息的自动化系统，包括进度管理软件、配置管理系统、信息分发系统和协作平台。它是项目信息管理的基础设施。',
        en: 'An automated system for collecting, integrating, and distributing project management information, including scheduling software, configuration management, and collaboration platforms.',
        category: 'tool'
    },
    '决策': {
        zh: '决策是项目管理中从多种选项中选出最佳方案的过程，包括投票、多标准决策分析(MCDA)、独裁决策和团队共识等具体技术。决策贯穿于所有项目管理流程。',
        en: 'The process of selecting the best course of action from multiple alternatives, including voting, multi-criteria decision analysis (MCDA), autocratic decisions, and consensus.',
        category: 'tool'
    },
    '分解': {
        zh: '分解是将项目范围和可交付成果逐层细分为更小、更易于管理的组件（工作包）的技术。它是创建WBS、定义活动和估算资源的基础技术。',
        en: 'A technique for subdividing project scope and deliverables into smaller, more manageable components (work packages). It is fundamental to creating the WBS and defining activities.',
        category: 'tool'
    },
    '原型法': {
        zh: '原型法是通过创建产品模型（原型）来获取需求反馈和验证设计的方法。原型可以是低保真（纸面模型、线框）或高保真（可交互的电子原型），帮助减少需求理解偏差。',
        en: 'A method of obtaining early feedback on requirements by creating a working model (prototype) of the expected product. Prototypes can be low-fidelity or high-fidelity.',
        category: 'tool'
    },
    '产品分析': {
        zh: '产品分析是对产品功能和特性进行系统分析的过程，包括系统工程、价值工程、价值分析和功能分析等方法，用于将高层级的产品描述分解为详细的可交付成果。',
        en: 'A systematic analysis of product functions and features, including systems engineering, value engineering, value analysis, and functional analysis, to define detailed deliverables.',
        category: 'tool'
    },
    '滚动式规划': {
        zh: '滚动式规划是一种迭代式的、渐进明细的规划技术，对近期需要完成的工作进行详细规划，对远期工作则保留在较高层级的粗粒度规划，随着项目的进展逐步细化。',
        en: 'An iterative planning technique where work to be accomplished in the near term is planned in detail, while future work is planned at a higher level, progressively elaborated over time.',
        category: 'tool'
    },
    '提前量和滞后量': {
        zh: '提前量和滞后量是用于调整活动间逻辑关系的技术。提前量是后续活动可以提前于前置活动开始的时间量（加速），滞后量是后续活动需要在前置活动完成后等待的时间量（延迟）。',
        en: 'Techniques for adjusting logical relationships between activities. Lead accelerates successor start; lag creates a waiting period between predecessor completion and successor start.',
        category: 'tool'
    },
    '紧前关系绘图法': {
        zh: '紧前关系绘图法是创建进度模型的技术，用节点表示活动，用箭头表示活动之间的依赖关系。它定义了四种依赖类型：完成到开始(FS)、开始到开始(SS)、完成到完成(FF)、开始到完成(SF)。',
        en: 'A technique for constructing a schedule model where activities are represented by nodes and linked by logical relationships: Finish-to-Start, Start-to-Start, Finish-to-Finish, Start-to-Finish.',
        category: 'tool'
    },
    '类比估算': {
        zh: '类比估算是利用以往类似项目的实际数据（成本、持续时间、资源）来估算当前项目参数的技术。它快速但精度较低，适用于项目早期或信息不足时。',
        en: 'A technique for estimating costs or durations using historical data from similar projects as the basis. It is faster but less accurate, suitable for early project stages.',
        category: 'tool'
    },
    '参数估算': {
        zh: '参数估算是基于历史数据和项目参数之间的统计关系来估算成本和持续时间的技术。它使用数学算法（如单位成本×数量），精确度高于类比估算。',
        en: 'An estimating technique using statistical relationships between historical data and project parameters (e.g., cost per unit × quantity). More accurate than analogous estimating.',
        category: 'tool'
    },
    '三点估算': {
        zh: '三点估算是通过考虑估算中的不确定性和风险来提高持续时间估算准确度的技术。它使用乐观(O)、最可能(M)和悲观(P)三个值，计算期望值 = (O+4M+P)/6。',
        en: 'A technique that improves estimation accuracy by considering uncertainty: optimistic (O), most likely (M), and pessimistic (P) values. Expected = (O+4M+P)/6.',
        category: 'tool'
    },
    '自下而上估算': {
        zh: '自下而上估算是将工作分解到最详细的工作包层级进行估算，然后逐层向上汇总得到项目总估算的技术。它精度最高但耗时最多。',
        en: 'A technique that estimates individual work packages in detail and rolls them up to higher levels for project totals. It provides the highest accuracy but requires the most effort.',
        category: 'tool'
    },
    '进度网络分析': {
        zh: '进度网络分析是用于创建和优化项目进度计划的一系列技术的统称，包括关键路径法、关键链法、资源优化技术和假设情景分析。',
        en: 'A set of techniques for creating and optimizing the project schedule, including critical path method, critical chain method, resource optimization, and what-if scenario analysis.',
        category: 'tool'
    },
    '关键路径法': {
        zh: '关键路径法是识别项目中最长活动路径并计算总浮动时间的技术。关键路径决定了项目的总工期，其上的活动无浮动时间，任何延误都会直接影响项目完工日期。',
        en: 'A method to estimate the minimum project duration and determine the amount of scheduling flexibility. The critical path is the longest sequence of activities with zero total float.',
        category: 'tool'
    },
    '资源优化': {
        zh: '资源优化是在资源约束条件下调整活动开始和完成日期，包括资源平衡（可能导致关键路径延长）和资源平滑（不改变关键路径）两种技术。',
        en: 'A technique to adjust activity dates to match resource availability. Resource leveling may extend the critical path; resource smoothing does not change the critical path.',
        category: 'tool'
    },
    '进度压缩': {
        zh: '进度压缩是在不缩减范围的前提下缩短项目工期的技术，包括赶工（增加资源来压缩工期，通常增加成本）和快速跟进（将活动并行化执行，通常增加风险和返工）。',
        en: 'Techniques to shorten schedule duration without reducing scope: Crashing adds resources (increases cost); Fast tracking parallelizes activities (increases risk).',
        category: 'tool'
    },
    '资金限制平衡': {
        zh: '资金限制平衡是在项目资金有限制的条件下，调整活动的时间安排以符合资金可用性的技术。它确保各阶段的成本支出不超过可用的资金额度。',
        en: 'A technique that adjusts activity schedules to align with funding constraints, ensuring periodic expenditures do not exceed available funding limits.',
        category: 'tool'
    },
    '资金筹措': {
        zh: '资金筹措是确定项目所需资金来源和获取方式的过程，包括内部资金、外部融资、银行贷款或供应商融资等多种渠道。',
        en: 'The process of identifying and acquiring funding for the project from internal sources, external financing, bank loans, or supplier financing.',
        category: 'tool'
    },
    '测试和检查的规划': {
        zh: '测试和检查的规划是在质量管理计划中确定如何测试和检验产品的技术。它定义了测试策略、测试用例、验收标准和检查频次。',
        en: 'The technique of determining how products will be tested and inspected as part of the quality management plan, defining test strategies, cases, and acceptance criteria.',
        category: 'tool'
    },
    '组织理论': {
        zh: '组织理论是关于组织行为、结构、文化和变革管理的理论知识。在规划资源管理时用于理解组织如何运作以及如何最佳地设计和配置项目团队。',
        en: 'Knowledge about organizational behavior, structure, culture, and change management. Used in resource planning to design and configure project teams effectively.',
        category: 'tool'
    },
    '沟通需求分析': {
        zh: '沟通需求分析是确定相关方信息需求的技术，通过分析相关方的角色、位置、信息需求的紧迫性、信息的保密性要求和沟通渠道来确定沟通策略。',
        en: 'A technique for determining stakeholder communication needs by analyzing roles, locations, urgency, confidentiality requirements, and communication channels.',
        category: 'tool'
    },
    '沟通技术': {
        zh: '沟通技术是实现项目沟通所使用的具体技术手段，包括电子邮件、即时消息、视频会议、协作平台和社交媒体。选择合适的技术取决于沟通的紧迫性、可用性和信息敏感度。',
        en: 'Specific technologies used for project communications, including email, instant messaging, video conferencing, collaboration platforms, and social media.',
        category: 'tool'
    },
    '沟通模型': {
        zh: '沟通模型是描述信息如何在发送方和接收方之间传递的理论模型，包括基本的发送-接收模型和互动模型。它强调编码、传输、解码、反馈和噪音等要素。',
        en: 'A theoretical model describing how information flows between sender and receiver, including encoding, transmission, decoding, feedback, and noise elements.',
        category: 'tool'
    },
    '沟通方法': {
        zh: '沟通方法是项目团队与相关方进行交流的方式，包括互动式沟通（会议、对话）、推送式沟通（邮件、报告）和拉取式沟通（知识库、网站）。',
        en: 'Methods for communicating with stakeholders: interactive (meetings, conversations), push (emails, reports), and pull (knowledge bases, websites).',
        category: 'tool'
    },
    '风险类别': {
        zh: '风险类别是按风险来源或性质对风险进行分类的框架，如技术风险、管理风险、商业风险和外部风险。风险分解结构(RBS)是常用的风险分类工具。',
        en: 'A framework for categorizing risks by source or nature, such as technical, management, commercial, and external risks. The Risk Breakdown Structure (RBS) is a common tool.',
        category: 'tool'
    },
    '提示清单': {
        zh: '提示清单是用于激发风险识别的结构化问题列表，帮助团队系统地思考各领域的潜在风险。它是识别风险流程中的重要辅助工具。',
        en: 'A structured list of questions used to stimulate risk identification by systematically prompting consideration of potential risks in each area.',
        category: 'tool'
    },
    '模拟': {
        zh: '模拟是使用计算机模型来估算项目结果的概率分布的技术。蒙特卡罗模拟是最常用的方法，用于分析成本和进度风险的整体影响。',
        en: 'A technique using computer models to estimate probability distributions of project outcomes. Monte Carlo simulation is the most common method for cost and schedule risk analysis.',
        category: 'tool'
    },
    '敏感性分析': {
        zh: '敏感性分析是确定各个风险因素对项目结果影响程度的技术，常用龙卷风图表示。它帮助识别对项目目标影响最大的关键风险因素。',
        en: 'A technique to determine which risks have the most potential impact on the project, often displayed as a tornado diagram. It identifies the most critical risk factors.',
        category: 'tool'
    },
    '决策树分析': {
        zh: '决策树分析是使用树形结构来评估不同决策方案和不确定结果的期望货币价值(EMV)的技术。它在有多种可选方案和风险情景时尤其有用。',
        en: 'A technique using a tree structure to evaluate expected monetary value (EMV) of different decision alternatives under uncertainty. Useful when multiple options and risk scenarios exist.',
        category: 'tool'
    },
    '影响图': {
        zh: '影响图是显示项目各要素之间因果关系和影响路径的图形化表示，包括决策节点、不确定性节点和结果节点。它是定量风险分析和决策分析的高级工具。',
        en: 'A graphical representation of causal relationships and influence paths among project elements, including decision nodes, uncertainty nodes, and outcome nodes.',
        category: 'tool'
    },
    '威胁应对策略': {
        zh: '威胁应对策略是针对负面风险（威胁）的五种应对方法：规避（消除威胁源）、转移（将风险转移给第三方）、减轻（降低概率或影响）、接受（被动或主动）、上报（超出项目权限）。',
        en: 'Five strategies for negative risks: Escalate, Avoid (eliminate threat), Transfer (shift to third party), Mitigate (reduce probability/impact), and Accept (passive or active).',
        category: 'tool'
    },
    '机会应对策略': {
        zh: '机会应对策略是针对正面风险（机会）的五种应对方法：上报、开拓（确保机会实现）、分享（与第三方共同利用）、增强（提高概率或影响）、接受。',
        en: 'Five strategies for positive risks: Escalate, Exploit (ensure opportunity realized), Share (partner with third party), Enhance (increase probability/impact), and Accept.',
        category: 'tool'
    },
    '应急应对策略': {
        zh: '应急应对策略是为特定风险事件制定的、在特定触发条件发生时执行的备用计划。应急计划定义了"如果...则..."的具体行动方案。',
        en: 'Predefined contingency plans that are executed when specific risk trigger conditions are met. They define specific "if-then" action plans for identified risks.',
        category: 'tool'
    },
    '整体项目风险应对策略': {
        zh: '整体项目风险应对策略是针对项目整体风险敞口（而非单个风险）的应对方法，包括规避、开拓、转移/分享、减轻/增强和接受等策略。',
        en: 'Strategies for addressing overall project risk exposure (rather than individual risks), including avoid, exploit, transfer/share, mitigate/enhance, and accept.',
        category: 'tool'
    },
    '预分派': {
        zh: '预分派是指在项目启动前或启动阶段就已确定特定人员将加入项目团队的情况。这通常是因为合同约定、特定专业技能的唯一可用性或项目章程中指定的角色。',
        en: 'The situation where specific team members are identified before or during project initiation, often due to contract requirements, unique expertise, or charter specifications.',
        category: 'tool'
    },
    '虚拟团队': {
        zh: '虚拟团队是地理上分散但通过技术手段协同工作的团队。虚拟团队面临沟通和文化差异的挑战，但提供了获取全球人才和降低办公成本的优势。',
        en: 'Teams that are geographically dispersed but collaborate through technology. Virtual teams face communication and cultural challenges but offer access to global talent and cost savings.',
        category: 'tool'
    },
    '培训': {
        zh: '培训是提升项目团队成员技能和能力的有计划的活动，可以是在职培训、正式课堂培训、在线课程或导师辅导。培训是团队建设的重要工具。',
        en: 'Planned activities to enhance team member skills and competencies, including on-the-job training, formal classroom training, online courses, or mentoring.',
        category: 'tool'
    },
    '团队建设活动': {
        zh: '团队建设活动是帮助团队成员建立信任、改善沟通和增强凝聚力的活动，从简单的团队聚餐到复杂的户外体验式活动。有效的团队建设提高团队绩效和士气。',
        en: 'Activities designed to build trust, improve communication, and enhance cohesion among team members, ranging from simple team lunches to complex experiential exercises.',
        category: 'tool'
    },
    '集中办公': {
        zh: '集中办公是将项目团队成员安排在同一物理空间工作以提高沟通效率和协作能力的策略。即使是临时的集中安排（如作战室）也能显著改善团队协同。',
        en: 'A strategy of placing team members in the same physical location to enhance communication and collaboration. Even temporary colocation (war rooms) significantly improves teamwork.',
        category: 'tool'
    },
    '认可与奖励': {
        zh: '认可与奖励是对团队成员优秀表现和贡献进行正式或非正式表彰的管理工具。有效的认可体系能激励团队、提高士气和减少人员离职。',
        en: 'Formal and informal recognition of team members for outstanding performance and contributions. An effective recognition system motivates the team and reduces turnover.',
        category: 'tool'
    },
    '沟通技能': {
        zh: '沟通技能是项目经理用于有效传递和接收信息的能力，包括积极倾听、清晰表达、非语言沟通、演讲陈述和跨文化沟通。沟通技能是项目管理的核心竞争力。',
        en: 'The abilities to effectively transmit and receive information, including active listening, clear expression, nonverbal communication, presentations, and cross-cultural communication.',
        category: 'tool'
    },
    '反馈': {
        zh: '反馈是向个人或团队提供关于其绩效或工作成果的信息，以促进学习和改进的过程。有效的反馈是及时的、具体的、建设性的和面向行为的。',
        en: 'The process of providing information to individuals or teams about their performance or work results to promote learning and improvement. Effective feedback is timely, specific, and constructive.',
        category: 'tool'
    },
    '基本规则': {
        zh: '基本规则是团队共同商定的行为准则和参与规范，为团队互动提供框架。明确的基本规则减少误解和冲突，提高会议和协作的效率。',
        en: 'Agreed-upon behavioral guidelines and participation norms established by the team. Clear ground rules reduce misunderstandings and improve meeting and collaboration efficiency.',
        category: 'tool'
    },
    '广告': {
        zh: '广告是通过公开渠道发布采购信息以吸引潜在供应商参与竞标的活动，包括在招标网站、行业期刊或社交平台上发布招标公告，扩大供应商参与范围。',
        en: 'The activity of publishing procurement information through public channels to attract potential sellers, including posting bid notices on procurement websites, industry journals, or social platforms.',
        category: 'tool'
    },
    '投标人会议': {
        zh: '投标人会议是在投标前为潜在供应商召开的说明会，用于解答投标人对采购文件的问题和澄清采购要求。所有供应商都能平等获取澄清信息。',
        en: 'Pre-bid meetings held with potential sellers to answer questions and clarify procurement requirements. All sellers receive equal access to clarified information.',
        category: 'tool'
    },
    '建议书评价': {
        zh: '建议书评价是根据预先定义的评估标准系统评估供应商建议书的技术和商务内容，以选择最佳供应商的过程。通常使用加权评分方法进行多维度的综合评价。',
        en: 'The systematic evaluation of seller proposals against predefined criteria to select the best seller, typically using weighted scoring methods for multi-dimensional assessment.',
        category: 'tool'
    },
    '检查': {
        zh: '检查是对可交付成果进行检验以确认其是否符合需求和质量标准的活动，包括审查、同行评审、审计和走查等形式。检查是控制和确认质量的核心手段。',
        en: 'The activity of examining deliverables to verify conformance to requirements and quality standards, including reviews, peer reviews, audits, and walkthroughs.',
        category: 'tool'
    },
    '变更控制工具': {
        zh: '变更控制工具是用于管理变更请求和变更流程的系统和程序，包括变更请求提交表单、变更评审工作流和变更状态追踪功能。它确保变更流程的规范化和可追溯性。',
        en: 'Systems and procedures for managing change requests and change workflows, including submission forms, review workflows, and status tracking to ensure standardization and traceability.',
        category: 'tool'
    },
    '历史信息': {
        zh: '历史信息是组织从以往项目中积累的知识和数据，包括以往类似项目的成本数据、时间数据、风险信息和经验教训。历史信息是提升估算精确度的重要参考资料。',
        en: 'Knowledge and data accumulated from previous projects, including cost data, time data, risk information, and lessons learned. It serves as a reference for improving estimation accuracy.',
        category: 'tool'
    },
    '完工尚需绩效指数': {
        zh: '完工尚需绩效指数(TCPI)是衡量完成剩余工作所需达到的成本绩效水平的指标。TCPI = (BAC-EV)/(BAC-AC) 或 (BAC-EV)/(EAC-AC)，大于1表示需要提升效率才能完成目标。',
        en: 'The cost performance that must be achieved on the remaining work to meet a specified management goal. TCPI = (BAC-EV)/(BAC-AC) or (BAC-EV)/(EAC-AC). A value >1 means efficiency must improve.',
        category: 'tool'
    },
    '测试': {
        zh: '测试是对可交付成果进行功能、性能、安全等方面的验证活动，以确认其满足质量要求。测试类型包括单元测试、集成测试、系统测试、验收测试和回归测试。',
        en: 'Verification activities that check deliverables for functional, performance, security, and other quality requirements. Types include unit, integration, system, acceptance, and regression testing.',
        category: 'tool'
    },
    // ===== 其他 / Other =====
    '其他规划过程的输出': {
        zh: '其他规划过程的输出是指在制定项目管理计划时，来自其他各规划流程（范围、进度、成本、质量、资源等）的输出，它们被整合到综合项目管理计划中。',
        en: 'The outputs from other planning processes (scope, schedule, cost, quality, resources, etc.) that are integrated into the comprehensive project management plan.',
        category: 'input'
    },
    '项目文件更新': {
        zh: '项目文件更新是指在执行项目管理流程后对相关项目文件进行的更新和修订。这是一个通用的输出概念，表示流程完成后需要更新相关的项目文件。',
        en: 'Updates and revisions to project documents resulting from the execution of project management processes. This is a general output concept indicating documents need updating.',
        category: 'output'
    },
    '项目管理计划更新': {
        zh: '项目管理计划更新是指经批准的变更实施后对项目管理计划或其子计划的更新和修订。只有经过变更控制流程批准的变更才能导致项目管理计划更新。',
        en: 'Updates to the project management plan or its subsidiary plans resulting from approved changes. Only changes approved through the change control process may update the plan.',
        category: 'output'
    },
    '组织过程资产更新': {
        zh: '组织过程资产更新是指将项目期间积累的知识、经验和文档添加到组织的过程资产库中，供未来项目参考和利用。这包括经验教训、模板改进和最佳实践记录。',
        en: 'The addition of knowledge, experience, and documentation accumulated during the project to the organizational process asset repository for future project reference.',
        category: 'output'
    }
};

// Default definition for items not explicitly listed
export function getDefinition(itemName, type) {
    if (ittoDefinitions[itemName]) return ittoDefinitions[itemName];
    const key = itemName.trim();
    if (ittoDefinitions[key]) return ittoDefinitions[key];
    // Return generic placeholder
    return {
        zh: `"${itemName}"是项目管理中的重要${type === 'tool' ? '工具/技术' : type === 'input' ? '输入' : '输出'}。定义待补充。`,
        en: `\"${itemName}\" is an important project management ${type === 'tool' ? 'Tool/Technique' : type === 'input' ? 'Input' : 'Output'}. Definition to be supplemented.`,
        category: type
    };
}
