import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Wrapper from "../components/Wrapper";

const fourofour: NextPage = () => {
  return (
    <>
      <Head>
        <title>Shoubhit Dash | 404</title>
        <link rel="icon" href="/favicon.ico" />

        <meta name="title" content="Shoubhit Dash | 404" />
        <meta
          name="description"
          content="Shoubhit Dash aka nexxel's personal website"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nexxel.dev/" />
        <meta property="og:title" content="Shoubhit Dash | 404" />
        <meta
          property="og:description"
          content="Shoubhit Dash aka nexxel's personal website"
        />
        <meta property="og:image" content="/nexxel.jpg" />
      </Head>
      <Wrapper>
        <div className="text-center my-36">
          <h1 className="text-4xl font-bold">
            Uh oh, looks like the link you entered is either work in progress or
            is broken
          </h1>
          <Link passHref href="/">
            <button className="w-2/3 py-4 mt-20 font-semibold uppercase transition-all duration-300 border-2 border-black rounded-md hover:scale-105 dark:border-gray-400">
              Go back to home
            </button>
          </Link>
        </div>
      </Wrapper>
    </>
  );
};

export default fourofour;
