import AsyncStorage from '@react-native-async-storage/async-storage';
import React,{useEffect} from 'react';
import { BackHandler, Text, TouchableOpacity, View} from 'react-native';
import OTPInput from '../../../Components/OTPInput';
import SafeAreaView from '../../../Components/SafeAreaViewHOC';
import { Screens } from '../../../Constants/appConstants';
import styles from './style';
const VerifyOTP = props => {
    const backAction=()=>
    {
        console.log("Clicked h")
        props.navigation.goBack()
        return true
    }
    useEffect(() => {
      console.log("Verify OTP")
      const handlerEvent=  BackHandler.addEventListener("hardwareBackPress", backAction);
        return () => {
          console.log("Verify OTP Removed")
          BackHandler.removeEventListener(
            "hardwareBackPress",
          backAction
          );
        };
      }, []);
  const verifyCode=(code)=>
  {
   
//code to verify otp on success send user to chat page
AsyncStorage.setItem("loggedIn","true").then(res=>
  {
    props.navigation.navigate(Screens.USERS_LIST)})
  }
    return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.headText}>Verify OTP</Text>
        <Text style={styles.subheadText}>
          A Verification code was sent to your provided mobile phone number,
          please enter the code to proceed
        </Text>
        <View style={styles.otpContainer}>
          <OTPInput onCodeFilled={code => verifyCode(code)} pinCount={6} />
        </View>
        <View style={styles.bottomContainer}>
            <Text style={styles.subheadText}>Didn’t  Receive One? </Text>
            <TouchableOpacity>
            <Text style={styles.linkText}> Resend Code</Text>
            </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default VerifyOTP;
