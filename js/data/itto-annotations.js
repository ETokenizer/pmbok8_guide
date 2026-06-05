/**
 * ITTO 悬浮注释数据 — 来自 ITTO.txt 的"去包袱化"穿透注释
 *
 * 与点击打开的 ITTO 弹窗（显示 PMI 标准定义和流程链）不同，
 * 悬浮气泡显示的是 ITTO.txt 独有的补充注释：
 *   - 【穿透】复合条目的具体内容拆解
 *   - 输出条目流向哪些流程（→ 流入 #N）
 *   - 输入条目的来源说明（来自 #N）
 *   - 收尾/交付等描述性说明
 */
import { ittoProcLookup } from './itto-registry.js';

// Load annotations extracted from ITTO.txt
import { ittoAnnotations as annotationsData } from './itto-annotations-data.js';

// Fuzzy lookup: strip parentheticals for matching
function fuzzyKey(name) {
  return name.replace(/[（(].*?[）)]/g, '').replace(/\s+/g, '').trim();
}

const fuzzyIndex = {};
for (const key of Object.keys(annotationsData)) {
  fuzzyIndex[fuzzyKey(key)] = key;
}

/**
 * Get ITTO.txt annotation for an item
 * @returns {{ text: string, type: string } | null}
 */
export function getAnnotation(itemName) {
  // Exact match
  if (annotationsData[itemName]) return annotationsData[itemName];

  // Fuzzy match
  const fk = fuzzyKey(itemName);
  const matchKey = fuzzyIndex[fk];
  if (matchKey) return annotationsData[matchKey];

  // Try partial match (itemName starts with or contains key)
  for (const [key, ann] of Object.entries(annotationsData)) {
    if (itemName.includes(key) || key.includes(itemName)) {
      return ann;
    }
  }

  return null;
}

/**
 * Format annotation for tooltip display.
 * Converts #N references to clickable-looking text.
 */
export function formatAnnotation(ann, itemType) {
  if (!ann) return null;

  const typeLabels = {
    penetration: '📦 拆解注释',
    flow: itemType === 'output' ? '📤 流向说明' : '📥 来源说明',
    source: '📥 来源说明',
  };

  const label = typeLabels[ann.type] || '📝 注释';
  const text = ann.text;

  return { label, text };
}
