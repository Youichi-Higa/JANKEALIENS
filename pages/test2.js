import { Header } from "../components/Header";
const Web3 = require("web3");
const web3 = new Web3(
  "https://eth-rinkeby.alchemyapi.io/v2/yMUx5pobNFkfpdw1irSkIrgXIWoIIIWt"
);

export default function test2() {
  const jankealiensABI = require("../MyNFT.json");
  const jankealiensAddress = "0x94fe135d72c57238df64eb6d4b3e7764b8a1cbbb";
  const jankealiens = new web3.eth.Contract(jankealiensABI, jankealiensAddress);

  // トークンの総数 コントラクトから取得できないコードでデプロイしてしまったのでべた打ち
  const totalTokens = 8;

  // 最初のTokenId 提出する時は「3」を入力する
  const firstTokenId = 3;

  // Metamaskと繋いでいるaddressを取得
  const getUserAddress = async () => {
    const accounts = await ethereum.request({
      method: "eth_requestAccounts", //Metamaskでアドレスを取得すると全て小文字で取得される
    });
    return accounts[0];
  };

  // promise.allで所有者のアドレスをTokenIdを順番通りに取得
  var tasks = [];

  const getAllOwnerAddress = (tokenId) => {
    return new Promise((resolve, reject) => {
      const result = jankealiens.methods.ownerOf(tokenId).call(); //web3.jsでアドレスを取得すると大文字と小文字が混在
      resolve(result);
    });
  };

  for (let i = firstTokenId; i < totalTokens + 1; i++) {
    tasks.push(
      getAllOwnerAddress(i)
        .then((res) => res.toLowerCase()) //ここで全て小文字に変換
        .catch((error) => console.log(`TokenID:${i}は存在しない`))
    );
  }

  const getUserAllTokenId = async () => {
    const userAddress = await getUserAddress();
    const allOwnerAddress = await Promise.all(tasks);

    const userTokenId = [];
    for (let i = 0; i < allOwnerAddress.length; i++) {
      if (userAddress == allOwnerAddress[i]) {
        userTokenId.push(i + 3); //本番環境で使うTokenIdは「3」からなので、3をプラスする
      }
    }
    console.log("ユーザー所有のトークンID", userTokenId);
  };
  getUserAllTokenId();

  return (
    <>
      <Header />
      <p>テスト２ページ</p>
    </>
  );
}
