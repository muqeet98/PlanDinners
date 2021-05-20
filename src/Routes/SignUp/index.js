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
			currentPosition: 0,
			nextPosition: 0,
			age: '',
			value: '',
			age1: '0',
			
		};
	}

	onPageChange(position) {
		this.setState({ currentPosition: position });
	}

	incrementCount(){
		this.setState({nextPosition: this.state.currentPosition + 1})
		console.log("Next Hai", this.state.nextPosition);
	}

	NextScreen=async () => {
	 await this.incrementCount();
		console.log("Next Next Hai ", this.state.nextPosition);

         this.props.navigation.navigate('Gender',{ nextPosition: this.state.nextPosition})
		 
    
      }
	  onChanged(text){
		let newText = '';
		let numbers = '0123456789';
	
		for (var i=0; i < text.length; i++) {
			if(numbers.indexOf(text[i]) > -1 ) {
				newText = newText + text[i];
			}
			else {
				// your call back function
				alert("please enter numbers only");
			}
		}
		this.setState({ age1: newText });
	}


	render() {
		return (
			<View style={styles.container}>
				<ImageBackground
					source={require('../../Assets/bgimages/backgroundFirstScreen.png')}
					style={styles.image}
				>
					<View style={styles.headercontainer}>
						<View>
							<TouchableOpacity onPress={() => this.props.navigation.navigate('First')}>
								<Image
									style={styles.imagestyle}
									source={require('../../Assets/bgimages/backicon.png')}
								/>
							</TouchableOpacity>
						</View>

						<View style={{ paddingLeft: 50 }}>
							<Text style={styles.text}>How old are you?</Text>
						</View>
					</View>
					<StepIndicator
						customStyles={customStyles}
						currentPosition={this.state.currentPosition}
						labels={labels}
					/>

					<View style={styles.contantcontainer}>
						<View style={styles.inputContainer}>
							<Text style={styles.text2}>I'm</Text>
							<Text style={styles.text2}>{this.state.age1}</Text>

							
							{/* <TextInput
                            //    style={{ paddingLeft: 15, flex: 1}}
    
              onChangeText={(number) => this.setState({age1: number})}

			  
              value={this.state.age1}
               /> */}

{/* <TextInput 
   style={styles.textInput}
   keyboardType='numeric'
   placeholder=  
   onChangeText={(text)=> this.onChanged(text)}
   value={this.state.age1}
   maxLength={10}  //setting limit of input
/> */}
			
						</View>

						<View style={styles.progressContainer}>
							<View style={styles.progressView}>
				
								<RnVerticalSlider
									value={this.state.age1}
									disabled={false}
									min={0}
									max={80}
									onChange={(value: number) => {
										console.log('CHANGE', value);
										this.setState({ age1: value });
										console.log(this.state.age1);
									}}
									onComplete={(value: number) => {
										console.log('COMPLETE', value);
										this.setState({ age1: value });
									}}
								
									width={Width * 0.12}
									height={Height * 0.63}
									step={1}
									borderRadius={30}
									minimumTrackTintColor={'#000'}
									maximumTrackTintColor={'white'}
								/>
							</View>
						</View>

						<View style={styles.ThirdMainContainer}>

							<View style={styles.scalecontainer}>
								<Text style={styles.text3}>______ 80</Text>
								<Text style={styles.text3}>___</Text>
								<Text style={styles.text3}>______ 70</Text>
								<Text style={styles.text3}>___</Text>
								<Text style={styles.text3}>______ 60</Text>
								<Text style={styles.text3}>___</Text>
								<Text style={styles.text3}>______ 50</Text>
								<Text style={styles.text3}>___</Text>
								<Text style={styles.text3}>______ 40</Text>
								<Text style={styles.text3}>___</Text>
								<Text style={styles.text3}>______ 30</Text>
								<Text style={styles.text3}>___</Text>
								<Text style={styles.text3}>______ 20</Text>
								<Text style={styles.text3}>___</Text>
								<Text style={styles.text3}>______ 10</Text>
								<Text style={styles.text3}>___</Text>
								<Text style={styles.text3}>______ 0</Text>
							</View>
						</View>
						<View style={styles.headercontainer}>
						<View>
							<TouchableOpacity onPress={() => this.props.navigation.navigate('First')}>
								<Image
									style={styles.imagestyle}
									source={require('../../Assets/bgimages/backicon.png')}
								/>
							</TouchableOpacity>
						</View>

						<View style={{ paddingLeft: 50 }}>
							<Text style={styles.text}>How old are you?</Text>
						</View>
					</View>
					</View>
					<View style={styles.bottomcontainer}>
						<View>
							<TouchableOpacity onPress={this.NextScreen} >
								<Image
									style={styles.imagestyle}
									source={require('../../Assets/bgimages/arrowforward.png')}
								/>
							</TouchableOpacity>
						</View>
					</View>
				</ImageBackground>
			</View>
		);
	}
}

export default index;
