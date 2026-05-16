/**
 * PMBOK Guide Edition 8 - 主应用入口
 * Main Application — 4 Views: 原则 | 绩效域 | 流程 | 敏捷
 */
import { state, loadState, getDeviceId, setToStorage, STORAGE_KEYS } from './core/state.js';
import { principles } from './data/principles.js';
import { performanceDomains } from './data/domains.js';
import { processes, focusAreaConfig } from './data/processes.js';
import { agileApproaches } from './data/agile.js';
import { initModals, showCaseModal, showQuizModal, closeCaseModal, closeQuizModal, closeCaseOverlay, closeIttoModal, showIttoModal, setCurrentQuizzes } from './ui/modals.js';
import { canAccessContent } from './data/trial.js';
import { openDashboard, closeDashboard } from './learning/dashboard.js';
import { openWrongBook, closeWrongBook } from './learning/wrong-book-ui.js';
import { openWeakAnalysis, closeWeakAnalysis } from './learning/weak-analysis.js';
import { recordPrincipleView, recordDomainView } from './learning/progress.js';
import { addWrongAnswer } from './learning/wrong-book.js';
import { initAuth, updateAccountUI, openAuthModal, closeAuthModal } from './auth/auth-ui.js';
import { isLoggedIn, isPremium } from './auth/auth-service.js';

// ==================== 12 个完整案例库 ====================
const caseStudies = [
    { id:1, title:'某银行数字化转型项目', industry:'金融', challenge:'传统核心系统老旧，无法满足数字化业务需求，系统迁移风险极高', solution:'采用双模IT策略：稳定核心系统保持瀑布式，创新业务线采用敏捷迭代', result:'18个月完成转型，新业务上线速度提升300%，核心系统零故障', tags:['混合方法','双模IT','风险管理'], difficulty:'困难' },
    { id:2, title:'电商平台微服务重构', industry:'互联网', challenge:'单体架构难支撑业务增长，技术债务严重，团队效率低下', solution:'微服务拆分+Scrum敏捷，按业务域划分团队，每2周迭代交付', result:'6个月完成核心服务拆分，部署频率从月提升到天，故障率下降80%', tags:['Scrum','微服务','DevOps'], difficulty:'中等' },
    { id:3, title:'医疗设备软件合规项目', industry:'医疗', challenge:'FDA合规要求严格，文档工作量大，但市场需求变化快', solution:'敏捷开发+合规文档自动化，每个Sprint结束自动生成合规文档', result:'顺利通过FDA认证，产品上市时间缩短40%', tags:['合规','敏捷','自动化'], difficulty:'困难' },
    { id:4, title:'汽车制造MES系统', industry:'制造业', challenge:'多工厂协同需求复杂，生产环境不能中断', solution:'看板方法管理需求流，分阶段灰度发布，建立快速回滚机制', result:'覆盖12个工厂，系统可用性99.9%，生产效率提升25%', tags:['Kanban','灰度发布','高可用'], difficulty:'中等' },
    { id:5, title:'政府政务云平台', industry:'政府', challenge:'安全等级要求高，采购流程复杂，多供应商协作困难', solution:'SAFe规模化敏捷框架，协调8个敏捷团队，统一PI规划', result:'按期交付，支持50+委办局业务，获数字政府创新奖', tags:['SAFe','规模化敏捷','多团队'], difficulty:'困难' },
    { id:6, title:'创业公司MVP开发', industry:'创业', challenge:'资源有限，需要快速验证商业模式', solution:'精益创业+极限编程，每周迭代，持续A/B测试', result:'3个月上线MVP，6个月实现PMF，获得A轮融资', tags:['精益创业','XP','MVP'], difficulty:'简单' },
    { id:7, title:'跨国ERP实施', industry:'企业软件', challenge:'20+国家，多种语言法规，业务流程差异大', solution:'敏捷+瀑布混合：核心模块瀑布实施，本地化适配敏捷迭代', result:'覆盖全球业务，本地化满意度95%，投资回报周期缩短30%', tags:['混合方法','全球化','ERP'], difficulty:'困难' },
    { id:8, title:'3A游戏开发项目', industry:'娱乐', challenge:'创意需求变化快，技术实现复杂，上线时间紧迫', solution:'Scrum of Scrums协调5个团队，自动化测试和CI/CD流水线', result:'如期上线，首月用户破百万，应用商店评分4.8', tags:['Scrum','SoS','CI/CD'], difficulty:'中等' },
    { id:9, title:'电信计费系统升级', industry:'电信', challenge:'7×24小时不能中断，数据量TB级，迁移风险极高', solution:'双轨运行+增量迁移，完整监控和应急体系', result:'零中断完成迁移，处理性能提升10倍，运营成本降低40%', tags:['双轨运行','增量迁移','高可用'], difficulty:'困难' },
    { id:10, title:'在线教育平台扩展', industry:'教育', challenge:'疫情影响需求暴增，并发量从万级到百万级', solution:'敏捷响应+云原生架构，弹性扩容，功能快速迭代', result:'支撑千万级用户在线学习，业务增长500%', tags:['云原生','弹性扩容','敏捷'], difficulty:'中等' },
    { id:11, title:'物流IoT追踪系统', industry:'物流', challenge:'IoT设备种类繁多，数据实时性要求高，网络环境复杂', solution:'看板管理需求，边缘计算+云端协同，分区域灰度上线', result:'覆盖全国3000+网点，追踪准确率99.5%，时效提升35%', tags:['IoT','Kanban','边缘计算'], difficulty:'中等' },
    { id:12, title:'保险核心业务系统重构', industry:'金融', challenge:'遗留系统复杂，业务规则繁多，合规要求严格', solution:'绞杀者模式渐进重构，Scrum迭代交付，自动化测试保障质量', result:'24个月完成重构，技术债务清零，新业务上线周期从月缩短到周', tags:['重构','Scrum','自动化测试'], difficulty:'困难' }
];

