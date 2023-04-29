// Text Animations
const textAnimations = {
  from: () => ({
    y: 100,
  }),
  to: (isEntranceActive, delayTime) => ({
    y: 0,
    transition: {
      delay: isEntranceActive ? delayTime : 0.7,
      duration: 0.7,
      ease: "easeOut",
      type: "tween",
    },
  }),
};

// Box Wrapper Animations
const boxWrapperAnimations = {
  from: (windowWidth) => ({ y: windowWidth > 1024 ? -260 : -400 }),
  to: (isEntranceActive, delayTime) => ({
    y: 0,
    transition: {
      type: "tween",
      duration: 1,
      delay: isEntranceActive ? delayTime : 1.2,
      ease: "easeOut",
      when: "beforeChildren",
      delayChildren: 0.2,
      staggerChildren: 0.2,
    },
  }),
};

export { textAnimations, boxWrapperAnimations };
