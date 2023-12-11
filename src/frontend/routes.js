import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import { ChatStack } from "./pages/chatStack";
import { SapStack } from "./pages/sapStack";

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
              name="robot-love-outline"
              size={24}
              color="#E9344E"
            />
          ),
        }}
      />
      <Tab.Screen
        name="SAP"
        component={SapStack}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Ionicons
              name="file-tray-stacked-outline"
              size={24}
              color="black"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
