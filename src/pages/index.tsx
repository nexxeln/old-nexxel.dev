import type { NextPage } from "next";
import Intro from "../components/Intro";
import Wrapper from "../components/Wrapper";

const Home: NextPage = () => {
  return (
    <Wrapper>
      <Intro />

      <h1 className="m-96">helllo</h1>
    </Wrapper>
  );
};

export default Home;
