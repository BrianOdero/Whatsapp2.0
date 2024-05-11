import { View, Text , StyleSheet} from 'react-native'
import React from 'react'
import dayjs  from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const Message = ({ message }) => {

    const isMyMessage = () => {
        return message.user.id === 'u1';
    }

  return (
    <View style={[styles.containor,
        {
            backgroundColor: isMyMessage() ? "#DCF8C5" : "white",
            alignSelf:  isMyMessage() ? "flex-end" : "flex-start",
        }
    ]}>
      <Text>{message.text}</Text>
      <Text style={styles.time}>{dayjs(message.createdAt).fromNow()}</Text>
    </View>
  )
}

export default Message;

const styles = StyleSheet.create({
    containor: {
        backgroundColor: "white",
        margin: 5,
        padding: 10,
        borderRadius: 10,
        alignSelf: "flex-start",
        maxWidth: "80%",
        //shadows 
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 14,
        },
        shadowOpacity:  0.24,
        shadowRadius: 15.38,
        elevation: 19
    },
    time: {
        color: "gray",
        alignSelf: "flex-end"
    },
    
});