// ==================== 全局视图状态 ====================
let currentView = 'principles';
let selectedPrinciple = null;
let selectedDomain = null;
let selectedProcess = null;
let selectedAgile = null;
let expandedFocusAreas = {};

// ==================== 初始化 ====================
function initApp() {
    loadState();
    initModals();
    bindEvents();
    exposeGlobals();
    switchView('principles');
    initAuth();
}

function bindEvents() {
    document.querySelectorAll('.view-tab').forEach(tab => {
        tab.addEventListener('click', e => switchView(e.currentTarget.dataset.view));
    });
    const ab = document.getElementById('accountBtn');
    const ad = document.getElementById('accountDropdown');
    if (ab) ab.addEventListener('click', e => { e.stopPropagation(); ad.classList.toggle('show'); });
    document.addEventListener('click', () => ad?.classList.remove('show'));
}

function exposeGlobals() {
    Object.assign(window, {
        selectPrinciple, selectDomain, selectProcess, selectAgile,
        switchToDomain, switchToPrinciple,
        closeCaseModal, closeQuizModal, closeCaseOverlay, closeIttoModal,
        showCaseModal, showQuizModalForItem, showDomainCaseModal,
        showDomainQuizModal, showProcessQuizModal, showIttoModal, showIttoModalSafe,
        openDashboard, closeDashboard, openWrongBook, closeWrongBook,
        openWeakAnalysis, closeWeakAnalysis,
        openCaseLibrary, closeCaseLibrary, filterCases, viewCaseDetail, renderAllCases,
        openAuthModal, closeAuthModal, updateAccountUI
    });
}

// ==================== 视图切换 ====================
function switchView(view) {
    currentView = view;
    selectedPrinciple = null; selectedDomain = null; selectedProcess = null; selectedAgile = null;
    // Initialize all focus areas as expanded for process view
    expandedFocusAreas = { '启动': true, '规划': true, '执行': true, '监控': true, '收尾': true };
    document.querySelectorAll('.view-tab').forEach(t => t.classList.toggle('active', t.dataset.view === view));
    renderOverview();
    renderSidebar();
    showWelcome();
    if (view === 'principles') selectPrinciple(1);
    else if (view === 'domains') selectDomain(1);
    else if (view === 'processes') selectProcess(1);
    else if (view === 'agile') selectAgile(0);
}

function showWelcome() {
    const ds = document.getElementById('detailSection');
    const os = document.getElementById('overviewSection');
    if (os) os.style.display = 'block';
    if (ds) ds.innerHTML = `
        <div class="welcome-state">
            <div class="welcome-icon">📘</div>
            <h2 class="welcome-title">PMBOK 第 8 版 · ${currentView==='principles'?'6 项原则':currentView==='domains'?'7 个绩效域':currentView==='processes'?'40 个流程':'敏捷/混合方法'}</h2>
            <p class="welcome-desc">${currentView==='principles'?'点击左侧原则查看详细内容、实际案例和自测题':currentView==='domains'?'点击左侧绩效域查看详细内容、实际案例和自测题':currentView==='processes'?'点击左侧流程查看完整ITTO（输入/工具/输出）':currentView==='agile'?'了解敏捷宣言、Scrum、Kanban和混合方法':''}</p>
        </div>
    `;
}

