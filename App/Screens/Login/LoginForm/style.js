import { StyleSheet } from 'react-native'


import { Colors } from '../../../Constants/appConstants';
import { H, W } from '../../../Utils/DimensionCalculator';


const styles=StyleSheet.create({
container:{
   flex:1,
   alignItems: 'center',
   paddingHorizontal:W(15),
   
},
logo: {
    marginTop:H(150),
    width: W(200),
    height: W(200),
  },
  buttonContainer:{
      alignSelf:"flex-end",
      
  },
  headText:
  {
      fontSize:30,
      color:Colors.SECONDARY,
      fontWeight:"bold",
      alignSelf:"flex-start",
      marginLeft:H(20)
  },
  linkText:
{
    fontSize:20,
    color:Colors.PRIMARY,
    textAlign:"center"
      
}
})
export default styles;