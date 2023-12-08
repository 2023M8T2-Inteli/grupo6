import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Tabs } from "./pages/tab.jsx";
import { Home } from "./pages/home";

const Stack = createNativeStackNavigator();

export function Routes() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerBackVisible: false,
        title: "",
      })}
    >
      <Stack.Screen
        name="Start"
        component={Tabs}
        options={{
          headerStyle: { backgroundColor: "black" },
          headerTintColor: "white",
        }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