// ==================== 概览区 ====================
function renderOverview() {
    const c = document.getElementById('overviewSection');
    if (!c) return;
    if (currentView === 'principles') {
        c.innerHTML = `<h3 class="overview-title">📘 6 项项目管理原则 | 6 Principles</h3><p class="overview-sub">PMBOK 第8版将第7版12项原则精简整合为6项核心原则</p>
            <div class="domain-map">${principles.map(p => `<div class="domain-card" onclick="selectPrinciple(${p.number})"><div class="domain-icon">${p.icon}</div><div class="domain-name-cn">原则${p.number}: ${p.name}</div><div class="domain-name-en">${p.nameEn}</div></div>`).join('')}</div>`;
    } else if (currentView === 'domains') {
        c.innerHTML = `<h3 class="overview-title">🌐 7 个绩效域 | 7 Performance Domains</h3><p class="overview-sub">PMBOK 第8版官方7个绩效关键领域</p>
            <div class="domain-map">${performanceDomains.map(d => `<div class="domain-card" onclick="selectDomain(${d.number})" style="border-color:${d.color}"><div class="domain-icon">${d.icon}</div><div class="domain-name-cn">${d.name}</div><div class="domain-name-en">${d.nameEn}</div></div>`).join('')}</div>`;
    } else if (currentView === 'processes') {
        const fas = Object.entries(focusAreaConfig);
        c.innerHTML = `<h3 class="overview-title">🔄 40 个流程 | 40 Processes</h3><p class="overview-sub">按 5 个焦点领域组织，含完整 ITTO 数据</p>
            <div class="domain-map processes-map">${fas.map(([name, cfg]) => `<div class="domain-card process-card" onclick="window._toggleFA('${name}')" style="border-color:${cfg.color}"><div class="domain-icon">${cfg.icon}</div><div class="domain-name-cn">${name}</div><div class="domain-name-en">${cfg.count} 个流程</div></div>`).join('')}</div>`;
    } else {
        c.innerHTML = `<h3 class="overview-title">🚀 敏捷/混合方法 | Agile & Hybrid</h3><p class="overview-sub">敏捷宣言、Scrum、Kanban、混合方法的完整指南</p>
            <div class="domain-map agile-map">${agileApproaches.map((a,i) => `<div class="domain-card" onclick="selectAgile(${i})" style="border-color:${a.color}"><div class="domain-icon">${a.icon}</div><div class="domain-name-cn">${a.title}</div><div class="domain-name-en">${a.titleEn}</div></div>`).join('')}</div>`;
    }
}

// ==================== 侧边栏 ====================
function renderSidebar() {
    const c = document.getElementById('sidebarContent');
    if (!c) return;

    if (currentView === 'principles') {
        c.innerHTML = `<div class="sidebar-header">6 项原则</div><div class="content-list">${principles.map(p => `
            <div class="content-item${selectedPrinciple===p.number?' active':''}" data-pnum="${p.number}" onclick="selectPrinciple(${p.number})">
                <span class="content-number">${p.number}</span><div style="flex:1"><div class="content-title-cn">${p.icon} ${p.name}</div><div class="content-title-en">${p.nameEn}</div><div class="content-desc">${p.summary}</div></div>
            </div>`).join('')}</div>`;
    } else if (currentView === 'domains') {
        c.innerHTML = `<div class="sidebar-header">7 个绩效域</div><div class="content-list">${performanceDomains.map(d => `
            <div class="content-item${selectedDomain===d.number?' active':''}" data-dnum="${d.number}" onclick="selectDomain(${d.number})">
                <span class="content-number" style="background:${d.color}">${d.number}</span><div style="flex:1"><div class="content-title-cn">${d.icon} ${d.name}</div><div class="content-title-en">${d.nameEn}</div><div class="content-desc">${d.summary}</div></div>
            </div>`).join('')}</div>`;
    } else if (currentView === 'processes') {
        const fas = Object.keys(focusAreaConfig);
        c.innerHTML = `<div class="sidebar-header">40 个流程</div><div class="content-list">${fas.map(fa => {
            const fps = processes.filter(p => p.focusArea === fa);
            return `<div style="border-bottom:1px solid #eee"><div style="padding:12px 18px;background:${focusAreaConfig[fa].color};color:#fff;font-size:13px;font-weight:600;cursor:pointer" onclick="window._toggleFA('${fa}')">${fa} | ${focusAreaConfig[fa].en} · ${fps.length}个</div><div id="fa_${fa}" style="display:block">${fps.map(p => `
                <div class="content-item${selectedProcess===p.number?' active':''}" data-pid="${p.number}" onclick="selectProcess(${p.number})">
                    <span class="content-number" style="background:${p.color};width:24px;height:24px;font-size:11px;line-height:24px">${p.number}</span><div style="flex:1"><div class="content-title-cn">${p.icon} ${p.name}</div><div class="content-title-en">${p.nameEn}</div></div>
                </div>`).join('')}</div></div>`;
        }).join('')}</div>`;
    } else {
        c.innerHTML = `<div class="sidebar-header">敏捷方法</div><div class="content-list">${agileApproaches.map((a,i) => `
            <div class="content-item${selectedAgile===i?' active':''}" data-aid="${i}" onclick="selectAgile(${i})">
                <span class="content-number" style="background:${a.color}">${i+1}</span><div style="flex:1"><div class="content-title-cn">${a.icon} ${a.title}</div><div class="content-title-en">${a.titleEn}</div><div class="content-desc">${a.summary}</div></div>
            </div>`).join('')}</div>`;
    }
    // Append premium nav at the bottom of each sidebar view
    c.innerHTML += renderPremiumNav();
}

