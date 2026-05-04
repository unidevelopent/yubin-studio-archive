export interface Metric {
  value: string;
  label: string;
  detail: string;
}

export const metrics: Metric[] = [
  {
    value: '255 / 314',
    label: '창업보육기관 SaaS 도입',
    detail: '전국 314개 창업보육기관 중 255개 기관 도입을 이끈 대규모 B2B·공공기관 영업 성과',
  },
  {
    value: '81.2%',
    label: '기관 도입 전환율',
    detail: '대규모 B2B / 공공기관 영업 성과',
  },
  {
    value: '1.2억 원',
    label: '공공·창업 생태계 계약 성과',
    detail: '서울테크노파크, KAIA, 서울창조경제혁신센터, KOBIA 등 4건 계약',
  },
  {
    value: '51.5%',
    label: '온톨로지 AI 사업 매출 성장',
    detail: 'B2B AI Agent 사업, 2024년 하반기 6,600만 원 → 2025년 상반기 1억 원',
  },
  {
    value: '8천만 원',
    label: '영어교육로봇 프로젝트',
    detail: '휴머노이드 로봇 탑재 교육용 AI Agent 기획·계약',
  },
  {
    value: '18명',
    label: '크로스펑셔널 팀 운영',
    detail: 'AI연구·기획·마케팅·영업·제품개발 전 사이클 운영',
  },
  {
    value: '300+',
    label: '발달장애 양육자 커뮤니티',
    detail: '발달장애 아동 보호자 오픈채팅방 직접 구축 및 운영',
  },
  {
    value: 'WAU 3,000+',
    label: 'Care Tech 플랫폼 주간 활성 사용자',
    detail: '서비스 론칭 2개월 후 도달',
  },
  {
    value: '17만 건',
    label: '공공정책 데이터 분석',
    detail: '데이터 수집·분석 및 인포그래픽 시각화',
  },
];

export interface PatternStep {
  number: string;
  name: string;
  description: string;
}

export const patternSteps: PatternStep[] = [
  {
    number: '01',
    name: 'Sense',
    description: '데이터, 현장, 사용자 행동, 시장 흐름에서 신호를 찾는다.',
  },
  {
    number: '02',
    name: 'Structure',
    description: '문제를 제품 구조, 데이터 구조, 운영 구조로 바꾼다.',
  },
  {
    number: '03',
    name: 'Build',
    description: '서비스, SaaS, AI Agent, 콘텐츠, 커뮤니티, 대시보드로 구현한다.',
  },
  {
    number: '04',
    name: 'Sell',
    description: '제안서, 영업, PoC, 입찰, 파트너십, 계약까지 연결한다.',
  },
  {
    number: '05',
    name: 'Verify',
    description: '사용자 수, 도입률, 매출, 수상, 인터뷰, 커뮤니티 반응으로 검증한다.',
  },
];
