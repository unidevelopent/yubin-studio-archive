import type { ChapterId } from './chapters';

export interface Project {
  id: string;
  title: string;
  chapter: ChapterId;
  period: string;
  role: string;
  summary: string;
  problem?: string[];
  work: string[];
  proof?: string[];
  tags: string[];
  isConfidential?: boolean;
  link?: string;
}

export const projects: Project[] = [
  // ─────────────────────────── Signal Desk ───────────────────────────
  {
    id: 'real-estate-policy',
    title: '부동산 정책 데이터분석 웹서비스',
    chapter: 'signal-desk',
    period: '2020.06 — 2020.09',
    role: '기획 · 개발 · 데이터 수집 · 분석 · 인포그래픽 · 마케팅',
    summary:
      '17만 건 부동산 데이터와 언론사 정책 언급을 대조하여 정책과 시장 반응의 관계를 시각화한 데이터 웹서비스.',
    problem: [
      '부동산 정책은 시민의 삶에 큰 영향을 미치지만 정책 효과, 시장 데이터, 언론 담론이 분리되어 있다.',
      '일반 시민이 정책의 맥락을 이해하기 어렵다.',
    ],
    work: [
      '약 17만 건의 부동산 데이터 수집 및 분석',
      '언론사의 부동산 정책 언급 데이터 대조',
      '정책과 시장 반응의 관계 시각화',
      '사이트 기획, 개발, 데이터 분석, 인포그래픽, 마케팅 수행',
    ],
    proof: ['런칭 한 달 만에 국토교통부와 메이저 언론사의 인터뷰 요청'],
    tags: ['Civic Data', 'Policy', 'Data Viz'],
  },
  {
    id: 'un-future-forum',
    title: '사단법인 유엔미래포럼',
    chapter: 'signal-desk',
    period: '2023.06 — 현재',
    role: '청년위원회 대표',
    summary:
      'AI, AGI, 미래학, 글로벌 거버넌스, 지자체 AI 교육, 국제 협력 활동을 진행 중인 사단법인 활동.',
    work: [
      'UN IAIA 한국 유치 관련 제안, 미팅, 홍보 활동',
      'AGIedu 엔젤투자 유치 및 법인 설립',
      '기획재정부장관, 국무총리, 국회의원, 지방의원과 포럼·회의·행사 운영',
      '지자체 제안 및 AI 교육 사업 활동',
      '국제AI로봇저작권관리협회·AGI연합협회 활동',
      '미래학 연구 활동, 유튜브 촬영',
      'Hypercycle CEO Toufi Saliba, GCC, 한국정부 연계 사업 기획',
      'SingularityNET Ben Goertzel, AGI Society 등 글로벌 AI 협력',
    ],
    tags: ['AI Governance', 'Future Studies', 'Global Network'],
  },
  {
    id: 'agiedu',
    title: 'AGIedu',
    chapter: 'signal-desk',
    period: '2025.04 — 현재',
    role: 'CPO',
    summary:
      '교육용 AI 로봇과 AI 교육 콘텐츠, 미래교육 프로그램을 기획하는 AI 교육 전문 기업.',
    work: [
      'AI 교육 제품 기획',
      '휴머노이드 로봇 기반 교육 서비스 기획',
      '지자체 및 공공 교육 프로그램 기획',
      'AI Agent 기반 학습 시나리오 설계',
      '영어교육로봇 프로젝트와 연계',
    ],
    tags: ['AI Education', 'Robot', 'Future Education'],
  },

  // ─────────────────────────── Access Studio ───────────────────────────
  {
    id: 'thinkle',
    title: '띵클',
    chapter: 'access-studio',
    period: '2021.09 — 2023.02',
    role: 'Founder · CEO',
    summary:
      '시민단체, 정당, 시민을 연결하고 정치적 표현의 심리적 장벽을 캐릭터·공간 UX로 낮춘 메타버스 사회참여 SNS.',
    problem: [
      '정치 참여는 중요하지만 일상에서 정치적 표현은 부담스럽고 공격적으로 느껴진다.',
      '시민들은 지역과 관심사 기반 시민단체를 발견하기 어렵다.',
      '시민단체와 정당의 온라인 활동 공간이 제한적이다.',
    ],
    work: [
      '마이룸, 시민단체룸, 포스터, 서재, 의상 아이템 기반 정치적 표현 구조',
      '귀여운 캐릭터로 정치의 공격적 이미지 완화',
      '시민단체 안내, 가입, 후원, 활동 참여 구조',
      '온라인 집회, 토론, 행사, 캠페인 운영 공간',
      'B2C 아이템 판매 모델 / B2B 단체 온라인 공간 모델',
      '팀빌딩, 사업기획, 자금조달, 프로젝트 관리, 고객 개발, 업무협약, 홍보, 정부지원사업 대응',
    ],
    proof: [
      '중소벤처기업부 지원사업 최우수기업 졸업',
      '다수 공모전 수상 · 비영리단체 업무협약',
      'IR, 박람회, 인터뷰, 정부지원사업 운영 경험',
    ],
    tags: ['Civic Tech', 'Metaverse', 'Community', 'Social Impact'],
  },
  {
    id: 'kivel',
    title: '키블 플랫폼',
    chapter: 'access-studio',
    period: '2023.05 — 2024.06',
    role: 'Product Manager · Service Planning · BD · Community Lead',
    summary:
      '발달장애 아동 양육자가 아이 나이, 유형, 지역에 따라 맞춤형 교육·치료 정보를 찾을 수 있도록 만든 플랫폼.',
    problem: [
      '발달장애 아동을 위한 치료, 교육, 체험 정보가 분산되어 있다.',
      '보호자가 지역별·유형별 정보를 직접 찾는 부담이 크다.',
      '치료기관, 복지기관, 교육기관 정보가 통합되어 있지 않다.',
    ],
    work: [
      '발달장애 아동 맞춤형 교육·치료 정보 제공',
      '전국 복지관 프로그램 큐레이션',
      '치료기관 찾기 기능',
      '공공데이터 가공, 크롤링, API 연동',
      '치료기관 직접 등록 및 입점 구조',
    ],
    proof: [
      '론칭 2개월 만에 WAU 3,000+',
      '발달장애 아동 양육자 300명 규모 오픈채팅방 구축 및 운영',
      '전국 복지기관 및 민간 치료·체험기관 입점',
    ],
    tags: ['Care Tech', 'Healthcare', 'Education', 'Accessibility'],
    link: 'https://kivel.kr/',
  },
  {
    id: 'doctor-kong',
    title: '닥터콩',
    chapter: 'access-studio',
    period: '2023.09 — 2024.06',
    role: '서비스 기획 · 리브랜딩 · 기능 추가 기획',
    summary:
      '영유아 발달 문제의 조기발견·조기개입을 위한 발달검사 앱.',
    work: [
      '아이 개월수에 따른 언어, 인지, 사회성, 자조, 운동 영역 체크리스트',
      '발달지연 여부 확인',
      '의사·치료사 무료 상담 연결',
      '가까운 치료센터 탐색',
      '보호자 커뮤니티',
      '전문성 강조 리브랜딩 및 기능 추가 기획',
    ],
    tags: ['Healthcare', 'Early Intervention', 'Mobile App'],
  },
  {
    id: 'chacha-hangeul',
    title: '차차한글 1~4권',
    chapter: 'access-studio',
    period: '2023 — 2024',
    role: '기획 · 운영 · 저자 섭외 · 출간 관리',
    summary:
      '발달지연 아동을 위한 한글 교육 콘텐츠. 기획부터 출간까지 주도.',
    work: [
      '발달지연 아동 맞춤 한글 교육 콘텐츠 기획',
      '저자 섭외 및 출간 과정 주도',
      '운영 및 마케팅',
    ],
    proof: ['1쇄 완판'],
    tags: ['Education Content', 'Publishing', 'Accessibility'],
  },
  {
    id: 'kivel-host',
    title: '재활치료기관 호스트센터',
    chapter: 'access-studio',
    period: '2024.01 — 2024.06',
    role: 'B2B 서비스 기획 · 고객 개발 · 영업',
    summary:
      '전국 약 4,000개 재활치료기관 대상 B2B 호스트센터 서비스.',
    work: [
      '치료기관 대시보드 기획',
      '기관 페이지 관리 기능',
      '치료기관 대상 비즈니스 기능',
      '서비스 기획, 사업 기획, 고객 개발, 영업 담당',
    ],
    tags: ['B2B', 'Healthcare', 'Platform'],
  },

  // ─────────────────────────── Institution Rails ───────────────────────────
  {
    id: 'knowhow-kpi',
    title: '창업지원기관 성과관리 자동화 시스템',
    chapter: 'institution-rails',
    period: '2024.08 — 2024.11',
    role: 'Business Lead · SaaS PM',
    summary:
      '홈택스·국민연금 연동으로 매출·고용 데이터를 자동 업데이트하는 창업지원기관 성과관리 SaaS.',
    problem: [
      '창업지원기관은 지원기업의 매출, 고용, 투자 성과를 수작업으로 조사한다.',
      '기관별로 데이터가 파편화되어 있어 비교·집계가 어렵다.',
    ],
    work: [
      '창조경제혁신센터, 테크노파크, 창업보육센터, 캠퍼스타운 대상 기획',
      '홈택스 및 국민연금 연동',
      '매출·고용 데이터 자동 업데이트 구조',
      '10,000개 이상 기업 데이터 자동 업데이트 운영',
      '전국 창업지원기관 직접 영업',
    ],
    proof: [
      '314개 창업보육기관 중 255개 도입 (전환율 81.2%)',
    ],
    tags: ['B2B SaaS', 'Public Sector', 'Data Automation'],
  },
  {
    id: 'investment-saas',
    title: '투자운용프로그램 SaaS',
    chapter: 'institution-rails',
    period: '2024.07 — 2024.09',
    role: 'SaaS PM',
    summary:
      'GP, LP, 포트폴리오사를 위한 투자운용 SaaS. AC, VC, 창업지원기관의 포트폴리오 통합 관리.',
    problem: [
      'AC, VC, 창업보육기관은 포트폴리오사를 통합 관리하기 어렵다.',
      '출자조합·출자사업·납입 현황이 엑셀과 메일로 흩어져 있다.',
    ],
    work: [
      '권한별 Admin 화면 기획',
      '출자조합 현황, 투자기업 현황 대시보드',
      '출자사업 현황, 출자금 납입 현황 대시보드',
      'GP, LP, 포트폴리오사용 화면 분리',
    ],
    tags: ['B2B SaaS', 'Investment', 'Dashboard'],
  },
  {
    id: 'startup-events',
    title: '창업유관행사 입찰 제안 및 행사운영',
    chapter: 'institution-rails',
    period: '2024.07 — 2024.11',
    role: 'Business Developer',
    summary:
      '창업보육기관의 데모데이, 네트워킹데이, 박람회 입찰을 제안하고 운영을 총괄.',
    work: [
      '데모데이·네트워킹데이·박람회 입찰 제안서 작성',
      '창업보육기관 행사 계약 성사',
      '행사 운영 총괄',
    ],
    proof: ['다수 창업보육기관과 계약 및 운영'],
    tags: ['Bid', 'Event Operation', 'Public Sector'],
  },
  {
    id: 'startup-db',
    title: '창업기업 통합 DB',
    chapter: 'institution-rails',
    period: '2024.08 — 2024.11',
    role: 'Service Planning',
    summary:
      '창업기업 데이터 구조화와 기관별 성과 데이터 관리, 창업 생태계 데이터 자산화.',
    work: [
      '창업기업 데이터 스키마 설계',
      '기관별 성과 데이터 관리 구조',
      '창업 생태계 데이터 자산화 방향 정리',
    ],
    tags: ['Data', 'Schema Design', 'Ecosystem'],
  },

  // ─────────────────────────── Agent Foundry ───────────────────────────
  {
    id: 'future-work-lab',
    title: 'Future Work Lab',
    chapter: 'agent-foundry',
    period: '2024.12 — 2025.09',
    role: 'CPO',
    summary:
      '온톨로지 기반 AI Agent와 Graph RAG B2B/B2C 서비스를 기획·사업화. 18명 크로스펑셔널 팀과 15개 이상 프로젝트 동시 운영.',
    work: [
      'AI연구·기획·마케팅·영업·제품개발 전 사이클 운영',
      '15개 이상 프로젝트 동시 관리',
      'PoC 영업 및 매출 확보',
      'Graph RAG 기반 B2B/B2C 서비스 기획',
    ],
    proof: [
      '18명 크로스펑셔널 팀 운영',
    ],
    tags: ['CPO', 'AI Agent', 'Graph RAG', 'B2B SaaS'],
  },
  {
    id: 'linkbrain',
    title: 'LinkBrain',
    chapter: 'agent-foundry',
    period: '2024.12 — 2025.09',
    role: 'Product Lead · Ontology Planning',
    summary:
      '정형·비정형 데이터를 자동으로 온톨로지로 변환해 업무 AI Agent와 연결하는 시스템.',
    problem: [
      '기업의 파일, 문서, 고객 데이터, 업무 프로세스는 흩어져 있다.',
      '일반적인 챗봇은 이 관계를 이해하지 못한다.',
    ],
    work: [
      'AI 자동 온톨로지 변환 파이프라인 기획',
      'GUI 기반 지식그래프 편집 및 관리',
      '업무 자동화 AI Agent 및 챗봇 연계',
      '에이전트·온톨로지 기획 동시 수행',
      '연구팀, 비개발팀, 제품개발팀 조율',
      '제품 로드맵 주도 · PoC 영업',
    ],
    tags: ['Ontology AI', 'Knowledge Graph', 'AI Agent'],
  },
  {
    id: 'manufacturing-agent',
    title: '외부 제조업 고객사 AI Agent 프로젝트',
    chapter: 'agent-foundry',
    period: '2025',
    role: 'Project Lead · BD',
    summary:
      '의료기기 제조 계열 고객사의 MES·ERP 연동 AI Agent 업무 시스템 기획. 스마트팩토리 AI 지원사업 기반.',
    work: [
      '제조 현장의 생산·품질·설비·관리 데이터 온톨로지 구조화',
      '업무 자동화 및 의사결정 지원 AI Agent 기획',
      '리드 발굴 → 제안 → 영업 → 계약',
    ],
    tags: ['Manufacturing', 'MES', 'AI Agent', 'Confidential'],
    isConfidential: true,
  },
  {
    id: 'english-robot',
    title: '영어교육로봇 AI Agent 프로젝트',
    chapter: 'agent-foundry',
    period: '2025',
    role: 'Project Lead · BD',
    summary:
      '휴머노이드 로봇에 탑재되는 교육용 AI Agent Application 기획·계약.',
    work: [
      '복잡한 영어 학습 시나리오 설계',
      '로봇 동작과 연계된 AI Agent 앱 기획',
      '공공 교육기관 및 로봇 교육 시장 대상 제안',
      '직접 영업 및 계약 성사',
    ],
    tags: ['Robot', 'Education', 'AI Agent'],
  },
  {
    id: 'medical-ai',
    title: '외부 의료 AI 고객사 프로젝트',
    chapter: 'agent-foundry',
    period: '2025',
    role: 'Service Planning · BD',
    summary:
      '턱관절 장애 치료를 위한 맞춤형 보고서 제공 Agent 및 예측 솔루션 기획.',
    work: [
      '치료 관련 예측 솔루션 기획',
      '맞춤형 치료 프로그램 제공 구조 기획',
      '리드 발굴 → 제안 → 영업 → 계약 → 운영 → 서비스 기획',
    ],
    tags: ['Medical AI', 'Healthcare', 'Confidential'],
    isConfidential: true,
  },
  {
    id: 'medical-tourism',
    title: '외부 의료관광 고객사 프로젝트',
    chapter: 'agent-foundry',
    period: '2025',
    role: 'Service Planning',
    summary:
      '의료 QnA, 정보 탐색, 상담, 병원 연결 흐름을 설계한 의료관광 AI 프로젝트.',
    work: [
      '의료관광 프로젝트 기획',
      '의료 QnA 서비스 기획',
      '의료 정보 탐색·상담·병원 연결 흐름 설계',
    ],
    tags: ['Medical Tourism', 'Service Design', 'Confidential'],
    isConfidential: true,
  },
  {
    id: 'interior-crm',
    title: '외부 인테리어 프랜차이즈 CRM 프로젝트',
    chapter: 'agent-foundry',
    period: '2025',
    role: 'Service Planning · Operation',
    summary:
      '인테리어 프랜차이즈 본사·가맹점의 고객·상담·프로젝트 진행 상태를 관리하는 CRM 기획.',
    work: [
      '고객 관리 모듈 기획',
      '상담 관리 모듈 기획',
      '프로젝트 진행 상태 관리',
      '업무 프로세스 자동화 구조 설계',
    ],
    tags: ['CRM', 'Franchise', 'Confidential'],
    isConfidential: true,
  },
  {
    id: 'shared-office',
    title: '공유오피스 운영 자동화 프로젝트',
    chapter: 'agent-foundry',
    period: '2025',
    role: 'Project Lead · BD',
    summary:
      '공유오피스 예약·문의·운영을 자동화하는 챗봇 및 AI Agent 기획.',
    work: [
      '리드 발굴',
      '제안 기획',
      'PoC 계약 진행',
      '예약·문의·운영 업무 자동화 방향 설계',
    ],
    tags: ['Workplace', 'Automation', 'Chatbot'],
  },
  {
    id: 'edu-content',
    title: '외부 교육 콘텐츠 고객사 프로젝트',
    chapter: 'agent-foundry',
    period: '2025',
    role: 'Service Planning',
    summary:
      '학습 관리 구조와 개인화 학습 추천 방향을 검토한 교육 콘텐츠 프로젝트.',
    work: [
      '기억책가방 프로젝트 진행',
      '교육 콘텐츠 및 학습 관리 구조 기획',
      '개인화 학습 추천 및 콘텐츠 관리 방향 검토',
    ],
    tags: ['Education', 'Personalization', 'Confidential'],
    isConfidential: true,
  },
  {
    id: 'manufacturing-pivot',
    title: '제조업 특화 온톨로지 AI Agent 피봇',
    chapter: 'agent-foundry',
    period: '2025',
    role: 'Product Lead',
    summary:
      '범용 온톨로지 AI Agent에서 제조업 특화 솔루션으로의 피봇. MES 업체와 협력.',
    work: [
      'MES 업체와 협력 구조 설계',
      '제조 데이터, 설비 데이터, 업무 프로세스 온톨로지화 방향',
      '네이버클라우드 LLM 챌린지 선정',
    ],
    proof: ['네이버클라우드 LLM 챌린지 선정'],
    tags: ['Manufacturing', 'Ontology', 'Pivot'],
  },
  {
    id: 'ecommerce-agent',
    title: '이커머스 특화 AI Agent 솔루션',
    chapter: 'agent-foundry',
    period: '2025',
    role: 'Service Planning',
    summary:
      '온라인 쇼핑몰 운영자를 위한 상품·고객·주문·추천·마케팅 자동화 AI Agent 구조 기획.',
    work: [
      '상품 관리 자동화',
      '고객 응대 자동화',
      '주문 처리 자동화',
      '개인화 상품 추천',
      '마케팅 자동화',
    ],
    tags: ['E-commerce', 'AI Agent', 'Automation'],
  },
  {
    id: 'healthcare-admin',
    title: '외부 헬스케어 앱 Admin 프로젝트',
    chapter: 'agent-foundry',
    period: '2025',
    role: 'Service Planning',
    summary:
      '건강관리 앱의 사용자 데이터·프로그램·운영자 대시보드를 설계한 Admin 기획.',
    work: [
      '사용자 건강 데이터 관리',
      '프로그램 관리',
      '운영자 대시보드',
      '콘텐츠 및 사용자 상태 관리 구조 설계',
    ],
    tags: ['Healthcare', 'Admin', 'Confidential'],
    isConfidential: true,
  },

  // ─────────────────────────── State Commerce Lab ───────────────────────────
  {
    id: 'addeep',
    title: 'Addeep',
    chapter: 'state-commerce-lab',
    period: '2025.09 — 현재',
    role: 'CAIBSO · Research Planning · AI Business Strategy',
    summary:
      '원천기술 AI 스타트업에서 GPR, Human-State AI, ACT 관련 연구기획과 사업전략을 담당.',
    work: [
      'GPR 기술체계 연구기획',
      'Human-State AI 사업전략',
      'ACT 설계 고도화',
      'POSTECH ACT PoC 운영',
      'GPR R&D Center 연구기획',
    ],
    tags: ['Human-State AI', 'GPR', 'ACT', 'Research'],
  },
  {
    id: 'gpr',
    title: 'GPR 기술체계 기획',
    chapter: 'state-commerce-lab',
    period: '2025.09 — 현재',
    role: 'Research Planning',
    summary:
      '사용자 프로필이 아니라 현재 상태·관심·의도·감정·맥락·행동 흐름을 이해하는 비대화형 증강 AI 체계.',
    work: [
      'Generative Pre-trained Recommender 기술체계 기획',
      '추천·광고·커머스·생성 AI를 하나의 의사결정 구조로 연결',
      'Human-Model 관점의 사용자 상태 추론 구조 정립',
      'Addeep-GPR 기술체계 용어 정리 및 연구 방향 수립',
    ],
    tags: ['GPR', 'Recommendation', 'Research'],
  },
  {
    id: 'lmm-umm-rssm',
    title: 'LMM / UMM / RSSM 기반 사용자 상태 구조',
    chapter: 'state-commerce-lab',
    period: '2025.09 — 현재',
    role: 'Research Planning',
    summary:
      '사용자의 의도·감정·관심·맥락을 해석하고 추천·광고에 반영하는 상태 모델 구조.',
    work: [
      'LMM (Large Mind-mining Model) 의도·감정·관심·모드·맥락 해석',
      'UMM (User Mind Map) Session/Short-term/Long-term 구조 기획',
      '몰입도, 스킵, 완료율, 광고 피로도, 관심 주제, 구매 가능성 반영 구조',
      'RSSM 기반 장기 상태 변화 추적 방향 검토',
      '"지금 이 유저 상태에서 좋은가"를 판단하는 추천 구조 기획',
    ],
    tags: ['User Modeling', 'State AI', 'Recommendation'],
  },
  {
    id: 'act',
    title: 'ACT 설계 고도화',
    chapter: 'state-commerce-lab',
    period: '2025.09 — 현재',
    role: 'Research Planning',
    summary:
      'Addeep Automatic Content Convergence Technology — AI 콘텐츠 합성 및 광고 생성 시스템 설계 고도화.',
    work: [
      'fusion 납작해짐 문제 정의 및 해결 방향 정리',
      '상품 보존 방안 리서치',
      'Condition Pack, z_fusion, Semantic Execution Layer 설계',
      'Scene Graph, Layout, Mask, Region Prompt, Diffusion Control 정리',
      'POSTECH PoC 운영',
      '평가 기준 및 실패 taxonomy 정리',
      '브랜드 상품 보존, 로고, 실루엣, 재질, 각도, 정체성 유지 방안 검토',
    ],
    tags: ['Generative AI', 'ACT', 'PoC'],
  },
  {
    id: 'research-ops',
    title: '연구기획 및 조직 운영',
    chapter: 'state-commerce-lab',
    period: '2025.09 — 현재',
    role: 'Research Planning · Ops',
    summary:
      'GPR 광고 상품별 아키텍처 리서치, 마인드셋 엔진 설계, 포항공대 PoC 운영, Claude Code 기반 자동화 매뉴얼.',
    work: [
      'GPR 광고 상품별 아키텍처 리서치 및 세미나',
      '마인드셋 엔진 설계',
      'LangSmith 세팅, 블로그 작성',
      '포항공대 프로젝트 운영',
      'Claude Code 기반 기획-디자인-개발 자동화 매뉴얼 작성',
      '연구·기획·개발 협업 구조 정리',
    ],
    tags: ['Ops', 'Research', 'Automation'],
  },

  // ─────────────────────────── Field Experiments ───────────────────────────
  {
    id: 'odyssey',
    title: 'Odyssey',
    chapter: 'field-experiments',
    period: '2023.09 — 진행 중',
    role: 'PM · Service Planning',
    summary:
      '장기목표 성취를 앞당기는 목표 리마인드 앱. 할 일 중심이 아니라 목표 중심.',
    work: [
      '장기 목표 등록, Dream Note, Idea Board',
      '단기 목표 관리',
      '리마인드 중심 UX',
      '6명 팀 PM',
    ],
    proof: ['사이드프로젝트 플랫폼 1위'],
    tags: ['Productivity', 'Side Project'],
  },
  {
    id: 'zest',
    title: 'ZEST',
    chapter: 'field-experiments',
    period: '2023.09 — 2023.12',
    role: 'Initial PM',
    summary:
      '건축물 전과정평가 LCA 기반 탄소회계 서비스. 건설업 베테랑 대표와 2인 초기 기획.',
    work: [
      '초기 제품 기획',
      '시장 조사',
      '기능 구조 설계',
      'LCA 계산 흐름 및 사용자 워크플로우 기획',
    ],
    proof: ['이후 투자유치 성공'],
    tags: ['Climate Tech', 'Construction', 'LCA'],
  },
  {
    id: 'src',
    title: 'SRC',
    chapter: 'field-experiments',
    period: '2023.09 — 2023.12',
    role: 'Project Member · Service Planning',
    summary:
      '안전운전 보상 APP. Web3 / Drive to Earn 구조.',
    work: [
      'Web3 서비스 구조 학습',
      '안전운전 토큰 보상',
      '안전운전 커뮤니티',
      '블록체인 기반 서비스 운영 방식 학습',
      '베타 서비스 출시 경험',
    ],
    tags: ['Web3', 'Mobility', 'Safety'],
    link: 'https://saferoadclub.gitbook.io/src-ai',
  },
  {
    id: 'ux-insights',
    title: 'UX Insights',
    chapter: 'field-experiments',
    period: '2023',
    role: 'Content Planning · Market Research · Marketing',
    summary:
      'UX 분석노트 제공 및 기업 UX 의뢰 분석 서비스. 6명 팀.',
    work: [
      'UX 분석 스터디 운영',
      'UX 분석 노트 웹서비스',
      '기업 UX 의뢰 분석 서비스로 확장',
      '콘텐츠 작성, 기획, 시장조사, 마케팅',
    ],
    tags: ['UX', 'Research', 'Content'],
  },
];
