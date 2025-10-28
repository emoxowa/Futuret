export interface Advantage {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const advantages: Advantage[] = [
  {
    id: 'expertise',
    title: 'Экспертиза',
    description: 'Инженеры с опытом проектов в финансах, ритейле, промышленности',
    icon: 'Award'
  },
  {
    id: 'reliability',
    title: 'Надежность',
    description: 'SLA и прозрачные KPI для контроля качества обслуживания',
    icon: 'CheckCircle'
  },
  {
    id: 'fullcycle',
    title: 'Полный цикл',
    description: 'От аудита до поддержки 24×7 — все этапы проекта',
    icon: 'RefreshCw'
  },
  {
    id: 'independence',
    title: 'Импортонезависимость',
    description: 'Совместимые решения и миграция на отечественное ПО',
    icon: 'Globe'
  },
  {
    id: 'security',
    title: 'Безопасность',
    description: 'Лучшие практики киберзащиты и соответствие стандартам',
    icon: 'Lock'
  },
  {
    id: 'scalability',
    title: 'Масштабируемость',
    description: 'Растем вместе с вашими задачами, гибкие решения',
    icon: 'TrendingUp'
  }
];
