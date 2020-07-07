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
