import { FlatList } from 'react-native'
import React from 'react'
import { useRoute , useNavigation} from '@react-navigation/native';

import chats from '../../assets/data/chats.json';
import ChatListItem from '../components/ChatListItem';
import FloatingMessageIcon from '../components/FloatingMessageIcon/Index';

const ChatsScreen = () => {


  return (
  <>

  <FlatList
      data={chats}
      renderItem={({ item }) => <ChatListItem chat={item} />}
      style={{ backgroundColor: 'white' }} /><FloatingMessageIcon 
  />
  
  </>
  )
  
};
export default ChatsScreen;