// Render premium navigation section (4 entries, PMBOK7 style)
function renderPremiumNav() {
    if (isPremium()) {
        return `<div class="premium-nav-section"><div class="premium-nav-divider"></div>
            <div class="premium-nav-title">👑 Premium 已激活</div>
            <button class="premium-nav-item" onclick="openDashboard()"><span class="premium-nav-icon">📊</span><div class="premium-nav-text"><span class="premium-nav-label">学习仪表盘</span><span class="premium-nav-en">Dashboard</span></div></button>
            <button class="premium-nav-item" onclick="openPMPExam()"><span class="premium-nav-icon">📝</span><div class="premium-nav-text"><span class="premium-nav-label">模拟考试</span><span class="premium-nav-en">Mock Exam</span></div></button>
            <button class="premium-nav-item" onclick="openWrongBook()"><span class="premium-nav-icon">📕</span><div class="premium-nav-text"><span class="premium-nav-label">错题分析</span><span class="premium-nav-en">Wrong Book</span></div></button>
            <button class="premium-nav-item" onclick="openWeakAnalysis()"><span class="premium-nav-icon">🔍</span><div class="premium-nav-text"><span class="premium-nav-label">薄弱点分析</span><span class="premium-nav-en">Weak Areas</span></div></button></div>`;
    } else if (isLoggedIn()) {
        return `<div class="premium-nav-section"><div class="premium-nav-divider"></div>
            <div class="premium-nav-title">👑 Premium <span style="font-size:10px;opacity:0.7">会员专属</span></div>
            <button class="premium-nav-item" onclick="openDashboard()"><span class="premium-nav-icon">📊</span><div class="premium-nav-text"><span class="premium-nav-label">学习仪表盘</span><span class="premium-nav-en">Dashboard</span></div></button>
            <button class="premium-nav-item locked"><span class="premium-nav-icon">🔒</span><div class="premium-nav-text"><span class="premium-nav-label">模拟考试</span><span class="premium-nav-en">Mock Exam</span></div></button>
            <button class="premium-nav-item locked"><span class="premium-nav-icon">🔒</span><div class="premium-nav-text"><span class="premium-nav-label">错题分析</span><span class="premium-nav-en">Wrong Book</span></div></button>
            <button class="premium-nav-item locked"><span class="premium-nav-icon">🔒</span><div class="premium-nav-text"><span class="premium-nav-label">薄弱点分析</span><span class="premium-nav-en">Weak Areas</span></div></button>
            <div class="premium-nav-ad">🔥 激活 License 解锁全部 4 项进阶功能<br><button class="premium-ad-btn" style="margin-top:6px" onclick="openAuthModal('license')">🔑 立即激活</button></div></div>`;
    } else {
        return `<div class="premium-nav-section"><div class="premium-nav-divider"></div>
            <div class="premium-nav-title">👑 Premium <span style="font-size:10px;opacity:0.7">会员专属</span></div>
            <button class="premium-nav-item locked"><span class="premium-nav-icon">🔒</span><div class="premium-nav-text"><span class="premium-nav-label">学习仪表盘</span><span class="premium-nav-en">Dashboard</span></div></button>
            <button class="premium-nav-item locked"><span class="premium-nav-icon">🔒</span><div class="premium-nav-text"><span class="premium-nav-label">模拟考试</span><span class="premium-nav-en">Mock Exam</span></div></button>
            <button class="premium-nav-item locked"><span class="premium-nav-icon">🔒</span><div class="premium-nav-text"><span class="premium-nav-label">错题分析</span><span class="premium-nav-en">Wrong Book</span></div></button>
            <button class="premium-nav-item locked"><span class="premium-nav-icon">🔒</span><div class="premium-nav-text"><span class="premium-nav-label">薄弱点分析</span><span class="premium-nav-en">Weak Areas</span></div></button>
            <div class="premium-nav-ad">🔥 1292 题云端题库<br>登录解锁全部进阶功能</div></div>`;
    }
}

// 无抖动更新：只切换active class，不重建DOM
function refreshSidebarActive() {
    const sb = document.getElementById('sidebarContent');
    if (!sb) return;
    // Remove active from all items
    sb.querySelectorAll('.content-item.active').forEach(el => el.classList.remove('active'));

    let target = null;
    if (currentView === 'principles' && selectedPrinciple) {
        target = sb.querySelector(`.content-item[data-pnum="${selectedPrinciple}"]`);
    } else if (currentView === 'domains' && selectedDomain) {
        target = sb.querySelector(`.content-item[data-dnum="${selectedDomain}"]`);
    } else if (currentView === 'processes' && selectedProcess) {
        // Collapse all FAs except the one containing selected process
        const p = processes.find(x => x.number === selectedProcess);
        Object.keys(expandedFocusAreas).forEach(fa => { expandedFocusAreas[fa] = (fa === p.focusArea); });
        Object.keys(expandedFocusAreas).forEach(fa => {
            const el = document.getElementById(`fa_${fa}`);
            if (el) el.style.display = expandedFocusAreas[fa] ? 'block' : 'none';
        });
        target = sb.querySelector(`.content-item[data-pid="${selectedProcess}"]`);
    } else if (currentView === 'agile' && selectedAgile !== null) {
        target = sb.querySelector(`.content-item[data-aid="${selectedAgile}"]`);
    }

    if (target) {
        target.classList.add('active');
        target.scrollIntoView({ block: 'nearest' });
    }
}

