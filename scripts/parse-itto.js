/**
 * ITTO.txt Parser v2 — extracts structured ITTO data from PMBOK 8th Edition ITTO document
 * Handles Markdown-escaped characters (\#, \&, etc.) and multi-line sections.
 * Usage: node scripts/parse-itto.js
 */

const fs = require('fs');
const path = require('path');

const ittoPath = path.join(__dirname, '..', 'ITTO.txt');
const text = fs.readFileSync(ittoPath, 'utf-8');

// ============ UTILITIES ============

/** Normalize Markdown-escaped characters in the raw text */
function unescapeMd(s) {
  return s.replace(/\\([#&*_~])/g, '$1');
}

/** Split Chinese enumeration (、) while preserving parenthetical groups （）() */
function splitEnum(str) {
  const parts = [];
  let depth = 0;
  let current = '';
  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    if (ch === '（' || ch === '(') depth++;
    else if (ch === '）' || ch === ')') depth--;
    else if (ch === '、' && depth === 0) {
      const trimmed = current.trim();
      if (trimmed) parts.push(trimmed);
      current = '';
      continue;
    }
    current += ch;
  }
  const trimmed = current.trim();
  if (trimmed) parts.push(trimmed);
  return parts;
}

/** Split multi-line section items on ；(Chinese semicolon) preserving paren groups */
function splitSemicolon(str) {
  const parts = [];
  let depth = 0;
  let current = '';
  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    if (ch === '（' || ch === '(') depth++;
    else if (ch === '）' || ch === ')') depth--;
    else if ((ch === '；' || ch === ';') && depth === 0) {
      const trimmed = current.trim();
      if (trimmed) parts.push(trimmed);
      current = '';
      continue;
    }
    current += ch;
  }
  const trimmed = current.trim();
  if (trimmed) parts.push(trimmed);
  return parts;
}

/** Extract English name from trailing parentheses */
function extractEn(name) {
  const m = name.match(/[（(]([A-Za-z\s&\/\-\.\,\;\:\*\[\]\+\(\)\d]+)[）)]$/);
  if (m) return m[1].trim();
  return '';
}

/** Clean Chinese name by removing trailing English parenthetical */
function cleanZh(name) {
  return name.replace(/[（(][A-Za-z\s&\/\-\.\,\;\:\*\[\]\+\(\)\d]+[）)]$/, '').trim();
}

/** Parse flow numbers from annotation like "#2, #3, #9" */
function parseFlowNums(text) {
  const nums = [];
  const matches = text.match(/#(\d+)/g);
  if (matches) matches.forEach(n => nums.push(parseInt(n.replace('#', ''))));
  return nums;
}

/** Clean trailing artifacts */
function clean(s) {
  return s.replace(/\.\s*$/, '').replace(/；\s*$/, '').replace(/;\s*$/, '').trim();
}

/** Strip markdown formatting from extracted item names */
function cleanItemName(s) {
  let t = s.trim();
  // Strip leading markdown list markers
  t = t.replace(/^[\*\-]\s+/, '');
  // Strip markdown bold/italic markers (* and **)
  t = t.replace(/^\*{1,2}/, '').replace(/\*{1,2}$/, '');
  // Strip leading numbers like "1. " or "1."
  t = t.replace(/^\d+[\.\、\s]+/, '');
  t = t.trim();
  return t;
}

/** Check if an item name is valid (not a section header, not empty, etc.) */
const SKIP_NAMES = new Set(['真实输入', '真实输出', '真实工具与技术', 'Inputs', 'Outputs', 'T&T']);
function isValidItem(name) {
  if (!name || name.length < 1) return false;
  const t = name.trim();
  if (SKIP_NAMES.has(t)) return false;
  if (t.includes('真实输入') || t.includes('真实输出') || t.includes('真实工具')) return false;
  if (t.match(/^[·\-\*\d\.\s]+$/)) return false;
  // Skip very long items (likely raw markdown that wasn't parsed correctly)
  if (t.length > 80) return false;
  // Skip items that look like raw markdown with embedded formatting
  if (t.includes('|') && t.length > 40) return false;
  // Skip items that start with * (italic/bold markers not stripped)
  if (t.startsWith('*') && t.length < 5) return false;
  return true;
}

// ============ FOCUS AREA MAPPING ============
function getFA(num) {
  if (num >= 1 && num <= 9) return { zh: '治理绩效域', en: 'Governance' };
  if (num >= 10 && num <= 15) return { zh: '范围绩效域', en: 'Scope' };
  if (num >= 16 && num <= 18) return { zh: '进度绩效域', en: 'Schedule' };
  if (num >= 19 && num <= 22) return { zh: '财务绩效域', en: 'Finance' };
  if (num >= 23 && num <= 29) return { zh: '相关方绩效域', en: 'Stakeholders' };
  if (num >= 30 && num <= 34) return { zh: '资源绩效域', en: 'Resources' };
  if (num >= 35 && num <= 40) return { zh: '风险绩效域', en: 'Risk' };
  return { zh: '其他', en: 'Other' };
}

// ============ PARSE ============

/** Extract a single section: everything between "### **\#N ..." and the next "### **\#N+1 ..." */
const procHeaders = [];
const headerRegex = /### \*\*\\#(\d+)\s+(.+?)\s*\(([^)]+)\)\*\*/g;
let hm;
const indexed = [];
while ((hm = headerRegex.exec(text)) !== null) {
  indexed.push({ idx: hm.index, num: parseInt(hm[1]), nameZh: hm[2].trim(), nameEn: hm[3].trim() });
}

/** Extract section text between this header and the next */
function getSectionText(startIdx, i) {
  const start = indexed[i].idx;
  const end = i + 1 < indexed.length ? indexed[i + 1].idx : text.length;
  return text.substring(start, end);
}

/** Get the content between two section markers */
function getSectionContent(section, startMarker) {
  const startIdx = section.indexOf(startMarker);
  if (startIdx < 0) return '';
  const after = section.substring(startIdx);
  // Find the next section marker (真实输入, 真实工具, 真实输出)
  const nextMarker = after.substring(startMarker.length).match(/\n\* \*\*真实/);
  const limit = nextMarker ? nextMarker.index + startMarker.length : after.length;
  return after.substring(0, limit);
}

/** Parse items that are in inline format: "item1、item2、item3" */
function parseInlineItems(text) {
  if (!text) return [];
  let content = clean(unescapeMd(text));
  const clauses = splitSemicolon(content);
  const items = [];
  for (const clause of clauses) {
    const subItems = splitEnum(clause.trim());
    for (const si of subItems) {
      const cleaned = cleanItemName(si.replace(/\.\s*$/, '').trim());
      if (isValidItem(cleaned)) items.push(cleaned);
    }
  }
  return items;
}

/** Parse bullet-format items after a section header */
function parseBulletItems(sectionContent, sectionMarker) {
  // Extract the content between this section marker and the next
  const idx = sectionContent.indexOf(sectionMarker);
  if (idx < 0) return [];

  const after = sectionContent.substring(idx + sectionMarker.length);
  // Find next section
  const nextMatch = after.match(/\n\* \*\*真实/);
  const limit = nextMatch ? nextMatch.index : after.length;
  const body = after.substring(0, limit);

  const items = [];
  // Match bullet lines: * item, * **item**, or * *descriptive text*
  // But skip annotation lines with 【穿透】or 【隐性】
  const bulletRe = /^\s*\*\s+(.+?)(?:\s*→.*)?$/gm;
  let bm;
  while ((bm = bulletRe.exec(body)) !== null) {
    let raw = unescapeMd(bm[1].trim());

    // Skip annotation/penetration lines
    if (raw.includes('【穿透') || raw.includes('【隐性')) continue;

    // Extract bold item if present: **Name** or **Name (EN)**
    const boldMatch = raw.match(/^\*\*(.+?)\*\*/);
    if (boldMatch) {
      const name = cleanItemName(cleanZh(boldMatch[1].trim()));
      // Also try to extract tools from parentheticals in the bold content
      const parenTools = [];
      const parenRe = /[（(]([^）)]+)[）)]/g;
      let pm;
      while ((pm = parenRe.exec(boldMatch[1])) !== null) {
        parenTools.push(...splitEnum(pm[1].trim()));
      }
      // If the bold name itself contains tool-like text after a colon, extract those too
      const colonIdx = boldMatch[1].indexOf('：');
      if (colonIdx >= 0) {
        const afterColon = boldMatch[1].substring(colonIdx + 1);
        parenTools.push(...splitEnum(afterColon.trim()));
      }
      for (const pt of parenTools) {
        const cleaned = cleanItemName(pt);
        if (isValidItem(cleaned) && !items.includes(cleaned)) items.push(cleaned);
      }
      if (isValidItem(name)) items.push(name);
      continue;
    }

    // Also try splitting on 、 if the raw text contains commas (inline items on single bullet)
    if (raw.includes('、') && !raw.includes('：') && !raw.includes('*')) {
      const splitItems = parseInlineItems(raw);
      for (const si of splitItems) {
        const cleaned = cleanItemName(si);
        if (isValidItem(cleaned) && !items.includes(cleaned)) items.push(cleaned);
      }
      continue;
    }

    // For #17 tools: structured text like "* *内部步骤核心技术*：1. 定义活动（分解技术、滚动波浪规划） | 2..."
    // Extract tool names from after the colon
    const colonIdx = raw.indexOf('：');
    if (colonIdx >= 0) {
      const afterColon = raw.substring(colonIdx + 1);
      // Split on | or numbers like "1. ", "2. " to get segments
      const segments = afterColon.split(/\s*\|\s*/);
      for (const seg of segments) {
        // Remove leading number like "1. " or "1."
        const cleaned = seg.replace(/^\d+[\.\s、]+/, '').trim();
        // Extract tool names from parentheticals
        const parenTools = [];
        const parenRe = /[（(]([^）)]+)[）)]/g;
        let pm;
        while ((pm = parenRe.exec(cleaned)) !== null) {
          parenTools.push(...splitEnum(pm[1].trim()));
        }
        if (parenTools.length > 0) {
          for (const pt of parenTools) {
            const ptClean = cleanItemName(pt);
            if (isValidItem(ptClean) && !items.includes(ptClean)) items.push(ptClean);
          }
        } else if (cleaned.length > 1) {
          // For items like "敏捷发布规划" without parens
          const subItems = splitEnum(cleaned);
          for (const si of subItems) {
            const siClean = cleanItemName(si);
            if (isValidItem(siClean) && !items.includes(siClean)) items.push(siClean);
          }
        }
      }
      continue;
    }

    // Plain bullet item - try splitting on 、 first (might be combined items)
    const name = cleanItemName(cleanZh(raw));
    if (name.includes('、')) {
      const splitItems = parseInlineItems(name);
      for (const si of splitItems) {
        const siClean = cleanItemName(si);
        if (isValidItem(siClean) && !items.includes(siClean)) items.push(siClean);
      }
    } else if (isValidItem(name)) {
      items.push(name);
    }
  }

  return items;
}

