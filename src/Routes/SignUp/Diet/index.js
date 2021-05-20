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
	FlatList
} from 'react-native';
// import CheckBox from '@react-native-community/checkbox';
import { CheckBox } from 'react-native-elements';
import { RFValue } from 'react-native-responsive-fontsize';
const Width = Dimensions.get('screen').width;
const Height = Dimensions.get('screen').height;
import RnVerticalSlider from 'rn-vertical-slider';
import StepIndicator from 'react-native-step-indicator';
import Checkbox from './Checkbox/index';
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
			data: Data,
			Status: false
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

		this.props.navigation.navigate('Intrests', { nextPosition: this.state.nextPosition });
	};

	toggleChecked() {
		console.log('Hai hai');
		// if(this.state.checked==false){
		// 	this.setState({checked: true})
		// }
		// else if(this.state.checked== true){
		// 	this.setState({checked:false})
		// }
	}

	renderItem(item) {
		console.log(item.item.image);
		return (
			<View>
				<CheckBox
					//   center
					//   iconType="material"
					// checkedIcon="clear"
					uncheckedIcon={
						<Image
							style={{ width: 45, height: 45 }}
							source={require('../../../Assets/bgimages/DietIcons/lactose-free.png')}
						/>
					}
					checkedIcon={
						<Image
							style={{ width: 60, height: 50 }}
							source={require('../../../Assets/bgimages/DietIcons/sugar-free.png')}
						/>
					}
					//checkedIcon="add"
					// checkedColor="red"
					uncheckedColor="blue"
					size={60}
					// onPress={this.toggleChecked}
					checked={this.state.Status}
					onPress={() => this.setState({ Status: !this.state.Status })}
				/>
			</View>
		);
	}

	render() {
		return (
			<View style={styles.container}>
				<ImageBackground source={require('../../../Assets/bgimages/backgroundDiet.png')} style={styles.image}>
					<View style={styles.headercontainer}>
						<View>
							<TouchableOpacity onPress={() => this.props.navigation.navigate('Location')}>
								<Image
									style={styles.imagestyle}
									source={require('../../../Assets/bgimages/backicon.png')}
								/>
							</TouchableOpacity>
						</View>

						<View style={{ paddingLeft: 50 }}>
							<Text style={styles.text}>What is your diet?</Text>
						</View>
					</View>
					<StepIndicator
						customStyles={customStyles}
						currentPosition={this.state.currentPosition}
						labels={labels}
					/>
					<View style={styles.Inputcontainer}>

						<View style={styles.clmn1}>

						</View>
					
						
						
						<View style={styles.clmn2}>
						<Checkbox />
						</View>

						<View style={styles.clmn1}>
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
						</View>
						
						
					</View>

					
				</ImageBackground>
			</View>
		);
	}
}

export default index;

const Data = [
	{
		id: 1,
		name: 'Nothing Special',
		image: '../../../Assets/bgimages/DietIcons/NothingSpecial.png',
		image2: '../../../Assets/bgimages/DietIcons/halal@3x.png'
	},
	{
		id: 2,
		name: 'Nothing Special',
		image: '../../../Assets/bgimages/DietIcons/kosher@3x.png',
		image2: '../../../Assets/bgimages/DietIcons/lactose-free.png'
	}
];
