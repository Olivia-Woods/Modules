import { EmojiProvider } from "../../context/EmojiContext";
import Emoji from "../../components/Emoji";
import BitcoinRates from "../../components/BitcoinRates";

export default function Home() {
  return (
    <EmojiProvider>
      <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50">
        <Emoji />
        <BitcoinRates />
      </div>
    </EmojiProvider>
  );
}
