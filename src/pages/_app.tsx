import "../styles/globals.css";
import "../styles/nprogress.css";
import "@fontsource/barlow";
import type { AppProps } from "next/app";
import { Router } from "next/router";
import { ThemeProvider } from "next-themes";
import NProgress from "nprogress";
import { KBarProvider } from "kbar";
import { MantineProvider } from "@mantine/core";
import CommandPalette from "../components/CommandPalette";
import actions from "../lib/actions";
// import { useEffect, useState } from "react";

function PersonalSite({ Component, pageProps }: AppProps) {
  // const [showChild, setShowChild] = useState(false);
  // useEffect(() => {
  //   setShowChild(true);
  // }, []);

  // if (!showChild) {
  //   return null;
  // }

  // if (typeof window === "undefined") {
  //   return <></>;
  // } else {

  NProgress.configure({ showSpinner: false });
  Router.events.on("routeChangeStart", () => NProgress.start());
  Router.events.on("routeChangeComplete", () => NProgress.done());
  Router.events.on("routeChangeError", () => NProgress.done());

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      value={{
        dark: "dark",
        light: "light"
      }}
    >
      <MantineProvider withNormalizeCSS>
        <KBarProvider
          options={{
            enableHistory: true
          }}
          actions={actions}
        >
          <CommandPalette />
          <Component {...pageProps} />
        </KBarProvider>
      </MantineProvider>
    </ThemeProvider>
  );
}
// }

export default PersonalSite;
