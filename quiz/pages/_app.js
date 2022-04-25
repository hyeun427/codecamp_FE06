import "antd/dist/antd.css";
import Layout from "../src/layout";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/styles/globalStyles";
import { RecoilRoot } from "recoil";
import ApolloSetting from "../src/commons/apollo";

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <ApolloSetting>
        <Global styles={globalStyles} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloSetting>
    </RecoilRoot>
  );
}

export default MyApp;
