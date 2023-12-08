import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "./home";

import { Entypo } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: "black",
          paddingBottom: 5,
          paddingTop: 5,
        },
        tabBarActiveTintColor: "#3069AE",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <Entypo name="home" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
