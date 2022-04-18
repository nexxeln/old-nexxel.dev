import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

function PersonalSite({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      value={{
        dark: "dark",
        light: "light",
      }}
    >
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default PersonalSite;
