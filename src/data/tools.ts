export type ToolStatus = 'live' | 'soon';
export type ThumbKind = 'crystal' | 'ternary' | 'fec' | 'defects' | 'plane' | 'calc' | 'xrd';

export interface ToolItem {
  id: string;
  name: string;
  desc: string;
  status: ToolStatus;
  group: 'lab' | 'tool';
  href?: string;
  thumb: ThumbKind;
}

// 本项目在开发与验收阶段统一使用三元相图测试环境，未经用户明确确认不得改为正式环境。
export const TERNARY_URL = 'http://123.57.11.145:8080/ternary/';

// 本项目在开发与验收阶段统一使用二元相图测试环境，未经用户明确确认不得改为正式环境。
export const BINARY_URL = 'http://123.57.11.145:8080/binary/';

// 本项目在开发与验收阶段统一使用测试环境，未经用户明确确认不得改为正式环境。
export const CRYSTAL_URL = 'http://123.57.11.145:8080/crystal/';

export const tools: ToolItem[] = [
  {
    id: 'crystal-structure',
    name: '晶体结构 3D 可视化实验室',
    desc: '探索原子在三维空间的排列与结构',
    status: 'live',
    group: 'lab',
    href: CRYSTAL_URL,
    thumb: 'crystal',
  },
  {
    id: 'ternary-phase',
    name: '三元相图',
    desc: '分析三元体系的相平衡与成分关系',
    status: 'live',
    group: 'lab',
    href: TERNARY_URL,
    thumb: 'ternary',
  },
  {
    id: 'binary-phase',
    name: '二元相图',
    desc: '探索二元体系的相平衡与相区变化',
    status: 'live',
    group: 'lab',
    href: BINARY_URL,
    thumb: 'fec',
  },
  {
    id: 'crystal-defects',
    name: '晶体缺陷可视化实验室',
    desc: '首期位错专题，探索晶体缺陷的结构与演化',
    status: 'soon',
    group: 'lab',
    thumb: 'defects',
  },
  {
    id: 'crystal-plane',
    name: '晶面 / 晶向',
    desc: '可视化晶面指数与晶向,理解取向关系',
    status: 'soon',
    group: 'tool',
    thumb: 'plane',
  },
  {
    id: 'materials-calc',
    name: '材料计算',
    desc: '原子模拟与第一性原理计算分析',
    status: 'soon',
    group: 'tool',
    thumb: 'calc',
  },
  {
    id: 'xrd',
    name: 'XRD 可视化分析',
    desc: 'XRD 谱图可视化与物相分析',
    status: 'soon',
    group: 'tool',
    thumb: 'xrd',
  },
];
