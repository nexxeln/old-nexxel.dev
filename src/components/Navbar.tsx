import { FC } from "react";
import NextLink from "next/link";
import { NextRouter, useRouter } from "next/router";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { useSpring, animated } from "react-spring";
import * as anims from "../animations/index";

const NavItem: FC<{ href: string; text: string; router: NextRouter }> = ({
  href,
  text,
  router
}) => {
  const isActive = router.pathname === (href === "/home" ? "/" : href);

  return (
    <NextLink href={href === "/home" ? "/" : href}>
      <a
        className={`${
          isActive
            ? "font-semibold text-gray-800 dark:text-gray-200"
            : "font-normal text-gray-600 dark:text-gray-400"
        } sm:inline-block rounded-lg hover:text-gray-900 dark:hover:text-gray-50 transition-all text-lg mr-4 sm:mr-7`}
      >
        {text}
      </a>
    </NextLink>
  );
};

const ToggleMode: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const properties = {
    sun: {
      r: 9,
      transform: "rotate(40deg)",
      cx: 12,
      cy: 4,
      opacity: 0
    },
    moon: {
      r: 5,
      transform: "rotate(90deg)",
      cx: 30,
      cy: 0,
      opacity: 1
    },
    springConfig: { mass: 4, tension: 250, friction: 35 }
  };
  const { r, transform, cx, cy, opacity } =
    theme === "dark" ? properties["moon"] : properties["sun"];
  const svgContainerProps = useSpring({
    transform,
    config: properties.springConfig
  });
  const centerCircleProps: any = useSpring({
    r,
    config: properties.springConfig
  });
  const maskedCircleProps: any = useSpring({
    cx,
    cy,
    config: properties.springConfig
  });
  const linesProps = useSpring({ opacity, config: properties.springConfig });

  return (
    <motion.div
      className="h-6 text-gray-500 dark:hover:text-white"
      variants={anims.Pfp}
    >
      <animated.svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ ...svgContainerProps, cursor: "pointer" }}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        <mask id="mask">
          <rect x="0" y="0" width="100%" height="100%" fill="white" />
          <animated.circle
            style={maskedCircleProps}
            cx="12"
            cy="4"
            r="9"
            fill="black"
          />
        </mask>
        <animated.circle
          style={centerCircleProps}
          fill="currentColor"
          cx="12"
          cy="12"
          r="9"
          mask="url(#mask)"
        />

        <animated.g style={linesProps} fill="currentColor">
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </animated.g>
      </animated.svg>
    </motion.div>
  );
};

const Navbar: FC = () => {
  const router = useRouter();
  const links = ["home", "about", "blog", "guestbook"];

  return (
    <nav className="flex items-center justify-between capitalize">
      <div>
        {links.map((link, index) => (
          <NavItem
            href={`/${link}`}
            text={link.charAt(0).toUpperCase() + link.slice(1)}
            router={router}
            key={index}
          />
        ))}
      </div>

      <div className="flex items-center">
        <ToggleMode />
      </div>
    </nav>
  );
};

export default Navbar;
