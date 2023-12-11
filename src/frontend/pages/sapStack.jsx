import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SapHome } from "./SapHome";
import { SapItems } from "./SapItems";

const Stack = createNativeStackNavigator();

export function SapStack() {
  return (
    <Stack.Navigator
      initialRouteName="SapScreen"
      screenOptions={() => ({
        headerBackVisible: true,
        title: "SAP",
      })}
    >
      <Stack.Screen
        name="SapScreen"
        component={SapHome}
        options={{ headerShown: true }}
      />
      <Stack.Screen name="ItemScreen" component={SapItems} />
    </Stack.Navigator>
  );
}
