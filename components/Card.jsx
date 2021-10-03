import { Box } from "@chakra-ui/react";
import Image from "next/image";

export const Card = () => {
  return (
    <Box
      bg="white"
      w="360px"
      h="400px"
      m="40px"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
    >
      <Image src="/Alien1.png" alt="宇宙人１" width={300} height={300} />
      <h2>◯◯星人</h2>
      <h3>1 ETH</h3>
    </Box>
  );
};
