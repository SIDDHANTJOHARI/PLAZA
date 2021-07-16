import React from 'react'
import OTPInputView  from '@twotalltotems/react-native-otp-input'
 import styles from "./style"
import { W } from '../../Utils/DimensionCalculator'
const OTPInput=(props)=>
{
return ( 
<OTPInputView
    style={{padding:10}}
    codeInputFieldStyle={[styles.underlineStyleBase,{width:W(300)/props.pinCount}]}
    codeInputHighlightStyle={styles.underlineStyleHighLighted}
    {...props}
  
/>)
}
export default OTPInput;