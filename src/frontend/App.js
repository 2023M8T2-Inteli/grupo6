import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Image} from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';



export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={require('./assets/favicon.png')}/>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Ju, vocÊ é muito bonito</Text>
      <StatusBar style="auto" />
      <Header/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