// Global sidebar refresh (called from auth module after login/license change)
window._refreshSidebar = () => { renderSidebar(); refreshSidebarActive(); };

// Focus area toggle with expand state tracking
window._toggleFA = (fa) => {
    expandedFocusAreas[fa] = !expandedFocusAreas[fa];
    const el = document.getElementById(`fa_${fa}`);
    if (el) el.style.display = expandedFocusAreas[fa] ? 'block' : 'none';
};

// ==================== 选择原则 ====================
function selectPrinciple(number) {
    selectedPrinciple = number; selectedDomain = null; selectedProcess = null;
    recordPrincipleView(number);
    const p = principles.find(x => x.number === number);
    if (!p) return;
    const ds = document.getElementById('detailSection');
    document.getElementById('overviewSection').style.display = 'none';
    ds.style.display = 'block';
    ds.innerHTML = `
        <div class="detail-header">
            <div><span class="detail-number">原则 ${p.number}</span><h2>${p.name} | ${p.nameEn}</h2><div class="detail-meta">${p.icon} ${p.summary}</div></div>
            <div class="detail-header-actions">
                <button class="detail-header-btn" onclick="showCaseModal(${p.number})">📝 实际案例</button>
                <button class="detail-header-btn" onclick="showQuizModalForItem(${p.number})">✅ 自测 (${p.quizzes.length}题)</button>
            </div>
        </div>
        <div class="detail-body">
            <div class="principle-card"><h4>📘 原则说明 | Description</h4><p>${p.description}</p><p class="en">${p.descriptionEn}</p></div>
            <div class="simple-explain"><strong>💡 说人话：</strong>${p.simpleExplain}</div>
            <div class="key-aspects">${p.keyAspects.map(a => `
                <div class="aspect-item"><div class="aspect-icon">${a.icon}</div><div class="aspect-title">${a.title} | ${a.titleEn}</div><div class="aspect-desc">${a.desc}</div></div>
            `).join('')}</div>
            ${p.performanceDomains ? `<div style="margin-top:25px"><h4 style="color:var(--pmi-dark);margin-bottom:15px">🔗 相关绩效域 | Related Performance Domains</h4>
                <div style="display:flex;flex-wrap:wrap;gap:10px">${p.performanceDomains.map(dn => {
                    const d = performanceDomains.find(pd => pd.name === dn);
                    return d ? `<a href="#" onclick="switchToDomain(${d.number});return false" class="cross-ref-link"><span>${d.icon}</span> ${d.name}</a>` : '';
                }).join('')}</div></div>` : ''}
        </div>`;
    refreshSidebarActive();
}

// ==================== 选择绩效域 ====================
function selectDomain(number) {
    selectedDomain = number; selectedPrinciple = null; selectedProcess = null;
    recordDomainView(number);
    const d = performanceDomains.find(x => x.number === number);
    if (!d) return;
    const ds = document.getElementById('detailSection');
    document.getElementById('overviewSection').style.display = 'none';
    ds.style.display = 'block';
    ds.innerHTML = `
        <div class="detail-header" style="background:linear-gradient(135deg,${d.color},${d.color})">
            <div><span class="detail-number">绩效域 ${d.number}</span><h2>${d.name} | ${d.nameEn}</h2><div class="detail-meta">${d.icon} ${d.summary}</div></div>
            <div class="detail-header-actions">
                <button class="detail-header-btn" onclick="showDomainCaseModal(${d.number})">📝 实际案例</button>
                <button class="detail-header-btn" onclick="showDomainQuizModal(${d.number})">✅ 自测</button>
            </div>
        </div>
        <div class="detail-body">
            <div class="principle-card"><h4>📘 绩效域说明 | Description</h4><p>${d.description}</p><p class="en">${d.descriptionEn}</p></div>
            <div style="margin-top:20px"><h4 style="color:${d.color};margin-bottom:15px">📋 主要活动 | Key Activities</h4>
                <ul style="padding-left:20px;line-height:2">${d.keyActivities.map(a => `<li>${a}</li>`).join('')}</ul></div>
            <div style="margin-top:20px"><h4 style="color:${d.color};margin-bottom:15px">✅ 预期成果 | Expected Outcomes</h4>
                <ul style="padding-left:20px;line-height:2">${d.expectedOutcomes.map(o => `<li>✅ ${o}</li>`).join('')}</ul></div>
            ${d.relatedPrinciples ? `<div style="margin-top:25px"><h4 style="color:var(--pmi-dark);margin-bottom:15px">🔗 相关原则 | Related Principles</h4>
                <div style="display:flex;flex-wrap:wrap;gap:10px">${d.relatedPrinciples.map(pn => {
                    const p = principles.find(pr => pr.number === pn);
                    return p ? `<a href="#" onclick="switchToPrinciple(${p.number});return false" class="cross-ref-link"><span>${p.icon}</span> 原则${p.number}: ${p.name}</a>` : '';
                }).join('')}</div></div>` : ''}
        </div>`;
    refreshSidebarActive();
}

