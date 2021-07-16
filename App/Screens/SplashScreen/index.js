import React,{useEffect} from 'react';
import {Image} from 'react-native';


import styles from './style';
import {Screens, Splash_time} from '../../Constants/appConstants';
import SafeAreaView from '../../Components/SafeAreaViewHOC';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BackHandler } from 'react-native';
const SplashScreen = (props) => {
  const backAction=()=>
  {

      BackHandler.exitApp()
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
  
    useEffect(()=>{
      AsyncStorage.getItem("loggedIn").then(res=>
        {
          console.log(res)
          if(res==null)
          {
            setTimeout(()=>props.navigation.navigate(Screens.LOGIN_FORM),Splash_time)
          }
          else
          {
            setTimeout(()=>props.navigation.navigate(Screens.USERS_LIST),Splash_time)
          }
        }).catch(err=>
          {
            setTimeout(()=>props.navigation.navigate(Screens.LOGIN_FORM),Splash_time)
          })
       
    })
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../Images/logochat.png')}></Image>
    </SafeAreaView>
  );
};
export default SplashScreen;
