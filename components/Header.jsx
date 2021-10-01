import Link from "next/link";
import styles from "../styles/Home.module.css";

const Web3 = require("web3");

export const Header = () => {
  const onClickMetamaskConnect = async () => {
    // ログイン
    await window.ethereum.request({ method: "eth_requestAccounts" });
    window.web3 = new Web3(window.ethereum);
  };

  return (
    <header className={styles.header}>
      <Link href="/" passHref>
        <h1 className={styles.headerTitle}>JANKEALIENS</h1>
      </Link>
      <div className={styles.headerMenu}>
        <div className={styles.headerMenuItem}>
          <Link href="/catalog">
            <a>Catalog</a>
          </Link>
        </div>
        <div className={styles.headerMenuItem}>
          <Link href="/battle">
            <a>Battle</a>
          </Link>
        </div>
      </div>
      <button className={styles.button} onClick={onClickMetamaskConnect}>
        Wallet
      </button>
    </header>
  );
};
