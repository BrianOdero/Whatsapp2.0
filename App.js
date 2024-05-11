import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Amplify } from 'aws-amplify';
import awsconfig from "./src/aws-exports";

//aws autentication
import { withAuthenticator } from 'aws-amplify-react-native';

//screen imports
import ChatsScreen from './src/screens/ChatsScreen';
import InboxScreen from './src/screens/InboxScreen';
import Navigator from './src/navigation/Index';


Amplify.configure({...awsconfig, Analytics: {disabled: true}});


function App() {
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

export default withAuthenticator(App);