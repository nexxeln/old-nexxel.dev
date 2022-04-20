import type { NextPage } from "next";
import Header from "../components/Header";
import Intro from "../components/Intro";
import ProjectCard from "../components/ProjectCard";
import ViewMoreBtn from "../components/ViewMoreBtn";
import Wrapper from "../components/Wrapper";

const Home: NextPage = ({ nexdle, genLicense, spotifyVC, remixBlog }: any) => {
  return (
    <>
      <Wrapper>
        <Intro />
        <div className="pt-6 pb-8 text-center mt-96">
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
            name={remixBlog.name}
            language={remixBlog.language}
            description={remixBlog.description}
            forks={remixBlog.forks}
            stars={remixBlog.stargazers_count}
            link={remixBlog.name}
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

export async function getServerSideProps({ req, res }: any) {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

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

  const remixBlog = await fetch(
    "https://api.github.com/repos/nexxeln/remix-blog"
  ).then(async (res) => {
    return await res.json();
  });

  return {
    props: {
      nexdle,
      genLicense,
      spotifyVC,
      remixBlog
    }
  };
}

export default Home;
