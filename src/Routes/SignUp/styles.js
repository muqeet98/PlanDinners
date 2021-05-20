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
        color: "#000",
        fontSize: RFValue(25),
        fontWeight: "bold",
        textAlign: "center",
       
      },

      text2: {
        color: "#000",
        fontSize: RFValue(35),
        fontWeight: "bold",
        marginTop:10
    
 
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


      contantcontainer:{
        flexDirection:'row',
        marginTop: 20,
        marginBottom: 10
      },

      inputContainer:{
        width: Width * 0.4,
        height: Height * 0.66,
        paddingLeft: 15,
        // borderColor:'red',
        // borderWidth:2
      },

      ThirdMainContainer:{
        width: Width * 0.4,
        height: Height * 0.66,
        // borderColor:'red',
        // borderWidth:2
      },

      progressContainer:{
        width: Width * 0.2,
        // paddingLeft: 15,
        // borderColor:'red',
        // borderWidth:2,
        alignItems:'center'
      },

      progressView:{
          width: Width* 0.15,
          height: Height* 0.65,
          backgroundColor:'white',
          borderRadius: 40,
         alignItems:'center',
         justifyContent: 'center'
      },
      progressInnerView:{
       
        width: Width* 0.12,
        height: Height* 0.3,
        backgroundColor:'#000',
        borderRadius: 40
      },


      scalecontainer:{
        width: Width * 0.4,
        height: Height * 0.66,
        // borderColor:'green',
        // borderWidth: 2,
        
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
      imagestyle:{
          width: 25,
          height: 25
      },

});

export default styles;
