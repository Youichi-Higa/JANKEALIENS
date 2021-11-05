import { useEffect, useState } from "react";
import { Header } from "../components/Header";

export default function Rps() {
  const axios = require("axios");

  const [userAddress, setUserAddress] = useState("");
  const [rps, setRps] = useState(0);

  // Metamaskと繋いでいるaddressを取得
  const getUserAddress = async () => {
    const accounts = await ethereum.request({
      method: "eth_requestAccounts", //Metamaskでアドレスを取得すると全て小文字で取得される
    });
    setUserAddress(accounts[0]);
    return accounts[0];
  };
  getUserAddress();
  console.log("アクセスしているユーザーのアドレス", userAddress);

  //😃😃😃デプロイ時に変更😃😃😃
  const rpsLocalUrl = `http://localhost/LAB05/jankealiens_rps/rps_read.php?user_address=${userAddress}`;

  useEffect(() => {
    const getRps = async () => {
      const result = await axios.get(rpsLocalUrl);
      console.log(result);

      if (typeof result.data.rps === "undefined") {
        setRps(0);
      } else {
        setRps(result.data.rps);
      }
    };
    getRps();
  }, [rpsLocalUrl]); //😃😃😃デプロイ時に変更😃😃😃

  return (
    <>
      <Header />
      <p>RPS表示ページ</p>
      <p>現在のRPS:{rps}</p>
    </>
  );
}
