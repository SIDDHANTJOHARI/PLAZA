import React from 'react';
import {createStackNavigator} from "@react-navigation/stack"
import { Screens } from '../Constants/appConstants'
import SplashScreen from "../Screens/SplashScreen"
import LoginForm from '../Screens/Login/LoginForm';
import VerifyOTP from '../Screens/Login/VerifyOtp';
import UsersList from '../Screens/Chat/UsersList';
import ChatList from '../Screens/Chat/ChatList';
const MainStack = createStackNavigator();
export default () => {
    return (

        <MainStack.Navigator mode="card" headerMode="none" initialRouteName={Screens.SPLASH}>
            <MainStack.Screen
                name={Screens.SPLASH}
                component={SplashScreen}
            />
              <MainStack.Screen
                name={Screens.LOGIN_FORM}
                component={LoginForm}
            />
             <MainStack.Screen
                name={Screens.VERIFY_OTP}
                component={VerifyOTP}
            />
              <MainStack.Screen
                name={Screens.USERS_LIST}
                component={UsersList}
            />
             <MainStack.Screen
                name={Screens.CHAT_LIST}
                component={ChatList}
            />
          
        </MainStack.Navigator>
    );
}