import "../styles/globals.css";
import "@fontsource/barlow";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { KBarProvider } from "kbar";
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
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      value={{
        dark: "dark",
        light: "light"
      }}
    >
      <KBarProvider
        options={{
          enableHistory: true
        }}
        actions={actions}
      >
        <CommandPalette />
        <Component {...pageProps} />
      </KBarProvider>
    </ThemeProvider>
  );
}
// }

export default PersonalSite;
