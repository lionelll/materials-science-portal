import type { IconName } from '../components/Icons';

export interface FeatureItem {
  title: string;
  desc: string;
  icon: IconName;
  color: string;
}

export const features: FeatureItem[] = [
  { title: '专业可靠', desc: '权威数据源,科学准确', icon: 'shield', color: 'var(--blue)' },
  { title: '可视化交互', desc: '多维度探索,直观易懂', icon: 'cube', color: '#38bdf8' },
  { title: '为考研而生', desc: '助力考研学习与科研探索', icon: 'cap', color: '#a78bfa' },
  { title: '持续更新', desc: '更多工具与数据不断上线', icon: 'cloud', color: 'var(--green)' },
  { title: '学习社区', desc: '交流分享,共同进步', icon: 'users', color: 'var(--orange)' },
];