// ==================== 选择流程 ====================
function selectProcess(number) {
    selectedProcess = number; selectedPrinciple = null; selectedDomain = null;
    const p = processes.find(x => x.number === number);
    if (!p) return;
    // Collapse all focus areas except the selected one
    Object.keys(expandedFocusAreas).forEach(fa => { expandedFocusAreas[fa] = (fa === p.focusArea); });
    const ds = document.getElementById('detailSection');
    document.getElementById('overviewSection').style.display = 'none';
    ds.style.display = 'block';
    ds.innerHTML = `
        <div class="detail-header" style="background:linear-gradient(135deg,${p.color},${p.color})">
            <div><span class="detail-number">${p.focusArea}</span><h2>${p.name} | ${p.nameEn}</h2><div class="detail-meta">${p.icon} 流程 #${p.number} · ${p.performanceDomain}</div></div>
        </div>
        <div class="detail-body">
            <div class="principle-card"><h4>📘 流程说明 | Description</h4><p>${p.description}</p><p class="en">${p.descriptionEn}</p></div>
            <h4 style="color:var(--pmi-dark);margin:20px 0 15px">📋 输入、工具与输出 | ITTO <span style="font-size:11px;color:#888;font-weight:400">(点击查看详情)</span></h4>
            <div class="key-aspects" style="grid-template-columns:1fr 1fr 1fr">
                <div class="aspect-item"><div class="aspect-icon">📥</div><div class="aspect-title">输入 | Inputs</div><ul class="itto-list">${p.inputs.map(i => `<li class="itto-item" data-itto="${i.replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;')}" data-type="input" onclick="showIttoModalSafe(this)" title="点击查看定义和关联流程">🔗 ${i}</li>`).join('')}</ul></div>
                <div class="aspect-item"><div class="aspect-icon">🔧</div><div class="aspect-title">工具 | Tools</div><ul class="itto-list">${p.tools.map(t => `<li class="itto-item" data-itto="${t.replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;')}" data-type="tool" onclick="showIttoModalSafe(this)" title="点击查看定义和使用流程">🔗 ${t}</li>`).join('')}</ul></div>
                <div class="aspect-item"><div class="aspect-icon">📤</div><div class="aspect-title">输出 | Outputs</div><ul class="itto-list">${p.outputs.map(o => `<li class="itto-item" data-itto="${o.replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;')}" data-type="output" onclick="showIttoModalSafe(this)" title="点击查看定义和关联流程">🔗 ${o}</li>`).join('')}</ul></div>
            </div>
        </div>`;
    refreshSidebarActive();
}

