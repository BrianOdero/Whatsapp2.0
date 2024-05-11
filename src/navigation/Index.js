import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text } from 'react-native';
import ChatsScreen from '../screens/ChatsScreen';
import React from 'react'
import InboxScreen from '../screens/InboxScreen';
import MainTabNav from './MainTabNav';
import ContactsScreen from '../screens/ContactsScreen';
const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerStyle: {backgroundColor: 'whitesmoke', alignItems: 'center',}}}>
            <Stack.Screen name="Home" component={MainTabNav} options={{headerShown: false}} />
            <Stack.Screen name="Chats" component={ChatsScreen} />
            <Stack.Screen name="Inbox" component={InboxScreen} />
            <Stack.Screen name="Contacts" component={ContactsScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigator