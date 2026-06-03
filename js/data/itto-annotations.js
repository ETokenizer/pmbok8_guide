/**
 * ITTO 悬浮注释数据 — 用于 hover 气泡窗口
 * 数据来源：itto-definitions.js + itto-registry.js 流向信息
 */
import { ittoDefinitions, getDefinition } from './itto-definitions.js';
import { ittoRegistry, ittoProcLookup } from './itto-registry.js';
import { bilingualName, englishName } from './itto-bilingual.js';

/**
 * 获取 ITTO 条目的悬浮注释文本
 * @param {string} itemName - 条目中文名
 * @param {string} itemType - 'input' | 'tool' | 'output'
 * @returns {object} { zh, en, flow }
 */
export function getAnnotation(itemName, itemType) {
  const typeLabels = { input: '输入', tool: '工具与技术', output: '输出' };
  const typeLabel = typeLabels[itemType] || '条目';

  // Try exact definition match
  let def = ittoDefinitions[itemName];

  // Fuzzy match
  if (!def) {
    const clean = (s) => s.replace(/[（(][^）)]*[）)]/g, '').trim();
    const base = clean(itemName);
    for (const key of Object.keys(ittoDefinitions)) {
      if (clean(key) === base || base.startsWith(clean(key)) || clean(key).startsWith(base)) {
        def = ittoDefinitions[key];
        break;
      }
    }
  }

  // Fallback: use getDefinition but detect placeholder
  if (!def) {
    const fallback = getDefinition(itemName, itemType);
    def = fallback;
  }

  // Detect placeholder / generic definition
  const isPlaceholder = def.zh && def.zh.includes('定义待补充');

  // Get flow info from registry
  let flowZh = '', flowEn = '';
  let reg = ittoRegistry[itemName];
  if (!reg) {
    const clean = (s) => s.replace(/[（(][^）)]*[）)]/g, '').trim();
    for (const key of Object.keys(ittoRegistry)) {
      if (clean(key) === clean(itemName)) { reg = ittoRegistry[key]; break; }
    }
  }

  if (reg && reg.o.length > 0) {
    const procs = reg.o.map(n => {
      const p = ittoProcLookup[n];
      return p ? `#${n} ${p.n}` : `#${n}`;
    });
    flowZh = `产出流程: ${procs.join('、')}`;
    flowEn = `Produced by: ${procs.join(', ')}`;
  }

  if (reg && reg.i.length > 0) {
    const procs = reg.i.map(n => {
      const p = ittoProcLookup[n];
      return p ? `#${n} ${p.n}` : `#${n}`;
    });
    if (flowZh) flowZh += ' | ';
    if (flowEn) flowEn += ' | ';
    flowZh += `消费流程: ${procs.join('、')}`;
    flowEn += `Consumed by: ${procs.join(', ')}`;
  }

  return {
    zh: isPlaceholder ? '' : (def.zh || ''),
    en: isPlaceholder ? '' : (def.en || ''),
    flowZh,
    flowEn,
    typeLabel
  };
}
