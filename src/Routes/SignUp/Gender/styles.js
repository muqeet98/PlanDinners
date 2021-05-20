import { StyleSheet, Dimensions, StatusBar } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
const Width = Dimensions.get('screen').width;
const Height = Dimensions.get('screen').height;

const styles = StyleSheet.create({
    
    container: {
        // flex: 1,
        // flexDirection: "column"
      },
      image: {
        flex: 1,
        resizeMode: "cover",
        // justifyContent: "center"
      },
      text: {
        color: "#000",
        fontSize: RFValue(25),
        fontWeight: "bold",
        textAlign: "center",
       
      },

      text2: {
        paddingLeft: 20,
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
      TopContainer:{
height: Height*0.2,
width: Width * 1,
// borderColor: 'green',
// borderWidth: 2
      },

      maleContainer:{
        // paddingLeft:10,
        height: Height*0.2,
        width: Width * 1,
        borderColor: 'red',
        borderWidth: 2
      },

      femaleContainer:{
height: Height*0.2,
width: Width,
borderColor: 'red',
borderWidth: 2,
      },
    
      headercontainer:{
        flexDirection:'row',
        paddingLeft: 15,
        marginTop: 10,
        marginBottom: 10,
   

      },
      imagestyle:{
          width: 25,
          height: 25
      },

      bottomcontainer:{
        flexDirection:'row',
        justifyContent:'flex-end',
        paddingRight: 25,
        // marginTop: 10,
        // marginBottom: 10
        // borderColor:'green',
        // borderWidth: 2,

      },
      MaleMaincontainer:{
        flexDirection:'row',
        justifyContent:'flex-end',
        paddingRight: 25,
        // marginTop: 10,
        // marginBottom: 10
        // borderColor:'green',
        // borderWidth: 2,

      },
      FemaleMainbottomcontainer:{
        flexDirection:'row',
        justifyContent:'flex-start',
        paddingLeft: 25,
        marginTop: 20,
        // marginBottom: 10
        // borderColor:'green',
        // borderWidth: 2,

      },
      imagestyleRadio:{
          width: 60,
          height:60
      },

      SignUp: {
        width: Width * 0.4,
        height: Height * 0.2,
        backgroundColor:'#FFFFFF95',
        marginVertical: 5,
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 70
    },

    SelectedOption:{
      width: Width * 0.4,
      height: Height * 0.2,
      backgroundColor:'white',

      marginVertical: 5,
      justifyContent:'center',
      alignItems:'center',
      borderRadius: 70
    }

});

export default styles;
