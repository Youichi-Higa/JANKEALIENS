import { Image } from "@material-ui/icons";
import { Header } from "../components/Headear";

export default function Home() {
  return (
    <div>
      <Header />
      <p>トップページ</p>
      <Image src="./Alian_1.png" alt="宇宙人１" />
    </div>
  );
}
