import {StyleSheet} from 'react-native';


import { Colors } from '../../Constants/appConstants';
import {W} from '../../Utils/DimensionCalculator';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: W(200),
    height: W(200),
  },
});
export default styles;
