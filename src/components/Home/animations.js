export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 }
};

export const buttonAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  whileHover: { 
    scale: 1.05,
    boxShadow: "0 0 25px rgba(255,255,255,0.5)"
  },
  whileTap: { scale: 0.95 },
  transition: { 
    duration: 0.3,
    type: "spring",
    stiffness: 300
  }
};

export const shineAnimation = {
  animate: {
    x: ["0%", "100%"],
    opacity: [0, 1, 0],
  },
  transition: {
    duration: 1.5,
    repeat: Infinity,
    repeatDelay: 3,
  }
};