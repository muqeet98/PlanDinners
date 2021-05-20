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
        fontSize: RFValue(20),
        fontWeight: "bold",
        textAlign: "center",
       
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
          height: 25,
          tintColor: '#Fff'
      },


      
      text1container:{
        width: Width ,
        height: Height * 0.09,
        borderColor:'red',
        borderWidth: 2,
        justifyContent:'center'
    },
    text2: {
      color: '#FFf',
      fontSize: RFValue(55),
      // fontWeight: "900",
      textAlign: "center",
    fontStyle:'italic'
    
    },

    text2container:{
      width: Width ,
      height: Height * 0.06,
      alignItems:'center',
      borderColor:'red',
      borderWidth: 2,
  },
  text4: {
    color: 'white',
    fontSize: RFValue(20),
    fontWeight: "900",
    textAlign: "center",
    fontStyle:'italic'
  
  },


  ///// imagecontainer

  


});

export default styles;
