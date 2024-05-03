import { View, Text , ImageBackground, StyleSheet, FlatList, KeyboardAvoidingView, Platform} from 'react-native'
import bg from '../../assets/images/BG.png';
import React from 'react';
import { useRoute,useNavigation } from '@react-navigation/native';

//import screens 
import Message from '../components/ChatListItem/Message/Index';
import messages from '../../assets/data/messages.json';
import InputBox from '../components/InputBox/Index';
import { useEffect } from 'react';




const InboxScreen = () => {

    const route = useRoute();
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({ title: route.params.name });
    }, [route.params.name]);


  return (
      <ImageBackground source={bg} style = {styles.bg}>
          <FlatList 
          data={messages} 
          renderItem={({item}) => <Message message={item} />} 
          style= {styles.Flatlist} 
          inverted/>  
          <InputBox />
      </ImageBackground>
  );
};

export default InboxScreen;

const styles = StyleSheet.create({
    bg: {
        flex: 1,
    },
    Flatlist: {
        padding: 10,
    },
});