/** Parse inputs from section text */
function parseInputs(section) {
  const marker = '* **真实输入';
  const content = getSectionContent(section, marker);

  // Try inline format first
  const m = content.match(/\* \*\*真实输入\s*\(Inputs\)\*\*[：:]\s*(.+)/);
  let items = [];
  if (m) {
    items = parseInlineItems(m[1]);
  }

  // Also check for bullet-format items (e.g. process #2)
  const bulletItems = parseBulletItems(section, marker);
  for (const bi of bulletItems) {
    if (!items.includes(bi)) items.push(bi);
  }

  return items;
}

/** Parse tools from section text */
function parseTools(section) {
  const marker = '* **真实工具与技术';
  const content = getSectionContent(section, marker);

  // Try inline format first
  const m = content.match(/\* \*\*真实工具与技术\s*\(T\\&T\)\*\*[：:]\s*(.+)/);
  let items = [];
  if (m) {
    items = parseInlineItems(m[1]);
  }

  // Also check for bullet-format items (e.g. process #17)
  const bulletItems = parseBulletItems(section, marker);
  for (const bi of bulletItems) {
    if (!items.includes(bi)) items.push(bi);
  }

  return items;
}

/** Parse outputs from section text */
function parseOutputs(section) {
  const marker = '* **真实输出';
  const content = getSectionContent(section, marker);

  const outputs = [];
  const outputFlows = {};

  // Find all bold output items with optional flow annotations
  // Pattern: * **Name (EN)** [→ ...description with optional #N references...]
  const outPattern = /^\s*\*\s*\*\*(.+?)\*\*\s*(.*)$/gm;
  let om;
  while ((om = outPattern.exec(content)) !== null) {
    const rawName = om[1].trim();
    const restOfLine = om[2] || '';

    // Skip annotation lines
    if (rawName.includes('【穿透') || rawName.includes('【隐性')) continue;

    const name = unescapeMd(rawName);
    const zhName = cleanItemName(cleanZh(name));

    if (!isValidItem(zhName)) continue;

    if (!outputs.includes(zhName)) {
      outputs.push(zhName);
    }

    // Parse flow numbers from the rest of line: could be "→ 流入 #X, #Y" or other formats
    const flowNums = parseFlowNums(unescapeMd(restOfLine));
    if (flowNums.length > 0) {
      outputFlows[zhName] = flowNums;
    }
  }

  return { outputs, outputFlows };
}

