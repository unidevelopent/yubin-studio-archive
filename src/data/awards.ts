export interface Award {
  prize: string;
  name: string;
  year: string;
}

export const awards: Award[] = [
  {
    prize: '최우수상',
    name: '지역 밀착형 청년 정책 제안 대회',
    year: '2022',
  },
  {
    prize: '대상',
    name: 'idea lab 창업아이디어 경진대회',
    year: '2022',
  },
  {
    prize: '최우수상',
    name: '도전! K-Startup 클럽리그',
    year: '2022',
  },
  {
    prize: '대상',
    name: '소프트웨어창업경진대회 메타버스 분야',
    year: '2021',
  },
  {
    prize: '대상',
    name: '강원콘텐츠코리아랩 G스타킹 해커톤대회',
    year: '2020',
  },
];