// ==================== 选择敏捷 ====================
function selectAgile(index) {
    selectedAgile = index; selectedPrinciple = null; selectedDomain = null; selectedProcess = null;
    const a = agileApproaches[index];
    if (!a) return;
    const ds = document.getElementById('detailSection');
    document.getElementById('overviewSection').style.display = 'none';
    ds.style.display = 'block';

    let content = '';
    if (a.values) {
        content = `<h4 style="color:var(--pmi-dark);margin:20px 0 15px">📘 四项价值 | Four Values</h4>
            <div class="key-aspects" style="grid-template-columns:1fr 1fr">
                <div class="aspect-item"><div class="aspect-icon">💚</div><div class="aspect-title">核心价值</div>
                    <ul style="padding-left:15px;font-size:12px;line-height:2.2;margin-top:8px;list-style:none">${a.values.map(v => `<li><strong>${v.title}</strong> ${v.description}<br><span style="color:#666;font-size:11px"><em>${v.titleEn}</em> ${v.descriptionEn}</span></li>`).join('')}</ul></div>
                <div class="aspect-item"><div class="aspect-icon">📋</div><div class="aspect-title">十二原则 | 12 Principles</div>
                    <ul style="padding-left:15px;font-size:12px;line-height:2;margin-top:8px;list-style:none">${a.principles.map((pr,i) => `<li>${['1️⃣','2️⃣','3️⃣','4️⃣','5️⃣','6️⃣','7️⃣','8️⃣','9️⃣','🔟','1️⃣1️⃣','1️⃣2️⃣'][i]} ${pr}</li>`).join('')}</ul></div></div>`;
    } else if (a.roles) {
        content = `<h4 style="color:var(--pmi-dark);margin:20px 0 15px">👥 三个角色 | Three Roles</h4>
            <div class="key-aspects" style="grid-template-columns:1fr 1fr 1fr">${a.roles.map(r => `<div class="aspect-item" style="text-align:center"><div class="aspect-icon" style="font-size:32px">${r.icon}</div><div class="aspect-title">${r.name}</div><div style="font-size:12px;color:#666;margin-top:5px">${r.nameZh}</div><div style="font-size:11px;color:#999;margin-top:3px">${r.responsibility}</div></div>`).join('')}</div>
            <h4 style="color:var(--pmi-dark);margin:20px 0 15px">📅 四个仪式 | Four Events</h4>
            <div class="key-aspects" style="grid-template-columns:1fr 1fr 1fr 1fr">${a.events.map(e => `<div class="aspect-item"><div class="aspect-title">${e.name}</div><div style="font-size:11px;color:#666;margin-top:5px">${e.nameZh}</div><div style="font-size:10px;color:#999;margin-top:3px">${e.duration}</div><div style="font-size:10px;color:#999;margin-top:2px">${e.purpose}</div></div>`).join('')}</div>
            <h4 style="color:var(--pmi-dark);margin:20px 0 15px">📦 三个工件 | Three Artifacts</h4>
            <div class="key-aspects" style="grid-template-columns:1fr 1fr 1fr">${a.artifacts.map(ar => `<div class="aspect-item"><div class="aspect-title">${ar.name}</div><div style="font-size:11px;color:#666;margin-top:5px">${ar.nameZh}</div><div style="font-size:10px;color:#999;margin-top:3px">${ar.description}</div></div>`).join('')}</div>`;
    } else if (a.practices) {
        content = `<h4 style="color:var(--pmi-dark);margin:20px 0 15px">🎯 六大核心实践 | 6 Core Practices</h4>
            <div class="key-aspects" style="grid-template-columns:1fr 1fr 1fr">${a.practices.map(pr => `<div class="aspect-item"><div class="aspect-icon">${pr.icon}</div><div class="aspect-title">${pr.name}</div><div style="font-size:11px;color:#666;margin-top:5px">${pr.nameEn}</div><div style="font-size:11px;color:#999;margin-top:3px">${pr.description}</div></div>`).join('')}</div>`;
    } else if (a.models) {
        content = `<h4 style="color:var(--pmi-dark);margin:20px 0 15px">💡 常见混合模式 | Common Hybrid Models</h4>
            <div style="display:grid;gap:15px;margin-bottom:20px">${a.models.map(m => `<div class="principle-card" style="margin:0"><h4>${m.name}</h4><div style="font-size:12px;color:#666;margin-bottom:8px">${m.nameEn}</div><div style="font-size:13px;color:#555;line-height:1.6">${m.description}</div></div>`).join('')}</div>
            <h4 style="color:var(--pmi-dark);margin:20px 0 15px">✅ 何时选择混合方法 | When to Choose Hybrid</h4>
            <div class="key-aspects" style="grid-template-columns:1fr 1fr">${a.whenToUse.map(w => `<div class="aspect-item"><div class="aspect-icon">✅</div><div class="aspect-title">${w.split('|')[0]}</div><div style="font-size:12px;color:#666;margin-top:5px">${w.split('|')[1]||''}</div></div>`).join('')}</div>`;
    }

    ds.innerHTML = `
        <div class="detail-header" style="background:linear-gradient(135deg,${a.color},${a.color})">
            <div><span class="detail-number">${a.title}</span><h2>${a.title} | ${a.titleEn}</h2><div class="detail-meta">${a.summary}</div></div>
            ${index===3 ? `<div class="detail-header-actions"><button class="detail-header-btn" onclick="openCaseLibrary()">📚 案例库</button></div>` : ''}
        </div>
        <div class="detail-body">${content}</div>`;
    refreshSidebarActive();
}

// ==================== ITTO安全桥接（避免内联onclick转义问题）============
window.showIttoModalSafe = (el) => {
    const name = el.getAttribute('data-itto');
    const type = el.getAttribute('data-type');
    if (name && type) showIttoModal(name, type);
};

// ==================== 案例弹窗桥接 ====================
window.showCaseModal = (num) => { const p = principles.find(x => x.number === num); if (p) showCaseModal(p); };
window.showDomainCaseModal = (num) => { const d = performanceDomains.find(x => x.number === num); if (d) showCaseModal(d); };
window.showQuizModalForItem = (num) => { const p = principles.find(x => x.number === num); if (p?.quizzes) showQuizModal(p, p.quizzes); };
window.showDomainQuizModal = (num) => { const d = performanceDomains.find(x => x.number === num); if (d?.quiz) showQuizModal(d, [d.quiz]); };
window.showProcessQuizModal = () => { alert('流程自测题目开发中... | Process quizzes coming soon'); };

