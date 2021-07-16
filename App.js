
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import OnBoardStack from './App/Navigation';
import { View } from 'react-native';
export default (props) => {
 // return <View style={{flex:1,backgroundColor:"red"}}></View>
  return (
        <NavigationContainer>
          <OnBoardStack />
        </NavigationContainer>
      
  );
}