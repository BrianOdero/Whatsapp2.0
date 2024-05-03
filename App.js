import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

//screen imports
import ChatsScreen from './src/screens/ChatsScreen';
import InboxScreen from './src/screens/InboxScreen';
import Navigator from './src/navigation/Index';





export default function App() {
  return (
    <View style={styles.container}>
      <Navigator/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    justifyContent: 'center',
    padding: 5,
  },
});
