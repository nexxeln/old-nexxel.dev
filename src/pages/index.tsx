import type { NextPage } from "next";
import Intro from "../components/Intro";
import ProjectCard from "../components/ProjectCard";
import Wrapper from "../components/Wrapper";

const Home: NextPage = ({ data }: any) => {
  return (
    <Wrapper>
      <Intro />
      <ProjectCard
        name={data.name}
        language={data.language}
        description={data.description}
        forks={data.forks}
        stars={data.stargazers_count}
      />
    </Wrapper>
  );
};

export async function getServerSideProps({ req, res }: any) {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  const data = await fetch("https://api.github.com/repos/nexxeln/nexdle").then(
    async (res) => {
      return await res.json();
    }
  );

  return {
    props: {
      data
    }
  };
}

export default Home;
