export type ChapterId =
  | 'signal-desk'
  | 'access-studio'
  | 'institution-rails'
  | 'agent-foundry'
  | 'state-commerce-lab'
  | 'field-experiments';

export interface Chapter {
  id: ChapterId;
  number: string;
  name: string;
  copy: string;
  description: string;
  capabilities: string[];
}

export const chapters: Chapter[] = [
  {
    id: 'signal-desk',
    number: '01',
    name: 'Signal Desk',
    copy: '먼저 신호를 읽는 작업들.',
    description:
      '데이터, 정책, 미래 변화, AI 거버넌스처럼 아직 명확한 제품 형태가 없는 문제를 관찰하고 구조화한 프로젝트들.',
    capabilities: [
      'Data analysis',
      'Policy interpretation',
      'Future agenda',
      'Global networking',
      'Education planning',
    ],
  },
  {
    id: 'access-studio',
    number: '02',
    name: 'Access Studio',
    copy: '어려운 접근성을 제품 경험으로 바꾼 작업들.',
    description:
      '정치 참여, 발달장애 교육, 조기 발달검사처럼 사용자가 접근하기 어려운 문제를 더 쉽게 사용할 수 있는 서비스와 콘텐츠로 바꾼 프로젝트들.',
    capabilities: [
      'User research',
      'Community ops',
      'Service planning',
      'Content design',
      'Accessibility',
      'B2B / B2C',
    ],
  },
  {
    id: 'institution-rails',
    number: '03',
    name: 'Institution Rails',
    copy: '기관과 시장이 움직이는 운영 레일을 만든 작업들.',
    description:
      '창업지원기관, 투자사, 스타트업, 공공기관처럼 여러 이해관계자가 얽힌 생태계에서 데이터와 운영 흐름을 정리한 프로젝트들.',
    capabilities: [
      'B2B SaaS',
      'Public sector sales',
      'Bid proposals',
      'KPI automation',
      'Data structuring',
      'Business development',
    ],
  },
  {
    id: 'agent-foundry',
    number: '04',
    name: 'Agent Foundry',
    copy: 'AI Agent를 데모가 아니라 매출이 나는 제품으로 옮긴 작업들.',
    description:
      '온톨로지, Graph RAG, AI Agent를 실제 고객사 PoC, 제안, 계약, 운영으로 연결한 프로젝트들. 복잡한 기술을 고객이 이해할 수 있는 업무 시스템으로 바꾸는 작업이 중심이다.',
    capabilities: [
      'CPO',
      'AI Agent design',
      'Ontology',
      'Graph RAG',
      'PoC sales',
      'B2B proposals',
      'Team operation',
      'Roadmap',
    ],
  },
  {
    id: 'state-commerce-lab',
    number: '05',
    name: 'State Commerce Lab',
    copy: '사용자 상태, 콘텐츠, 상품, 광고를 하나의 흐름으로 설계한 작업들.',
    description:
      '원천기술 AI 스타트업에서 진행한 Human-State AI, GPR, ACT 관련 연구기획과 사업전략 작업들. 사용자 상태와 콘텐츠 맥락을 하나의 의사결정 구조로 잇는 작업이 중심이다.',
    capabilities: [
      'AI business strategy',
      'Research planning',
      'Recommendation',
      'Generative AI',
      'Human-State AI',
      'Agentic Commerce',
      'R&D planning',
    ],
  },
  {
    id: 'field-experiments',
    number: '06',
    name: 'Field Experiments',
    copy: '빠르게 배우기 위해 만든 작은 실험들.',
    description:
      '도메인 탐색, 기술 학습, 사이드프로젝트, 수상 경험을 모은 섹션. 커리어의 본류와 직접 연결되지 않아도 이후 프로젝트 감각을 만든 실험들이다.',
    capabilities: [
      'Side projects',
      'Rapid prototyping',
      'Domain scouting',
      'Content',
      'UX research',
    ],
  },
];

export const getChapter = (id: ChapterId) =>
  chapters.find((c) => c.id === id) as Chapter;
