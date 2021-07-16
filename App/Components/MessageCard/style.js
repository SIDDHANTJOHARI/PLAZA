import {StyleSheet} from "react-native"
import { W } from "../../Utils/DimensionCalculator";
const styles=StyleSheet.create({
    container:{width:W(250), elevation: 2,borderWidth:0},
    image:{
        width: W(200), height: W(200)
    },
    time: {
        flex: 1,
        position: 'absolute',
        right: 10,
        bottom: -10,
        
    
        fontSize: 14,
      },
})
export default styles;