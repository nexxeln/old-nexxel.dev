import { Variants } from "framer-motion";

export const Fade: Variants = {
  hidden: { y: -40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};
