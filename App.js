import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import { Login } from './components/Login';
import { useState } from 'react';

export default function App() {

  // accessToken wird hier durch Login gesettet
  const [token, setToken] = useState();

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {token ? <Text>Welcome!</Text> : <Login setToken={setToken} />}  
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
