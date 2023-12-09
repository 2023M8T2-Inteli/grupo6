import { View, ScrollView, Text } from "react-native";

export function Chat() {
  return (
    <View className="h-[100svh] bg-black text-white">
      <ScrollView>
        <Text className="text-2xl text-white">Está é o chat!</Text>
      </ScrollView>
    </View>
  );
}