// ============ BUILD DATA ============

const allProcesses = [];
const ittoRegistry = {};
const ittoProcLookup = {};
const bilingualMap = {};

const processIcons = {
  1:'🚀',2:'📋',3:'🛒',4:'🎬',5:'⭐',6:'📚',7:'📊',8:'🔄',9:'🏁',
  10:'🎯',11:'📝',12:'🔍',13:'📊',14:'📏',15:'✅',
  16:'📅',17:'📅',18:'⏰',19:'💰',20:'💲',21:'💵',22:'📈',
  23:'👥',24:'🤝',25:'📢',26:'🗣️',27:'📡',28:'👁️',29:'📱',
  30:'📦',31:'🧮',32:'👥',33:'🌟',34:'📊',
  35:'🛡️',36:'⚠️',37:'📊',38:'🎯',39:'🎲',40:'📡'
};

const processColors = {
  1:'#005A9D',2:'#0077C8',3:'#2E8B57',4:'#D4AF37',5:'#8B4513',6:'#C71585',7:'#4B0082',8:'#FF6347',9:'#00FA9A',
  10:'#2E8B57',11:'#D4AF37',12:'#8B4513',13:'#C71585',14:'#0077C8',15:'#9370DB',
  16:'#0077C8',17:'#9370DB',18:'#FF69B4',19:'#D4AF37',20:'#FFD700',21:'#20B2AA',22:'#DAA520',
  23:'#C71585',24:'#1E90FF',25:'#4169E1',26:'#00CED1',27:'#FF6347',28:'#FF4500',29:'#DC143C',
  30:'#4B0082',31:'#32CD32',32:'#DAA520',33:'#FF69B4',34:'#9370DB',
  35:'#DC143C',36:'#FF4500',37:'#8A2BE2',38:'#FFE4B5',39:'#4B0082',40:'#FFD700'
};

