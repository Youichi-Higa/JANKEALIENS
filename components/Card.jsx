import { Box, Text } from "@chakra-ui/layout";
import Image from "next/image";

export const Card = () => {
  return (
    <Box
      bg="white"
      w="360px"
      h="500px"
      m="40px"
      borderRadius="2xl"
      boxShadow="2xl"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-around"
    >
      <Image src="/Alien1.png" alt="宇宙人１" width={240} height={240} />
      <Box>
        <Text fontSize="3xl">◯◯星人</Text>
        <Text>1 ETH</Text>
        <Text>✊　30</Text>
        <Text>✌️　10</Text>
        <Text>✋　20</Text>{" "}
      </Box>
    </Box>
  );
};
