import { useEffect, useState } from "react";
import { Header } from "../components/Header";

export default function Rps() {
  const axios = require("axios");

  const [userAddress, setUserAddress] = useState("");
  const [rps, setRps] = useState();

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

  const rpsLocalUrl = `http://localhost/LAB05/jankealiens_rps/test.php?user_address=${userAddress}`;

  useEffect(() => {
    const getRps = async () => {
      const result = await axios.get(rpsLocalUrl);
      console.log(result);
      setRps(result.data.rps);
    };
    getRps();
  }, [rpsLocalUrl]);

  return (
    <>
      <Header />
      <p>RPS表示ページ</p>
      <p>現在のRPS:{rps}</p>
    </>
  );
}
