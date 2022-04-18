import type { NextPage } from "next";
import Intro from "../components/Intro";
import Wrapper from "../components/Wrapper";

const Home: NextPage = () => {
  return (
    <Wrapper>
      <Intro />
    </Wrapper>
  );
};

export default Home;
