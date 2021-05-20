import { StyleSheet, Dimensions, StatusBar } from 'react-native';

const Width = Dimensions.get('screen').width;
const Height = Dimensions.get('screen').height;
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
const styles = StyleSheet.create({

   text1:{
       fontSize: RFValue(13),
       color:'#fff'
   },
   checkedImage: {
    width: 60, height: 60, tintColor: '#14b1a0', backgroundColor: '#fff'
   },
   uncheckedImage:{
    width: 60,
    height: 60,
    tintColor: '#000',
    paddingTop: 10,
    backgroundColor: '#FFFFFF95'
}





});

export default styles;
