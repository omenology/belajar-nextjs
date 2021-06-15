import "../styles/globals.css";

import { CountProvider } from "../reducer/count";

function MyApp({ Component, pageProps }) {
  return (
    <CountProvider>
      <Component {...pageProps} />
    </CountProvider>
  );
}

export default MyApp;
