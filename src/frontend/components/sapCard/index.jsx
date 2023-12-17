import { View, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export function SapCard() {
  const navigation = useNavigation();

  const toggleNavigate = () => {
    navigation.navigate("ItemScreen");
  };
  return (
    <Pressable
      onPress={() => toggleNavigate()}
      className="bg-rose-100 rounded-2xl mr-8 w-1/12 h-[25vh] flex justify-around items-start"
    >
      <View className="flex justify-around w-full items-center flex-row">
        <View className="bg-red-300 p-1 flex rounded-2xl justify-around">
          <Ionicons name="hammer" size={60} color="black" />
        </View>
        <View></View>
      </View>
      <View className="flex w-full items-start">
        <Text className="ml-2 text-xl font-semibold">Engineering</Text>
        <Text className="ml-2 text-xs font-medium h-fit text-neutral-400">
          Axes, hammers, pliers, screw tools, chisels...
        </Text>
      </View>
    </Pressable>
  );
}
