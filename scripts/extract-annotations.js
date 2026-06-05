/**
 * Extract ITTO.txt commentary/annotation content for tooltip use.
 * These are the "unpacking" annotations that explain what composite
 * PMI terms actually contain — the core value-add of ITTO.txt.
 */
const fs = require('fs');
const path = require('path');

const ittoPath = path.join(__dirname, '..', 'ITTO.txt');
const text = fs.readFileSync(ittoPath, 'utf-8');

// Load process lookup for #N → name expansion
const procContent = fs.readFileSync(path.join(__dirname, '..', 'js', 'data', 'itto-registry.js'), 'utf-8');
const lookupStart = procContent.indexOf('ittoProcLookup');
const jsonStart = procContent.indexOf('{', lookupStart);
let d = 0, jsonEnd = -1;
for (let i = jsonStart; i < procContent.length; i++) {
  if (procContent[i] === '{') d++;
  if (procContent[i] === '}') { d--; if (d === 0) { jsonEnd = i + 1; break; } }
}
const procLookup = JSON.parse(procContent.substring(jsonStart, jsonEnd));

// Unescape markdown and clean text
function cleanText(text) {
  return text
    .replace(/\\#/g, '#')
    .replace(/\\&/g, '&')
    .replace(/\\\*/g, '*')
    .replace(/\\([_~])/g, '$1')
    .replace(/\.\s*$/, '')
    .trim();
}

function expandRefs(text) {
  return cleanText(text).replace(/#(\d+)/g, (m, n) => {
    const p = procLookup[n];
    return p ? `#${n} ${p.n}` : m;
  });
}

const annotations = {};

// ===== 1. 【穿透：Name】(content) =====
const penRe = /\* \*\*【穿透[：:]([^】]+)】\*\*[（(]([^）)]+)[）)]/g;
let pm;
while ((pm = penRe.exec(text)) !== null) {
  const itemName = pm[1].trim();
  const content = expandRefs(pm[2].trim());
  annotations[itemName] = { type: 'penetration', text: content };
}

// ===== 2. Output flow annotations: **Name** → 流入 #N  =====
const outRe = /\* \*\*(.+?)\*\*\s*→\s*(.+?)(?=\n|$)/g;
let om;
while ((om = outRe.exec(text)) !== null) {
  const rawName = om[1].trim();
  if (rawName.includes('【')) continue;
  // Clean name
  const name = rawName.replace(/\s*[（(][A-Za-z][^）)]*[）)]$/, '').trim();
  const flowText = expandRefs(om[2].trim());
  if (!annotations[name]) annotations[name] = { type: 'flow', text: '' };
  if (annotations[name].type === 'flow') {
    annotations[name].text = annotations[name].text
      ? annotations[name].text + ' | ' + flowText
      : flowText;
  }
}

// ===== 3. Input source annotations: (来自 #N, #M ...) =====
// These appear in the input section lines
const inputSections = text.match(/\* \*\*真实输入\s*\(Inputs\)\*\*[：:]\s*(.+)/g) || [];
for (const section of inputSections) {
  // Find items with (来自 #N) annotations
  const items = section.match(/[^、，]+(?:[（(]来自\s*#[^）)]+[）)])?/g) || [];
  for (const item of items) {
    const srcMatch = item.match(/(.+?)\s*[（(]来自\s*(#[^）)]+)[）)]/);
    if (srcMatch) {
      const name = srcMatch[1].trim();
      const src = expandRefs(srcMatch[2].trim());
      if (!annotations[name]) annotations[name] = { type: 'source', text: '' };
      annotations[name].text = '来源: ' + src;
    }
  }
}

// ===== 4. Output flow detail (→ 物理交付 / → 移交 / → 固化) =====
// Some outputs have descriptive flows instead of #N refs
const descOutRe = /\* \*\*(.+?)\*\*\s*→\s*(.+?)(?=\n|$)/g;
let dom2;
while ((dom2 = descOutRe.exec(text)) !== null) {
  const rawName = dom2[1].trim();
  if (rawName.includes('【')) continue;
  const name = rawName.replace(/\s*[（(][A-Za-z][^）)]*[）)]$/, '').trim();
  const desc = dom2[2].trim();
  // Only add if no existing annotation for this item
  if (!annotations[name] && desc && !desc.includes('#')) {
    annotations[name] = { type: 'flow', text: desc };
  }
}

// ===== Generate output =====
console.log('Total annotations:', Object.keys(annotations).length);
for (const [name, ann] of Object.entries(annotations)) {
  console.log('[' + ann.type + ']', name + ':', ann.text.substring(0, 100));
}

// Write output
fs.writeFileSync(
  path.join(__dirname, '..', 'js', 'data', 'itto-annotations.json'),
  JSON.stringify(annotations, null, 2)
);
console.log('\nWritten to js/data/itto-annotations.json');
