import "antd/dist/antd.css";
// import "../styles/globals.css";
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { AppProps } from "next/app";
import Layout from "../src/components/commons/layout";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { createUploadLink } from "apollo-upload-client";
import { RecoilRoot } from "recoil";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
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
  const uploadLink = createUploadLink({
    uri: "http://backend06.codebootcamp.co.kr/graphql",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <RecoilRoot>
        <Global styles={globalStyles} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RecoilRoot>
    </ApolloProvider>
  );
}

export default MyApp;
