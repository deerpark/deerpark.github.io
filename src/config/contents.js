/**
 * 페이지 라우트 속성 설정
 */
export const routes = {
  '/': {
    title: '홈',
  },
  '/profile/about': {
    title: '소개',
  },
  '/profile/career': {
    title: '경력',
  },
  '/profile/strength': {
    title: '업무적 강점',
  },
  '/profile/tech': {
    title: '기술스택',
  },
  '/ux': {
    title: 'UX',
  },
  '/dev': {
    title: '개발',
  },
  '/design': {
    title: '디자인',
  },
}

/**
 * 프로필 페이지 요약 컨텐츠 설정
 */
export const about = [
  {
    title: '경력',
    value: '13년 +',
    icon: ['fad', 'user-clock'],
    iconSize: '2x',
  },
  {
    title: '생년월',
    value: '1982.10',
    icon: ['fad', 'cake-candles'],
    iconSize: '2x',
  },
  {
    title: '사는곳',
    value: '서울시 영등포구',
    icon: ['fad', 'map-location-dot'],
    iconSize: '2x',
  },
]

/**
 * 프로필 페이지 소개서 컨텐츠 설정
 */
export const introduce = [
  {
    title: '소개',
    desc: '소개의 말',
    icon: ['fad', 'scroll'],
    p: [
      '디자인을 잘 아는 개발자! UX를 잘 아는 개발자! 개발을 잘 하는 개발자!',
      '한 분야만 잘 하는 개발자보다 두루두루 잘 하는 개발자가 되려고 합니다.',
    ],
  },
  {
    title: '성장 과정',
    desc: '소개의 말',
    icon: ['fad', 'seedling'],
    p: [
      '웹디자이너로 시작하면서 사회에 첫 발을 딛고 마크업 개발, 인터렉티브 개발을 거쳐 현재 프론트엔드 개발까지 개발에 대한 갈망이 깊어 지면서 넓은 도메인에 관심을 가져 왔습니다.',
    ],
  },
  {
    title: '역량',
    icon: ['fad', 'battery-bolt'],
    p: [
      'RESTful API + ES6 이상 버전의 JavaScript를 바탕으로 오랜 개발 경험을 갖고 있으며,',
      'NodeJS 환경에서 React 기반 Create React App, NextJS 프레임워크로 SSR, CSR 프론트엔드 개발 경험을 쌓고 있습니다.',
      '또한 AWS, GCP 클라우드 환경에서 프론트엔드 개발을 해오고 있고',
      '더 나아가 디자인 시스템 및 접근성, SEO를 고려하며 다양한 Motion 인터렉티브 개발 경험을 가지고 있습니다.',
      'GIT, Docker, ESlint, Prettier, Agile을 통한 오랜 협업 경험도 가지고 있습니다.',
    ],
  },
  {
    title: '마치며',
    icon: ['fad', 'file-dashed-line'],
    p: [
      '프론트엔드의 모든 것..',
      '디자인과 프론트엔드 개발을 충분히 숙지한 저야 말로 남들보다는 더 나은 UX를 창출할 수 있다고 확신합니다.',
    ],
  },
]

/**
 * 프로필 페이지 탭 설정
 */
export const profileTabs = [
  { label: '소개', value: 0 },
  { label: '경력', value: 1 },
  { label: '업무적 강점', value: 2 },
  { label: '기술 스택', value: 3 },
]

/**
 * 프로필 > 경력 페이지 컨텐츠 설정
 */
export const careers = [
  {
    color: '#CADC2A',
    logo: 'https://logo.clearbit.com/gsshop.com',
    company: 'GS SHOP',
    position: '프론트엔드 개발',
    start: '2018',
    working: true,
  },
  {
    color: '#EB1C22',
    logo: 'https://logo.clearbit.com/lezhin.jp',
    company: '레진엔터테인먼트',
    position: '프론트엔드 개발',
    start: '2017',
    working: false,
  },
  {
    color: '#ffffff',
    logo: 'https://logo.clearbit.com/neowizglobal.com',
    company: '네오위즈게임즈',
    position: '인터렉티브 개발',
    start: '2011',
    working: false,
  },
  {
    color: '#F0F5F9',
    logo: 'https://www.hanbiton.com/footer/images/logo_hanbiton2.png',
    company: '한빛소프트',
    position: 'UI 개발',
    start: '2010',
    working: false,
  },
  {
    color: '#ffffff',
    logo: 'http://www.intermajor.com/images/txt/footer_2.png',
    company: '인터메이저',
    position: '마크업 개발',
    start: '2008',
    working: false,
  },
  {
    color: '#1A293D',
    logo: 'http://miraepower.co.kr/layout/images/contents/f_logo.png',
    company: '미래파워',
    position: '디자인',
    start: '2003',
    working: false,
  },
]

/**
 * 프로필 > 기술스택 콘텐츠 설정
 */
