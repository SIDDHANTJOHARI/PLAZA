import React from 'react';
import {StyleSheet} from "react-native"

import {Colors} from '../../Constants/appConstants';
import {W, H} from '../../Utils/DimensionCalculator';

const style = StyleSheet.create({
  inputContainerStyle: {
    marginTop: 10,
    paddingStart: 10,
    height: H(65),
   
  },
  labelStyle: {textAlign: 'left', color: Colors.LIGHT_TEXT},
  errorStyle: {color: 'red',marginLeft:W(20)},
});
export default style;
