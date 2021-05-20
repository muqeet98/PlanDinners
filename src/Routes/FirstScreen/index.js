import React, { Component } from "react";
import { Text, View, ScrollView,Dimensions,Image,TextInput, TouchableOpacity, ImageBackground } from "react-native";
const Width = Dimensions.get("screen").width;
const Height = Dimensions.get("screen").height;

import styles from "./styles";

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <View style={styles.container}>
         <View style={styles.text1container}>
             <Text style={styles.text}>Plan Dinners</Text>
         </View>
         <View style={styles.text2container}>
             <Text style={styles.text2}>Social event organizing made easy</Text>
         </View>

         <View style={styles.imagecontainer}>
         <ImageBackground source={require('../../Assets/bgimages/Mobile.jpg')} style={styles.image}>
          {/* <Text style={styles.text}>Inside</Text> */}
        </ImageBackground>
         </View>

        <View>
            <TouchableOpacity style={styles.SignUp}  onPress={()=> this.props.navigation.navigate("SignUp")}>
                <Text style={styles.buttonText}>SIGN UP</Text>
            </TouchableOpacity>
        </View>

        <View>
            <TouchableOpacity style={styles.SignIn}>
                <Text style={styles.buttonText}>LOG IN</Text>
            </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default index;