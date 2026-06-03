/**
 * ITTO.txt Parser v3 — Semantic parser that preserves enhanced flow details
 *
 * Key design:
 * 1. Clean item names — strip (#N references) and normalize abbreviations
 * 2. Flow annotations — extract #N → process name mappings
 * 3. Name normalization — match existing naming conventions
 * 4. Registry building — correct flow relationships from ITTO.txt
 */
const fs = require('fs');
const path = require('path');

const ittoPath = path.join(__dirname, '..', 'ITTO.txt');
const text = fs.readFileSync(ittoPath, 'utf-8');

// ===================== PHASE 0: LOAD EXISTING DATA =====================
const existingBilingual = {};
const existingRegistry = {};

try {
  const bp = path.join(__dirname, '..', 'js', 'data', 'itto-bilingual.js');
  const ec = fs.readFileSync(bp, 'utf-8');
  const kr = /'([^']+)'\s*:\s*'([^']+)'/g;
  let km;
  while ((km = kr.exec(ec)) !== null) existingBilingual[km[1]] = km[2];
} catch(e) {}

try {
  const rp = path.join(__dirname, '..', 'js', 'data', 'itto-registry.js');
  const rc = fs.readFileSync(rp, 'utf-8');
  const jsonStart = rc.indexOf('{');
  let depth = 0, jsonEnd = -1;
  for (let i = jsonStart; i < rc.length; i++) {
    if (rc[i] === '{') depth++;
    if (rc[i] === '}') { depth--; if (depth === 0) { jsonEnd = i + 1; break; } }
  }
  if (jsonEnd > jsonStart) Object.assign(existingRegistry, JSON.parse(rc.substring(jsonStart, jsonEnd)));
} catch(e) {}

console.log('Loaded:', Object.keys(existingBilingual).length, 'bilingual entries,',
            Object.keys(existingRegistry).length, 'registry entries');

// ===================== PHASE 1: UNESCAPE AND SPLIT =====================
function unescape(s) {
  return s.replace(/\\([#&*_~])/g, '$1');
}

// Split on 、 while preserving （） and （） groups
function splitEnum(str) {
  const parts = [];
  let depth = 0;
  let current = '';
  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    if (ch === '（' || ch === '(') depth++;
    else if (ch === '）' || ch === ')') depth--;
    else if (ch === '、' && depth === 0) {
      const t = current.trim();
      if (t) parts.push(t);
      current = '';
      continue;
    }
    current += ch;
  }
  const t = current.trim();
  if (t) parts.push(t);
  return parts;
}

// ===================== PHASE 2: NAME NORMALIZATION =====================

// Abbreviation expansion map
const ABBREV_MAP = {
  'EEFs': '事业环境因素',
  'OPAs': '组织过程资产',
  'PMIS': '项目管理信息系统（PMIS）',
  'EVM': '挣值分析（EVM）',
  'WPI': '工作绩效信息',
  'WBS': '工作分解结构（WBS）',
  'RBS': '资源分解结构（RBS）',
  'COQ': '质量成本（COQ）',
  'TCPI': '完工尚需绩效指数（TCPI）',
  'PDM': '紧前关系绘图法（PDM）',
  'CPM': '关键路径法（CPM）',
  'MCDA': '多标准决策分析（MCDA）',
  'NGT': '名义小组技术（NGT）',
  'SWOT': '优势劣势机会威胁分析（SWOT）',
};

// Name normalization: strip flow annotations, expand abbreviations, match existing
function normalizeName(raw) {
  let name = raw.trim();

  // Remove trailing period
  name = name.replace(/\.\s*$/, '');

  // Remove " (来自 #N, ...)" flow annotations — these are NOT part of the item name
  name = name.replace(/\s*[（(]来自\s*#[^）)]*[）)]/g, '');
  // Remove " (源自 #N, ...)" annotations
  name = name.replace(/\s*[（(]源自\s*#[^）)]*[）)]/g, '');

  // Strip leading bullet markers that leaked through
  name = name.replace(/^\*\s*/, '');

  // Expand bare abbreviations to full names only if they stand alone (no Chinese context)
  const bare = name.replace(/[（(][^）)]*[）)]/g, '').replace(/\s+/g, '').trim();
  if (ABBREV_MAP[bare]) {
    name = ABBREV_MAP[bare];
  }

  // Try to match with existing registry/bilingual names
  if (existingRegistry[name] || existingBilingual[name]) return name;

  // ONLY strip half-width English parenthetical "(English)" — KEEP full-width （中文） ones
  // Half-width: matches (Capital letter or acronym at end)
  const hwParenMatch = name.match(/^(.*?)\s*\(([A-Za-z][A-Za-z\s&\/\-\.\,\;\:\+\[\]\(\)\d]*)\)$/);
  if (hwParenMatch) {
    const base = hwParenMatch[1].trim();
    // Does the base already exist in registry?
    if (existingRegistry[base] || existingBilingual[base]) return base;
    // Does the full name (but without English) exist?
    const woEn = name.replace(/\s*\([A-Za-z][^)]*\)$/, '').trim();
    if (existingRegistry[woEn] || existingBilingual[woEn]) return woEn;
  }

  // Fuzzy match: try to find existing registry keys that start with or contain this name
  const stripped = name.replace(/[（(][^）)]*[）)]/g, '').trim();
  for (const key of Object.keys(existingRegistry)) {
    const keyStripped = key.replace(/[（(][^）)]*[）)]/g, '').trim();
    if (stripped === keyStripped) return key;
  }

  // If name with full-width paren — check if base exists
  const fwMatch = name.match(/^(.+?)[（].+[）]$/);
  if (fwMatch) {
    const base = fwMatch[1].trim();
    if (existingRegistry[base] || existingBilingual[base]) return base;
  }

  return name;
}

// ===================== PHASE 3: PARSE PROCESS SECTIONS =====================

// Split document into process sections
const sections = text.split(/\r?\n(?=### \*\*\\#\d+ )/);

// Parse header from each section
function parseHeader(section) {
  const m = section.match(/### \*\*\\#(\d+)\s+(.+?)\s*\(([^)]+)\)\*\*/);
  if (!m) return null;
  return {
    number: parseInt(m[1]),
    name: m[2].trim(),
    nameEn: m[3].trim()
  };
}

// Extract the content between two section markers
function extractSection(section, startMarker) {
  const idx = section.indexOf(startMarker);
  if (idx < 0) return '';
  const tail = section.substring(idx + startMarker.length);
  const nextMarker = tail.match(/\n\* \*\*真实/);
  const limit = nextMarker ? nextMarker.index : tail.length;
  return tail.substring(0, limit);
}

// Clean raw text for item extraction
function cleanText(t) {
  return t.replace(/\.\s*$/, '').replace(/；\s*$/, '').replace(/;\s*$/, '').trim();
}

// Parse items that use inline 、-separated format
function parseInlineItems(rawText) {
  if (!rawText) return [];
  const text = cleanText(unescape(rawText));
  if (!text) return [];

  const items = [];
  const parts = splitEnum(text);

  for (const part of parts) {
    let cleaned = part.trim();
    if (!cleaned || cleaned.length < 2) continue;

    // Strip bullet markers that may have leaked
    cleaned = cleaned.replace(/^\*\s+/, '');

    // Skip annotation-only entries
    if (cleaned.startsWith('【穿透') || cleaned.startsWith('【隐性')) continue;

    // Normalize the name
    const normalized = normalizeName(cleaned);
    if (normalized && normalized.length >= 2) {
      items.push(normalized);
    }
  }

  return items;
}

// Parse bullet-format items (for processes like #2, #17)
function parseBulletItems(section, startMarker) {
  const content = extractSection(section, startMarker);
  const items = [];
  const lines = content.split('\n');
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed.startsWith('*') || trimmed.startsWith('* **真实')) continue;
    let raw = unescape(trimmed.replace(/^\*\s*/, '').trim());

    // 【穿透】annotations: extract the actual item name
    // Only 【穿透：Item Name】 format contains actual ITTO items
    if (raw.includes('【穿透')) {
      const bracketMatch = raw.match(/【穿透[：:]\s*([^】]+)】/);
      if (bracketMatch) {
        const innerName = normalizeName(bracketMatch[1].trim());
        if (innerName.length >= 2) items.push(innerName);
      }
      continue;
    }
    // 【隐性】annotations are pure explanations, skip entirely
    if (raw.includes('【隐性')) continue;

    // Strip italic markers (*text*) and trailing colon
    raw = raw.replace(/^\*[^*]+\*[：:]\s*/, '').trim();
    if (!raw) continue;

    // Always try to extract tool names from parenthetical groups first
    if (raw.includes('（')) {
      const parenRe = /[（(]([^）)]+)[）)]/g;
      let pm;
      while ((pm = parenRe.exec(raw)) !== null) {
        for (const si of splitEnum(pm[1].trim())) {
          const name = normalizeName(si.trim());
          if (name.length >= 2 && !name.includes('*') && !name.includes('|') && !name.includes('：')) {
            if (!items.includes(name)) items.push(name);
          }
        }
      }
    }

    // Also extract bold-marked content: **bold text**
    const boldRe = /\*\*(.+?)\*\*/g;
    let bm;
    while ((bm = boldRe.exec(raw)) !== null) {
      const boldContent = bm[1].trim();
      if (boldContent.includes('：')) {
        const afterColon = boldContent.substring(boldContent.indexOf('：') + 1);
        for (const si of splitEnum(afterColon)) {
          const name = normalizeName(si.trim());
          if (name.length >= 2 && !name.includes('*')) items.push(name);
        }
      } else if (boldContent.includes('、')) {
        for (const si of splitEnum(boldContent)) {
          const name = normalizeName(si.trim());
          if (name.length >= 2 && !name.includes('*')) items.push(name);
        }
      }
    }

    // Skip if the raw text is just a structural header (contains | pipes)
    if (raw.includes('|') && raw.includes('）')) continue;

    // Bold item at start: **Name**
    const startBold = raw.match(/^\*\*(.+?)\*\*/);
    if (startBold) {
      const name = normalizeName(startBold[1].trim());
      if (name.length >= 2) items.push(name);
      continue;
    }

    // Try splitting on 、 (inline list on single bullet)
    if (raw.includes('、')) {
      for (const si of splitEnum(raw)) {
        const name = normalizeName(si.trim());
        if (name.length >= 2 && !name.includes('*')) items.push(name);
      }
      continue;
    }

    // Single item
    const name = normalizeName(raw);
    if (name.length >= 2 && !name.includes('*') && !name.includes('|')) items.push(name);
  }

  // Post-filter: remove items that look like unprocessed markdown
  return items.filter(item =>
    !item.includes('|') &&
    !item.includes('*') &&
    !item.match(/^\d+[\.\、]/) &&
    item.length < 60
  );
}

// Parse outputs with flow annotations
function parseOutputs(section) {
  const content = extractSection(section, '* **真实输出');
  const outputs = [];
  const outputFlows = {};

  // Each output line: * **Name (EN)** → flow description
  const lines = content.split('\n');
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed.startsWith('* **')) continue;

    const boldMatch = trimmed.match(/^\*\s*\*\*(.+?)\*\*\s*(.*)$/);
    if (!boldMatch) continue;

    const rawName = boldMatch[1].trim();
    const rest = boldMatch[2] || '';

    if (rawName.includes('【穿透') || rawName.includes('【隐性')) continue;

    const name = normalizeName(unescape(rawName));
    if (name.length < 2) continue;

    if (!outputs.includes(name)) outputs.push(name);

    // Extract flow targets
    const flowNums = [];
    const numMatches = rest.match(/#(\d+)/g);
    if (numMatches) numMatches.forEach(n => flowNums.push(parseInt(n.replace('#', ''))));

    if (flowNums.length > 0) {
      outputFlows[name] = flowNums;
    }
  }

  return { outputs, outputFlows };
}

// ===================== PHASE 4: PROCESS ALL SECTIONS =====================

const allProcesses = [];
const ittoRegistry = {};
const ittoProcLookup = {};
const newBilingual = {};

// Focus area mapping
function getFA(num) {
  if (num <= 9) return { zh: '治理绩效域', en: 'Governance' };
  if (num <= 15) return { zh: '范围绩效域', en: 'Scope' };
  if (num <= 18) return { zh: '进度绩效域', en: 'Schedule' };
  if (num <= 22) return { zh: '财务绩效域', en: 'Finance' };
  if (num <= 29) return { zh: '相关方绩效域', en: 'Stakeholders' };
  if (num <= 34) return { zh: '资源绩效域', en: 'Resources' };
  return { zh: '风险绩效域', en: 'Risk' };
}

// Icons and colors
const icons = {1:'🚀',2:'📋',3:'🛒',4:'🎬',5:'⭐',6:'📚',7:'📊',8:'🔄',9:'🏁',10:'🎯',11:'📝',12:'🔍',13:'📊',14:'📏',15:'✅',16:'📅',17:'📅',18:'⏰',19:'💰',20:'💲',21:'💵',22:'📈',23:'👥',24:'🤝',25:'📢',26:'🗣️',27:'📡',28:'👁️',29:'📱',30:'📦',31:'🧮',32:'👥',33:'🌟',34:'📊',35:'🛡️',36:'⚠️',37:'📊',38:'🎯',39:'🎲',40:'📡'};
const colors = {1:'#005A9D',2:'#0077C8',3:'#2E8B57',4:'#D4AF37',5:'#8B4513',6:'#C71585',7:'#4B0082',8:'#FF6347',9:'#00FA9A',10:'#2E8B57',11:'#D4AF37',12:'#8B4513',13:'#C71585',14:'#0077C8',15:'#9370DB',16:'#0077C8',17:'#9370DB',18:'#FF69B4',19:'#D4AF37',20:'#FFD700',21:'#20B2AA',22:'#DAA520',23:'#C71585',24:'#1E90FF',25:'#4169E1',26:'#00CED1',27:'#FF6347',28:'#FF4500',29:'#DC143C',30:'#4B0082',31:'#32CD32',32:'#DAA520',33:'#FF69B4',34:'#9370DB',35:'#DC143C',36:'#FF4500',37:'#8A2BE2',38:'#FFE4B5',39:'#4B0082',40:'#FFD700'};

// Existing descriptions (from previous processes.js)
let existingDescs = {};
try {
  const pp = path.join(__dirname, '..', 'js', 'data', 'processes.js');
  const pc = fs.readFileSync(pp, 'utf-8');
  const dr = /number:\s*(\d+)[\s\S]*?description:\s*'([^']*)'[\s\S]*?descriptionEn:\s*'([^']*)'/g;
  let dm;
  while ((dm = dr.exec(pc)) !== null) existingDescs[parseInt(dm[1])] = { zh: dm[2], en: dm[3] };
} catch(e) {}

// Register helper
function regItem(name, procNum, type) {
  if (!name || name.length < 2) return;
  if (!ittoRegistry[name]) ittoRegistry[name] = { o: [], i: [], t: [] };
  if (!ittoRegistry[name][type].includes(procNum)) {
    ittoRegistry[name][type].push(procNum);
  }
}

console.log('\nParsing processes...\n');

for (const section of sections) {
  const hdr = parseHeader(section);
  if (!hdr) continue;

  const fa = getFA(hdr.number);
  const num = hdr.number;

  // Parse sections (use let for reassignment in cleanup)
  let inputs = parseInlineItems(
    (section.match(/\* \*\*真实输入\s*\(Inputs\)\*\*[：:]\s*(.+)/) || [])[1] || ''
  );
  // Also try bullet format
  const bulletInputs = parseBulletItems(section, '* **真实输入');
  for (const bi of bulletInputs) {
    if (!inputs.includes(bi)) inputs.push(bi);
  }

  let tools = parseInlineItems(
    (section.match(/\* \*\*真实工具与技术\s*\(T\\&T\)\*\*[：:]\s*(.+)/) || [])[1] || ''
  );
  const bulletTools = parseBulletItems(section, '* **真实工具与技术');
  for (const bt of bulletTools) {
    if (!tools.includes(bt)) tools.push(bt);
  }

  let { outputs, outputFlows } = parseOutputs(section);

  // Register in lookup
  ittoProcLookup[num] = {
    n: hdr.name, ne: hdr.nameEn,
    pd: fa.zh, pde: fa.en, fa: fa.zh, fae: fa.en
  };

  // Register items
  for (const inp of inputs) regItem(inp, num, 'i');
  for (const tool of tools) regItem(tool, num, 't');
  for (const out of outputs) regItem(out, num, 'o');

  // Register output flows
  for (const [out, flows] of Object.entries(outputFlows)) {
    if (!ittoRegistry[out]) ittoRegistry[out] = { o: [], i: [], t: [] };
    for (const f of flows) {
      if (!ittoRegistry[out].i.includes(f)) ittoRegistry[out].i.push(f);
    }
  }

  // Clean up: remove items that look like unprocessed markdown
  const cleanList = (list) => list.filter(item =>
    !item.includes('|') &&
    !item.includes('\\') &&
    item.length < 60 &&
    !item.match(/^\d+[\.\、]/) &&
    !item.match(/^\*.*\*[：:]/)
  );
  inputs = cleanList(inputs);
  tools = cleanList(tools);
  outputs = cleanList(outputs);

  allProcesses.push({
    number: num, name: hdr.name, nameEn: hdr.nameEn,
    focusArea: fa.zh, focusAreaEn: fa.en,
    icon: icons[num] || '📋', color: colors[num] || '#666',
    inputs, tools, outputs, outputFlows
  });

  console.log(`  #${num} ${hdr.name}: ${inputs.length}I / ${tools.length}T / ${outputs.length}O`);
}

// ===================== PHASE 5: GENERATE OUTPUT =====================

// Sort registry
const sortedReg = {};
Object.keys(ittoRegistry).sort((a, b) => a.localeCompare(b, 'zh-Hans-CN')).forEach(k => {
  sortedReg[k] = { o: [...ittoRegistry[k].o].sort((a,b)=>a-b), i: [...ittoRegistry[k].i].sort((a,b)=>a-b), t: [...ittoRegistry[k].t].sort((a,b)=>a-b) };
});

// Focus areas config
const ittoFocusAreas = {
  '治理绩效域': { icon: '🏛️', count: 9, color: '#005A9D', en: 'Governance' },
  '范围绩效域': { icon: '🎯', count: 6, color: '#2E8B57', en: 'Scope' },
  '进度绩效域': { icon: '📅', count: 3, color: '#0077C8', en: 'Schedule' },
  '财务绩效域': { icon: '💰', count: 4, color: '#D4AF37', en: 'Finance' },
  '相关方绩效域': { icon: '👥', count: 7, color: '#C71585', en: 'Stakeholders' },
  '资源绩效域': { icon: '📦', count: 5, color: '#4B0082', en: 'Resources' },
  '风险绩效域': { icon: '⚠️', count: 6, color: '#FF6347', en: 'Risk' }
};

// 1. itto-registry.js
fs.writeFileSync(path.join(__dirname, '..', 'js', 'data', 'itto-registry.js'),
  `export const ittoRegistry = ${JSON.stringify(sortedReg)};\n` +
  `export const ittoProcLookup = ${JSON.stringify(ittoProcLookup)};\n` +
  `export const ittoFocusAreas = ${JSON.stringify(ittoFocusAreas)};\n`
);
console.log('\n✓ itto-registry.js');

// 2. itto-bilingual.js — merge with existing
for (const [zh, en] of Object.entries(newBilingual)) {
  if (!existingBilingual[zh]) existingBilingual[zh] = en;
}
const blEntries = Object.entries(existingBilingual).sort(([a],[b]) => a.localeCompare(b, 'zh-Hans-CN'));
fs.writeFileSync(path.join(__dirname, '..', 'js', 'data', 'itto-bilingual.js'),
`/**
 * ITTO 双语名称映射 — Bilingual ITTO name mapping
 */
export const ittoBilingual = {
${blEntries.map(([zh,en]) => `  '${zh.replace(/'/g,"\\'")}': '${en.replace(/'/g,"\\'")}'`).join(',\n')}
};

export function bilingualName(n) {
  if (ittoBilingual[n]) return \`\${n} (\${ittoBilingual[n]})\`;
  const b=n.replace(/[（(][^）)]*[）)]/g,'').trim();
  for(const[k,en]of Object.entries(ittoBilingual)){if(k.replace(/[（(][^）)]*[）)]/g,'').trim()===b)return \`\${n} (\${en})\`;}
  return n;
}
export function englishName(n) {
  if(ittoBilingual[n])return ittoBilingual[n];
  const b=n.replace(/[（(][^）)]*[）)]/g,'').trim();
  for(const[k,en]of Object.entries(ittoBilingual)){if(k.replace(/[（(][^）)]*[）)]/g,'').trim()===b)return en;}
  return '';
}
`);
console.log('✓ itto-bilingual.js');

// 3. processes.js
const procEntries = allProcesses.map(p => {
  const desc = existingDescs[p.number] || { zh: '', en: '' };
  const esc = s => s.replace(/'/g, "\\'");
  return `  {
    number: ${p.number}, performanceDomain: '${p.focusArea}', performanceDomainEn: '${p.focusAreaEn}',
    name: '${esc(p.name)}', nameEn: '${esc(p.nameEn)}',
    icon: '${p.icon}', color: '${p.color}',
    description: '${esc(desc.zh)}',
    descriptionEn: '${esc(desc.en)}',
    inputs: [${p.inputs.map(x=>`'${esc(x)}'`).join(', ')}],
    tools: [${p.tools.map(x=>`'${esc(x)}'`).join(', ')}],
    outputs: [${p.outputs.map(x=>`'${esc(x)}'`).join(', ')}]
  }`;
}).join(',\n');

fs.writeFileSync(path.join(__dirname, '..', 'js', 'data', 'processes.js'),
`/**
 * PMBOK 第8版 — 40个项目管理流程（完整ITTO）
 * 数据来源：ITTO.txt + PMBOK Guide 8th Edition
 */
export const processes = [
${procEntries}
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
`);
console.log('✓ processes.js');

// 4. itto-parsed.json
fs.writeFileSync(path.join(__dirname, '..', 'js', 'data', 'itto-parsed.json'),
  JSON.stringify(allProcesses, null, 2));
console.log('✓ itto-parsed.json');

// ===================== SUMMARY =====================
console.log('\n=== SUMMARY ===');
console.log(`Processes: ${allProcesses.length}`);
console.log(`Registry items: ${Object.keys(sortedReg).length}`);
let totI=0,totT=0,totO=0;
allProcesses.forEach(p=>{totI+=p.inputs.length;totT+=p.tools.length;totO+=p.outputs.length;});
console.log(`Totals: ${totI}I / ${totT}T / ${totO}O`);

// Check for zero-count issues
const zeros = allProcesses.filter(p => p.inputs.length===0 || p.tools.length===0 || p.outputs.length===0);
if (zeros.length) {
  console.log('\n⚠ Zero-count processes:');
  zeros.forEach(p => console.log(`  #${p.number} ${p.name}: ${p.inputs.length}I/${p.tools.length}T/${p.outputs.length}O`));
}
