import NowShowing from "@/components/Home/NowShowing";
import TrendingMovie from "@/components/Home/TrendingMovie";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <NowShowing />
      <TrendingMovie />
    </SafeAreaView>
  );
}
