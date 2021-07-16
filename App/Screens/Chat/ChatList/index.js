import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, FlatList,BackHandler} from 'react-native';
import MessageCard from '../../../Components/MessageCard';
import styles from './style';
import chatsList from '../../../Data/Chat';
import SafeAreaView from '../../../Components/SafeAreaViewHOC';

const ChatList = props => {
    const backAction=()=>
    {
        props.navigation.goBack()
        return true
    }
    useEffect(() => {
      const handlerEvent=  BackHandler.addEventListener("hardwareBackPress", backAction);
        return () => {
          BackHandler.removeEventListener(
            "hardwareBackPress",
          backAction
          );
        };
      }, []);
  const [chats, setChats] = useState([]);
  useEffect(() => {
    var data = [];
    for (var i = 0; i < chatsList.length; i++) {
      if (chatsList[i].uId == props.route.params.id) {
        data = chatsList[i].chats;
      }
    }
    //console.log(data)
    setChats(data);
  }, []);
  return (
      <SafeAreaView>
        <View style={styles.headContainer}>
          <Text style={styles.head}>Chats</Text>
        </View>
    <FlatList
     
      renderItem={(item, index) => {
        return <MessageCard key={item} {...item} />;
      }}
      data={chats}
    /></SafeAreaView>
  );
};
export default ChatList;
