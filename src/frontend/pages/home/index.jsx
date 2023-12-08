import { View, ScrollView, Text } from "react-native";

export function Home() {
  return (
    <View className="h-[100svh] bg-black text-white">
      <ScrollView>
        <Text className="text-2xl">Esta é a home!</Text>
      </ScrollView>
    </View>
  );
}
