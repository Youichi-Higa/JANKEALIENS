import { Flex } from "@chakra-ui/layout";
import { BattleWindow } from "../components/BattleWindow";
import { CpuCard } from "../components/CpuCard";
import { PlayerCard } from "../components/PlayerCard";

export default function battle() {
  return (
    <BattleWindow />
    // <Flex>
    //   <PlayerCard metadataUrl={metadataUrl[0]} />
    //   <CpuCard metadataUrl={metadataUrl[1]} />
    // </Flex>
  );
}
