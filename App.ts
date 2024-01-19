import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import NowTest from "./me"
import { useEffect, useState } from 'react';
export default function App() {
  const [view, setView] = useState()
  useEffect(()=>{
    setView(NowTest())
  },[])
  
  return (
    <View style={styles.container}>
      <Text>{view}</Text>
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