// Load existing descriptions
const processDescriptions = {};
try {
  const processesPath = path.join(__dirname, '..', 'js', 'data', 'processes.js');
  const pc = fs.readFileSync(processesPath, 'utf-8');
  const dr = /number:\s*(\d+)[\s\S]*?description:\s*'([^']*)'[\s\S]*?descriptionEn:\s*'([^']*)'/g;
  let dm;
  while ((dm = dr.exec(pc)) !== null) {
    processDescriptions[parseInt(dm[1])] = { zh: dm[2], en: dm[3] };
  }
} catch(e) {}

// Load existing bilingual
const existingBilingual = {};
try {
  const bp = path.join(__dirname, '..', 'js', 'data', 'itto-bilingual.js');
  const ec = fs.readFileSync(bp, 'utf-8');
  const kr = /'([^']+)'\s*:\s*'([^']+)'/g;
  let km;
  while ((km = kr.exec(ec)) !== null) {
    existingBilingual[km[1]] = km[2];
  }
} catch(e) {}

// Register helper
function registerItem(name, procNum, type) {
  if (!name || name.length < 2) return;
  if (!ittoRegistry[name]) ittoRegistry[name] = { o: [], i: [], t: [] };
  if (!ittoRegistry[name][type].includes(procNum)) {
    ittoRegistry[name][type].push(procNum);
  }
}

console.log(`Parsing ${indexed.length} processes...\n`);

for (let i = 0; i < indexed.length; i++) {
  const hdr = indexed[i];
  const section = getSectionText(hdr.idx, i);
  const fa = getFA(hdr.num);

  const inputs = parseInputs(section);
  const tools = parseTools(section);
  const { outputs, outputFlows } = parseOutputs(section);

  // Register in procLookup
  ittoProcLookup[hdr.num] = {
    n: hdr.nameZh,
    ne: hdr.nameEn,
    pd: fa.zh,
    pde: fa.en,
    fa: fa.zh,
    fae: fa.en
  };

  // Register each item
  for (const inp of inputs) registerItem(inp, hdr.num, 'i');
  for (const tool of tools) registerItem(tool, hdr.num, 't');
  for (const out of outputs) registerItem(out, hdr.num, 'o');

  // Register flow targets (output → consumed by)
  for (const [outName, flows] of Object.entries(outputFlows)) {
    if (!ittoRegistry[outName]) ittoRegistry[outName] = { o: [], i: [], t: [] };
    for (const targetProc of flows) {
      if (!ittoRegistry[outName].i.includes(targetProc)) {
        ittoRegistry[outName].i.push(targetProc);
      }
    }
  }

  // Collect bilingual names
  for (const item of [...inputs, ...tools, ...outputs]) {
    const en = extractEn(item);
    const zh = cleanZh(item);
    if (en && !existingBilingual[zh]) {
      bilingualMap[zh] = en;
    }
    if (zh && !existingBilingual[zh] && !bilingualMap[zh]) {
      // No English name found; check if the item itself has one we missed
    }
  }

  allProcesses.push({
    number: hdr.num,
    name: hdr.nameZh,
    nameEn: hdr.nameEn,
    focusArea: fa.zh,
    focusAreaEn: fa.en,
    icon: processIcons[hdr.num] || '📋',
    color: processColors[hdr.num] || '#666',
    inputs,
    tools,
    outputs,
    outputFlows
  });

  console.log(`  #${hdr.num} ${hdr.nameZh}: ${inputs.length}I / ${tools.length}T / ${outputs.length}O`);
}

// Sort registry keys
const sortedRegistry = {};
Object.keys(ittoRegistry).sort((a, b) => a.localeCompare(b, 'zh-Hans-CN')).forEach(k => {
  sortedRegistry[k] = {
    o: [...ittoRegistry[k].o].sort((a, b) => a - b),
    i: [...ittoRegistry[k].i].sort((a, b) => a - b),
    t: [...ittoRegistry[k].t].sort((a, b) => a - b)
  };
});

// ============ WRITE OUTPUT FILES ============

// 1. itto-registry.js
const ittoFocusAreas = {
  '治理绩效域': { icon: '🏛️', count: 9, color: '#005A9D', en: 'Governance' },
  '范围绩效域': { icon: '🎯', count: 6, color: '#2E8B57', en: 'Scope' },
  '进度绩效域': { icon: '📅', count: 3, color: '#0077C8', en: 'Schedule' },
  '财务绩效域': { icon: '💰', count: 4, color: '#D4AF37', en: 'Finance' },
  '相关方绩效域': { icon: '👥', count: 7, color: '#C71585', en: 'Stakeholders' },
  '资源绩效域': { icon: '📦', count: 5, color: '#4B0082', en: 'Resources' },
  '风险绩效域': { icon: '⚠️', count: 6, color: '#FF6347', en: 'Risk' }
};

fs.writeFileSync(path.join(__dirname, '..', 'js', 'data', 'itto-registry.js'),
  `export const ittoRegistry = ${JSON.stringify(sortedRegistry)};\n` +
  `export const ittoProcLookup = ${JSON.stringify(ittoProcLookup)};\n` +
  `export const ittoFocusAreas = ${JSON.stringify(ittoFocusAreas)};\n`
);
console.log('\n✓ Written itto-registry.js');

// 2. itto-bilingual.js
// Merge bilinguals
for (const [zh, en] of Object.entries(bilingualMap)) {
  if (!existingBilingual[zh]) existingBilingual[zh] = en;
}
const blEntries = Object.entries(existingBilingual).sort(([a], [b]) => a.localeCompare(b, 'zh-Hans-CN'));
fs.writeFileSync(path.join(__dirname, '..', 'js', 'data', 'itto-bilingual.js'),
`/**
 * ITTO 双语名称映射
 * Bilingual ITTO name mapping: Chinese → English
 */
export const ittoBilingual = {
${blEntries.map(([zh, en]) => `  '${zh.replace(/'/g, "\\'")}': '${en.replace(/'/g, "\\'")}'`).join(',\n')}
};

// Helper: get bilingual display name for an ITTO item
export function bilingualName(chineseName) {
  if (ittoBilingual[chineseName]) {
    return \`\${chineseName} (\${ittoBilingual[chineseName]})\`;
  }
  const base = chineseName.replace(/[（(][^）)]*[）)]/g, '').trim();
  for (const [key, en] of Object.entries(ittoBilingual)) {
    const keyBase = key.replace(/[（(][^）)]*[）)]/g, '').trim();
    if (base === keyBase) return \`\${chineseName} (\${en})\`;
  }
  return chineseName;
}

export function englishName(chineseName) {
  if (ittoBilingual[chineseName]) return ittoBilingual[chineseName];
  const base = chineseName.replace(/[（(][^）)]*[）)]/g, '').trim();
  for (const [key, en] of Object.entries(ittoBilingual)) {
    const keyBase = key.replace(/[（(][^）)]*[）)]/g, '').trim();
    if (base === keyBase) return en;
  }
  return '';
}
`);
console.log('✓ Written itto-bilingual.js');

// 3. processes.js
const processEntries = allProcesses.map(p => {
  const desc = processDescriptions[p.number] || { zh: '', en: '' };
  const inpStr = p.inputs.map(x => `'${x.replace(/'/g, "\\'")}'`).join(', ');
  const toolStr = p.tools.map(x => `'${x.replace(/'/g, "\\'")}'`).join(', ');
  const outStr = p.outputs.map(x => `'${x.replace(/'/g, "\\'")}'`).join(', ');
  return `  {
    number: ${p.number}, performanceDomain: '${p.focusArea}', performanceDomainEn: '${p.focusAreaEn}',
    name: '${p.name.replace(/'/g, "\\'")}', nameEn: '${p.nameEn.replace(/'/g, "\\'")}',
    icon: '${p.icon}', color: '${p.color}',
    description: '${desc.zh.replace(/'/g, "\\'")}',
    descriptionEn: '${desc.en.replace(/'/g, "\\'")}',
    inputs: [${inpStr}],
    tools: [${toolStr}],
    outputs: [${outStr}]
  }`;
}).join(',\n');

fs.writeFileSync(path.join(__dirname, '..', 'js', 'data', 'processes.js'),
`/**
 * PMBOK 第8版 — 40个项目管理流程（完整ITTO）
 * 40 Processes with full Inputs, Tools & Techniques, Outputs
 * 按 7个绩效域 (Performance Domains) 组织
 * 数据来源：PMBOK Guide 8th Edition 官方规范 + ITTO.txt
 */
export const processes = [
${processEntries}
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
`);
console.log('✓ Written processes.js');

// 4. itto-parsed.json
fs.writeFileSync(path.join(__dirname, '..', 'js', 'data', 'itto-parsed.json'),
  JSON.stringify(allProcesses, null, 2)
);
console.log('✓ Written itto-parsed.json');

// ============ SUMMARY ============
console.log('\n=== PARSE SUMMARY ===');
console.log(`Processes: ${allProcesses.length}`);
console.log(`Registry items: ${Object.keys(sortedRegistry).length}`);
console.log(`Bilingual entries: ${Object.keys(existingBilingual).length}`);

// Validate
let totalI = 0, totalT = 0, totalO = 0;
for (const p of allProcesses) {
  totalI += p.inputs.length;
  totalT += p.tools.length;
  totalO += p.outputs.length;
}
console.log(`\nTotals: ${totalI} Inputs / ${totalT} Tools / ${totalO} Outputs`);

// Check for processes with 0 tools or 0 outputs
const zeroTT = allProcesses.filter(p => p.tools.length === 0);
const zeroOut = allProcesses.filter(p => p.outputs.length === 0);
if (zeroTT.length) console.log(`\n⚠ Processes with 0 tools: ${zeroTT.map(p => `#${p.number}`).join(', ')}`);
if (zeroOut.length) console.log(`\n⚠ Processes with 0 outputs: ${zeroOut.map(p => `#${p.number}`).join(', ')}`);
