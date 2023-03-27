import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

function TextButton() {
    return <Text style={{color: 'white'}}>{pros.title} Hello World !</Text>;
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{color: "white"}}>Hello World!</Text>
      <StatusBar style= "dark" />
      <TextButton title="Olá mundo"/>
      <TextButton title="Olá mundo 1"/>
      <TextButton title="Olá mundo 2"/>
      <TextButton title="Olá mundo 3 "/>
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
