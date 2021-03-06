let reverse = "reverse" as const;
export const list = {
  visible: {
    opacity: 1,
transition: { staggerChildren: 0.15, delayChildren: 1,repeat: 1,repeatType: reverse,duration: 2,repeatDelay: 4}
  },
  hidden: { opacity: 0 },
};

export const listItem = (delay: number) => {
  return {
    visible: {
      opacity: 1,
      y:0,
      transition: { duration: 1, delay:delay}
    },
    hidden: { opacity: 0,y:80 },
  };
};
export const listItemHover = {
  scale: [1, 1.07, 1],
  transition: { duration: 0.4 },
};

export const title = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.4}
  },
  hidden: { opacity: 0, y: -80 },
};
export const filled = {
  visible: {
    opacity: 1,
    scale: [0, 1.15, 1],
    transition: { duration: 1, delay:4}
  },
  hidden: { opacity: 0 },
};
export const stagger = (delay: number) => {
  return {
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: delay,
        delayChildren: 1.7,
      },
    },
    hidden: { opacity: 0 },
  };
};

export const fadeRight = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.6, -0.05, 0.01, 0.92],
    },
  },
  hidden: {
    opacity: 0,
    x: -80,
  },
};

export const fadeIn = {
  visible: { opacity: 1, transition: { duration: 0.5, delay: 1 } },
  hidden: { opacity: 0 },
};

export const fadeInDown = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      delay: 2,
    },
  },
};
