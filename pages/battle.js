import { Flex } from "@chakra-ui/layout";
import { PlayerCard } from "../components/PlayerCard";

export default function battle() {
  const metadataUrl = [
    "https://gateway.pinata.cloud/ipfs/QmS1BeXdcBTv9KdKkmrhvGwdL7d55LnA8cgreMY7ofSwDz",
    "https://gateway.pinata.cloud/ipfs/QmXzJ7mvf4ffqopsgAWPsGSENVmVWxHooYj6gQje2wQA13",
  ];

  // このページでHPとかのパラメータをuseStateで定義して、propsで渡す子コンポーネントに渡さないといけないかも

  return (
    <Flex>
      <PlayerCard metadataUrl={metadataUrl[0]} />
      <PlayerCard metadataUrl={metadataUrl[1]} />
    </Flex>
  );
}