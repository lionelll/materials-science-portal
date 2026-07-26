export type ToolStatus = 'live' | 'soon';
export type ThumbKind = 'crystal' | 'ternary' | 'fec' | 'plane' | 'calc' | 'xrd';

export interface ToolItem {
  id: string;
  name: string;
  desc: string;
  status: ToolStatus;
  href?: string;
  thumb: ThumbKind;
  featured?: boolean;
}

// TODO: 三元相图正式地址待用户提供后替换
export const TERNARY_URL = '#';

// 本项目在开发与验收阶段统一使用测试环境，未经用户明确确认不得改为正式环境。
export const CRYSTAL_URL = 'http://123.57.11.145:8080/crystal/';

export const tools: ToolItem[] = [
  {
    id: 'crystal-structure',
    name: '晶体结构 3D 可视化实验室',
    desc: '探索原子在三维空间的排列与结构',
    status: 'live',
    href: CRYSTAL_URL,
    thumb: 'crystal',
    featured: true,
  },
  {
    id: 'ternary-phase',
    name: '三元相图',
    desc: '分析三元体系的相平衡与成分关系',
    status: 'live',
    href: TERNARY_URL,
    thumb: 'ternary',
  },
  {
    id: 'iron-carbon',
    name: '铁碳相图 (Fe-Fe₃C)',
    desc: '经典铁碳相图可视化与相区分析',
    status: 'soon',
    thumb: 'fec',
  },
  {
    id: 'crystal-plane',
    name: '晶面 / 晶向',
    desc: '可视化晶面指数与晶向,理解取向关系',
    status: 'soon',
    thumb: 'plane',
  },
  {
    id: 'materials-calc',
    name: '材料计算',
    desc: '原子模拟与第一性原理计算分析',
    status: 'soon',
    thumb: 'calc',
  },
  {
    id: 'xrd',
    name: 'XRD 可视化分析',
    desc: 'XRD 谱图可视化与物相分析',
    status: 'soon',
    thumb: 'xrd',
  },
];
