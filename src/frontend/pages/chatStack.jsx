import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "./home";
import { Chat } from "./chat";

const Stack = createNativeStackNavigator();

export function ChatStack() {
  return (
    <Stack.Navigator
      screenOptions={() => ({
        headerBackVisible: false,
        title: "",
      })}
    >
      <Stack.Screen
        name="HomeScreen"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ChatScreen"
        component={Chat}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
