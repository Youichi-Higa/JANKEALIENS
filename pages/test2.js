import { Header } from "../components/Header";
import { PlayerCard } from "../components/PlayerCard";

// リクエストごとに呼び出されます。
export async function getServerSideProps() {
  const Web3 = require("web3");
  const web3 = new Web3(
    "https://eth-rinkeby.alchemyapi.io/v2/yMUx5pobNFkfpdw1irSkIrgXIWoIIIWt"
  );
  const jankealiensABI = require("../MyNFT.json");
  const jankealiensAddress = "0x94fe135d72c57238df64eb6d4b3e7764b8a1cbbb";
  const jankealiens = new web3.eth.Contract(jankealiensABI, jankealiensAddress);
  
  const metadataUri = [];

  await jankealiens.methods
    .tokenURI(4)
    .call()
    .then((result) => metadataUri.push(result));
  
  console.log("テスト", metadataUri);

  // データをprops経由でページに渡します。
  return { props: { metadataUri } };
}

export default function test2({ metadataUri }) {
  return (
    <>
      <Header />
      <p>テスト２ページ</p>
      <PlayerCard metadataUri={metadataUri} />
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
