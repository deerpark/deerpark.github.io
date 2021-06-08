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
