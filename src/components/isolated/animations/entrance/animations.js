const blocksWrapperAnimation = {
  exit: () => ({
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  }),
};

const blockAnimation = {
  exit: () => ({
    width: "0",
    transition: {
      duration: 0.6,
      type: "tween",
      ease: "easeOut",
    },
  }),
};

export { blocksWrapperAnimation, blockAnimation };
