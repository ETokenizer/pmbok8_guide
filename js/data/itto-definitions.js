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
    },
    // ===== PMBOK8 新增/增强定义 (New/Enhanced PMBOK8 Definitions) =====

    // --- Outputs ---
    '项目章程': {
        zh: '项目章程是由项目发起人或委托人正式签署的文件，正式授权项目的存在，并授予项目经理动用组织资源开展项目活动的权力。它定义了项目的高层级目标、范围、关键相关方、总体里程碑和预算概要，建立了项目与组织战略目标之间的直接联系。',
        en: 'A document issued by the project sponsor that formally authorizes the existence of a project and provides the project manager with the authority to apply organizational resources. It establishes the connection between the project and organizational strategy.',
        category: 'output'
    },
    '假设日志': {
        zh: '假设日志是记录项目所有假设条件和制约因素的文件。假设是在规划过程中被认为是真实、确定的条件，制约因素是对项目执行有限制作用的因素。假设日志需在整个项目生命周期中持续更新和监控，确保假设仍然有效。',
        en: 'A project document that records all assumptions and constraints identified for the project. Assumptions are factors considered true for planning purposes; constraints are limiting factors that restrict the team\'s options.',
        category: 'output'
    },
    '采购策略计划（含自制或外购决策）': {
        zh: '采购策略计划是定义项目如何进行采购的文档，包括自制或外购决策、采购方法选择、合同类型和供应商选择标准。它是治理绩效域中规划采购策略流程的核心输出。',
        en: 'A document defining how procurement will be conducted, including make-or-buy decisions, procurement methods, contract types, and supplier selection criteria. Core output of the Plan Sourcing Strategy process in the Governance Performance Domain.',
        category: 'output'
    },
    '经验教训登记册': {
        zh: '经验教训登记册是记录项目过程中获得的经验和知识的文档，包括成功经验、失败教训、改进建议和最佳实践。它在整个项目生命周期中不断更新，收尾时纳入组织过程资产供未来项目参考。',
        en: 'A project document that records knowledge and experience gained during the project, including successes, failures, improvement suggestions, and best practices. Updated throughout the project lifecycle and transferred to OPAs at closure.',
        category: 'output'
    },
    '质量报告': {
        zh: '质量报告是汇总项目质量绩效信息的文档，包括质量测量结果、审计发现、缺陷分析和改进建议。它为管理评审和质量决策提供依据，是管理质量保证流程的关键输出。',
        en: 'A document aggregating project quality performance information including quality measurements, audit findings, defect analysis, and improvement recommendations. Provides the basis for management review and quality decisions.',
        category: 'output'
    },
    '财务管理计划': {
        zh: '财务管理计划是描述项目资金如何筹措、分配、监控和控制的文档。它包括资金筹措策略、财务控制方法、现金流预测和报告机制，确保项目在批准的财务框架内运行。',
        en: 'A subsidiary plan describing how project funding will be raised, allocated, monitored, and controlled. Includes funding strategy, financial control methods, cash flow forecasting, and reporting mechanisms.',
        category: 'output'
    },
    '项目团队绩效报告': {
        zh: '项目团队绩效报告是对团队整体和个体成员表现的正式评估文档，涵盖技术能力、协作效果、改进趋势和发展建议。它支持认可奖励、培训规划和团队优化决策。',
        en: 'A formal assessment document evaluating overall and individual team member performance, covering technical competencies, collaboration effectiveness, improvement trends, and development recommendations.',
        category: 'output'
    },
    '项目沟通工件': {
        zh: '项目沟通工件是项目执行过程中产生和分发的所有信息记录的总称，包括会议纪要、状态报告、演示文档、邮件往来和协作平台记录。它们确保项目信息的完整性和可追溯性。',
        en: 'The collective term for all information artifacts generated and distributed during project execution, including meeting minutes, status reports, presentations, emails, and collaboration platform records.',
        category: 'output'
    },
    '收益与成本预测': {
        zh: '收益与成本预测是基于当前财务绩效数据和趋势分析对未来项目收益和完工成本进行的估算。它使用挣值分析（EVM）等工具帮助判断项目是否在预算内完成并实现预期价值。',
        en: 'Estimates of future project benefits and completion costs based on current financial performance data and trend analysis. Uses EVM and other tools to determine if the project will finish within budget and deliver expected value.',
        category: 'output'
    },
    '资金筹措策略': {
        zh: '资金筹措策略是确定和获取项目所需资金的计划，包括资金来源（内部资金、外部融资、银行贷款等）、获取时机和条件。它是财务管理计划的核心组成部分。',
        en: 'A plan for identifying and acquiring project funding, including funding sources (internal, external, bank loans), timing, and conditions. Core component of the Financial Management Plan.',
        category: 'output'
    },
    '用户故事': {
        zh: '用户故事是从最终用户视角对所需功能的简短自然语言描述，通常遵循"作为...，我想要...，以便..."的格式。它是敏捷项目中定义和沟通需求的主要工具，是产品待办列表的基本组成单元。',
        en: 'A short, natural-language description of a desired feature from the end-user perspective, typically following "As a..., I want..., so that..." format. Primary tool for defining and communicating requirements in agile projects; basic unit of the product backlog.',
        category: 'output'
    },
    '产品待办列表': {
        zh: '产品待办列表是敏捷项目中所有已知需求的优先级排序列表，由产品负责人（PO）负责维护。它包含用户故事、Bug修复、技术任务等，是团队工作的唯一来源，随着项目进展而动态调整。',
        en: 'A prioritized list of all known requirements in an agile project, maintained by the Product Owner (PO). Contains user stories, bug fixes, technical tasks, etc. Serves as the single source of work for the team and evolves dynamically.',
        category: 'output'
    },
    '风险管理计划': {
        zh: '风险管理计划是描述如何安排和实施项目风险管理活动的文件。它定义风险管理的方法论、角色职责、风险类别、概率和影响定义标准、定期审查频率以及应急储备的使用规则。',
        en: 'A subsidiary plan describing how risk management activities will be structured and performed. Defines methodology, roles, risk categories, probability/impact scales, review frequency, and contingency reserve usage rules.',
        category: 'output'
    },
    '进度基准': {
        zh: '进度基准是经过批准的进度计划版本，包含开始日期、完成日期和里程碑。它是衡量进度绩效的参照标准，只能通过正式的变更控制流程进行修改。是项目管理计划三大基准之一。',
        en: 'The approved version of the schedule model that includes start dates, finish dates, and milestones. Serves as the reference for measuring schedule performance. One of the three major baselines in the project management plan.',
        category: 'output'
    },
    '成本基准': {
        zh: '成本基准是经过批准的、按时间段分配资金的完工预算（BAC）。它是衡量成本绩效的参照标准，包含应急储备但不包括管理储备。是项目管理计划三大基准之一。',
        en: 'The approved version of the time-phased project budget (BAC), excluding management reserves. Serves as the reference for measuring cost performance. One of the three major baselines in the project management plan.',
        category: 'output'
    },
    '应对措施': {
        zh: '应对措施是针对已识别风险制定的具体行动方案，包括威胁应对（规避/转移/减轻/接受）和机会应对（开拓/分享/增强/接受）两类策略。应对措施需明确责任人、资源和实施时机。',
        en: 'Specific action plans developed for identified risks, including threat responses (Avoid/Transfer/Mitigate/Accept) and opportunity responses (Exploit/Share/Enhance/Accept). Each response must specify owner, resources, and implementation timing.',
        category: 'output'
    },

    // --- Tools & Techniques ---
    '项目画布': {
        zh: '项目画布是PMBOK第8版引入的可视化工具，用于在启动阶段全面梳理项目的关键要素。它类似商业模式画布，以图形化方式呈现项目目标、范围、相关方、资源、风险和效益，帮助团队快速达成共识。',
        en: 'A visual tool introduced in PMBOK 8th Edition for comprehensively mapping key project elements during initiation. Similar to the Business Model Canvas, it graphically presents project objectives, scope, stakeholders, resources, risks, and benefits to help the team quickly reach consensus.',
        category: 'tool'
    },
    '项目仪表盘': {
        zh: '项目仪表盘是实时展示项目关键绩效指标（KPI）的可视化工具，通常包含进度、成本、质量、风险等维度的实时数据。它支持快速决策，是信息辐射体的一种形式，用于监控项目绩效流程。',
        en: 'A visual tool that displays real-time project key performance indicators (KPIs), typically covering schedule, cost, quality, and risk dimensions. Supports rapid decision-making as a form of information radiator used in the Monitor and Control Project Performance process.',
        category: 'tool'
    },
    '信息辐射体': {
        zh: '信息辐射体是敏捷实践中广泛使用的可视化工具，将项目关键信息（进度、障碍、质量）公开展示在物理或数字面板上，使所有路过的相关方无需专门询问即可获取信息。如燃尽图、看板、任务墙等。',
        en: 'A visual tool widely used in agile practices that publicly displays key project information (progress, impediments, quality) on physical or digital boards, allowing anyone passing by to absorb information without asking. Examples include burndown charts, Kanban boards, and task walls.',
        category: 'tool'
    },
    '职责分配矩阵（RAM）': {
        zh: '职责分配矩阵是展示项目资源在各个工作包或活动中的分配情况的表格，RACI矩阵是最常见的形式（Responsible负责/Accountable问责/Consulted咨询/Informed知会）。它确保每项工作都有明确的责任归属。',
        en: 'A table showing the allocation of project resources across work packages or activities. The RACI matrix (Responsible/Accountable/Consulted/Informed) is the most common form. Ensures every task has clear ownership and accountability.',
        category: 'tool'
    },
    'RACI矩阵': {
        zh: 'RACI矩阵是一种职责分配工具，将任务角色分为四类：R（执行者）、A（负责人）、C（咨询对象）、I（知会对象）。每项任务至少有一个A角色。用于规划资源管理，确保角色清晰、责任到位。',
        en: 'A responsibility assignment tool categorizing task roles into four types: R (Responsible), A (Accountable), C (Consulted), I (Informed). Every task must have at least one "A". Used in Plan Resource Management to ensure role clarity and accountability.',
        category: 'tool'
    },
    '待办列表管理（敏捷适用）': {
        zh: '待办列表管理是敏捷项目中用于评估与实施变更的核心机制。产品负责人根据相关方反馈和业务优先级持续对产品待办列表进行梳理、优先级排序和调整，以替代传统项目中的正式变更控制流程。',
        en: 'The core mechanism in agile projects for assessing and implementing changes. The Product Owner continuously grooms, prioritizes, and adjusts the product backlog based on stakeholder feedback and business priorities, replacing formal change control processes used in traditional projects.',
        category: 'tool'
    },
    '绿色人力资源管理（Green HRM）': {
        zh: '绿色人力资源管理是PMBOK第8版在资源规划中引入的可持续性管理理念，旨在将环境责任融入人力资源管理的全流程，包括绿色招聘、绿色培训、绿色绩效评估等实践，体现项目对三重底线的承诺。',
        en: 'A sustainability management concept introduced in PMBOK 8th Edition resource planning that integrates environmental responsibility into the entire HR management process. Includes green recruitment, green training, and green performance evaluation, reflecting commitment to the triple bottom line.',
        category: 'tool'
    },
    'AI与生成式AI': {
        zh: 'AI与生成式AI是PMBOK第8版在资源估算中引入的新兴技术工具。利用人工智能和生成式AI进行资源需求预测、工作量估算和优化方案生成，提高估算的准确性和效率。',
        en: 'Emerging technology tools introduced in PMBOK 8th Edition for resource estimation. Uses AI and generative AI for resource demand forecasting, effort estimation, and optimization scenario generation, improving estimation accuracy and efficiency.',
        category: 'tool'
    },
    '仆人领导力': {
        zh: '仆人领导力是一种以服务团队为首要任务的领导风格，领导者通过支持、赋能和消除障碍来帮助团队成功。关注成员的成长和福祉，而非命令和控制。在第8版中是领导团队流程的核心方法。',
        en: 'A leadership style that prioritizes serving the team. Leaders help the team succeed by supporting, empowering, and removing obstacles. Focuses on member growth and well-being rather than command and control. Core approach in the Lead the Team process in PMBOK8.',
        category: 'tool'
    },
    '情商': {
        zh: '情商是识别、理解、管理自身情绪和他人情绪的能力，包括自我意识、自我管理、社会意识和关系管理四个维度。在领导团队和管理相关方中都是关键的软技能。',
        en: 'The ability to recognize, understand, and manage one\'s own emotions and the emotions of others, encompassing self-awareness, self-management, social awareness, and relationship management. A critical soft skill in leading teams and managing stakeholders.',
        category: 'tool'
    },
    '六顶思考帽': {
        zh: '六顶思考帽是由爱德华·德·波诺提出的平行思维工具，用六种颜色的帽子代表六种思维模式（白-事实数据、红-直觉情感、黑-风险警示、黄-积极乐观、绿-创新创意、蓝-流程控制），帮助团队从多个角度全面审视问题。',
        en: 'A parallel thinking tool developed by Edward de Bono using six colored hats representing six thinking modes (White-Facts, Red-Intuition, Black-Risks, Yellow-Optimism, Green-Creativity, Blue-Process). Helps teams examine issues from multiple perspectives.',
        category: 'tool'
    },
    'COCOMO模型': {
        zh: 'COCOMO（COnstructive COst MOdel）是软件工程领域经典的构造性成本估算模型，根据软件规模和复杂度参数化估算开发工作量、成本和进度。第8版将其作为资源估算的可选工具。',
        en: 'The COnstructive COst MOdel (COCOMO) is a classic software engineering cost estimation model that parametrically estimates development effort, cost, and schedule based on software size and complexity parameters. Included in PMBOK8 as an optional resource estimation tool.',
        category: 'tool'
    },
    'SWOT分析': {
        zh: 'SWOT分析是一种战略分析工具，从优势（Strengths）、劣势（Weaknesses）、机会（Opportunities）和威胁（Threats）四个维度系统评估项目环境。在识别风险流程中用于全面发现内部和外部风险因素。',
        en: 'A strategic analysis tool that systematically evaluates the project environment across four dimensions: Strengths, Weaknesses, Opportunities, and Threats. Used in the Identify Risks process to comprehensively discover internal and external risk factors.',
        category: 'tool'
    },
    '蒙特卡洛模拟': {
        zh: '蒙特卡洛模拟是一种基于概率统计的数值模拟技术，通过大量随机抽样来模拟项目结果（如竣工日期或总成本）的概率分布。在执行风险分析中用于定量评估风险对项目目标的综合影响。',
        en: 'A numerical simulation technique based on probability statistics that uses large-scale random sampling to simulate probability distributions of project outcomes (e.g., completion dates or total costs). Used in Perform Risk Analysis for quantitative assessment of risk impacts.',
        category: 'tool'
    },
    '决策树': {
        zh: '决策树是一种使用树形分支结构评估不同决策方案期望货币价值（EMV）的分析技术。每个分支代表一种决策路径和可能结果，帮助团队在不确定条件下做出最优选择。',
        en: 'An analytical technique using a tree-shaped branching structure to evaluate the Expected Monetary Value (EMV) of different decision alternatives. Each branch represents a decision path and possible outcome, helping teams make optimal choices under uncertainty.',
        category: 'tool'
    },
    '燃尽图/燃起图': {
        zh: '燃尽图显示Sprint中剩余工作量随时间的递减趋势，燃起图显示已完成工作量的累积增长。两者都是敏捷进度监控的核心可视化工具，在第8版监督与控制进度流程中使用。',
        en: 'Burndown charts show the decreasing trend of remaining work over time in a Sprint; burnup charts show the cumulative growth of completed work. Both are core visualization tools for agile schedule monitoring, used in the Monitor and Control Schedule process in PMBOK8.',
        category: 'tool'
    },
    '团队速度（Velocity）': {
        zh: '团队速度是衡量敏捷团队在每个Sprint中完成的故事点总量的指标，反映了团队可持续的交付能力。通过多个Sprint的数据积累，用于预测未来Sprint的可行工作量和发布规划。',
        en: 'A metric measuring the total story points an agile team completes in each Sprint, reflecting the team\'s sustainable delivery capacity. Accumulated over multiple Sprints, it is used to forecast feasible workload for future Sprints and for release planning.',
        category: 'tool'
    },
    '相关方映射': {
        zh: '相关方映射是将已识别的相关方按照影响力、利益、支持度等维度进行分类和可视化的技术。常用工具包括影响力-利益矩阵、影响力-支持度矩阵和相关方立方体。用于制定差异化的参与策略。',
        en: 'A technique for classifying and visualizing identified stakeholders by dimensions such as influence, interest, and support level. Common tools include the Power-Interest Grid, Power-Support Grid, and Stakeholder Cube. Used to develop differentiated engagement strategies.',
        category: 'tool'
    },
    '相关方参与度评估矩阵': {
        zh: '相关方参与度评估矩阵是用于对比相关方当前参与程度与项目所需参与程度的分析工具。它将相关方分为不知晓、抵制、中立、支持、领导五类，帮助团队制定针对性策略来提升相关方参与度。',
        en: 'An analytical tool for comparing stakeholders\' current engagement levels with the levels required for project success. Classifies stakeholders as Unaware, Resistant, Neutral, Supportive, or Leading, helping teams develop targeted strategies to improve engagement.',
        category: 'tool'
    },
    '约束理论': {
        zh: '约束理论（TOC）是一种系统管理方法论，认为任何系统中至少存在一个约束（瓶颈）限制整体产出。在资源管理中用于识别和消除资源瓶颈，优化整体资源利用效率。',
        en: 'A system management methodology holding that at least one constraint (bottleneck) limits overall output in any system. Used in resource management to identify and eliminate resource bottlenecks and optimize overall resource utilization efficiency.',
        category: 'tool'
    },
    '控制图': {
        zh: '控制图是统计过程控制工具，用于监控过程的稳定性和能力。它显示数据的上下控制界限（UCL/LCL）和中心线（CL），帮助判断过程偏差是随机波动（普通原因）还是异常偏差（特殊原因）。',
        en: 'A statistical process control tool for monitoring process stability and capability. Displays upper and lower control limits (UCL/LCL) and a center line (CL), helping determine whether process variation is random (common cause) or abnormal (special cause).',
        category: 'tool'
    },
    '风险审计': {
        zh: '风险审计是系统评估风险管理过程有效性的检查和评审活动。它审查风险识别是否全面、分析是否准确、应对措施是否被正确执行，并识别风险管理过程中的改进机会。',
        en: 'A systematic examination and review activity evaluating the effectiveness of risk management processes. Examines whether risk identification was comprehensive, analysis was accurate, and responses were properly executed; identifies improvement opportunities in the risk management process.',
        category: 'tool'
    },

    // --- Inputs ---
    '商业文件': {
        zh: '商业文件是项目启动前的商业分析文档的总称，主要包括商业论证和效益管理计划。商业论证论证项目的投资价值，效益管理计划定义如何衡量和实现项目效益。它们为项目提供商业合理性支撑。',
        en: 'The collective term for pre-project business analysis documents, primarily including the Business Case and Benefits Management Plan. The Business Case justifies the project\'s investment value; the Benefits Management Plan defines how project benefits will be measured and realized.',
        category: 'input'
    },
    '协议': {
        zh: '协议是双方或多方之间达成的具有法律约束力的文件，定义了各方的权利、义务和交付内容。在项目管理中包括合同、服务级别协议（SLA）、谅解备忘录（MOU）等。为项目启动和采购策略提供输入。',
        en: 'A legally binding document between two or more parties defining rights, obligations, and deliverables. In project management, this includes contracts, Service Level Agreements (SLAs), Memoranda of Understanding (MOUs), etc. Provides input for project initiation and sourcing strategies.',
        category: 'input'
    },
    '事业环境因素': {
        zh: '事业环境因素（EEFs）是项目团队不能直接控制但会影响项目决策和结果的内外部条件，包括组织文化、人力资源政策、市场条件、法律法规、技术基础设施、相关方期望和风险承受力等。',
        en: 'Enterprise Environmental Factors (EEFs) are internal and external conditions not under the control of the project team that influence, constrain, or direct the project. Includes organizational culture, HR policies, market conditions, regulations, technology infrastructure, stakeholder expectations, and risk tolerance.',
        category: 'input'
    },
    '组织过程资产': {
        zh: '组织过程资产（OPAs）是组织拥有的可被项目利用的任何过程相关资产，包括正式和非正式的计划、政策、流程、指南、模板、知识库和以往项目的经验教训。是几乎所有流程的通用输入。',
        en: 'Organizational Process Assets (OPAs) are any process-related assets the organization possesses that can be used by the project. Includes formal and informal plans, policies, procedures, guidelines, templates, knowledge bases, and lessons learned from previous projects. A common input to nearly all processes.',
        category: 'input'
    },

    // ===== 规划采购策略 四大工具 (Plan Sourcing Strategy Toolkit) =====
    '市场调研': {
        zh: '市场调研是指考察行业情况和特定供应商的能力。采购团队通过研究市场报告、参加行业会议、查阅在线评论或直接向供应商发起信息邀请书（RFI），来了解当前市场上有哪些可用的产品、服务或解决方案，技术成熟度如何，以及潜在供应商的交付能力和财务稳定性。核心目的是在制定具体的采购要求前，确保项目团队对外部市场有清醒、客观的认识，避免提出脱离行业现状的采购指标。',
        en: 'Market Research is the process of examining industry and specific seller capabilities. The procurement team gathers information about the current marketplace by reviewing industry publications, attending conferences, conducting online research, or issuing a Request for Information (RFI). It identifies what capabilities exist, what technologies are mature, and which sellers can meet requirements safely and stably. Its core purpose is to provide realistic market context before finalizing procurement requirements, preventing specifications that are either obsolete or non-existent in the actual market.',
        category: 'tool'
    },
    '自制或外购分析': {
        zh: '自制或外购分析是用于确定某项工作或交付物是由项目团队自行产出，还是从外部源头采购的分析技术。它不仅要权衡财务成本（如内部研发成本、设备折旧 vs 外部采购价、合同管理费），还要评估组织的战略对齐度（是否涉及核心知识产权）、内部资源的可用性、技术熟练度以及风险承担能力。核心目的是输出明确的"自制"或"外购"决策，作为后续编制采购工作说明书（SOW）的基础。',
        en: 'Make-or-Buy Analysis is the process of gathering and organizing data about product requirements and analyzing them against available alternatives including producing the product or service internally or purchasing it from an outside source. It balances financial costs of both options (e.g., internal setup, overhead, and maintenance vs. purchase price, delivery, and contract management) and evaluates non-financial factors such as core IP protection, organizational strategy alignment, resource availability, and risk-sharing capability. Its core purpose is to produce a definitive Make-or-Buy Decision.',
        category: 'tool'
    },
    '源头选择分析': {
        zh: '源头选择分析是在签署合同前，用于评估、筛选和选择供应商的分析方法。项目团队必须在向市场发布招标书前，根据采购物品的属性，提前在采购策略中确立供应商的评标逻辑。常见方法包括：最低成本法（适用于标准化物品）、仅凭资质法（适用于依赖专家经验的咨询）、基于质量和成本法（兼顾技术与报价）、独家来源法（适用于专利或垄断情况）。核心目的是确立公平、合规、透明的供方选择标准，避免主观偏见引发后期合同纠纷。',
        en: 'Source Selection Analysis is an analytical method used to evaluate, rank, and select sellers prior to awarding a contract. The project team must predetermine evaluation criteria and methodology in the procurement strategy before issuing tenders. Common methods include: Lowest Cost (standardized items), Qualifications-Only (expert-dependent services), Quality and Cost-Based (balancing technical merit and price), and Sole Source (patent or monopoly situations). Its core purpose is to establish a transparent, objective, and compliant framework for vendor evaluation, eliminating subjective bias during contract awarding.',
        category: 'tool'
    },
    '文件分析': {
        zh: '文件分析是通过审阅和评估现有的书面或电子文档资料，来获取有用信息、澄清需求或支持特定决策的评估技术。在规划采购策略的语境下，采购和项目管理团队深入翻阅并核对项目内部的既有文件，包括需求文件、商业论证、行业法规、组织现有的标准合同范本以及历史类似项目的经验教训登记册。核心目的是从现有档案和材料中提炼出可能限制采购的约束条件（如法律合规红线）或潜在机会，确保采购策略不与既有顶层规划冲突。',
        en: 'Document Analysis is an assessment technique used to gain information, clarify requirements, or support a decision by reviewing and evaluating existing written or electronic documentation. Within the context of planning a sourcing strategy, it involves a comprehensive review of existing project artifacts and organizational documents including requirement documents, business cases, legal/compliance frameworks, standard corporate contract templates, and historical lessons-learned registers. Its core purpose is to extract critical constraints, assumptions, or opportunities buried in existing files, ensuring the sourcing strategy remains compliant and fully aligned with top-level organizational standards.',
        category: 'tool'
    },

    // ===== 管理质量保证 三大工具 (Manage Quality Assurance Toolkit) =====
    '审计': {
        zh: '审计是一种结构化、独立的审查过程，用于判断项目活动是否符合组织和项目的政策、流程和程序。审计通常由外部团队（如内部质量审计部门、PMO或外部监管机构）而非直接项目团队执行。在管理质量保证中，质量审计用于验证项目是否遵守企业合规标准，并识别不合规问题或低效流程。在监督风险中，风险审计用于评估风险管理过程和特定风险应对措施的整体有效性。核心目的是确保绝对合规，确认治理对齐，并向管理层提供标准程序被严格遵守的客观保证。',
        en: 'Audits are a structured, independent process to determine if project activities comply with organizational and project policies, processes, and procedures. Typically conducted by an external team (such as an internal quality audit department, a PMO, or an external regulatory body) rather than the immediate project team. In Manage Quality Assurance, quality audits verify adherence to corporate compliance standards and identify non-compliance issues or inefficient processes. In Monitor Risks, risk audits evaluate the overall effectiveness of the risk management process and specific risk responses. Core purpose: ensure absolute compliance, confirm governance alignment, and provide management with objective assurance that standard procedures are being strictly followed.',
        category: 'tool'
    },
    '核对表': {
        zh: '核对表是一种结构化的验证工具，通常针对特定组件，用于确认一组必要步骤是否已完成或一系列要求是否已满足。核对表是基于历史项目经验或行业法规构建的高实用性、可操作的模板。在项目执行和质量保证中，团队成员将其用作逐步记忆辅助工具，确保琐碎但关键的步骤（如特定的代码审查、安全协议或部署验证）不被遗漏。在风险管理中，风险核对表（通常围绕风险分解结构RBS构建）帮助团队在早期头脑风暴中快速标记常见的历史威胁。核心目的是最小化人为错误，标准化重复性质量检查，并确保团队操作的一致性。',
        en: 'Checklists are a structured tool, usually component-specific, used to verify that a set of required steps has been performed or to ensure that a list of requirements has been met. Checklists are highly versatile, actionable templates built from historical project experience or industry regulations. During project execution and quality assurance, they are used by team members as a step-by-step memory aid to ensure that trivial but critical steps (such as specific code reviews, safety protocols, or deployment verifications) are not forgotten. During risk management, risk checklists (often structured around a Risk Breakdown Structure) help teams rapidly flag common historical threats during early brainstorming sessions. Core purpose: minimize human error, standardize repetitive quality checks, and ensure operational consistency across the team.',
        category: 'tool'
    },
    '过程改进': {
        zh: '过程改进是一种分析和执行技术，用于识别项目工作流中的低效环节、瓶颈或非增值活动，并优化它们以提高效率。在管理质量保证流程中广泛使用。它涉及研究当前流程流（通常使用价值流映射或流程图等工具），找出工作停滞或产生浪费的位置。基于这些发现，团队设计优化方案——如自动化人工交接或消除冗余审批层——并提交变更请求以实施更新后的工作流。核心目的是推动持续改进（Kaizen），提升执行速度，并通过确保项目流程保持精益高效来最大化价值交付。',
        en: 'Process Improvement is an analytical and execution technique used to identify inefficiencies, bottlenecks, or non-value-added activities in a project workflow and refine them for higher efficiency. Heavily utilized within the Manage Quality Assurance process. It involves studying the current process flow (often using tools like Value Stream Mapping or Flowcharts) to spot where work gets stuck or where waste occurs. Based on these findings, the team designs optimization plans—such as automating manual handoffs or eliminating redundant approval layers—and submits a change request to implement the updated workflow. Core purpose: drive continuous improvement (Kaizen), boost execution velocity, and maximize value delivery by ensuring that project processes remain lean and efficient.',
        category: 'tool'
    },

    // ===== 管理项目知识 三大工具 (Manage Project Knowledge Toolkit) =====
    '知识管理（AAR、故事讲述）': {
        zh: '知识管理是用于连接人员、促进协作并在项目团队和组织中分享显性和隐性知识的一系列实践和技术。在管理项目知识过程中，它超越仅仅将文件上传到数据库，而是运用以人为中心的特定技术：事后回顾（AAR）是在事件或里程碑刚结束时举行的结构化复盘会议，分析发生了什么、为何发生以及如何改进；故事讲述使用叙事方式传递复杂的隐性经验或组织文化，使经验教训更具记忆性和情感共鸣。核心目的是培养组织学习文化，解锁不可见的隐性知识（经验、洞察），防止团队重复造轮子。',
        en: 'Knowledge Management is a set of practices and techniques used to connect people, foster collaboration, and share both explicit and tacit knowledge across the project team and organization. In Manage Project Knowledge, it goes beyond uploading files to a database, utilizing specific human-centric techniques: After Action Reviews (AARs) are structured de-briefing sessions held immediately after an event or milestone to analyze what happened, why it happened, and how to improve; Storytelling uses narratives to pass down complex, implicit experiences or organizational culture, making lessons learned memorable and emotionally resonant. Core purpose: cultivate an organizational learning culture, unlock invisible tacit knowledge, and prevent the team from reinventing the wheel.',
        category: 'tool'
    },
    '信息管理': {
        zh: '信息管理是用于收集、存储、归档和向相关方分发显性项目信息和工件的工具、技术和系统。知识管理连接人与人的隐性经验，信息管理则连接人与数据。它涉及使用项目管理信息系统（PMIS）、共享云盘、配置管理工具以及物理或数字档案，确保数据被有序编目、可检索且安全。确保标准报告、历史指标和受控版本文档对需要者易于访问。核心目的是构建单一真相源，确保数据完整性和可追溯性，最大化显性数据检索效率。',
        en: 'Information Management refers to the tools, techniques, and systems used to collect, store, archive, and distribute explicit project information and artifacts to stakeholders. While knowledge management connects people to people, information management connects people to data. It involves using Project Management Information Systems (PMIS), shared cloud drives, configuration management tools, and physical or digital archives to ensure data is cataloged, searchable, and secure. Core purpose: build a single version of truth, ensure data integrity and traceability, and maximize efficiency in explicit data retrieval.',
        category: 'tool'
    },
    '人际关系技能（积极倾听）': {
        zh: '人际关系技能是项目经理和团队用于有效沟通、建立信任和管理关系的行为能力和软技能。积极倾听要求接收者全神贯注地理解、回应和记忆对方所说内容——而非被动听词或准备反驳。包括镜像肢体语言、澄清陈述（"如果我理解正确……"）、验证说话者潜在情绪等技术。在状态会议、冲突解决和需求收集中广泛使用。核心目的是消除沟通障碍，发现隐藏的项目约束或相关方未言明的抵触，并建立团队的心理安全感。',
        en: 'Interpersonal Skills are behavioral competencies and soft skills used by project managers and teams to communicate effectively, build trust, and manage relationships. Active Listening requires the receiver to fully concentrate, understand, respond, and remember what is being said—rather than just passively hearing the words or planning their next counterargument. It includes techniques like mirroring body language, clarifying statements ("If I understand you correctly..."), and validating the speaker\'s underlying emotions. Heavily utilized during status meetings, conflict resolutions, and requirements gathering. Core purpose: remove communication barriers, uncover hidden project constraints or stakeholders\' unstated resistance, and establish psychological safety within the team.',
        category: 'tool'
    },

    // ===== 启发与分析需求 关键工具 =====
    '名义小组技术': {
        zh: '名义小组技术（NGT）是增强型头脑风暴技术，通过投票流程对最有用的想法进行排序，用于进一步头脑风暴或优先级排列。NGT将群体头脑风暴结构化为四阶段流程以消除偏见：①静默生成 — 参与者独立写下想法；②循环记录 — 每个想法被记录在共享板上，不做评判；③澄清讨论 — 群体讨论想法以确保相互理解；④投票排序 — 个人私下投票或打分，建立透明、民主的优先级列表。在范围绩效域的启发与分析需求流程中主要使用。',
        en: 'Nominal Group Technique (NGT) is a technique that enhances brainstorming with a voting process used to rank the most useful ideas for further brainstorming or for prioritization. NGT structuralizes group brainstorming into a four-stage process to eliminate bias: 1) Silent Generation — participants independently write down their ideas; 2) Round-Robin Recording — each idea is recorded on a shared board without critique; 3) Clarification — the group discusses the ideas to ensure mutual understanding; 4) Voting and Ranking — individuals privately vote or score the ideas to establish a transparent, democratic priority list. Primarily utilized within the Scope Performance Domain under the Elicit and Analyze Requirements process.',
        category: 'tool'
    },

    '引导': {
        zh: '引导是有效带领群体活动达成成功决策、解决方案或结论的能力，属于人际关系与团队技能的核心技术。引导者作为中立的领导者，确保会议或研讨会顺利进行、按时完成并达成预设目标。在项目管理中，引导包括：结构化对话 — 设定明确的规则、管理议程、防止参与者偏离主题；确保包容性 — 积极鼓励安静成员发言，同时得体地约束主导型人物；化解冲突 — 中立地解决误解，将个人情感与项目目标分离，帮助群体建立共识。核心目的是最大化协作效率，培养对项目决策的共同拥有感，引导多元相关方达成共识而非强迫性结果。广泛应用于治理绩效域（启动项目或阶段、管理项目知识）和范围绩效域（定义范围、识别风险）等。',
        en: 'Facilitation is the ability to effectively guide a group event to a successful decision, solution, or conclusion. A facilitator acts as a neutral leader who ensures that a meeting or workshop runs smoothly, stays on schedule, and achieves its predefined objective. In project management, facilitation involves: Structuring the Conversation — setting clear ground rules, managing the agenda, and preventing participants from going off-topic; Ensuring Inclusivity — actively encouraging quieter team members to speak up while diplomatically keeping dominant personalities in check; Navigating Conflicts — resolving misunderstandings neutrally, separating personal feelings from project objectives, and helping the group build common ground. Core purpose: maximize collaborative efficiency, foster a sense of shared ownership over project decisions, and guide diverse stakeholders to a consensus without forcing an autocratically driven outcome.',
        category: 'tool'
    },

    // ===== 补全所有缺失定义 (64 entries) =====

    // -- Outputs --
    '最终产品/服务移交': { zh: '最终产品/服务移交是指项目收尾时将完成的产品、服务或成果正式移交给客户或运营团队的流程。移交包括所有相关文档、培训材料和资产清单，标志着项目所有权的正式转移。', en: 'Final Product/Service Transition is the formal handover of the completed product, service, or result to the customer or operations team at project closure. It includes all relevant documentation, training materials, and asset inventories, marking the formal transfer of project ownership.', category: 'output' },
    '需求管理计划': { zh: '需求管理计划是描述如何分析、记录和管理项目需求的子管理计划。它定义了需求优先级排序方法、需求跟踪机制和需求变更处理流程，确保需求在整个项目生命周期中保持可控和可追溯。', en: 'Requirements Management Plan is a subsidiary plan describing how project requirements will be analyzed, documented, and managed. It defines prioritization methods, traceability mechanisms, and change handling procedures, keeping requirements controlled and traceable throughout the project lifecycle.', category: 'output' },
    '进度管理计划': { zh: '进度管理计划是描述如何规划、开发、监控和控制项目进度的子管理计划。它定义了进度模型开发方法（关键路径法/敏捷等）、进度控制阈值和报告格式，为进度管理提供框架。', en: 'Schedule Management Plan is a subsidiary plan describing how the project schedule will be planned, developed, monitored, and controlled. It defines the schedule model development approach (CPM/agile), control thresholds, and reporting formats.', category: 'output' },
    '资金需求': { zh: '资金需求是基于成本基准和预计支出模式确定的项目各阶段所需资金量的预测，包括总资金需求和阶段性资金需求。它是制定预算流程的重要输出，支持组织进行资金筹措和现金流规划。', en: 'Funding Requirements are forecasts of total and periodic funding needed for the project, derived from the cost baseline and expected expenditure patterns. An important output of the Develop Budget process supporting organizational funding and cash flow planning.', category: 'output' },
    '资源分配': { zh: '资源分配是将已获取的团队成员、设备、材料和用品分配到各项项目活动中的过程输出文件。它明确每项资源将被用于哪些工作包以及使用时间段，确保资源在正确的时间和地点可用。', en: 'Resource Assignments are the documented allocation of acquired team members, equipment, materials, and supplies to specific project activities. It specifies which resources will be used on which work packages and during what time periods.', category: 'output' },
    '团队派工单': { zh: '团队派工单是记录团队成员及其在项目中的具体角色和职责分配的文档。它将具体的人员分配到各个角色上，提供联系信息和报告关系，是获取资源流程的关键输出。', en: 'Team Assignments is a document recording team members and their specific roles and responsibilities in the project. It assigns individuals to roles with contact and reporting information. A key output of the Acquire Resources process.', category: 'output' },

    // -- Inputs --
    '需求/范围管理计划': { zh: '需求/范围管理计划是需求管理计划和范围管理计划的统称，它们为定义和管理项目范围与需求提供了框架。作为规划过程中的输入，指导项目团队如何启发需求、定义和结构化范围。', en: 'Requirements/Scope Management Plan refers collectively to the Requirements Management Plan and Scope Management Plan, providing the framework for defining and managing project scope and requirements. It guides the project team on how to elicit requirements and define/structuralize scope.', category: 'input' },
    '范围/质量管理计划': { zh: '范围/质量管理计划是范围管理计划与质量管理计划的综合输入文件。它确保在监督和控制范围时，质量指标和测试标准与范围基准保持一致，将质量控制直接嵌入范围管理流程。', en: 'Scope/Quality Management Plan is the combined input of the Scope Management Plan and Quality Management Plan. It ensures quality metrics and testing standards are aligned with the scope baseline when monitoring and controlling scope, embedding quality control directly into scope management.', category: 'input' },
    '质量指标': { zh: '质量指标是用于衡量项目过程和可交付成果质量水平的具体、可量化的标准。它定义了"合格"的明确尺度，包括缺陷率、测试通过率、客户满意度等，为监督与控制范围流程提供判断依据。', en: 'Quality Metrics are specific, measurable standards for assessing the quality level of project processes and deliverables. They define clear thresholds for "acceptable," including defect rates, test pass rates, and customer satisfaction scores, providing criteria for the Monitor and Control Scope process.', category: 'input' },
    '确认的可交付成果': { zh: '确认的可交付成果是经过监督与控制范围流程审查、验证其完整性和正确性符合质量要求的可交付成果。确认通过审计、检查和测试来完成，确认后的可交付成果提交给确认范围流程进行正式验收。', en: 'Verified Deliverables are deliverables that have been reviewed through the Monitor and Control Scope process and confirmed to be correct and complete against quality requirements. Verification is done through audits, inspections, and testing; verified deliverables are then submitted to Validate Scope for formal acceptance.', category: 'input' },
    '开发方法': { zh: '开发方法是指项目团队选择的交付方法论，包括预测型（瀑布）、适应型（敏捷）、混合型或迭代型。开发方法的选择直接影响进度管理计划的制定和执行策略。', en: 'Development Approach refers to the delivery methodology chosen by the project team, including predictive (waterfall), adaptive (agile), hybrid, or iterative. The choice of development approach directly influences how the schedule management plan is crafted and executed.', category: 'input' },
    '进度计划': { zh: '进度计划是展示项目活动计划开始和完成日期的模型输出。它可以是摘要级别的里程碑图或详细的甘特图和网络图，作为估算成本和监控进度的关键输入文件。', en: 'Schedule Plan is the output of a schedule model presenting linked activities with planned dates, durations, and milestones. It can range from a summary-level milestone chart to a detailed Gantt chart or network diagram, serving as a key input for cost estimation and schedule monitoring.', category: 'input' },
    '绩效测量基准': { zh: '绩效测量基准是经过整合和批准的范围-进度-成本基准的组合，用于衡量项目整体绩效。它为挣值管理（EVM）提供参考点，是监督与控制进度的关键输入。', en: 'Performance Measurement Baseline is the integrated and approved combination of scope, schedule, and cost baselines used to measure overall project performance. It provides the reference point for Earned Value Management (EVM) and is a key input to Monitor and Control Schedule.', category: 'input' },
    '自制或外购决策': { zh: '自制或外购决策是规划采购策略流程的输出，明确了哪些工作由项目团队内部完成（自制）以及哪些从外部采购（外购）。该决策基于成本、战略、风险和资源等因素的综合评估，为估算成本流程提供输入。', en: 'Make-or-Buy Decision is the output of Plan Sourcing Strategy specifying which work will be done internally (make) and which will be procured externally (buy). Based on a comprehensive assessment of cost, strategy, risk, and resource factors, it provides input to the Estimate Costs process.', category: 'input' },
    '资源/沟通/风险计划': { zh: '资源/沟通/风险计划是资源管理计划、沟通管理计划和风险管理计划的统称。作为规划相关方参与的输入，确保参与策略充分考虑资源约束、沟通需求和风险因素。', en: 'Resource/Communication/Risk Plans refers collectively to the Resource Management Plan, Communications Management Plan, and Risk Management Plan. As an input to Plan Stakeholder Engagement, it ensures engagement strategies fully consider resource constraints, communication needs, and risk factors.', category: 'input' },
    '沟通/风险/相关方计划': { zh: '沟通/风险/相关方计划是沟通管理计划、风险管理计划和相关方参与计划的统称。作为管理相关方参与的输入，确保在管理相关方期望和解决冲突时，沟通和风险信息是协调一致的。', en: 'Communication/Risk/Stakeholder Plans refers collectively to the Communications Management Plan, Risk Management Plan, and Stakeholder Engagement Plan. As an input to Manage Stakeholder Engagement, it ensures communication and risk information is coordinated when managing expectations and resolving conflicts.', category: 'input' },
    '沟通计划': { zh: '沟通计划（沟通管理计划的简称）描述了项目信息如何被规划、创建、分发、监控和处置。作为管理沟通和监督沟通流程的输入，确保信息传递的及时性和有效性。', en: 'Communications Plan (shorthand for Communications Management Plan) describes how project communications will be planned, created, distributed, monitored, and disposed of. As an input to Manage Communications and Monitor Communications, it ensures timely and effective information delivery.', category: 'input' },
    '质量/风险报告': { zh: '质量/风险报告是质量报告和风险报告的统称。质量报告汇总质量审计和测量结果，风险报告汇总整体风险敞口和关键风险信息。两者为管理沟通流程提供沟通内容的来源。', en: 'Quality/Risk Reports refers collectively to Quality Reports and Risk Reports. Quality Reports summarize quality audit findings and measurement results; Risk Reports consolidate overall risk exposure and critical risk information. Both provide source content for the Manage Communications process.', category: 'input' },
    '相关方计划': { zh: '相关方计划（相关方参与计划的简称）描述了如何让相关方参与项目决策和执行的具体策略。作为监督相关方参与的输入，用于对比当前参与状态与计划目标，发现偏差并调整策略。', en: 'Stakeholder Plan (shorthand for Stakeholder Engagement Plan) describes specific strategies for involving stakeholders in project decision-making and execution. As an input to Monitor Stakeholder Engagement, it is used to compare current engagement status against planned goals and adjust strategies.', category: 'input' },
    '沟通/风险登记册': { zh: '沟通/风险登记册是相关方登记册中的沟通需求和风险登记册的统称。作为监督相关方参与的输入，帮助项目团队了解哪些相关方需要特殊关注、哪些风险可能影响参与效果。', en: 'Communication/Risk Register refers to the communication requirements sections of the Stakeholder Register combined with the Risk Register. As an input to Monitor Stakeholder Engagement, it helps the team understand which stakeholders need special attention and which risks may affect engagement effectiveness.', category: 'input' },
    '资源计划': { zh: '资源计划（资源管理计划的简称）描述了如何识别、获取、管理和释放项目所需资源。作为获取资源和监督资源利用的输入，提供资源管理的整体框架和策略。', en: 'Resource Plan (shorthand for Resource Management Plan) describes how project resources will be identified, acquired, managed, and released. As an input to Acquire Resources and Monitor and Control Resourcing, it provides the overall framework and strategy for resource management.', category: 'input' },
    '资源分配文件': { zh: '资源分配文件是记录已经分配给各项活动的资源使用情况和使用计划的文档。作为监督与控制资源利用流程的输入，帮助对比实际资源使用与计划分配，发现过度分配或资源闲置。', en: 'Resource Allocation Documents are records of how resources have been assigned to activities and their usage plans. As an input to Monitor and Control Resourcing, they help compare actual resource usage against planned allocations, identifying over-allocation or idle resources.', category: 'input' },
    '价值流映射': { zh: '价值流映射（VSM）是一种精益管理工具，通过可视化工作流程中的每一步来识别价值增值和非增值活动。在监督与控制资源利用中，VSM帮助识别资源流中的浪费和瓶颈，优化资源使用效率。', en: 'Value Stream Mapping (VSM) is a lean management tool that visualizes every step in a workflow to identify value-adding and non-value-adding activities. In Monitor and Control Resourcing, VSM helps identify waste and bottlenecks in resource flow, optimizing resource efficiency.', category: 'input' },
    '成本/工期估算': { zh: '成本/工期估算是对项目成本和持续时间的早期估算值的统称。作为识别风险流程的输入，帮助团队识别与估算不确定性相关的潜在风险——过于乐观或悲观的估算可能隐藏重大威胁或错失机会。', en: 'Cost/Duration Estimates are the early-stage estimates of project costs and durations. As an input to Identify Risks, they help the team identify potential risks related to estimation uncertainty—overly optimistic or pessimistic estimates may hide significant threats or missed opportunities.', category: 'input' },
    '基准': { zh: '基准是经过批准的、作为绩效衡量参照标准的项目计划版本，包括范围基准、进度基准和成本基准。在执行风险分析中，基准提供了衡量风险影响严重程度的参照点。', en: 'Baselines are the approved versions of project plans used as references for performance measurement, including scope baseline, schedule baseline, and cost baseline. In Perform Risk Analysis, baselines provide the reference point for measuring the severity of risk impacts.', category: 'input' },
    '团队派工': { zh: '团队派工是将人员分配到项目角色的记录，包括团队派工单和资源日历等文件。作为规划风险应对的输入，帮助评估可用的应对资源、技能组合和人员可用性，确保风险应对计划在资源上可行。', en: 'Team Assignments are the records of personnel allocated to project roles, including team assignment sheets and resource calendars. As an input to Plan Risk Responses, they help assess available response resources, skill sets, and personnel availability for feasible risk response planning.', category: 'input' },
    '风险计划': { zh: '风险计划（风险管理计划的简称）描述了如何安排和实施项目风险管理活动，包括方法论、角色职责和审查频率。作为实施风险应对的输入，它提供了执行风险应对措施的整体框架和标准。', en: 'Risk Plan (shorthand for Risk Management Plan) describes how risk management activities will be structured and performed, including methodology, roles, and review frequency. As an input to Implement Risk Responses, it provides the overall framework and standards for executing risk responses.', category: 'input' },

    // -- Tools & Techniques --
    '头脑风暴': { zh: '头脑风暴是一种创意生成技术，通过鼓励团队成员在无评判的环境中自由提出各种想法和解决方案来激发创新。在识别风险、制定范围结构和识别相关方等多个流程中作为数据收集的核心方法来使用。', en: 'Brainstorming is a creative idea-generation technique that stimulates innovation by encouraging team members to freely propose various ideas and solutions in a non-judgmental environment. Used as a core data collection method across multiple processes including identifying risks, developing scope structure, and identifying stakeholders.', category: 'tool' },
    '流程自动化': { zh: '流程自动化是使用技术工具和脚本自动执行重复性项目管理任务的技术，如自动生成状态报告、触发审批工作流或执行回归测试。在监督与控制范围流程中，流程自动化帮助减少人工检查的遗漏和延迟。', en: 'Process Automation is a technique using technology tools and scripts to automatically perform repetitive project management tasks, such as auto-generating status reports, triggering approval workflows, or executing regression tests. In Monitor and Control Scope, it helps reduce gaps and delays in manual inspections.', category: 'tool' },
    '客户会谈与测试': { zh: '客户会谈与测试是确认范围流程中的核心工具，通过直接与客户或最终用户进行面对面的演示和测试，验证可交付成果是否满足验收标准。包括用户验收测试（UAT）、现场试运行和功能演示等。', en: 'Customer Meetings and Testing is a core technique in the Validate Scope process. Through direct face-to-face demonstrations and testing with customers or end users, it verifies whether deliverables meet acceptance criteria. Includes User Acceptance Testing (UAT), on-site trials, and feature demonstrations.', category: 'tool' },
    '审查会议': { zh: '审查会议是确认范围流程中的正式评估工具，将项目团队、客户和相关方聚集在一起，系统地审查已完成的可交付成果。会议中讨论验收标准匹配度，记录偏差，并最终确定是否正式接受。', en: 'Review Meetings are a formal evaluation technique in the Validate Scope process, bringing together the project team, customer, and stakeholders to systematically review completed deliverables. Discussions cover acceptance criteria alignment, document deviations, and finalize formal acceptance decisions.', category: 'tool' },
    'PDM绘图法（紧前关系绘图法）': { zh: 'PDM绘图法是创建进度模型的核心技术，用节点表示活动，用箭头表示活动之间的逻辑依赖关系。它定义了四种依赖类型：完成到开始（FS）、开始到开始（SS）、完成到完成（FF）和开始到完成（SF），是开发进度模型流程的基础工具。', en: 'Precedence Diagramming Method (PDM) is a core technique for constructing a schedule model where activities are represented by nodes and linked by logical dependency arrows. It defines four dependency types—Finish-to-Start (FS), Start-to-Start (SS), Finish-to-Finish (FF), and Start-to-Finish (SF)—and is the foundational tool in the Develop Schedule process.', category: 'tool' },
    '估算技术（三点、自下而上、敏捷估算）': { zh: '这是三种互补的估算技术的组合：三点估算使用乐观(O)、最可能(M)和悲观(P)值计算期望工期（(O+4M+P)/6）；自下而上估算从最详细的工作包层级估算后逐层汇总；敏捷估算使用故事点和规划扑克等相对估算方法。在开发进度模型中综合使用以提升进度估算的准确性。', en: 'A combination of three complementary estimating techniques: Three-Point Estimating uses optimistic (O), most likely (M), and pessimistic (P) values to calculate expected duration ((O+4M+P)/6); Bottom-Up Estimating estimates at the most detailed work package level and rolls up; Agile Estimating uses relative methods like story points and planning poker. Used together in Develop Schedule to improve schedule estimate accuracy.', category: 'tool' },
    '敏捷发布规划': { zh: '敏捷发布规划是敏捷项目中基于团队速度和产品待办列表来规划多个Sprint内的功能交付时间线的技术。它在开发进度模型中用于制定中长期的路线图，确定哪些特性在哪个发布版本中交付。', en: 'Agile Release Planning is a technique in agile projects that plans the feature delivery timeline over multiple Sprints based on team velocity and product backlog. Used in the Develop Schedule process to create medium-to-long-term roadmaps, determining which features ship in which release.', category: 'tool' },
    '迭代评审会议': { zh: '迭代评审会议（Sprint Review）是敏捷项目中每个迭代结束时的正式检视会议，团队向相关方演示已完成的功能增量，收集反馈并据此调整产品待办列表。在监督与控制进度中，迭代评审是跟踪进度和验证交付成果的核心敏捷实践。', en: 'Iteration Review Meetings (Sprint Reviews) are formal inspection meetings held at the end of each iteration in agile projects. The team demonstrates the completed functional increment to stakeholders, collects feedback, and adjusts the product backlog accordingly. A core agile practice for tracking progress and validating deliverables in Monitor and Control Schedule.', category: 'tool' },
    '备选方案分析': { zh: '备选方案分析是一种决策技术，通过系统评估多个可选方案的优缺点、成本收益和风险来选出最优方案。在规划财务管理等流程中使用，帮助团队在资金筹措策略和财务控制方法中做出权衡。', en: 'Alternatives Analysis is a decision-making technique that identifies the optimal option by systematically evaluating the pros and cons, cost-benefit, and risks of multiple alternatives. Used in processes like Plan Financial Management to help the team weigh options for funding strategy and financial control methods.', category: 'tool' },
    '估算技术（参数、类比、自下而上）': { zh: '三种经典成本估算技术的组合：参数估算基于历史数据和统计关系（如单位成本×数量）；类比估算利用类似项目的实际成本数据进行类比；自下而上估算从工作包层级逐层汇总。在估算成本流程中结合使用以平衡精度与效率。', en: 'A combination of three classic cost estimating techniques: Parametric Estimating uses statistical relationships with historical data (e.g., unit cost × quantity); Analogous Estimating leverages actual cost data from similar past projects; Bottom-Up Estimating aggregates from detailed work package estimates. Used together in Estimate Costs to balance accuracy and efficiency.', category: 'tool' },
    '质量成本（COQ）': { zh: '质量成本（COQ）是衡量为达到质量要求而投入的成本与因不符合质量要求而产生的损失之和的财务工具。它包括预防成本、评估成本、内部失败成本和外部失败成本，帮助团队在质量投入与风险之间找到最优平衡。', en: 'Cost of Quality (COQ) is a financial tool that measures the sum of costs invested to achieve quality requirements plus the losses incurred from failure to meet quality requirements. It includes prevention costs, appraisal costs, internal failure costs, and external failure costs, helping teams find the optimal balance between quality investment and risk.', category: 'tool' },
    '成本汇总': { zh: '成本汇总是制定预算流程中的核心工具，将从工作包层级估算的成本按WBS结构自下而上逐层汇总，最终形成项目的总成本估算。汇总过程中加入应急储备后形成成本基准。', en: 'Cost Aggregation is the core technique in the Develop Budget process that rolls up cost estimates from the work package level through the WBS hierarchy to arrive at the total project cost estimate. After adding contingency reserves, the aggregated result forms the cost baseline.', category: 'tool' },
    '储备分析': { zh: '储备分析是制定预算和监督财务流程中持续使用的技术，用于评估和管理应急储备与管理储备的充足性。通过比较剩余储备量与剩余风险，判断是否需要调整储备水平或采取风险应对措施。', en: 'Reserve Analysis is a technique used continuously in both the Develop Budget and Monitor and Control Finances processes to assess and manage the adequacy of contingency reserves and management reserves. By comparing remaining reserves against remaining risks, it determines whether reserve levels need adjustment or risk responses are needed.', category: 'tool' },
    '融资': { zh: '融资是制定预算流程中的技术，用于确定和获取项目所需的外部资金来源，包括银行贷款、债券发行、供应链融资或风险投资等渠道。它确保项目在需要的时间点获得充足的资金，维持现金流的连续性。', en: 'Financing is a technique used in the Develop Budget process to identify and secure external funding sources for the project, including bank loans, bond issuance, supply chain financing, or venture capital. It ensures the project has adequate funding at the required time points, maintaining cash flow continuity.', category: 'tool' },
    '挣值分析（EVM）': { zh: '挣值分析（EVM）是监督与控制财务的核心工具，将范围、进度和成本整合为统一的绩效测量体系。关键指标包括：计划价值（PV）、挣值（EV）、实际成本（AC）、进度偏差（SV）和成本偏差（CV），以及进度绩效指数（SPI）和成本绩效指数（CPI），帮助项目经理以美元量化进度和成本偏差。', en: 'Earned Value Management (EVM) is the core tool of Monitor and Control Finances, integrating scope, schedule, and cost into a unified performance measurement system. Key metrics include Planned Value (PV), Earned Value (EV), Actual Cost (AC), Schedule Variance (SV), Cost Variance (CV), SPI, and CPI, enabling the project manager to quantify schedule and cost deviations in monetary terms.', category: 'tool' },
    '相关方分析': { zh: '相关方分析是系统识别和评估相关方的技术，通过分析每个相关方的利益、期望、影响力和支持度来确定其优先级和分类。它是识别相关方和规划风险管理流程的基础工具，帮助团队制定差异化的相关方参与策略。', en: 'Stakeholder Analysis is a technique for systematically identifying and evaluating stakeholders by analyzing each stakeholder\'s interests, expectations, influence, and support level to determine priority and classification. It is a foundational tool in both Identify Stakeholders and Plan Risk Management, helping teams develop differentiated engagement strategies.', category: 'tool' },
    '思维导图': { zh: '思维导图是一种可视化组织信息的图形工具，以中心主题为起点，向外辐射关联的想法和概念。在规划相关方参与中，思维导图帮助可视化相关方之间的关系网络、利益关联和影响路径，为制定参与策略提供全貌视图。', en: 'Mind Mapping is a graphical tool for visually organizing information, starting from a central theme and radiating outward with associated ideas and concepts. In Plan Stakeholder Engagement, mind mapping helps visualize stakeholder relationship networks, interest connections, and influence paths, providing a holistic view for engagement strategy development.', category: 'tool' },
    '根本原因分析': { zh: '根本原因分析是一种问题解决技术，通过不断追问"为什么"来追溯问题的深层原因而非只处理表面症状。在识别风险和规划相关方参与中用于分析风险来源和相关方抵制的深层动因。', en: 'Root Cause Analysis is a problem-solving technique that traces the deep underlying causes of a problem by repeatedly asking "why" rather than just addressing surface symptoms. Used in Identify Risks and Plan Stakeholder Engagement to analyze risk sources and the deep motivations behind stakeholder resistance.', category: 'tool' },
    '沟通风格评估': { zh: '沟通风格评估是在规划沟通管理中使用的一种分析技术，通过评估相关方的沟通偏好（如正式/非正式、书面/口头、详实/概要）来选择合适的沟通方法和技术。它确保信息以接收者最能理解和接受的方式传递。', en: 'Communication Style Assessment is an analytical technique used in Plan Communications Management to evaluate stakeholder communication preferences (e.g., formal/informal, written/oral, detailed/summary) in order to select appropriate communication methods and technologies. It ensures information is delivered in the format most understandable and acceptable to the recipient.', category: 'tool' },
    '冲突管理': { zh: '冲突管理是解决项目团队和相关方之间分歧的人际关系技能。在多样化的项目环境中，建设性的冲突可以激发创新；项目经理需运用协作、妥协、调解等策略，将冲突引导为积极的结果而非破坏性对抗。', en: 'Conflict Management is an interpersonal skill for resolving disagreements among project team members and stakeholders. In diverse project environments, constructive conflict can stimulate innovation; the project manager must employ strategies like collaboration, compromise, and mediation to channel conflict into positive outcomes rather than destructive confrontation.', category: 'tool' },
    '谈判': { zh: '谈判是两方或多方通过讨论达成互惠协议的人际关系技能。在项目管理中广泛用于获取资源（与职能经理谈判人员分配）、管理相关方期望（协商需求优先级）和采购管理（与供应商谈判合同条款）。', en: 'Negotiation is an interpersonal skill where two or more parties discuss to reach a mutually beneficial agreement. Widely used in project management for acquiring resources (negotiating personnel assignments with functional managers), managing stakeholder expectations (negotiating requirement priorities), and procurement management (negotiating contract terms with suppliers).', category: 'tool' },
    '观察/对话': { zh: '观察/对话是一种直接获取信息的人际关系技能，通过观察工作环境中的实际行为和进行非正式的对话交流来了解团队动态和相关方真实态度。在管理相关方参与和监督沟通流程中，它比正式报告更能发现隐藏的问题和抵制。', en: 'Observation/Conversation is an interpersonal skill for directly obtaining information by observing actual behaviors in the work environment and conducting informal dialogue. In Manage Stakeholder Engagement and Monitor Communications, it can uncover hidden issues and resistance more effectively than formal reports.', category: 'tool' },
    '政治意识': { zh: '政治意识是理解组织中的权力结构、非正式网络和利益格局并据此调整行动策略的人际关系技能。在管理相关方参与中，它帮助项目经理识别真正的决策者、理解隐性议程，并在复杂的组织政治中有效运作。', en: 'Political Awareness is an interpersonal skill for understanding power structures, informal networks, and interest dynamics within an organization and adjusting action strategies accordingly. In Manage Stakeholder Engagement, it helps the project manager identify true decision-makers, understand hidden agendas, and operate effectively within complex organizational politics.', category: 'tool' },
    '项目报告': { zh: '项目报告是管理沟通流程中的工具，系统地生成和分发项目状态、进展和预测信息。包括状态报告、进展报告、预测报告和绩效仪表盘等多种形式，是根据沟通管理计划定期向相关方传递项目信息的主要方式。', en: 'Project Reporting is a technique in the Manage Communications process that systematically generates and distributes project status, progress, and forecast information. It encompasses multiple formats including status reports, progress reports, forecast reports, and dashboards, serving as the primary means of delivering project information to stakeholders at regular intervals per the communications management plan.', category: 'tool' },
    '积极倾听': { zh: '积极倾听是沟通中的关键人际关系技能，要求接收者全神贯注地接收、理解、回应和记忆对方所说内容。它包括反馈性倾听（复述对方要点）、情感确认和提问澄清等技术，是管理沟通和监督沟通流程的核心技能。', en: 'Active Listening is a critical interpersonal communication skill requiring the receiver to fully concentrate on, understand, respond to, and remember what is being said. It includes techniques like reflective listening (paraphrasing key points), emotional validation, and clarifying questions. A core skill in both Manage Communications and Monitor Communications.', category: 'tool' },
    '非语言沟通': { zh: '非语言沟通是通过肢体语言、面部表情、语调、姿态和空间距离等非语言渠道传递信息的技能。在管理沟通流程中，理解非语言信号有助于捕捉字面之外的情感态度和隐藏信息，尤其在跨文化团队中至关重要。', en: 'Nonverbal Communication is the skill of transmitting information through non-language channels including body language, facial expressions, tone of voice, posture, and spatial distance. In the Manage Communications process, understanding nonverbal signals helps capture emotional attitudes and hidden messages beyond words, especially critical in cross-cultural teams.', category: 'tool' },
    '多标准决策分析': { zh: '多标准决策分析（MCDA）是一种在多个评价标准下综合评估和选择最优方案的决策技术。它通过为每个标准设置权重，对不同备选方案进行加权评分，在监督相关方参与和获取资源中用于透明地做出复杂决策。', en: 'Multi-Criteria Decision Analysis (MCDA) is a decision-making technique that comprehensively evaluates and selects the optimal option under multiple evaluation criteria. By assigning weights to each criterion and scoring different alternatives, it enables transparent complex decision-making in Monitor Stakeholder Engagement and Acquire Resources.', category: 'tool' },
    '组织图': { zh: '组织图是规划资源管理中的工具，以图形方式展示项目在组织内的报告关系和人员架构。它包括层级型组织图、矩阵型组织图和文本型角色描述，帮助明确团队成员的角色、职责和沟通路径。', en: 'Organizational Charts are tools in Plan Resource Management that graphically display project reporting relationships and personnel structures within the organization. They include hierarchical charts, matrix-based charts, and text-oriented role descriptions, helping clarify team member roles, responsibilities, and communication paths.', category: 'tool' },
    '预测性分析': { zh: '预测性分析是PMBOK第8版在估算资源中引入的数据分析技术，利用历史数据和统计算法预测未来的资源需求趋势。通过分析过去的资源使用模式、项目绩效数据和市场趋势，提前识别资源短缺或过剩的可能性。', en: 'Predictive Analytics is a data analysis technique introduced in PMBOK 8th Edition for resource estimation, using historical data and statistical algorithms to forecast future resource demand trends. By analyzing past resource usage patterns, project performance data, and market trends, it identifies potential resource shortages or surpluses in advance.', category: 'tool' },
    '分支与绑定': { zh: '分支与绑定是运筹学中的优化算法，用于在资源约束下寻找最优分配方案。在估算资源中，它能有效处理多项目多约束条件下的资源优化问题，通过系统搜索可能性空间来找到成本最低或效率最高的资源配置方案。', en: 'Branch and Bound is an optimization algorithm from operations research used to find the optimal allocation solution under resource constraints. In Estimate Resources, it efficiently handles resource optimization problems under multiple project and constraint conditions, systematically searching the solution space to find the lowest-cost or highest-efficiency resource configuration.', category: 'tool' },
    '回顾会议': { zh: '回顾会议（Retrospective）是敏捷实践中每个迭代结束时的团队反思会议，团队检视过去一个周期的工作方式，识别什么做得好、什么需要改进，并制定具体的改进行动计划。在领导团队流程中，它是驱动持续改进和团队成长的核心实践。', en: 'Retrospectives are team reflection meetings held at the end of each iteration in agile practice. The team examines how they worked over the past cycle, identifies what went well and what needs improvement, and develops concrete action plans for improvement. In the Lead the Team process, retrospectives are a core practice for driving continuous improvement and team growth.', category: 'tool' },
    '绩效审查': { zh: '绩效审查是监督与控制资源利用流程中的核心分析技术，通过将实际资源使用绩效与计划基准进行对比，评估资源效率。它分析资源使用率、产出率和闲置率等指标，为资源重新分配或优化提供数据驱动的依据。', en: 'Performance Reviews are a core analysis technique in the Monitor and Control Resourcing process, comparing actual resource usage performance against planned baselines to assess resource efficiency. It analyzes metrics like resource utilization rate, output rate, and idle rate, providing data-driven evidence for resource reallocation or optimization.', category: 'tool' },
    '问题解决': { zh: '问题解决是识别、分析和解决项目执行中出现的问题的系统性方法，包括定义问题、分析根本原因、生成备选方案、选择最佳方案和实施验证等步骤。在监督与控制资源利用中用于处理资源冲突、短缺或效率低下等资源问题。', en: 'Problem Solving is a systematic approach for identifying, analyzing, and resolving issues that arise during project execution, including steps like defining the problem, analyzing root causes, generating alternatives, selecting the best solution, and implementing and verifying. Used in Monitor and Control Resourcing to address resource issues like conflicts, shortages, or efficiency problems.', category: 'tool' },
    '人工智能（AI）': { zh: '人工智能（AI）是PMBOK第8版在识别风险中引入的新兴技术工具。利用机器学习和自然语言处理等技术，AI可以从历史项目数据和行业知识库中自动识别风险模式，辅助提示清单发现传统方法可能遗漏的风险因素。', en: 'Artificial Intelligence (AI) is an emerging technology tool introduced in PMBOK 8th Edition for risk identification. Using machine learning and natural language processing, AI can automatically identify risk patterns from historical project data and industry knowledge bases, supplementing prompt lists by discovering risk factors that traditional methods might miss.', category: 'tool' },
    '概率和影响矩阵': { zh: '概率和影响矩阵是执行风险分析中的核心工具，将每个风险按照其发生概率和影响程度的组合映射到矩阵中。矩阵将风险划分为高、中、低三个区域，帮助团队直观地确定哪些风险需要优先应对，哪些可以接受或仅需监控。', en: 'Probability and Impact Matrix is the core tool in Perform Risk Analysis that maps each risk onto a matrix based on the combination of its probability of occurrence and degree of impact. The matrix divides risks into high, medium, and low zones, helping the team visually determine which risks need priority responses and which can be accepted or just monitored.', category: 'tool' },
    '影响力': { zh: '影响力是实施风险应对流程中的人际关系技能，项目经理通过说服、协调和建立同盟来推动风险应对措施的执行。它特别适用于需要跨部门协作或获得高级管理层支持的应对措施，但无法以正式职权强制执行的情况。', en: 'Influence is an interpersonal skill used in the Implement Risk Responses process, where the project manager drives the execution of risk responses through persuasion, coordination, and alliance-building. It is particularly useful when responses require cross-departmental collaboration or senior management support but cannot be enforced through formal authority.', category: 'tool' },
    '技术绩效分析': { zh: '技术绩效分析是监督风险流程中的核心分析工具，通过将项目执行中实际取得的技术绩效指标（如速度、处理能力、精度、缺陷率等）与计划的技术基准进行对比，来检测风险触发条件或发现新风险的技术偏差信号。', en: 'Technical Performance Analysis is a core analysis tool in the Monitor Risks process that compares actual technical performance metrics achieved during project execution (e.g., speed, processing capacity, accuracy, defect rates) against planned technical baselines to detect risk trigger conditions or identify technical deviation signals indicating new risks.', category: 'tool' }
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
