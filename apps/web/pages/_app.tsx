import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/global.css";
import "../fontawesome";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
