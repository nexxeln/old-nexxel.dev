import Link from "next/link";
import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="flex flex-col justify-center mx-6 mt-40 border-t border-gray-200 dark:border-gray-800">
      <div className="sm:flex">
        <div className="flex flex-col w-1/3">
          {[
            {
              link: "/",
              text: "Home"
            },
            {
              link: "/about",
              text: "About"
            },
            {
              link: "/blog",
              text: "Blog"
            }
          ].map((link, index) => (
            <Link passHref href={link.link} key={index}>
              <span className="footer-links">{link.text}</span>
            </Link>
          ))}
        </div>
        <div className="flex flex-col w-1/3">
          {[
            {
              link: "/guestbook",
              text: "Guestbook"
            },
            {
              link: "/stats",
              text: "Stats"
            }
          ].map((link, index) => (
            <Link passHref href={link.link.toLowerCase()} key={index}>
              <span className="footer-links">{link.text}</span>
            </Link>
          ))}
        </div>
        <div className="flex flex-col w-1/3">
          {[
            {
              link: "https://github.com/nexxeln",
              text: "GitHub"
            },
            {
              link: "https://discord.com/users/758578599715405824",
              text: "Discord"
            }
          ].map((link, index) => (
            <a
              href={link.link}
              target="_blank"
              rel="noreferrer"
              key={index}
              className="my-2 text-lg text-gray-500 w-fit hover:text-black dark:hover:text-white"
            >
              {link.text}
            </a>
          ))}
        </div>
      </div>
      <p className="my-20 text-lg text-center text-gray-900 dark:text-white">
        This website is open source on{" "}
        <a
          href="https://github.com/nexxeln/nexxel.dev"
          target="_blank"
          rel="noreferrer"
          className="underline transition-opacity duration-300 hover:opacity-80"
        >
          GitHub
        </a>
        !
      </p>
    </footer>
  );
};

export default Footer;
