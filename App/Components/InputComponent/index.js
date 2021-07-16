import React from 'react';
import {Input} from 'react-native-elements';



import styles from './style';


const InputComponent = props => {
  return (
    <Input
    
      labelStyle={styles.labelStyle}
      placeholderTextColor="gray"
      errorStyle={styles.errorStyle}
      inputContainerStyle={[styles.inputContainerStyle]}
      underlineColorAndroid="transparent"
      {...props}></Input>
  );
};
export default InputComponent;
