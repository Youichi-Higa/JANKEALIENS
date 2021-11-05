import { Flex, Text } from "@chakra-ui/layout";
import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { MyAlien } from "../components/MyAlien";

export default function Select() {
  const Web3 = require("web3");
  const web3 = new Web3(
    "https://eth-rinkeby.alchemyapi.io/v2/yMUx5pobNFkfpdw1irSkIrgXIWoIIIWt"
  );
  const jankealiensABI = require("../MyNFT.json");
  const jankealiensAddress = "0x94fe135d72c57238df64eb6d4b3e7764b8a1cbbb";
  const jankealiens = new web3.eth.Contract(jankealiensABI, jankealiensAddress);

  const totalTokens = 9; // トークンの総数 コントラクトから取得できないコードでデプロイしてしまったのでべた打ち
  const firstTokenId = 3; // 最初のTokenId 提出する時は「3」を入力する

  const [userAddress, setUserAddress] = useState("");
  const [allOwnerAddress, setAllOwnerAddress] = useState([]);

  // Metamaskと繋いでいるaddressを取得
  useEffect(() => {
    const getUserAddress = async () => {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts", //Metamaskでアドレスを取得すると全て小文字で取得される
      });
      setUserAddress(accounts[0]);
      return accounts[0];
    };
    getUserAddress();
  }, [userAddress]);

  // console.log("アクセスしているユーザーのアドレス", userAddress);

  // promise.allで所有者のアドレスをTokenIdの順番通りに取得
  let tasks = [];

  const getAllOwnerAddress = (tokenId) => {
    return new Promise((resolve, reject) => {
      const result = jankealiens.methods.ownerOf(tokenId).call(); //web3.jsでアドレスを取得すると大文字と小文字が混在
      resolve(result);
    });
  };

  for (let i = firstTokenId; i < totalTokens + 1; i++) {
    tasks.push(
      getAllOwnerAddress(i)
        .then((res) => res.toLowerCase()) //ここで全て小文字に変換 toLowerCase()
        .catch((error) => console.log(`TokenID:${i}は存在しない`))
    );
  }

  useEffect(() => {
    Promise.all(tasks).then((res) => {
      setAllOwnerAddress([...res]);
    });
  }, []);

  const userTokenId = [];

  for (let i = 0; i < allOwnerAddress.length; i++) {
    if (userAddress == allOwnerAddress[i]) {
      userTokenId.push(i + 3); //本番環境で使うTokenIdは「3」からなので、3をプラスする
    }
  }

  // console.log("ユーザー所有のトークンID", userTokenId);

  return (
    <>
      <Header />
      <Text fontSize="3xl" m="20px">戦わせる宇宙人を選択してください</Text>

      <Flex wrap="wrap">
        {userTokenId.map((item, index) => (
          <MyAlien key={index} tokenId={item} />
        ))}
      </Flex>
    </>
  );
}
