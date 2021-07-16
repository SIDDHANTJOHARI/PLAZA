import { StyleSheet } from 'react-native'
import { Colors } from '../../../Constants/appConstants';
import { H, W } from '../../../Utils/DimensionCalculator';
const styles=StyleSheet.create({
container:{
    flex:1,
    alignItems:"center",
    padding:W(10),
   // justifyContent:"center"
},
headText:
{
    fontSize:30,
    color:Colors.SECONDARY,
    fontWeight:"bold",  
    marginBottom:H(10)
},
subheadText:
{
    fontSize:20,
    color:Colors.SECONDARY,
    textAlign:"center"
      
},
otpContainer:
{
    flex:0.2
},
bottomContainer:
{
    flexDirection:"row",alignItems:"center"
},
linkText:
{
    fontSize:20,
    color:Colors.PRIMARY,
    textAlign:"center"
      
}
})
export default styles;