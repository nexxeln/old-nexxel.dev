import { FC } from "react";
import { motion } from "framer-motion";
import { FadeContainer, Fade } from "../animations";

const Header: FC<{ head: string }> = ({ head }) => {
  return (
    <motion.div variants={FadeContainer} initial="hidden" animate="visible">
      <motion.h1 className="px-2 pb-6 text-4xl font-bold" variants={Fade}>
        {head}
      </motion.h1>
    </motion.div>
  );
};

export default Header;
