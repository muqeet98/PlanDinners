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
        color: "#fff",
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
        flexDirection:'row',
        justifyContent:'flex-end',
        paddingRight: 25,
        paddingBottom: 0


      },
      colmn1:{
        width: Width* 0.17,
      
      },
      colmn2:{
        width: Width* 0.66,
    
      },
      colmn3:{
        width: Width* 0.17,

        alignItems:'flex-end',
        justifyContent:'flex-end',
        paddingRight: 10,
        paddingBottom:10
        
      },

      ButonContainer:{
        height: Height * 0.195,
        width:Width* 0.33,

        justifyContent:'center',
        
      },
      itemcontainer:{
         width: Width* 0.2,
         height: Height*0.1,
         borderRadius: 50,
         backgroundColor: "#fff",
         justifyContent:'center',
         alignItems: 'center',
         alignSelf:'center'
      },
      itemInactivecontainer:{
         width: Width* 0.2,
         height: Height*0.1,
         borderRadius: 50,
         backgroundColor: "#FFFFFF95",
         justifyContent:'center',
         alignItems: 'center',
         alignSelf:'center'
      },
      imageactive:{
         width: 35, 
         height: 35,
         tintColor: "#ff4677"
      },
      imageInactive:{
         width: 35, 
         height: 35,
         tintColor: "#000"
      },
      tochablestyle:{
        width: Width* 0.2,
        height: Height*0.1,
        borderRadius: 50,
        // backgroundColor: "#fff",
        justifyContent:'center',
        alignItems: 'center',
        alignSelf:'center',

      },
      activetext:{
        alignSelf: 'center', color: '#000', fontSize: RFValue(14)
      },
      inactivetext:{
        alignSelf: 'center', color: 'gray',fontSize: RFValue(15)
      },

      textcontainer:{
        width: Width
      }



});

export default styles;