export const tech = {
  stack: [
    {
      id: 'javascript',
      title: 'JavaScript',
      rating: 4,
      iconBgColor: '#F7DF1E',
      iconClassName: 'p-2',
      p: ['DOM, REST API, 비동기 처리에 대한 이해'],
    },
    {
      id: 'typescript',
      title: 'TypeScript',
      rating: 2,
      iconBgColor: '#007ACC',
      iconClassName: 'p-2',
      p: ['정적 타입 레퍼런스에 대한 이해, 사이드 프로젝트에서 실험적으로 도입 중'],
    },
    {
      id: 'nodejs',
      title: 'NodeJS',
      rating: 3,
      iconBgColor: '#007ACC',
      iconClassName: 'p-2',
      p: ['정적 타입 레퍼런스에 대한 이해, 사이드 프로젝트에서 실험적으로 도입 중'],
    },
    {
      id: 'react',
      title: 'React',
      rating: 5,
      iconBgColor: '#000000',
      iconClassName: 'p-2',
      p: [
        'Virtual DOM, JSX, props, state, LifeCycle, React Hooks에 대한 이해',
        '사이드 프로젝트에 Recoil, React Concurrent모드 실험적 도입 중',
      ],
    },
    {
      id: 'webpack',
      title: 'Webpack',
      rating: 3,
      iconBgColor: '#8ED6FB',
      iconClassName: 'p-2',
      p: ['Bundle과 Chunk 및 webpack.config 커스텀에 대한 이해'],
    },
    {
      id: 'babel',
      title: 'Babel',
      rating: 4,
      iconBgColor: '#F1F5F9',
      iconClassName: 'p-2',
      p: ['플러그인, 프리셋, env 프리셋, 폴리필에 대한 이해'],
    },
    {
      id: 'nextjs',
      title: 'NextJS',
      rating: 5,
      iconBgColor: '#F1F5F9',
      iconClassName: 'p-2',
      p: ['플러그인, 프리셋, env 프리셋, 폴리필에 대한 이해'],
    },
    {
      id: 'mobx',
      title: 'MobX',
      rating: 4,
      iconBgColor: '#EA6618',
      iconClassName: 'p-0',
      p: [
        'Store 설계, observable, action, computed 핵심 기능에 대한 이해 및 비동기 처리 구성',
        'Flux 패턴, Domain Store, Domain Object, Model State에 대한 이해',
      ],
    },
    {
      id: 'graphql',
      title: 'GraphQL',
      rating: 2,
      iconBgColor: '#E535AB',
      iconClassName: 'p-2',
      p: ['스키마(schema) 및 리졸버(resolver) 개념에 대한 이해, 프론트엔드, 백엔드 구성에 대한 이해'],
    },
  ],
  tools: [
    {
      id: 'github',
      title: 'GitHub',
      rating: 5,
      iconBgColor: '#F1F5F9',
      iconClassName: 'p-2',
      p: ['Git-flow 전략에 대한 이해'],
    },
    {
      id: 'docker',
      title: 'Docker',
      rating: 3,
      iconBgColor: '#E2E8F0',
      iconClassName: 'p-2',
      p: ['컨테이너, 이미지에 대한 이해, Dockerfile 구성, Docker Compose에 대한 이해'],
    },
    {
      id: 'sketch',
      title: 'Sketch',
      rating: 5,
      iconBgColor: '#F1F5F9',
      iconClassName: 'p-2',
      p: ['Sketch 프로토타입 커뮤니케이션에 대한 이해'],
    },
    {
      id: 'figma',
      title: 'Figma',
      rating: 4,
      iconBgColor: '#1E293B',
      iconClassName: 'p-2',
      p: ['Figma 프로토타입 커뮤니케이션에 대한 이해'],
    },
  ],
}

export const design = [
  {
    id: '/design/boltux',
    category: 'IT',
    title: 'BOLT UX',
    url: 'https://www.bolt-ux.com',
    image: '/images/boltux.png',
  },
  {
    id: '/design/antman',
    category: '금융',
    title: '앤트맨',
    url: 'https://www.antman.kr',
    image: '/images/antman.png',
  },
  {
    id: '/design/portfolio',
    category: '오픈소스',
    title: '포트폴리오',
    url: 'https://deerpark.github.io',
    image: 'photo-1528747045269-390fe33c19f2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fHdlYnNpdGV8ZW58MHx8MHxibHVlfA%3D%3D',
  },
]

export const dev = [
  {
    id: '/dev/boltux',
    category: 'IT',
    title: 'BOLT UX',
    url: 'https://www.bolt-ux.com',
    image: '/images/boltux.png',
  },
  {
    id: '/dev/antman',
    category: '금융',
    title: '앤트맨',
    url: 'https://www.antman.kr',
    image: '/images/antman.png',
  },
  {
    id: '/dev/livecommerce',
    category: 'e-커머스',
    title: '라자냐',
    url: 'https://dev.datadive.ai/live',
    image: '/images/lasagna.png',
  },
  {
    id: '/dev/datadive',
    category: '데이터 분석',
    title: '데이터다이브',
    url: 'https://www.datadive.ai/',
    image: '/images/datadive.png',
  },
  {
    id: '/dev/lezhin-rank',
    category: '엔터테인먼트',
    title: '레진 랭킹',
    url: 'https://lezhin-rank.vercel.app/',
    image: '/images/lezhin-rank.png',
  },
  {
    id: '/dev/lezhin',
    category: '엔터테인먼트',
    title: '레진 코믹스',
    url: 'https://www.lezhin.com/',
    image: 'https://ccdn.lezhin.com/files/assets/img/jaymee-sns-share.jpg',
  },
  {
    id: '/dev/tapsonic',
    category: '게임',
    title: '탭소닉 HTML5',
    url: 'https://muca.world/TAPSONIC',
    image: 'https://t1.daumcdn.net/cfile/tistory/17025C504E14847E16',
  },
  {
    id: '/dev/pmang',
    category: '게임',
    title: '네오위즈 피망',
    url: 'http://www.pmang.com/',
    image: '/images/pmang.png',
  },
]

export const ux = [
  {
    id: '/ux/micro-interaction',
    category: '인터렉션',
    title: '마이크로 인터렉션',
    url: '#',
    image: 'photo-1598121210875-08d6cf351459?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW50ZXJhY3Rpb258ZW58MHx8MHx8',
  },
  {
    id: '/ux/motion',
    category: '인터렉션',
    title: '모션 인터렉션',
    url: '#',
    image: 'photo-1533136036465-1861830963f6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzJ8fG1vdGlvbnxlbnwwfHwwfHw',
  },
]
