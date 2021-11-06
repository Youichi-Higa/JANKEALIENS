import Image from "next/image";
import { Header } from "../components/Header";
import styles from "../styles/top_image.module.css";

export default function Home() {
  return (
    <>
      <Header />
      <div className={styles.Alien1_wrapper}>
        <Image
          src="/flamingorilla.png"
          alt="フラミンゴリラ星人"
          width={250}
          height={250}
          className={styles.image}
        />
      </div>
      <div className={styles.Alien2_wrapper}>
        <Image
          src="/irukappa.png"
          alt="イルカッパ星人"
          width={200}
          height={200}
          className={styles.image}
        />
      </div>
      <div className={styles.Alien3_wrapper}>
        <Image
          src="/butako.png"
          alt="ブタコ星人"
          width={400}
          height={400}
          className={styles.image}
        />
      </div>
      <div className={styles.Alien4_wrapper}>
        <Image
          src="/katatumurisu.png"
          alt="カタツムリス星人"
          width={180}
          height={180}
          className={styles.image}
        />
      </div>
      <div className={styles.Alien5_wrapper}>
        <Image
          src="/zousagi.png"
          alt="ゾウサギ星人"
          width={500}
          height={500}
          className={styles.image}
        />
      </div>
    </>
  );
}
