import { Header } from "../components/Header";

export default function select() {
  // Metamaskと繋いでいるAddressを取得する関数を定義
  const getAddress = async () => {
    const accounts = await ethereum.request({
      method: "eth_requestAccounts",
    });
    return accounts[0];
  };

  getAddress().then((address) => {
    console.log(address);
  });

  return (
    <>
      <Header />
      <p>セレクトページ</p>
    </>
  );
}
