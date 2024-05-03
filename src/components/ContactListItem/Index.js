import {Text, View , Image, StyleSheet, Pressable} from "react-native";
import { useNavigation } from "@react-navigation/native";

import dayjs  from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);



const ContactListItem = ({user}) =>{

    const navigation = useNavigation();

   return(
    <Pressable onPress = {() => {}} style = {styles.containor}>
        <Image source={{ uri: user.image}} style = {styles.Image}/>

        <View style= {styles.content}>
            <Text numberOfLines={1} style = {styles.name}>
                {user.name}
            </Text>
            <Text numberOfLines={2} style={styles.subTitle}>
                {user.status}
            </Text>
        </View>


        
            
    </Pressable>
   )
}
 
export default ContactListItem;

const styles = StyleSheet.create({
    containor: {
        flexDirection: "row",
        marginHorizontal: 10,
        marginVertical: 5,
        heigth:70,
        alignItems: "center",
        borderStyle: StyleSheet.hairlineWidth,
        borderColor: "lightgray",
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    Image:{ 
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 10,
    },
    name: {
        marginBottom: 10,
        fontWeight: "bold",
    },
    content: {
        flexDirection: "column"
    },
    subTitle: {
        color: "gray",
    },
})