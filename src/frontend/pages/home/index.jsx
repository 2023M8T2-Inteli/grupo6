import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SVGRobot from "../../assets/chatbot-image.svg";

export function Home() {
  const navigation = useNavigation();
  return (
    <View className="h-full">
      <View className="bg-white dark:bg-black h-full font-extrabold flex flex-col justify-evenly items-center">
        <View>
          <Text className="text-2xl text-[#E9344E]">Welcome to Chauffeur</Text>
        </View>
        <View>
          <SVGRobot width={200} height={300} />
          <Text className="text-2xl text-gray-600 dark:text-white">
            Chauffeur AI
          </Text>
        </View>
        <View>
          <Button
            title="Start Chat"
            onPress={() => navigation.navigate("Chat")}
          />
        </View>
      </View>
    </View>
  );
}
