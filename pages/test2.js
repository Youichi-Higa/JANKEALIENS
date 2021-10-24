import { Header } from "../components/Header";
const Web3 = require("web3");
const web3 = new Web3(
  "https://eth-rinkeby.alchemyapi.io/v2/yMUx5pobNFkfpdw1irSkIrgXIWoIIIWt"
);

// ＜キャラ選択②＞
// TokenIDを入力して決定ボタンを押す　又は　番号を表示しておいてクリック
// TokenIDとアクセスしている人のアドレスが一致したらじゃんけんページへ

export default function test2() {
  const jankealiensABI = require("../MyNFT.json");
  const jankealiensAddress = "0x94fe135d72c57238df64eb6d4b3e7764b8a1cbbb";
  const jankealiens = new web3.eth.Contract(jankealiensABI, jankealiensAddress);

  // const selectAlien = async () => {
  //   const tokenURI = await jankealiens.methods
  //     .tokenURI(4)
  //     .call()
  //     .then((data) => {
  //       console.log("メタデータURI", data);
  //     });
  // };

  jankealiens.methods
    .tokenURI(4)
    .call()
    .then((data) => {
      console.log("メタデータURI", data);
    });

  // Metamaskと繋いでいるaddressを取得する関数を定義
  const getAddress = async () => {
    const accounts = await ethereum.request({
      method: "eth_requestAccounts",
    });
    return accounts[0];
  };

  getAddress().then((address) => {
    console.log("アクセスしているアドレス", address);
  });

  return (
    <>
      <Header />
      <p>テスト２ページ</p>
    </>
  );
}
