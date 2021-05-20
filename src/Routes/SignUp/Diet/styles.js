import { StyleSheet, Dimensions, StatusBar } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
const Width = Dimensions.get('screen').width;
const Height = Dimensions.get('screen').height;

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        flexDirection: "column"
      },
      image: {
        flex: 1,
        resizeMode: "cover",
        // justifyContent: "center"
      },
      text: {
        color: "white",
        fontSize: RFValue(25),
        fontWeight: "bold",
        textAlign: "center",
       
      },

      text2: {
        color: "#000",
        fontSize: RFValue(35),
        fontWeight: "bold",
    
 
      },
      text3:{
        fontSize: RFValue(12),
        color:"white",
        marginBottom: Height* 0.0150625,
        fontWeight:"bold"
      },
      
      headercontainer:{
        flexDirection:'row',
        paddingLeft: 15,
        marginTop: 10,
        marginBottom: 10

      },
      imagestyle:{
          width: 25,
          height: 25
      },

      bottomcontainer:{
        flex: 1,
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems: 'flex-end',
        paddingRight: 25,
        paddingBottom:25,
        // borderColor:'red',
        // borderWidth: 2,

      },
      imagestyle:{
          width: 25,
          height: 25
      },
      Inputcontainer:{
        flex: 1,
        // justifyContent: 'center',
        // alignItems:'center',
        borderColor:'green',
        borderWidth: 0,
        flexDirection: 'row'

      },
      clmn1:{
        width: Width *0.2,
        // borderWidth:2,
        // borderColor: 'green'
      },
      clmn2:{
        width: Width *0.6,
        // borderWidth:2,
        // borderColor: 'green'
      }
});

export default styles;
