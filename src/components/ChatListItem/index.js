import {Text, View , Image, StyleSheet, Pressable} from "react-native";
import { useNavigation } from "@react-navigation/native";

import dayjs  from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);



const ChatListItem = ({chat}) =>{

    const navigation = useNavigation();

   return(
    <Pressable onPress = {() => navigation.navigate('Inbox', {id: chat.id, name: chat.user.name})} style = {styles.containor}>
        <Image source={{ uri: chat.user.image}} 
        style = {styles.Image}
        />
        <View style = {styles.content}>
            <View style = {styles.row}>
                <Text numberOfLines={1} style = {styles.name}>{chat.user.name}</Text>
                <Text numberOfLines={2} style = {styles.subTitle}>{dayjs(chat.lastMessage.createdAt).fromNow()}</Text>
            </View>

            <Text style = {styles.subTitle}>{chat.lastMessage.text}</Text>
        </View>
    </Pressable>
   )
}
 
export default ChatListItem;

const styles = StyleSheet.create({
    containor: {
        flexDirection: "row",
        marginHorizontal: 10,
        marginVertical: 5,
        heigth:70,
    },
    Image:{ 
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 10,
    },
    content:{
        flex: 1,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: "lightgray",
    },
    row: {
        flexDirection: "row",
        marginBottom: 5,
        
    },
    name: {
        flex: 1,
        fontWeight: "bold",
    },
    subTitle: {
        color: "gray",
    },
})