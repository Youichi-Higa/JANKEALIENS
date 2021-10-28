import { Header } from "../components/Header";
const Web3 = require("web3");
const web3 = new Web3(
  "https://eth-rinkeby.alchemyapi.io/v2/yMUx5pobNFkfpdw1irSkIrgXIWoIIIWt"
);

export default function test1() {
  // コントラクトに接続するための値
  const jankealiensABI = require("../MyNFT.json");
  const jankealiensAddress = "0x94fe135d72c57238df64eb6d4b3e7764b8a1cbbb";
  const jankealiens = new web3.eth.Contract(jankealiensABI, jankealiensAddress);

  // トークンの総数 コントラクトから取得できないコードでデプロイしてしまったのでべた打ち
  const totalTokens = 8;

  // 最初のTokenId 提出する時は「3」を入力する😄😄😄
  const firstTokenId = 1;

  const owners = [];

  // 接続しているユーザーのTokenIdの配列を定義
  const userTokenId = [];

  // Metamaskと繋いでいるaddressを取得する関数を定義
  const getUserAddress = async () => {
    const accounts = await ethereum.request({
      method: "eth_requestAccounts",
    });
    return accounts[0];
  };

  // 全てのNFTの所有者アドレスを取得
  // 再帰処理でループしたらTokenIdの順番通り取れた
  const getAllOwners = async (tokenId) => {
    jankealiens.methods
      .ownerOf(tokenId)
      .call()
      .then((data) => {
        owners.push(data);
        tokenId++;

        if (tokenId < totalTokens + 1) getAllOwners(tokenId); // ここでループする
        return owners;
      })
      .catch((error) => {
        console.error(`tokenId:${tokenId}は存在していない`, error);
      });
  };

  const getUserAllTokenId = async () => {
    const userAddress = await getUserAddress();
    await getAllOwners(firstTokenId);
    console.log("ユーザーのアドレス", userAddress);
    console.log("アドレスの配列", owners);
  };

  getUserAllTokenId();

  // // アクセスしているユーザーが所有しているTokenIdを取得 これはできていない
  getUserAddress().then((address) => {
    for (let i = 0; i < owners.length; i++) {
      if (owners[i] == address) {
        userTokenId.push(i + 1);
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
// for文では順番通りに取得できない
// for (let tokenId = 1; tokenId < totalTokens + 1; tokenId++) {
//   jankealiens.methods
//     .ownerOf(tokenId)
//     .call()
//     .then((data) => {
//       owners.push(data);
//     });
// }

// // async/awaitで書き換えたもの
// const hoge = async () => {
//   const fuga = await jankealiens.methods.ownerOf(2).call();
//   console.log("async/await使ったやつ", fuga);
// };
// hoge();

// この処理はOK
// const array1 = [1, "2sid", 3, "2sid", "2sid", 6, "2sid", 8, 9, 10];
// const array2 = [];
// for (let i = 0; i < array1.length; i++) {
//   if (array1[i] == "2sid") {
//     array2.push(i);
//   }
// }
// console.log("テスト", array2);
