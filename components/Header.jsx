import { Heading } from "@chakra-ui/layout";
import Link from "next/link";
import { memo, useState } from "react";
import styles from "../styles/Home.module.css";

export const Header = () => {
  // const [isAccount, setIsAccount] = useState(false);
  const [userAddress, setUserAddress] = useState("");
  console.log("ヘッダー", userAddress);

  const addressFirst = userAddress.substr(0, 4);
  const addressEnd = userAddress.substr(-4);

  const onClickMetamaskConnect = async () => {
    // ログイン
    const accounts = await ethereum.request({ method: "eth_requestAccounts" });
    if (typeof accounts !== "undefined") {
      setUserAddress(accounts[0]);
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
      {userAddress == "" ? (
        <button className={styles.button} onClick={onClickMetamaskConnect}>
          Wallet
        </button>
      ) : (
        <button className={styles.button}>
          {`${addressFirst}...${addressEnd}`}
          <br />0 RPS
        </button>
      )}
    </header>
  );
};
