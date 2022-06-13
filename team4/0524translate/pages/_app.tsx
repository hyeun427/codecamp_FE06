import "../styles/globals.css";
import { Translator } from "react-auto-translate";

function MyApp({ Component, pageProps }) {
  type CacheProvider = {
    get: (language: string, key: string) => string | undefined;
    set: (language: string, key: string, translation: string) => void;
  };

  // example provider
  const cacheProvider = {
    get: (language, key) =>
      ((JSON.parse(localStorage.getItem("translations")) || {})[key] || {})[
        language
      ],
    set: (language, key, value) => {
      const existing = JSON.parse(localStorage.getItem("translations")) || {
        [key]: {},
      };
      existing[key] = { ...existing[key], [language]: value };
      localStorage.setItem("translations", JSON.stringify(existing));
    },
  };
  return (
    <>
      <Translator
        cacheProvider={cacheProvider}
        from="en"
        to="ko"
        googleApiKey="AIzaSyBwuUqwo_UbRpvYykdibLlA_luu47IXG5M"
      >
        <Component {...pageProps} />
      </Translator>
    </>
  );
}

export default MyApp;
