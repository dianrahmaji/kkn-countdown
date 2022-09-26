import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

import "../styles/globals.css";

import Header from "../components/header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
