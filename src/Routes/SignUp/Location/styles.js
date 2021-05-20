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
      text2UL: {
        color: "#000",
        fontSize: RFValue(35),
        fontWeight: "bold",
        textDecorationLine:'underline'
    
 
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
      textcontainer:{
        height: Height * 0.3,
        // flexDirection:'row',
        // justifyContent:'flex-end',
        // paddingRight: 25,
        // borderColor:'red',
        // borderWidth: 2

      },
      Inputcontainer:{
        height: Height * 0.3,
        justifyContent: 'center',
        alignItems:'center',
        // borderColor:'red',
        // borderWidth: 2

      },
      imagestyle:{
          width: 25,
          height: 25
      },

      textInputStyle:{
        width: Width * 0.8,
        height: Height* 0.09,
        backgroundColor:"#fff",
        borderRadius: 40,
        paddingLeft:25,
      },
      modaltextInputStyle:{
        // marginTop: 30,
      
        width:Width* 0.5,
        borderTopWidth: 0,
        borderLeftWidth:0,
        borderLeftWidth:0 ,
        borderBottomColor:'#000',
        borderBottomWidth:0,
        backgroundColor:"#fff",
        // borderRadius: 40,
        paddingLeft:25,
      },
      modal: {
        flex: 1,
        marginTop: 20,
       // alignItems: 'center',
        backgroundColor: '#fff',
        // borderColor: 'green',
        padding: 0,
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
        // borderTopWidth: 2.
        //  borderRadius: 30,
        //  borderColor: "red",
        //  borderWidth: 2
      },

      SignIn: {
        alignSelf: 'center',
        width: Width * 0.5,
        height: Height * 0.08,
        backgroundColor:'#f3f4f5',
        borderColor:'#94a1af',
        borderWidth: 2,
        marginVertical: 5,
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 30
    },
    buttonText:{
      fontSize: RFValue(20)
   },

   cancelcontainer:{
    justifyContent:'center',
    alignItems:'center',
   width:Width* 0.2,
   height: Height* 0.09,
  
   },

   modalinputcontainer:{
    justifyContent:'center',
    alignItems:'center',
    width:Width* 0.6,
    height: Height* 0.09,
    
   },

   searchContainer:{
     justifyContent:'center',
     alignItems:'center',
    width:Width* 0.2,
    height: Height* 0.09,

   },
   bottomline:{
     width: Width* 0.9,
     height: Height* 0.001,
     backgroundColor: '#000',
     alignSelf:'center'

   }


});

export default styles;
