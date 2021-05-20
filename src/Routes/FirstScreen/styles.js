import { StyleSheet, Dimensions, StatusBar } from 'react-native';

const Width = Dimensions.get('screen').width;
const Height = Dimensions.get('screen').height;
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection:'column',
        alignItems:'center',
        backgroundColor:'white'
        
      },
      
   
      text1container:{
          width: Width * 0.9,
          height: Height * 0.09,
        //   borderColor:'red',
        //   borderWidth: 2,
          justifyContent:'center'
      },
      text: {
        color: 'black',
        fontSize: RFValue(55),
        // fontWeight: "900",
        textAlign: "center",
      fontStyle:'italic'
      
      },

      text2container:{
        width: Width * 0.9,
        height: Height * 0.06,
        // borderColor:'red',
        // borderWidth: 2,
    },
    text2: {
      color: 'black',
      fontSize: RFValue(20),
      fontWeight: "900",
      textAlign: "center",
      fontStyle:'italic'
    
    },


    ///// imagecontainer

    imagecontainer:{
        width: Width * 0.5,
        height: Height * 0.5,
        // borderColor:'red',
        // borderWidth: 2,
       
        
    },
    image: {
        width: Width * 0.48,
        height: Height * 0.49,
        resizeMode: "cover",
        justifyContent: "center",
        alignSelf:'center'
      },


      SignUp: {
          width: Width * 0.7,
          height: Height * 0.08,
          backgroundColor:'#94d9d2',
          borderColor:'#94a1af',
          borderWidth: 2,
          marginVertical: 5,
          justifyContent:'center',
          alignItems:'center',
          borderRadius: 30
      },

      SignIn: {
        width: Width * 0.7,
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
      }
      





});

export default styles;
