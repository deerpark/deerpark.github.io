/**
 * 부모 애니메이션 설정
 */
export const parentVariants = {
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
  hidden: {
    transition: { staggerChildren: 0.1, staggerDirection: -1 },
  },
}

/**
 * 슬라이드 인 애니메이션 설정
 */
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

/**
 * 지연된 슬라이드 인 애니메이션 설정
 */
export const slideInXDefaultVariants = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      stiffness: 1000,
    },
  },
  hidden: {
    opacity: 0,
    x: 20,
    transition: {
      stiffness: 1000,
    },
  },
}

/**
 * 더 지연된 슬라이드 인 애니메이션 설정
 */
export const slideInXDelayedVariants = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      stiffness: 1000,
      delay: 0.7,
    },
  },
  hidden: {
    opacity: 0,
    x: 20,
    transition: {
      stiffness: 1000,
    },
  },
}

/**
 * 지연된 슬라이드 업 애니메이션 설정
 */
export const slideUpXDelayedVariants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      stiffness: 1000,
    },
  },
  hidden: {
    opacity: 0,
    y: 20,
    transition: {
      stiffness: 1000,
    },
  },
}

/**
 * 페이드 인 애니메이션 설정
 */
export const fadeInVariants = {
  enter: () => ({
    opacity: 0,
  }),
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
  exit: () => ({
    opacity: 0,
  }),
}

/**
 * 지연된 페이드 인 애니메이션 설정
 */
export const fadeInDelayedVariants = {
  enter: () => ({
    opacity: 0,
  }),
  visible: delay => ({
    opacity: 1,
    transition: {
      duration: 0.8,
      delay,
    },
  }),
  exit: () => ({
    opacity: 0,
  }),
}

/**
 * 프로필 탭 트랜지션 설정
 */
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

/**
 * 경력 팝업(아래에서 위로) 애니메이션 설정
 */
export const careerPopupVariants = {
  enter: () => ({
    y: 0,
    opacity: 0,
  }),
  center: {
    y: -478,
    opacity: 1,
  },
  exit: () => ({
    y: 0,
    opacity: 0,
  }),
}

/**
 * 설정 팝업(위에서 아래로) 애니메이션 설정
 */
export const magicPopupVariants = {
  enter: () => ({
    y: -478,
    opacity: 0,
  }),
  center: {
    y: 0,
    opacity: 1,
  },
  exit: () => ({
    y: -478,
    opacity: 0,
  }),
}

/**
 * 열기 애니메이션 설정
 */
export const openSpring = { type: 'spring', stiffness: 200, damping: 30 }

/**
 * 닫기 애니메이션 설정
 */
export const closeSpring = { type: 'spring', stiffness: 300, damping: 35 }
