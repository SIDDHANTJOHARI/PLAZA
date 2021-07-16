import React from 'react'
import {SafeAreaView as RNView} from "react-native"
import styles from "./style"
const SafeAreaView=({style,...props})=>
{
return <RNView style={[styles.view,style]} {...props}></RNView>
}
export default SafeAreaView;