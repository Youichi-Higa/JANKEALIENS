import { useEffect, useState } from "react";
import { Header } from "../components/Header";

export default function Rps2() {
  const axios = require("axios");

  const [userAddress, setUserAddress] = useState("");
  const winRps = 4;
  const loseRps = 2;

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
  const rpsLocalUrl = `http://localhost/LAB05/jankealiens_rps/rps_add.php`;

  const sendData = {
    user_address: userAddress,
    rps: winRps,
  };

  useEffect(() => {
    axios
      .post(rpsLocalUrl, sendData)
      .then((response) => {
        console.log("response body:", response.data);
      })
      .catch((e) => console.error(e));
  }, [userAddress]);

  return (
    <>
      <Header />
      <p>RPS加算ページ</p>
    </>
  );
}
