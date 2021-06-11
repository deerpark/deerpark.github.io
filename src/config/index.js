export const slideInXVariants = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      y: { stiffness: 100, velocity: -100 },
    },
  },
  hidden: {
    opacity: 0,
    x: 10,
  },
}

export const slideInXDelayedVariants = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      delay: 0.1,
      y: { stiffness: 100, velocity: -100 },
    },
  },
  hidden: {
    opacity: 0,
    x: 10,
    transition: {
      delay: 0.1,
    },
  },
}

export const fadeInVariants = {
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
  hidden: {
    opacity: 0,
  },
}

export const profileTabVariants = {
  enter: ([direction, containerWidth]) => ({
    x: direction > 0 ? containerWidth : -containerWidth,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: ([direction, containerWidth]) => ({
    zIndex: 0,
    x: direction < 0 ? containerWidth : -containerWidth,
    opacity: 0,
  }),
}

export const careerPopupVariants = {
  enter: () => ({
    y: 0,
    opacity: 0,
  }),
  center: {
    y: -578,
    opacity: 1,
  },
  exit: () => ({
    y: 0,
    opacity: 0,
  }),
}

export const magicPopupVariants = {
  enter: () => ({
    y: -578,
    opacity: 0,
  }),
  center: {
    y: 0,
    opacity: 1,
  },
  exit: () => ({
    y: -578,
    opacity: 0,
  }),
}

export const routes = {
  '/': {
    title: '홈',
  },
  '/profile': {
    title: '프로필',
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

export const profileTabs = [
  { label: '소개', value: 0 },
  { label: '경력', value: 1 },
  { label: '업무적 강점', value: 2 },
  { label: '기술 스택', value: 3 },
]

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
