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
      {/* <PlayerCard metadataUri={metadataUri} /> */}
    </>
  );
}

