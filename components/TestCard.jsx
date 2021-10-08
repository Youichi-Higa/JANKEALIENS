import { Box, Text } from "@chakra-ui/layout";
import Image from "next/image";
import { useEffect, useState } from "react";

export const TestCard = () => {
  const axios = require("axios");
  const url = `https://gateway.pinata.cloud/ipfs/QmS1BeXdcBTv9KdKkmrhvGwdL7d55LnA8cgreMY7ofSwDz`;

  const [metadata, setMetadata] = useState("");

  useEffect(() => {
    const getMetadata = async () => {
      const result = await axios.get(url);
      setMetadata(result.data);
      return result;
    };
    getMetadata();
  }, []);

  // axios
  //   .get(url)
  //   .then(function (response) {
  //     const { data } = response;
  //     console.log(data);
  //   })
  //   .catch(function (error) {
  //     console.error(error);
  //   });

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
          <Image src={metadata.image} alt="宇宙人１" width={240} height={240} />
        )}

        <Box textAlign="center">
          <Text fontSize="4xl">{metadata.name}</Text>
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
