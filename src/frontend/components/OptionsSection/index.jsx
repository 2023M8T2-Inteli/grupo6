import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
function Buttons() {
  return (
    <View className="shadow-lg bg-white shadow-slate-800 rounded-xl flex flex-row justify-evenly items-center p-1 gap-x-4 w-[50vw]">
      <Ionicons name="copy" size={30} color="#E9344E" />
      <AntDesign name="like2" size={30} color="#E9344E" />
      <AntDesign name="dislike2" size={30} color="#E9344E" />
      <Ionicons name="reload" size={30} color="#E9344E" />
    </View>
  );
}

function Loading() {
  return <View></View>;
}

export function OptionsSection() {
  return (
    <View className="w-full flex flex-row items-center justify-center h-min mt-3">
      <Buttons />
    </View>
  );
}
