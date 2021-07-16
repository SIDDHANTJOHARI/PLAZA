import {StyleSheet} from 'react-native';
import {Colors} from '../../Constants/appConstants';
import {H, W} from '../../Utils/DimensionCalculator';
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.LIGHT_TEXT,
    flexDirection: 'row',
    //borderRadius:W(10),

    padding: W(10),
   // marginHorizontal: W(10),
    marginBottom: H(1),
  },
  iconContainer: {
    padding: W(10),
    borderColor: Colors.PRIMARY,
    borderRadius: W(50),
    borderWidth: 3,
    padding: W(10),
  },
  message: {
    alignItems: 'flex-start',
    textAlign: 'left',
    marginStart: W(20),
    color: Colors.SECONDARY,

    fontSize: 18,
  },
  time: {
    flex: 1,
    position: 'absolute',
    right: 10,
    bottom: 10,
    color: Colors.WHITE,

    fontSize: 14,
  },
  userName: {
    marginStart: W(20),
    color: Colors.WHITE,
    fontWeight: 'bold',
    fontSize: 20,
  },
  textContainer: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    flex: 1,
  },
});
export default styles;
