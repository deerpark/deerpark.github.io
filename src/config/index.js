export const inviewVariants = {
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

export const x = {}
