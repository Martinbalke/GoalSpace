export const popupFormAnimation = {
  hidden: {
    scale: 0
  },
  visible: {
    scale: 1,
    transition: { duration: .5 }
  }
}

export const popupContainerAnimation = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: .4,
      when: 'beforeChildren'
    }
  },
  exit: {
    x: '-100vw',
    opacity: 0,
  }
}

export const goalSlideInAnimationLeft = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: .4,
      delay: 2,
    }
  },
  exit: {
    x: '-100vw',
    opacity: 0,
  }
}

export const goalSlideInAnimationRight = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: .4,
      delay: 2,
    }
  },
  exit: {
    x: '100vw',
    opacity: 0,
  }
}

export const milestoneSlideInLeft = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: .4,
    }
  },
  exit: {
    x: '100vw',
    opacity: 0,
  }
}

export const milestoneSlideInRight = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: .4,
    }
  },
  exit: {
    x: '100vw',
    opacity: 0,
  }
}