import React, {useEffect, useState} from 'react';
import {Image, TouchableOpacity, Text, View, BackHandler} from 'react-native';
import SafeAreaView from '../../../Components/SafeAreaViewHOC';
import styles from './style';
import InputComponent from '../../../Components/InputComponent';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Toast from 'react-native-simple-toast'
import {Colors, Screens} from '../../../Constants/appConstants';
import TRUECALLER, {
  TRUECALLER_EVENT,
  TRUECALLER_CONSENT_MODE,
  TRUECALLER_CONSENT_TITLE,
  TRUECALLER_FOOTER_TYPE,
} from 'react-native-truecaller-sdk';
const LoginForm = props => {
  const backAction = () => {
    BackHandler.exitApp();
    return true;
  };
  useEffect(() => {
    const handlerEvent = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', backAction);
    };
  }, []);


  useEffect(() => {
    TRUECALLER.initializeClient(
      TRUECALLER_CONSENT_MODE.Popup,
      TRUECALLER_CONSENT_TITLE.Login,
      TRUECALLER_FOOTER_TYPE.Continue,
    );
    TRUECALLER.on(TRUECALLER_EVENT.TrueProfileResponse, profile => {
      validateByTrueCaller(profile);
    });

    TRUECALLER.on(TRUECALLER_EVENT.TrueProfileResponseError, error => {
      console.log('User rejected the truecaller consent request! ', error);
      if (error && error.errorCode) {
        switch (error.errorCode) {
          case 1: {
            //
            Toast.show('Network Failure');
            console.log('Something went wrong', 'please try again1');
            break;
          }
          case 2: {
            Toast.show('User pressed back')
            console.log('Something went wrong', 'please try again2');
            break;
          }
          case 3: {
            Toast.show('Incorrect Partner Key')
            console.log('Something went wrong', 'please try again3');
            break;
          }
          case 4: {
            Toast.show('User Not Verified on Truecaller')
            console.log('Something went wrong', 'please try again4');
            break;
          }
          case 5: {
            Toast.show('Truecaller App Internal Error')
            console.log('Something went wrong', 'please try again5');
            break;
          }
          case 10: {
            Toast.show('User Not Verified on Truecaller')
            console.log('Something went wrong', 'please try again6');
            break;
          }
          case 13: {
           // Toast.show('User pressed back while verification in process')
            console.log('Something went wrong', 'please try again7');
            break;
          }
          case 14: {
            //Toast.show('User pressed SKIP or USE ANOTHER NUMBER')
            console.log('Something went wrong', 'please try again8');
            break;
          }
          default: {
          }
        }
      }
    });
  }, []);
  const validateUser = () => {
    TRUECALLER.isUsable(result => {
      if (result === true) {
        console.log('Authenticate via truecaller flow can be used');
        TRUECALLER.requestTrueProfile();
      } else
        Toast.show(
          'Either truecaller app is not installed or user is not logged in',
        );
    });
  };
  const [number, setNumber] = useState('+91');

  const [error, setError] = useState('');

  const onChangeNumber = text => {
    if (text.length < 3 || isNaN(text.substr(1))) return;
    setError('');
    setNumber(text.trim());
  };

  const sendOTP = number => {
    Toast.show('OTP sent successfully');
    props.navigation.navigate(Screens.VERIFY_OTP);
  };
  const validateByTrueCaller = profile => {
    sendOTP(profile.phoneNumber);
  };

  const validateNumber = () => {
    if (number.length != 13) {
      setError('Invalid Number');
      return;
    }

    // if validation successful sendOTP
    sendOTP(number);
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('../../../Images/logochat.png')}></Image>

        <Text style={styles.headText}>Login</Text>
        <InputComponent
          errorMessage={error}
          leftIcon={() => (
            <Icon size={25} color={Colors.PRIMARY} name="phone"></Icon>
          )}
          onChangeText={onChangeNumber}
          value={number}
          keyboardType="number-pad"
          placeholder="Mobile Number"
        />

        <TouchableOpacity
          onPress={validateNumber}
          style={styles.buttonContainer}>
          <Icon size={70} color={Colors.PRIMARY} name="arrow-right-circle" />
        </TouchableOpacity>

        <TouchableOpacity onPress={validateUser}>
          <Text style={styles.linkText}>Login Using Truecaller</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default LoginForm;
