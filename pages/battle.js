import { BattleWindow } from "../components/BattleWindow";
import { Header } from "../components/Header";

import { Flex } from "@chakra-ui/layout";
import { CpuCard } from "../components/CpuCard";
import { PlayerCard } from "../components/PlayerCard";

export default function battle() {
  return (
    <>
      <Header />
      <BattleWindow />
    </>
    // <Flex>
    //   <PlayerCard metadataUrl={metadataUrl[0]} />
    //   <CpuCard metadataUrl={metadataUrl[1]} />
    // </Flex>
  );
}
