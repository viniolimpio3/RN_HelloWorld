import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Projeto - Cálculo de soma!</Text>
      <Text> Digite primeiro número:</Text>

      <TextInput />

      <TouchableOpacity>
        <Text>Somar</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
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
