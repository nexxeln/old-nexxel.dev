import type { NextPage } from "next";
import Intro from "../components/Intro";
import ProjectCard from "../components/ProjectCard";
import Wrapper from "../components/Wrapper";

const Home: NextPage = ({ nexdle, genLicense, spotifyVC }: any) => {
  return (
    <>
      <Wrapper>
        <Intro />
        <div className="flex flex-col items-center gap-6">
          <ProjectCard
            name={genLicense.name}
            language={genLicense.language}
            description={genLicense.description}
            forks={genLicense.forks}
            stars={genLicense.stargazers_count}
            link={genLicense.name}
          />
          <ProjectCard
            name={spotifyVC.name}
            language={spotifyVC.language}
            description={spotifyVC.description}
            forks={spotifyVC.forks}
            stars={spotifyVC.stargazers_count}
            link={spotifyVC.name}
          />
          <ProjectCard
            name={nexdle.name}
            language={nexdle.language}
            description={nexdle.description}
            forks={nexdle.forks}
            stars={nexdle.stargazers_count}
            link={nexdle.name}
          />
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

  return {
    props: {
      nexdle,
      genLicense,
      spotifyVC
    }
  };
}

export default Home;