// ==================== 案例库弹窗 ====================
function openCaseLibrary() {
    const modal = document.getElementById('caseOverlay');
    const body = document.getElementById('caseOverlayBody');
    if (!modal || !body) return;

    const byIndustry = caseStudies.reduce((acc, c) => { if (!acc[c.industry]) acc[c.industry] = []; acc[c.industry].push(c); return acc; }, {});

    body.innerHTML = `
        <div style="margin-bottom:25px"><p style="font-size:14px;color:#666;line-height:1.8">真实项目案例库，涵盖12个案例，跨多个行业的敏捷/混合/预测型项目实践。</p></div>
        <div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:20px" id="filterBar">
            <button class="filter-btn active" onclick="renderAllCases()">全部 (12)</button>
            ${Object.keys(byIndustry).map(ind => `<button class="filter-btn" onclick="filterCases('${ind}')">${ind}</button>`).join('')}
        </div>
        <div id="caseList" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(350px,1fr));gap:20px">${renderCaseCards(caseStudies)}</div>
    `;
    modal.style.display = 'flex';
}

function renderCaseCards(cases) {
    return cases.map(c => `
        <div class="case-card" onclick="viewCaseDetail(${c.id})">
            <div class="case-header"><h4 style="color:#1f2937;font-size:15px;margin:0">${c.title}</h4><span class="difficulty-tag ${c.difficulty==='简单'?'easy':c.difficulty==='中等'?'medium':'hard'}">${c.difficulty}</span></div>
            <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:12px">
                <span class="industry-tag">🏢 ${c.industry}</span>
                ${c.tags.slice(0,3).map(t => `<span class="tech-tag">${t}</span>`).join('')}
            </div>
            <p style="font-size:13px;color:#6b7280;line-height:1.6;margin:0">${c.challenge}</p>
            <div style="margin-top:12px;text-align:right"><span style="font-size:12px;color:#8b5cf6">点击查看详情 →</span></div>
        </div>
    `).join('');
}

window.renderAllCases = () => {
    document.querySelectorAll('#filterBar .filter-btn').forEach(b => { b.classList.remove('active'); if (b.textContent.startsWith('全部')) b.classList.add('active'); });
    document.getElementById('caseList').innerHTML = renderCaseCards(caseStudies);
};

window.filterCases = (industry) => {
    document.querySelectorAll('#filterBar .filter-btn').forEach(b => { b.classList.toggle('active', b.textContent === industry); });
    document.getElementById('caseList').innerHTML = renderCaseCards(caseStudies.filter(c => c.industry === industry));
};

window.viewCaseDetail = (id) => {
    const c = caseStudies.find(x => x.id === id);
    const body = document.getElementById('caseOverlayBody');
    body.innerHTML = `
        <button onclick="openCaseLibrary()" style="margin-bottom:20px;padding:8px 16px;background:#f3f4f6;color:#374151;border:none;border-radius:8px;cursor:pointer;font-size:13px">← 返回列表</button>
        <div style="background:linear-gradient(135deg,#f0fdf4,#ecfdf5);padding:25px;border-radius:12px;margin-bottom:20px">
            <div style="display:flex;justify-content:space-between;align-items:start;margin-bottom:15px">
                <h2 style="color:#059669;font-size:20px;margin:0">${c.title}</h2>
                <span class="difficulty-tag ${c.difficulty==='简单'?'easy':c.difficulty==='中等'?'medium':'hard'}" style="font-size:12px;padding:6px 12px">难度：${c.difficulty}</span>
            </div>
            <div style="display:flex;gap:8px;flex-wrap:wrap">
                <span style="font-size:12px;padding:6px 12px;background:white;color:#374151;border-radius:20px;border:1px solid #e5e7eb">🏢 ${c.industry}</span>
                ${c.tags.map(t => `<span style="font-size:12px;padding:6px 12px;background:white;color:#6b7280;border-radius:20px;border:1px solid #e5e7eb">${t}</span>`).join('')}
            </div>
        </div>
        <div style="display:grid;gap:20px">
            <div class="case-section challenge"><h3 style="font-size:15px;margin-bottom:10px">🔴 挑战 | Challenge</h3><p style="line-height:1.8;font-size:14px">${c.challenge}</p></div>
            <div class="case-section solution"><h3 style="font-size:15px;margin-bottom:10px">🟢 解决方案 | Solution</h3><p style="line-height:1.8;font-size:14px">${c.solution}</p></div>
            <div class="case-section result"><h3 style="font-size:15px;margin-bottom:10px">🔵 成果 | Results</h3><p style="line-height:1.8;font-size:14px">${c.result}</p></div>
        </div>
    `;
};

window.closeCaseLibrary = () => { const m = document.getElementById('caseOverlay'); if (m) m.style.display = 'none'; };

// ==================== 导航桥接 ====================
function switchToDomain(number) { switchView('domains'); setTimeout(() => selectDomain(number), 50); }
function switchToPrinciple(number) { switchView('principles'); setTimeout(() => selectPrinciple(number), 50); }
window.switchToDomain = switchToDomain;
window.switchToPrinciple = switchToPrinciple;

// ==================== 启动 ====================
document.addEventListener('DOMContentLoaded', initApp);
