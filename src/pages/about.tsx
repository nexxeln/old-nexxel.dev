import { motion } from "framer-motion";
import { NextPage } from "next";
import Head from "next/head";
import * as anims from "../animations/index";
import Header from "../components/Header";
import Text from "../components/Text";
import Wrapper from "../components/Wrapper";

const about: NextPage = () => {
  return (
    <>
      <Head>
        <title>Shoubhit Dash | About</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Shoubhit Dash aka nexxel's personal website."
        />
      </Head>
      <Wrapper>
        <motion.div
          className="flex flex-col items-start justify-start"
          variants={anims.FadeContainer}
          initial="hidden"
          animate="visible"
        >
          <div className="pb-4">
            <Header head="About Me" />
          </div>
          <Text>
            <motion.div
              variants={anims.FadeContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.p variants={anims.Fade}>
                Hi, I&apos;m Shoubhit, commonly known as nexxel online. I&apos;m
                from and live&nbsp;(for now) in India. We got Computer Science
                in our school in 5th grade, and since then it has been my
                favourite subject at school, even though they taught us Java
                which is not so enjoyable.
                <br />
                <br />
                In 2021 I started learning Python from{" "}
                <a
                  href="https://www.freecodecamp.org/"
                  rel="noreferrer"
                  target="_blank"
                >
                  freeCodeCamp
                </a>{" "}
                in my free time because I felt like I was just wasting a lot of
                time, so I wanted to learn stuff that I will actually use in my
                life. I made some Discord bots, wrote some cool scripts.
                Eventually I got into web development and I love it, the
                frontend, the backend, all of it. Lately I&apos;ve been dwelling
                into some Rust and Go as well because I think thats the future.
                I haven&apos;t gotten into it a lot because frankly I have no
                time.
                <br />
                <br />
                I&apos;m currently in 12th grade and preparing for{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Joint_Entrance_Examination"
                  rel="noreferrer"
                  target="_blank"
                >
                  JEE
                </a>{" "}
                which is an entrance exam for good engineering colleges in
                India, so most of my time goes into studying for it. I&apos;m
                hoping to study Computer Science in college.
                <br />
                <br />
                For hobbies other than coding, I really like performing{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Magic_(illusion)"
                  rel="noreferrer"
                  target="_blank"
                >
                  magic
                </a>
                ,{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Mentalism"
                  rel="noreferrer"
                  target="_blank"
                >
                  mentalism
                </a>
                &nbsp;(yes I can read your mind) and I dabble into some{" "}
                <a
                  href="https://www.youtube.com/watch?v=wx_dnEen2xQ"
                  rel="noreferrer"
                  target="_blank"
                >
                  cardistry
                </a>{" "}
                as well. I also like reading novels but I haven&apos;t read one
                for a long time now, simply because I have no time. My favourite
                author is{" "}
                <a
                  href="https://en.wikipedia.org/wiki/John_Green"
                  rel="noreferrer"
                  target="_blank"
                >
                  John Green
                </a>
                . I also really like listening to music,{" "}
                <a
                  href="https://open.spotify.com/artist/6bmlMHgSheBauioMgKv2tn?si=RoqNOQkQTaSoSmNIARTkHA"
                  rel="noreferrer"
                  target="_blank"
                >
                  Powfu
                </a>
                ,{" "}
                <a
                  href="https://open.spotify.com/artist/1ScHz7wPPxVTEKsc9g3Z0c?si=uUlwcUFpSjq1HbxRGtea3Q"
                  rel="noreferrer"
                  target="_blank"
                >
                  Rxseboy
                </a>
                , and{" "}
                <a
                  href="https://open.spotify.com/artist/1vwwjIPFeYoRfAUCqqO6cZ?si=VGnmIxdZQdCmtYiqVQGpZA"
                  rel="noreferrer"
                  target="_blank"
                >
                  44phantom
                </a>{" "}
                are some of my favourite artists. I also love cycling.
              </motion.p>
            </motion.div>
          </Text>
          <div className="py-6" />
          <div className="pb-6">
            <Header head="About this website" />
          </div>
          <Text>
            <motion.div
              className="pt-4"
              variants={anims.FadeContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={anims.Fade}>
                In case you&apos;re wondering:
                <ul>
                  <li>
                    Heavily inspired by{" "}
                    <a
                      href="https://leerob.io"
                      rel="noreferrer"
                      target="_blank"
                    >
                      Lee Robinson&apos;s website
                    </a>
                  </li>
                  <li>
                    Built with{" "}
                    <a
                      href="https://nextjs.org"
                      rel="noreferrer"
                      target="_blank"
                    >
                      Next.js
                    </a>
                    ,{" "}
                    <a
                      href="https://framer.com/motion"
                      rel="noreferrer"
                      target="_blank"
                    >
                      Framer Motion
                    </a>{" "}
                    ,{" "}
                    <a
                      href="https://tailwindcss.com"
                      rel="noreferrer"
                      target="_blank"
                    >
                      TailwindCSS
                    </a>{" "}
                    and{" "}
                    <a
                      href="https://firebase.google.com"
                      rel="noreferrer"
                      target="_blank"
                    >
                      Firebase
                    </a>
                  </li>

                  <li>
                    Everything is in{" "}
                    <a
                      href="https://typescript.org"
                      rel="noreferrer"
                      target="_blank"
                    >
                      TypeScript
                    </a>
                  </li>

                  <li>
                    Deployed on{" "}
                    <a
                      href="https://vercel.com"
                      rel="noreferrer"
                      target="_blank"
                    >
                      Vercel
                    </a>
                  </li>

                  <li>
                    Open source on{" "}
                    <a
                      href="https://github.com/nexxeln/nexxel.dev"
                      rel="noreferrer"
                      target="_blank"
                    >
                      GitHub
                    </a>
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          </Text>
        </motion.div>
      </Wrapper>
    </>
  );
};

export default about;
