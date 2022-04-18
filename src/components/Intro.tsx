import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiGithub, FiMail } from "react-icons/fi";
import * as anims from "../animations/index";

const Links: FC = () => {
  return (
    <motion.div className="flex mt-10">
      {[
        {
          icon: FiGithub,
          href: "https://github.com/nexxeln"
        },
        {
          icon: FiMail,
          href: "mailto:shoubhit2005@gmail.com"
        }
      ].map((link, index) => (
        <Link href={link.href} key={index} passHref>
          <motion.a
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="mr-5"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            variants={anims.Fade}
            aria-label={link.icon.toString()}
          >
            <link.icon size={22} />
          </motion.a>
        </Link>
      ))}
    </motion.div>
  );
};

const Intro: FC = () => {
  return (
    <motion.div
      className="flex items-start p-2 mmt-20"
      variants={anims.FadeContainer}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        variants={anims.FadeContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="h-16 pt-2 text-5xl font-bold w-fit"
          variants={anims.Fade}
        >
          Shoubhit Dash
        </motion.h1>
      </motion.div>
    </motion.div>
  );
};

export default Intro;
