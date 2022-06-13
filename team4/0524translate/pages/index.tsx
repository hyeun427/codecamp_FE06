import styles from "../styles/Home.module.css";
import { Translate } from "react-auto-translate";

export default function Home() {
  return (
    <div className={styles.container}>
      <Translate>hello my universe</Translate>
    </div>
  );
}
