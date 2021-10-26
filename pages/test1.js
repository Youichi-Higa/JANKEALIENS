import { Header } from "../components/Header";
const Web3 = require("web3");
const web3 = new Web3(
  "https://eth-rinkeby.alchemyapi.io/v2/yMUx5pobNFkfpdw1irSkIrgXIWoIIIWt"
);

export default function test1() {
  const jankealiensABI = require("../MyNFT.json");
  const jankealiensAddress = "0x94fe135d72c57238df64eb6d4b3e7764b8a1cbbb";
  const jankealiens = new web3.eth.Contract(jankealiensABI, jankealiensAddress);

  // トークンの総数 コントラクトから取得できないコードでデプロイしてしまったのでべた打ち
  const totalTokens = 8;

  const owners = [];

  // 再帰処理でループしたらTokenIdの順番通り取れた
  const getAllOwners = (tokenId) => {
    jankealiens.methods
      .ownerOf(tokenId)
      .call()
      .then((data) => {
        owners.push(data);
        tokenId++;
        if (tokenId < totalTokens + 1) getAllOwners(tokenId); // ここでループする
      })
      .catch((error) => {
        console.error(`tokenId:${tokenId}は存在していない`, error);
      });
  };
  getAllOwners(1);

  console.log("アドレスの配列", owners);

  // Metamaskと繋いでいるaddressを取得する関数を定義
  const getAddress = async () => {
    const accounts = await ethereum.request({
      method: "eth_requestAccounts",
    });
    return accounts[0];
  };

  // 接続しているユーザーのTokenIdの配列を定義
  const userTokenId = [];

  getAddress().then((address) => {
    for (let i = 0; i < owners.length; i++) {
      if (owners[i] == address) {
        userTokenId.push(i);
      }
    }
  });

  return (
    <>
      <Header />
      <p>テスト１ページ</p>
    </>
  );
}

// async function getAccount() {
//   const accounts = await ethereum.request({ method: "eth_requestAccounts" });
//   const account = accounts[0];
//   console.log(account);
// }
// getAccount();

// TokenIdは１からスタート
// 発行していないTokenIdまでループさせるとエラーになる
// for (let tokenId = 1; tokenId < totalTokens + 1; tokenId++) {
//   jankealiens.methods
//     .ownerOf(tokenId)
//     .call()
//     .then((data) => {
//       owners.push(data);
//     });
// }

// この処理はOK
// const array1 = [1, "2sid", 3, "2sid", "2sid", 6, "2sid", 8, 9, 10];
// const array2 = [];
// for (let i = 0; i < array1.length; i++) {
//   if (array1[i] == "2sid") {
//     array2.push(i);
//   }
// }
// console.log("テスト", array2);
