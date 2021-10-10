import { Box, Text } from "@chakra-ui/layout";
import Image from "next/image";

export const TestCard = () => {
  return (
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
        <Image src="/Alien1.png" alt="宇宙人１" width={240} height={240} />
        <Box textAlign="center">
          <Text fontSize="4xl">◯◯星人</Text>
          <Text fontSize="3xl">1 ETH</Text>
          <br />
          <Text fontSize="2xl">HP　100</Text>
          <Text fontSize="2xl">✊　30</Text>
          <Text fontSize="2xl">✌️　10</Text>
          <Text fontSize="2xl">✋　20</Text>
        </Box>
      </Box>
  );
};
