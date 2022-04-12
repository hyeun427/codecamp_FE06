import "antd/dist/antd.css";
// import "../styles/globals.css";
import { AppProps } from "next/app";
import Layout from "../src/components/commons/layout";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { RecoilRoot } from "recoil";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import ApolloSetting from "../src/components/commons/apollo/indesx";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUJasusUBgSrbWUIUYCjdnh22t-tCrD4o",
  authDomain: "hyunsite-23ceb.firebaseapp.com",
  projectId: "hyunsite-23ceb",
  storageBucket: "hyunsite-23ceb.appspot.com",
  messagingSenderId: "221063685778",
  appId: "1:221063685778:web:0a156063059576f6aca84b",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

function MyApp({ Component, pageProps }: AppProps) {
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
