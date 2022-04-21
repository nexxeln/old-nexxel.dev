import { FC } from "react";
import { motion } from "framer-motion";
import { FadeContainer, Fade } from "../animations";

const Header: FC<{ head: string; size?: number }> = ({ head, size }) => {
  return (
    <motion.div variants={FadeContainer} initial="hidden" animate="visible">
      <motion.h1
        className={`${size === 5 ? "text-5xl" : "text-4xl"} font-bold`}
        variants={Fade}
      >
        {head}
      </motion.h1>
    </motion.div>
  );
};

export default Header;
