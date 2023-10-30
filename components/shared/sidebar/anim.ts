export const menuSlide = {
  initial: { x: "-400px" },
  enter: { x: "0", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
  exit: {
    x: "-400px",
    transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
  },
};

export const chartSlide = {
  initial: { y: "calc(100% + 100px)" },
  enter: { y: "0", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
  exit: {
    y: "calc(100% + 100px)",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
};

export const filterSlide = {
  initial: { y: "calc(0% + 100px)" },
  enter: { y: "0", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
  exit: {
    y: "calc(100% + 100px)",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
};
