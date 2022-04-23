import { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Stats from "../components/Stats";
import Wrapper from "../components/Wrapper";

const stats: NextPage = () => {
  return (
    <>
      <Head>
        <title>Shoubhit Dash | 404</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Shoubhit Dash aka nexxel's personal website"
        />
      </Head>
      <Wrapper>
        <Header head="Stats" size={5} />
        <Stats />
      </Wrapper>
    </>
  );
};

export default stats;
