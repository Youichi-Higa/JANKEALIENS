import { Flex } from "@chakra-ui/layout";
import { Card } from "../components/card";
import { Header } from "../components/Header";

export default function catalog() {
  const metadataUrl = [
    "https://gateway.pinata.cloud/ipfs/QmS1BeXdcBTv9KdKkmrhvGwdL7d55LnA8cgreMY7ofSwDz",
    "https://gateway.pinata.cloud/ipfs/QmXzJ7mvf4ffqopsgAWPsGSENVmVWxHooYj6gQje2wQA13",
  ];

  return (
    <>
      <Header />
      <Flex>
        <Card metadataUrl={metadataUrl[0]} />
        <Card metadataUrl={metadataUrl[1]} />
      </Flex>
    </>
  );
}
