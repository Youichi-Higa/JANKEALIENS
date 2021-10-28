import { Header } from "../components/Header";
const Web3 = require("web3");
const web3 = new Web3(
  "https://eth-rinkeby.alchemyapi.io/v2/yMUx5pobNFkfpdw1irSkIrgXIWoIIIWt"
);

export default function test2() {
  const jankealiensABI = require("../MyNFT.json");
  const jankealiensAddress = "0x94fe135d72c57238df64eb6d4b3e7764b8a1cbbb";
  const jankealiens = new web3.eth.Contract(jankealiensABI, jankealiensAddress);

  // Metamaskと繋いでいるaddressを取得
  const getUserAddress = async () => {
    const accounts = await ethereum.request({
      method: "eth_requestAccounts",
    });
    return accounts[0];
  };

  // promise.allで所有者のアドレスをTokenIdを順番通りに取得
  var tasks = [];

  const getAllOwnerAddress = (tokenId) => {
    return new Promise((resolve, reject) => {
      const result = jankealiens.methods.ownerOf(tokenId).call();
      resolve(result);
    });
  };

  for (let i = 1; i < 10; i++) {
    tasks.push(
      getAllOwnerAddress(i)
        .then((res) => res)
        .catch((error) => console.log(`TokenID:${i}は存在しない`))
    );
  }

  Promise.all(tasks).then((owners) => {
    // ownersは上記apiのレスポンスの配列
    console.log(owners);
  });

  return (
    <>
      <Header />
      <p>テスト２ページ</p>
    </>
  );
}
