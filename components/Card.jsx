import { Box, Text } from "@chakra-ui/layout";
import Image from "next/image";
import { useEffect, useState } from "react";

export const Card = (props) => {
  const { metadataUrl } = props;

  // pinataに保存してあるメタデータの取得
  const axios = require("axios");
  const url = metadataUrl;
  const [metadata, setMetadata] = useState("");

  useEffect(() => {
    const getMetadata = async () => {
      const result = await axios.get(url);
      setMetadata(result.data);
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
        {metadata.image && (
          <Image src={metadata.image} alt="宇宙人" width={240} height={240} />
        )}

        <Box textAlign="center">
          <Text fontSize="3xl">{metadata.name}</Text>
          <Text fontSize="3xl">{metadata.price} ETH</Text>
          <br />
          <Text fontSize="2xl">HP　{metadata.attributes?.hp}</Text>
          <Text fontSize="2xl">✊　{metadata.attributes?.attack.rock}</Text>
          <Text fontSize="2xl">✌️　{metadata.attributes?.attack.scissors}</Text>
          <Text fontSize="2xl">✋　{metadata.attributes?.attack.paper}</Text>
        </Box>
      </Box>
    </>
  );
};
