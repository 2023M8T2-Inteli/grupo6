import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.tinyLogo} source={require("./assets/favicon.png")} />
      <StatusBar style="auto" />
    </View>
  );
}
