import { StyleSheet } from 'react-native'
import { Colors } from '../../../Constants/appConstants';
import { H, W } from '../../../Utils/DimensionCalculator';
const styles=StyleSheet.create({
container:{

    flex:1,
 backgroundColor:Colors.PRIMARY
},
headContainer:{
    flexDirection:"row",
    backgroundColor:Colors.PRIMARY,
    paddingHorizontal:W(20),
    paddingVertical:H(10)
},
head:{
    fontSize:40,
    fontWeight:"bold",
    color:Colors.WHITE,
},
logOutIcon:{
    alignSelf:"center",
    position:"absolute",
    right:W(25)
}
})
export default styles;