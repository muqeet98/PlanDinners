import React, { Component } from 'react';
import {
	Text,
	View,
	ScrollView,
	Dimensions,
	Image,
	TextInput,
	TouchableOpacity,
	ImageBackground,
	KeyboardAvoidingView,
	Keyboard,
	Modal,
	TouchableWithoutFeedback,
	Platform
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
const Width = Dimensions.get('screen').width;
const Height = Dimensions.get('screen').height;

import styles from './styles';

class index extends Component {
	constructor(props) {
		super(props);
		this.state = {
	
		};
	}

	render() {
		return (
			<KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
				<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
					<View style={styles.container}>
						<ImageBackground
							source={require('../../../Assets/bgimages/backgroundDiet.png')}
							style={styles.image}
						>
							<View style={styles.headercontainer}>
								<View>
									<TouchableOpacity onPress={() => this.props.navigation.navigate('Gender')}>
										<Image
											style={styles.imagestyle}
											source={require('../../../Assets/bgimages/backicon.png')}
										/>
									</TouchableOpacity>
								</View>

								<View style={{ paddingLeft: 100 }}>
									<Text style={styles.text}>Sign Up</Text>
								</View>
							</View>

                            <View style={styles.text1container}>
             <Text style={styles.text2}>Plan Dinners</Text>
         </View>
         <View style={styles.text2container}>
             <Text style={styles.text4}>Social event organizing made easy</Text>
         </View>
							
						</ImageBackground>
					</View>
				</TouchableWithoutFeedback>
			</KeyboardAvoidingView>
		);
	}
}

export default index;
