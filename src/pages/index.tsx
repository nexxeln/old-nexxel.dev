import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Intro from "../components/Intro";
import ProjectCard from "../components/ProjectCard";
import ViewMoreBtn from "../components/ViewMoreBtn";
import Wrapper from "../components/Wrapper";

const Home: NextPage = ({
  nexdle,
  genLicense,
  spotifyVC,
  createt3App
}: any) => {
  return (
    <>
      <Head>
        <title>Shoubhit Dash | Home</title>
        <link rel="icon" href="/favicon.ico" />

        <meta name="title" content="Shoubhit Dash | Home" />
        <meta
          name="description"
          content="Shoubhit Dash aka nexxel's personal website"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nexxel.dev/" />
        <meta property="og:title" content="Shoubhit Dash | Home" />
        <meta
          property="og:description"
          content="Shoubhit Dash aka nexxel's personal website"
        />
        <meta property="og:image" content="/nexxel.jpg" />
      </Head>
      <Wrapper>
        <Intro />
        <div className="pt-6 text-center pb-14 mt-96">
          <Header head="Some of my projects" />
        </div>
        <div className="flex flex-col gap-10">
          <ProjectCard
            name={genLicense.name}
            language={genLicense.language}
            description={genLicense.description}
            forks={genLicense.forks}
            stars={genLicense.stargazers_count}
            link={genLicense.name}
            align="left"
          />
          <ProjectCard
            name={nexdle.name}
            language={nexdle.language}
            description={nexdle.description}
            forks={nexdle.forks}
            stars={nexdle.stargazers_count}
            link={nexdle.name}
            align="right"
          />
          <ProjectCard
            name={spotifyVC.name}
            language={spotifyVC.language}
            description={spotifyVC.description}
            forks={spotifyVC.forks}
            stars={spotifyVC.stargazers_count}
            link={spotifyVC.name}
            align="left"
          />
          <ProjectCard
            name={createt3App.name}
            language={createt3App.language}
            description={createt3App.description}
            forks={createt3App.forks}
            stars={createt3App.stargazers_count}
            link={createt3App.name}
            align="right"
          />
          <div className="self-center">
            <ViewMoreBtn text="View more" href="https://github.com/nexxeln" />
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export async function getStaticProps() {
  const nexdle = await fetch(
    "https://api.github.com/repos/nexxeln/nexdle"
  ).then(async (res) => {
    return await res.json();
  });

  const genLicense = await fetch(
    "https://api.github.com/repos/nexxeln/license-generator"
  ).then(async (res) => {
    return await res.json();
  });

  const spotifyVC = await fetch(
    "https://api.github.com/repos/nexxeln/spotify-voice-control"
  ).then(async (res) => {
    return await res.json();
  });

  const createt3App = await fetch(
    "https://api.github.com/repos/nexxeln/create-t3-app"
  ).then(async (res) => {
    return await res.json();
  });

  return {
    props: {
      nexdle,
      genLicense,
      spotifyVC,
      createt3App
    },
    revalidate: 60
  };
}

export default Home;
