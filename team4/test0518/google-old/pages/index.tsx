import Head from "next/head";
import Image from "next/image";
import Translate from "../src/translate";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <div>
        <Translate />
        이건 번역하고 싶어!
      </div>
      <div>이건 번역하기 싫어!!!</div>
    </div>
  );
}
