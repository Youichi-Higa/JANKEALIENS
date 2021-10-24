import { Heading } from "@chakra-ui/layout";
import Link from "next/link";
import { useState } from "react";
import styles from "../styles/Home.module.css";

export const Header = () => {
  const [isAccount, setIsAccount] = useState(false);

  const onClickMetamaskConnect = async () => {
    // ログイン
    const accounts = await ethereum.request({ method: "eth_requestAccounts" });
    if (typeof accounts !== "undefined") {
      console.log(accounts[0]);
      setIsAccount(true);
    }
  };

  return (
    <header className={styles.header}>
      <Link href="/" passHref>
        <Heading className={styles.headerTitle}>JANKEALIENS</Heading>
      </Link>
      <div className={styles.headerMenu}>
        <div className={styles.headerMenuItem}>
          <Link href="/catalog">
            <a>Catalog</a>
          </Link>
        </div>
        <div className={styles.headerMenuItem}>
          <Link href="/select">
            <a>Battle</a>
          </Link>
        </div>
      </div>
      {isAccount ? (
        <button className={styles.button}>◯◯さん</button>
      ) : (
        <button className={styles.button} onClick={onClickMetamaskConnect}>
          Wallet
        </button>
      )}
    </header>
  );
};
