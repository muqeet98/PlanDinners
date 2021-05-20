import React, { Component } from 'react';
import { Text, View, ScrollView, Dimensions, Image, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
const Width = Dimensions.get('screen').width;
const Height = Dimensions.get('screen').height;
import RnVerticalSlider from 'rn-vertical-slider';
import StepIndicator from 'react-native-step-indicator';

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

			selected: 'man'
		};
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

		this.props.navigation.navigate('Location', {
			nextPosition: this.state.nextPosition
		});
	};

	render() {
		return (
			// <View style={styles.container}>
			<ImageBackground source={require('../../../Assets/bgimages/backgroundgender.png')} style={styles.image}>
				<View style={styles.TopContainer}>
					<View style={styles.headercontainer}>
						<View>
							<TouchableOpacity onPress={() => this.props.navigation.navigate('SignUp')}>
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
				</View>

                <View>
                <Text style={styles.text2}>I'm a</Text>
                <Text style={styles.text2}>{this.state.selected}</Text>
                </View>
                <View style={styles.MaleMaincontainer}>
				{this.state.selected == 'man' ? (
					<View styles={styles.maleContainer}>
						<TouchableOpacity
							style={styles.SelectedOption}
							// onPress={}
						>
							<Image
								style={styles.imagestyleRadio}
								source={require('../../../Assets/bgimages/Male.png')}
							/>
						</TouchableOpacity>
					</View>
				) : (
					<View styles={styles.maleContainer}>
						<TouchableOpacity
							onPress={() => this.setState({ selected: 'man' })}
							style={styles.SignUp}
							// onPress={}
						>
							<Image
								style={styles.imagestyleRadio}
								source={require('../../../Assets/bgimages/Male.png')}
							/>
						</TouchableOpacity>
					</View>
				)}
                </View>

<View style={styles.FemaleMainbottomcontainer}>
				
				
                
				{this.state.selected == 'women' ? (
					<View styles={styles.femaleContainer}>
						<TouchableOpacity
							style={styles.SelectedOption}
							// onPress={}
						>
							<Image
								style={styles.imagestyleRadio}
								source={require('../../../Assets/bgimages/Female.png')}
							/>
						</TouchableOpacity>
					</View>
				) : (
					<View styles={styles.femaleContainer}>
						<TouchableOpacity
							onPress={() => this.setState({ selected: 'women' })}
							style={styles.SignUp}
							// onPress={}
						>
							<Image
								style={styles.imagestyleRadio}
								source={require('../../../Assets/bgimages/Female.png')}
							/>
						</TouchableOpacity>
					</View>
				)}

</View>

				<View style={styles.bottomcontainer}>
					<View>
						<TouchableOpacity onPress={this.NextScreen}>
							<Image
								style={styles.imagestyle}
								source={require('../../../Assets/bgimages/arrowforward.png')}
							/>
						</TouchableOpacity>
					</View>
				</View>
			</ImageBackground>
			// </View>
		);
	}
}

export default index;
