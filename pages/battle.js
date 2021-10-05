import { Header } from "../components/Header";
import styles from "../styles/battle.module.css";

export default function battle() {
  return (
    <div>
      <Header />
      <p>バトルページ</p>
      <div className={styles.button_wrapper}>
        <button className={styles.button}>バトルルームに入室する</button>
      </div>
    </div>
  );
}
