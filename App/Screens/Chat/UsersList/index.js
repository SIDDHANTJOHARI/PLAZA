import React, {useEffect, useState} from 'react';
import {View, Text, FlatList,BackHandler} from 'react-native';
import {Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import UserCard from '../../../Components/UserCard';
import {Colors, Screens} from '../../../Constants/appConstants';
import users from '../../../Data/User';
import chats from '../../../Data/Chat';
import styles from './style';

const UsersList = props => {
    const backAction=()=>
    {
        console.log("Clicked")
        BackHandler.exitApp()
        return true
    }
    // handling back button
    useEffect(() => {
      const handlerEvent=  BackHandler.addEventListener("hardwareBackPress", backAction);
        return () => {
          BackHandler.removeEventListener(
            "hardwareBackPress",
          backAction
          );
        };
      }, []);
  const [chatData, setChatData] = useState([]);
  useEffect(() => {
    console.log(users.length);
    const items = [];
    for (var i = 0; i < chats.length; i++) {
      const item = {};
      for (var j = 0; j < users.length; j++) {
        if (chats[i].uId == users[j].id && chats[i].chats.length > 0) {
          (item.id = chats[i].uId),
            (item.name = users[j].name),
            (item.messages = chats[i].chats[0]);
          break;
        }
      }
      items.push(item);
    }
    setChatData(items);
  }, []);
  const openChat = id => {
    props.navigation.navigate(Screens.CHAT_LIST, {id: id});
  };
  // console.log(chatData)
  const [searchedText, setSearchedText] = useState('');
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.headContainer}>
          <Text style={styles.head}>Contacts</Text>
        </View>
        <Input
          onChangeText={setSearchedText}
          style={{color: Colors.WHITE}}
          leftIcon={<Icon name="search" color={Colors.WHITE} size={20}></Icon>}
        />
      </View>

      <FlatList
        renderItem={(item, index) => {
          return (
            <UserCard
              onPress={() => openChat(item.item.id)}
              key={index}
              {...item}
            />
          );
        }}
        data={chatData.filter(item =>
          item.name.toLowerCase().includes(searchedText.toLowerCase()),
        )}
      />
    </View>
  );
};
export default UsersList;
