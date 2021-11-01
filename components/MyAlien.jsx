import { Box, Text } from "@chakra-ui/layout";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export const MyAlien = (props) => {
  const { tokenId } = props;

  const Web3 = require("web3");
  const web3 = new Web3(
    "https://eth-rinkeby.alchemyapi.io/v2/yMUx5pobNFkfpdw1irSkIrgXIWoIIIWt"
  );
  const jankealiensABI = require("../MyNFT.json");
  const jankealiensAddress = "0x94fe135d72c57238df64eb6d4b3e7764b8a1cbbb";
  const jankealiens = new web3.eth.Contract(jankealiensABI, jankealiensAddress);

  // pinataに保存してあるメタデータの取得
  const axios = require("axios");

  const [imageUrl, setImageUrl] = useState("");
  const [name, setName] = useState("");
  const [hp, setHp] = useState("");
  const [rock, setRock] = useState("");
  const [scissors, setScissors] = useState("");
  const [paper, setPaper] = useState("");

  useEffect(() => {
    const getMetadata = async () => {
      const metadataUri = await jankealiens.methods.tokenURI(tokenId).call();
      const result = await axios.get(metadataUri);
      console.log("useEffectの中", result);
      setImageUrl(result.data.image);
      setName(result.data?.name);
      setHp(result.data.attributes?.hp);
      setRock(result.data.attributes?.attack.rock);
      setScissors(result.data.attributes?.attack.scissors);
      setPaper(result.data.attributes?.attack.paper);
    };
    getMetadata();
  }, []);

  return (
    <Link href={{ pathname: "/battle", query: { tokenid: tokenId } }}>
      <Box
        bg="white"
        w="320px"
        h="500px"
        m="30px"
        borderRadius="2xl"
        boxShadow="2xl"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-around"
        cursor="pointer"
        _hover={{
          background: "orange.100",
        }}
      >
        {imageUrl && (
          <Image src={imageUrl} alt="宇宙人" width={240} height={240} />
        )}

        <Box textAlign="center">
          <Text fontSize="3xl">{name}</Text>
          <br />
          <Text fontSize="2xl">HP　{hp}</Text>
          <Text fontSize="2xl">✊　{rock}</Text>
          <Text fontSize="2xl">✌️　{scissors}</Text>
          <Text fontSize="2xl">✋　{paper}</Text>
        </Box>
      </Box>
    </Link>
  );
};
