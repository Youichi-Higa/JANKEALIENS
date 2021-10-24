import { Box, Text } from "@chakra-ui/layout";
import Image from "next/image";
import { useEffect, useState } from "react";

export const PlayerCard = (props) => {
  const { metadataUrl } = props;

  // pinataに保存してあるメタデータの取得
  const axios = require("axios");
  const url = metadataUrl;

  const [imageUrl, setImageUrl] = useState("");
  const [hp, setHp] = useState("");
  const [rock, setRock] = useState("");
  const [scissors, setScissors] = useState("");
  const [paper, setPaper] = useState("");

  useEffect(() => {
    const getMetadata = async () => {
      const result = await axios.get(url);
      console.log(result);
      setImageUrl(result.data.image);
      setHp(result.data.attributes?.hp);
      setRock(result.data.attributes?.attack.rock);
      setScissors(result.data.attributes?.attack.scissors);
      setPaper(result.data.attributes?.attack.paper);
    };
    getMetadata();
  }, []);

  return (
    <>
      <Box
        bg="white"
        w="300px"
        h="540px"
        m="60px"
        borderRadius="2xl"
        boxShadow="2xl"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-around"
      >
        {imageUrl && (
          <Image src={imageUrl} alt="宇宙人" width={240} height={240} />
        )}

        <Box textAlign="center">
          <Text fontSize="3xl">HP　{hp}</Text>
          <br/>
          <Text fontSize="xl">あなたの手を選択</Text>
          <Text fontSize="3xl">✊　{rock}</Text>
          <Text fontSize="3xl">✌️　{scissors}</Text>
          <Text fontSize="3xl">✋　{paper}</Text>
        </Box>
      </Box>
    </>
  );
};
