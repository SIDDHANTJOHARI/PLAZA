import {StyleSheet} from 'react-native';
import { Colors } from '../../Constants/appConstants';
import { W } from '../../Utils/DimensionCalculator';
const styles = StyleSheet.create({
  borderStyleHighLighted: {
  //  borderColor: Colors.darkText,
  },
  underlineStyleBase: {
      

    borderWidth:0,
    borderBottomWidth:1,
   
    
    color:Colors.DARK_TEXT
  },
  underlineStyleHighLighted: {
    borderColor: Colors.PRIMARY,
  },

});
export default styles;
