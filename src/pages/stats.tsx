import { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Stats from "../components/Stats";
import Wrapper from "../components/Wrapper";

const stats: NextPage = () => {
  return (
    <>
      <Head>
        <title>Shoubhit Dash | Stats</title>
        <link rel="icon" href="/favicon.ico" />
        <title>Shoubhit Dash | Guestbook</title>
        <meta name="title" content="Shoubhit Dash | Guestbook" />
        <meta
          name="description"
          content="Shoubhit Dash aka nexxel's personal website"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nexxel.dev/" />
        <meta property="og:title" content="Shoubhit Dash | Guestbook" />
        <meta
          property="og:description"
          content="Shoubhit Dash aka nexxel's personal website"
        />
        <meta property="og:image" content="/nexxel.jpg" />
      </Head>
      <Wrapper>
        <Header head="Stats" size={5} />
        <Stats />
      </Wrapper>
    </>
  );
};

export default stats;
