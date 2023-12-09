import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ChatStack } from "./pages/chatStack";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();

export function Routes() {
  return (
    <Tab.Navigator initialRouteName="Chat">
      <Tab.Screen
        name="Chat"
        component={ChatStack}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="robot-outline"
              size={24}
              color="black"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
