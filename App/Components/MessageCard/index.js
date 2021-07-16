import React from 'react';
import {Image, Text} from 'react-native';
import {Card} from 'react-native-elements/dist/card/Card';
import images from '../../Images/images';
import styles from "./style"
const MessageCard = ({item}) => {
   // console.log()
   
   return (
    <Card containerStyle={[styles.container,{alignSelf:item.to?"flex-end":"flex-start"}]}>
      <Image
        style={styles.image}
        source={images['image'+(item.id%10)]}></Image>
      <Text>{item.message}</Text>
      <Text style={styles.time}>{item.time}</Text>
    </Card>
  );
};
export default MessageCard;
