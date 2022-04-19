import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

function PersonalSite({ Component, pageProps }: AppProps) {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }
  if (typeof window === "undefined") {
    return <></>;
  } else {
    return (
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        value={{
          dark: "dark",
          light: "light"
        }}
      >
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}

export default PersonalSite;
