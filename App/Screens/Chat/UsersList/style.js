import { StyleSheet } from 'react-native'
import { Colors } from '../../../Constants/appConstants';
import { H, W } from '../../../Utils/DimensionCalculator';
const styles=StyleSheet.create({
container:{

    flex:1,
 backgroundColor:Colors.PRIMARY
},
headContainer:{
    backgroundColor:Colors.PRIMARY,
    paddingHorizontal:W(20),
    paddingVertical:H(10)
},
head:{
    fontSize:40,
    fontWeight:"bold",
    color:Colors.WHITE,
}
})
export default styles;