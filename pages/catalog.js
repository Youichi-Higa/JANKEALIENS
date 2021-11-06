import { Flex } from "@chakra-ui/layout";
import { Card } from "../components/Card";
import { Header } from "../components/Header";

export default function catalog() {
  const metadataUrl = [
    "https://gateway.pinata.cloud/ipfs/QmcMoRCSY8odBQAJ7b2tTwm2fQD4UbeSfyK6hYvvhLDEf4",
    "https://gateway.pinata.cloud/ipfs/QmYpGvVXUSTcpkBi19LtUz8T7WvrjJHeJzM41RZKckT8hi",
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
