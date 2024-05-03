import { View, Text, StyleSheet , TextInput } from 'react-native'
import React, {useState} from 'react'
import { AntDesign , MaterialIcons} from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const InputBox = () => {

  const [newMessage , setNewMessage] = useState('');

  const onSend = () => {
    console.log(newMessage);
    setNewMessage('');
  }



  return (
    <SafeAreaView edges={['bottom']}style={styles.containor}>
      {/* icon */}
      <AntDesign name='plus' size={24} color="royalblue" />

      {/* Text Input*/}
      <TextInput 
      value = {newMessage} 
      onChangeText = {setNewMessage} 
      style={styles.Input} 
      placeholder='Type your message.......' 
      />

      {/* icon */}
      <MaterialIcons onPress = {onSend} style={styles.send} name='send' size={16} color="white" />

    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  containor:{
    flexDirection: "row",
    backgroundColor: "whitesmoke",
    padding: 10,
    paddingHorizontal: 10,
    alignItems: "center",
    borderRadius: 60,
  },
  Input: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 50,
    paddingHorizontal: 10,
    borderColor: "lightgray",
    borderWidth: StyleSheet.hairlineWidth,
    marginHorizontal: 10,
  },
  send: {
    backgroundColor: "royalblue",
    padding: 7,
    borderRadius: 15,
  },

});

export default InputBox;