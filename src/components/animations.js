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

export const goalSlideInAnimationRight = {
  hidden: { opacity: 0, scale: 1, x: '150vw' },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: .4,
      delay: .5,
    }
  },
  exit: {
    x: '-100vw',
    opacity: 0,
  }
}

export const goalSlideInAnimationLeft = {
  hidden: { opacity: 0, x: '-100vw', scaleX: -1, scaleY: 1 },
  visible: {
    opacity: 1,
    scaleX: -1,
    scaleY: 1,
    x: 0,
    transition: {
      duration: .4,
      delay: .5,
    }
  },
  exit: {
    x: '100vw',
    opacity: 0,
  }
}
