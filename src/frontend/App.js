import { StatusBar } from "expo-status-bar";
import { LogBox, Text, View } from "react-native";

import { Routes } from "./routes";

import { NavigationContainer } from "@react-navigation/native";
// import { ContextProvider } from "./context/context";

export default function App() {
  // LogBox.ignoreAllLogs();

  return (
    <NavigationContainer>
      <View className="flex ">
        <Routes />
        <Text>I'm app.js</Text>
        <StatusBar hidden={true} />
      </View>
    </NavigationContainer>
  );
}
