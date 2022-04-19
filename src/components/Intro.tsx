import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiGithub, FiMail } from "react-icons/fi";
import * as anims from "../animations/index";
import Wavy from "../animations/Wavy";

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
            className="mr-5 text-gray-600 dark:text-gray-400"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            variants={anims.Fade}
            aria-label={link.icon.toString()}
          >
            <link.icon
              size={22}
              className="dark:hover:text-white hover:text-black"
            />
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

        <Wavy
          text="Highschooler and Developer"
          heading="p"
          className="mt-3 mb-10 text-xl text-gray-900 dark:text-white"
        />

        <motion.p
          className="mr-20 text-xl text-gray-600 dark:text-gray-400"
          variants={anims.Fade}
        >
          16 yo self-taught developer, trying to make the world a cooler place{" "}
          and stuff like that
        </motion.p>

        <Links />
      </motion.div>

      <motion.div variants={anims.Pfp} className="hidden sm:block">
        <Image
          src="https://avatars.githubusercontent.com/u/95541290?v=4"
          alt="pfp"
          width={150}
          height={150}
          className="rounded-full"
        />
      </motion.div>
    </motion.div>
  );
};

export default Intro;
