import React from 'react'
import { TouchableOpacity, View,Text } from 'react-native'
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons'
import { Colors } from '../../Constants/appConstants'
import styles from "./style"
const UserCard=({item,onPress})=>
{
    return(<TouchableOpacity onPress={onPress} style={styles.container} activeOpacity={0.7}>
    
    <View style={styles.iconContainer}>
    <Icon size={40} name="account" color={Colors.PRIMARY}/>
    </View>
    <View style={styles.textContainer}>
    <Text style={styles.userName}>{item.name.length>15?item.name.substr(0,15)+"...":item.name}</Text>
   {item.messages&& <Text style={styles.message}>{item.messages.message.length>15?item.messages.message.substr(0,15)+"...":item.messages.message}</Text>}
   {item.messages&& <Text style={styles.time}>{item.messages.time}</Text>}
    </View>
    
    </TouchableOpacity>)
}
export default UserCard;