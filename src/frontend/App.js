import { Routes } from "./routes";

import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Routes />
      </GestureHandlerRootView>
    </NavigationContainer>
  );
}
