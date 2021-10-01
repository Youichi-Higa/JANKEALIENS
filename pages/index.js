import Image from "next/image";
import { Header } from "../components/Header";
import styles from "../styles/top_image.module.css";

export default function Home() {
  return (
    <>
      <Header />
      <div className={styles.Alien1_wrapper}>
        <Image
          src="/Alien1.png"
          alt="宇宙人１"
          width={250}
          height={250}
          className={styles.image}
        />
      </div>
      <div className={styles.Alien2_wrapper}>
        <Image
          src="/Alien2.png"
          alt="宇宙人１"
          width={200}
          height={200}
          className={styles.image}
        />
      </div>
      <div className={styles.Alien3_wrapper}>
        <Image
          src="/Alien3.png"
          alt="宇宙人１"
          width={400}
          height={400}
          className={styles.image}
        />
      </div>
      <div className={styles.Alien4_wrapper}>
        <Image
          src="/Alien4.png"
          alt="宇宙人１"
          width={180}
          height={180}
          className={styles.image}
        />
      </div>
      <div className={styles.Alien5_wrapper}>
        <Image
          src="/Alien5.png"
          alt="宇宙人１"
          width={500}
          height={500}
          className={styles.image}
        />
      </div>
    </>
  );
}
