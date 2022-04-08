import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import { Landing } from "./style";

export default function Home() {
  return (
    <div>
      <Landing src="/img/landing.png" />
    </div>
  );
}
