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
import RnVerticalSlider from 'rn-vertical-slider';
import StepIndicator from 'react-native-step-indicator';
import Icon from 'react-native-vector-icons/Ionicons';
const labels = [ 'Cart', 'Delivery Address', 'Order Summary', 'Payment Method', 'Track' ];
const customStyles = {
	stepIndicatorSize: 40,
	currentStepIndicatorSize: 45,
	separatorStrokeWidth: 4,
	currentStepStrokeWidth: 3,
	stepStrokeCurrentColor: '#fff',
	stepStrokeWidth: 0,
	stepStrokeFinishedColor: '#fff',
	stepStrokeUnFinishedColor: '#aaaaaa',
	separatorFinishedColor: '#fff',
	separatorUnFinishedColor: '#aaaaaa',
	stepIndicatorFinishedColor: 'white',
	stepIndicatorUnFinishedColor: '#ffffff',
	stepIndicatorCurrentColor: 'white',
	stepIndicatorLabelFontSize: 13,
	currentStepIndicatorLabelFontSize: 13,
	stepIndicatorLabelCurrentColor: 'black',
	stepIndicatorLabelFinishedColor: 'black',
	stepIndicatorLabelUnFinishedColor: 'black',
	labelColor: '#999999',
	labelSize: 0,
	currentStepLabelColor: 'black'
};

import styles from './styles';

class index extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentPosition: this.props.route.params.nextPosition,
			nextPosition: this.props.route.params.nextPosition,
			age: '',
			value: '',
			age1: '0',
			place: '',
			modalVisible: false
		};
	}

	toggleModal(visible) {
		this.setState({ modalVisible: visible });
	}

	onPageChange(position) {
		this.setState({ currentPosition: position });
	}
	incrementCount() {
		this.setState({ nextPosition: this.state.currentPosition + 1 });
		console.log('Next Gender Hai', this.state.nextPosition);
	}

	NextScreen = async () => {
		await this.incrementCount();
		console.log('Next Next Hai ', this.state.nextPosition);

		this.props.navigation.navigate('Diet', { nextPosition: this.state.nextPosition });
	};

	render() {
		return (
			<KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
				<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
					<View style={styles.container}>
						<ImageBackground
							source={require('../../../Assets/bgimages/backgroundlocation.png')}
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

								<View style={{ paddingLeft: 50 }}>
									<Text style={styles.text}>What is your gender?</Text>
								</View>
							</View>
							<StepIndicator
								customStyles={customStyles}
								currentPosition={this.state.currentPosition}
								labels={labels}
							/>
							<View style={styles.textcontainer}>
								<View style={{ paddingLeft: 20, paddingTop: 20 }}>
									<Text style={styles.text2}>I live in</Text>
									<Text style={styles.text2UL}>{this.state.place}</Text>
								</View>
							</View>

							<View style={styles.Inputcontainer}>
								<TouchableOpacity
									onPress={() => {
										this.toggleModal(true);
									}}
								>
									<TextInput
										value={this.state.place}
										editable={false}
										placeholder="Tapeyourlocation"
										style={styles.textInputStyle}
										onChangeText={(value) => this.setState({ place: value })}
									/>
								</TouchableOpacity>
							</View>

							<View style={styles.bottomcontainer}>
								<TouchableOpacity onPress={this.NextScreen}>
									<Image
										style={styles.imagestyle}
										source={require('../../../Assets/bgimages/arrowforward.png')}
									/>
								</TouchableOpacity>
							</View>
							<Modal
								animationType={'slide'}
								transparent={true}
								visible={this.state.modalVisible}
								onRequestClose={() => {
									console.log('Modal has been closed.');
								}}
							>
								<View style={styles.modal}>

									<View style={{flexDirection:'row',}}>
                                      <View style={styles.cancelcontainer}>
									  <Icon name="close" size={30} color="#000"  onPress = {() => { this.toggleModal(!this.state.modalVisible)}}/>
									  </View>

									  <View style={styles.modalinputcontainer}>
									  <TextInput
										value={this.state.place}
										// editable={false}
										placeholder="Tapeyourlocation"
										style={styles.modaltextInputStyle}
										onChangeText={(value) => this.setState({ place: value })}
									/>
									  </View>

									  <View style={styles.searchContainer}>
									  <Icon name="search" size={30} color="#000"  onPress = {() => { this.toggleModal(!this.state.modalVisible)}}/>
									
									  </View>
									</View>
							<View style={styles.bottomline}/>
								</View>
							</Modal>
						</ImageBackground>
					</View>
				</TouchableWithoutFeedback>
			</KeyboardAvoidingView>
		);
	}
}

export default index;
