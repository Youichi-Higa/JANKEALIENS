import { Heading } from "@chakra-ui/layout";
import Link from "next/link";
import { memo, useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

// eslint-disable-next-line react/display-name
export const Header = memo(() => {
  const [userAddress, setUserAddress] = useState("");
  const [reload, setReload] = useState(false);

  const addressFirst = userAddress.substr(0, 4);
  const addressEnd = userAddress.substr(-4);

  const onClickMetamaskConnect = async () => {
    // ログイン
    const accounts = await ethereum.request({ method: "eth_requestAccounts" });
    if (typeof accounts !== "undefined") {
      setUserAddress(accounts[0]);
    }
  };

  const onClickReload = () => {
    setReload(!reload);
  };

  const axios = require("axios");
  const [rps, setRps] = useState(0);

  //😃😃😃デプロイ時に変更😃😃😃
  const rpsUrl = `https://jankealiens-rps.lolipop.io/rps_read.php?user_address=${userAddress}`; //デプロイ
  // const rpsUrl = `http://localhost/LAB05/jankealiens_rps/rps_read.php?user_address=${userAddress}`; //ローカル

  useEffect(() => {
    const getRps = async () => {
      const result = await axios.get(rpsUrl);
      console.log(result);

      if (typeof result.data.rps === "undefined") {
        setRps(0);
      } else {
        setRps(result.data.rps);
      }
    };
    getRps();
  }, [rpsUrl, reload]);

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
        <button className={styles.button} onClick={onClickReload}>
          {`${addressFirst}...${addressEnd}`}
          <br />
          {rps} RPS
        </button>
      )}
    </header>
  );
});
