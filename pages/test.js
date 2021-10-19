import { Header } from "../components/Header";
const Web3 = require("web3");
const web3 = new Web3(
  "https://eth-rinkeby.alchemyapi.io/v2/yMUx5pobNFkfpdw1irSkIrgXIWoIIIWt"
);

export default function test() {
  const jankealiensABI = require("../MyNFT.json");
  const jankealiensAddress = "0x94fe135d72c57238df64eb6d4b3e7764b8a1cbbb";
  const jankealiens = new web3.eth.Contract(jankealiensABI, jankealiensAddress);
  jankealiens.methods
    .tokenURI(2)
    .call()
    .then((uri) => {
      console.log(uri);
    });

  // async function getAccount() {
  //   const accounts = await ethereum.request({ method: "eth_requestAccounts" });
  //   const account = accounts[0];
  //   console.log(account);
  // }
  // getAccount();

  return (
    <>
      <Header />
      <p>テストページ</p>
    </>
  );
}
