import { useRouter } from "next/dist/client/router";
import { BattleWindow } from "../components/BattleWindow";
import { Header } from "../components/Header";

export default function Battle() {
  const router = useRouter();
  console.log("バトルページ", router.query.tokenid);
  return (
    <>
      <Header />
      <BattleWindow />
    </>
  );
}
