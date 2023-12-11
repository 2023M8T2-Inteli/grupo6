import { View, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export function InputSection() {
  return (
    <View className="w-full flex flex-row items-center justify-evenly h-min my-4">
      <View className="shadow-lg bg-white shadow-slate-800 rounded-xl flex flex-row justify-between p-1 w-[75vw]">
        <TextInput
          className="text-center items-center text-xl ml-2 "
          placeholder="Ask me anything..."
          placeholderTextColor="gray"
        />
        <Ionicons name="mic" size={40} color="#E9344E" />
      </View>
      <Ionicons
        className="w-[10vw]"
        name="send-sharp"
        size={40}
        color="#E9344E"
      />
    </View>
  );
}
