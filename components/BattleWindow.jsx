import { Box, Flex, Text } from "@chakra-ui/layout";
import Image from "next/image";
import { useEffect, useState } from "react";

export const BattleWindow = (props) => {
  const axios = require("axios");

  // playerのパラメータ取得
  const playerMetadataUrl =
    "https://gateway.pinata.cloud/ipfs/QmS1BeXdcBTv9KdKkmrhvGwdL7d55LnA8cgreMY7ofSwDz";
  const [playerImageUrl, setPlayerImageUrl] = useState("");
  const [playerHp, setPlayerHp] = useState(undefined);
  const [playerRock, setPlayerRock] = useState(null);
  const [playerScissors, setPlayerScissors] = useState(null);
  const [playerPaper, setPlayerPaper] = useState(null);

  useEffect(() => {
    const getMetadata = async () => {
      const result = await axios.get(playerMetadataUrl);
      console.log(result);
      setPlayerImageUrl(result.data.image);
      setPlayerHp(result.data.attributes?.hp);
      setPlayerRock(result.data.attributes?.attack.rock);
      setPlayerScissors(result.data.attributes?.attack.scissors);
      setPlayerPaper(result.data.attributes?.attack.paper);
    };
    getMetadata();
  }, []);

  // cpuのパラメータ取得
  const cpuMetadataUrl =
    "https://gateway.pinata.cloud/ipfs/QmXzJ7mvf4ffqopsgAWPsGSENVmVWxHooYj6gQje2wQA13";
  const [cpuImageUrl, setCpuImageUrl] = useState("");
  const [cpuHp, setCpuHp] = useState(undefined);
  const [cpuRock, setCpuRock] = useState(null);
  const [cpuScissors, setCpuScissors] = useState(null);
  const [cpuPaper, setCpuPaper] = useState(null);

  useEffect(() => {
    const getMetadata = async () => {
      const result = await axios.get(cpuMetadataUrl);
      console.log(result);
      setCpuImageUrl(result.data.image);
      setCpuHp(result.data.attributes?.hp);
      setCpuRock(result.data.attributes?.attack.rock);
      setCpuScissors(result.data.attributes?.attack.scissors);
      setCpuPaper(result.data.attributes?.attack.paper);
    };
    getMetadata();
  }, []);

  const [message, setMessage] = useState("勝負だ！！！");
  const [damage, setDamage] = useState("");

  // グーをクリック時の関数
  const selectRock = () => {
    // 0〜2の乱数作成（グーは0、チョキは1、パーは2）
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber == 0) {
      setMessage("あなた：✊　あいて：✊");
      setDamage("あいこでお互いにダメージなし");
    } else if (randomNumber == 1) {
      setMessage("あなた：✊　あいて：✌️");
      setDamage(`勝ち😄　あいてに${playerRock}のダメージ`);
      setCpuHp(cpuHp - playerRock);
    } else if (randomNumber == 2) {
      setMessage("あなた：✊　あいて：✋");
      setDamage(`負け😢　あなたに${cpuPaper}のダメージ`);
      setPlayerHp(playerHp - cpuPaper);
    }
  };

  // チョキをクリック時の関数
  const selectScissors = () => {
    // 0〜2の乱数作成（グーは0、チョキは1、パーは2）
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber == 0) {
      setMessage("あなた：✌️　あいて：✊");
      setDamage(`負け😢　あなたに${cpuRock}のダメージ`);
      setPlayerHp(playerHp - cpuRock);
    } else if (randomNumber == 1) {
      setMessage("あなた：✌️　あいて：✌️");
      setDamage("あいこでお互いにダメージなし");
    } else if (randomNumber == 2) {
      setMessage("あなた：✌️　あいて：✋");
      setDamage(`勝ち😄　あいてに${playerScissors}のダメージ`);
      setCpuHp(cpuHp - playerScissors);
    }
  };

  // パーをクリック時の関数
  const selectPaper = () => {
    // 0〜2の乱数作成（グーは0、チョキは1、パーは2）
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber == 0) {
      setMessage("あなた：✋　あいて：✊");
      setDamage(`勝ち😄　あいてに${playerPaper}のダメージ`);
      setCpuHp(cpuHp - playerPaper);
    } else if (randomNumber == 1) {
      setMessage("あなた：✋　あいて：✌️");
      setDamage(`負け😢　あなたに${cpuScissors}のダメージ`);
      setPlayerHp(playerHp - cpuScissors);
    } else if (randomNumber == 2) {
      setMessage("あなた：✋　あいて：✋");
      setDamage("あいこでお互いにダメージなし");
    }
  };

  // 勝敗結果の表示
  useEffect(() => {
    if (playerHp <= 0) {
      setPlayerHp(0);
      setMessage("あなたの負けです。。。");
      setDamage("");
    }

    if (cpuHp <= 0) {
      setCpuHp(0);
      setMessage("あなたの勝ちです！！！");
      setDamage("");
    }
  }, [playerHp, cpuHp]);

  return (
    <>
      <Flex>
        {/* player */}
        <Box
          bg="white"
          w="300px"
          h="500px"
          m="30px"
          borderRadius="2xl"
          boxShadow="2xl"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="space-around"
        >
          {playerImageUrl && (
            <Image src={playerImageUrl} alt="宇宙人" width={240} height={240} />
          )}

          <Box textAlign="center">
            <Text fontSize="3xl">HP　{playerHp}</Text>
            <br />
            <Text fontSize="2xl">あなたの手を選択↓</Text>
            <Text
              fontSize="3xl"
              onClick={selectRock}
              cursor="pointer"
              _hover={{
                background: "teal.200",
                color: "white",
              }}
            >
              ✊　{playerRock}
            </Text>
            <Text
              fontSize="3xl"
              onClick={selectScissors}
              cursor="pointer"
              _hover={{
                background: "teal.200",
                color: "white",
              }}
            >
              ✌️　{playerScissors}
            </Text>
            <Text
              fontSize="3xl"
              onClick={selectPaper}
              cursor="pointer"
              _hover={{
                background: "teal.200",
                color: "white",
              }}
            >
              ✋　{playerPaper}
            </Text>
          </Box>
        </Box>

        {/* cpu */}
        <Box
          bg="white"
          w="300px"
          h="500px"
          m="30px"
          borderRadius="2xl"
          boxShadow="2xl"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="space-around"
        >
          {cpuImageUrl && (
            <Image src={cpuImageUrl} alt="宇宙人" width={240} height={240} />
          )}

          <Box textAlign="center">
            <Text fontSize="3xl">HP　{cpuHp}</Text>
            <br />
            <Text fontSize="xl">あいての手</Text>
            <Text fontSize="3xl">✊　{cpuRock}</Text>
            <Text fontSize="3xl">✌️　{cpuScissors}</Text>
            <Text fontSize="3xl">✋　{cpuPaper}</Text>
          </Box>
        </Box>
      </Flex>
      <Text fontSize="2xl">{message}</Text>
      <Text fontSize="2xl">{damage}</Text>
      {/* <Text fontSize="2xl">{rps}</Text> */}
    </>
  );
};
