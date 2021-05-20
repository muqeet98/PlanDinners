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
			nothingsp: false,
			gluten: false,
			halal: false,
			lactose: false,
			koshar: false,
			sugar: false,
			vegitarian: false,
			fractose: false,
			vegan: false,
			paloe: false,
			peanut:false,
			whole: false,
			Pescetarian: false,
			lectoveg: false
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
							source={require('../../../Assets/bgimages/DietIcons/lactose.png')}
						/>
					}
					checkedIcon={
						<Image
							style={{ width: 60, height: 50 }}
							source={require('../../../Assets/bgimages/DietIcons/sugar.png')}
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
				 <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={styles.colmn1}></View>

            <ScrollView style={styles.colmn2} showsVerticalScrollIndicator={false}>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.ButonContainer}>
                  <TouchableOpacity
                    style={styles.tochablestyle}
                    onPress={() => this.setState({nothingsp: !this.state.nothingsp})}>
                    {this.state.nothingsp ? (
                      <View>
                        <View style={styles.itemcontainer}>
                          <Image
                            style={styles.imageactive}
                            source={require('../../../Assets/bgimages/DietIcons/nothingsp.png')}
                          />
                        </View>

                        <View style={styles.textcontainer}>
                          <Text style={styles.activetext}>Nothing Special</Text>
                        </View>
                      </View>
                    ) : (
                      <View>
                        <View style={styles.itemInactivecontainer}>
                          <Image
                            style={styles.imageInactive}
                            source={require('../../../Assets/bgimages/DietIcons/nothingsp.png')}
                          />
                        </View>
                        <View style={styles.textcontainer}>
                          <Text style={styles.inactivetext}>Nothing Special</Text>
                        </View>
                      </View>
                    )}
                  </TouchableOpacity>
                </View>
                <View style={styles.ButonContainer}>
                  <TouchableOpacity
                    style={styles.tochablestyle}
                    onPress={() => this.setState({gluten: !this.state.gluten})}>
                    {this.state.gluten ? (
                      <View>
                        <View style={styles.itemcontainer}>
                          <Image
                            style={styles.imageactive}
                            source={require('../../../Assets/bgimages/DietIcons/gluten.png')}
                          />
                        </View>

                        <View style={styles.textcontainer}>
                          <Text style={styles.activetext}>Gluten Free</Text>
                        </View>
                      </View>
                    ) : (
                      <View>
                        <View style={styles.itemInactivecontainer}>
                          <Image
                            style={styles.imageInactive}
                            source={require('../../../Assets/bgimages/DietIcons/gluten.png')}
                          />
                        </View>
                        <View style={styles.textcontainer}>
                          <Text style={styles.inactivetext}>Gluten Free</Text>
                        </View>
                      </View>
                    )}
                  </TouchableOpacity>
                </View>
              </View>

              {/* Row  2        +++++++++++++++++++++++++ */}

    

			  <View style={{flexDirection: 'row'}}>
                <View style={styles.ButonContainer}>
                  <TouchableOpacity
                    style={styles.tochablestyle}
                    onPress={() => this.setState({halal: !this.state.halal})}>
                    {this.state.halal ? (
                      <View>
                        <View style={styles.itemcontainer}>
                          <Image
                            style={styles.imageactive}
                            source={require('../../../Assets/bgimages/DietIcons/halal.png')}
                          />
                        </View>

                        <View style={styles.textcontainer}>
                          <Text style={styles.activetext}>halal</Text>
                        </View>
                      </View>
                    ) : (
                      <View>
                        <View style={styles.itemInactivecontainer}>
                          <Image
                            style={styles.imageInactive}
                            source={require('../../../Assets/bgimages/DietIcons/halal.png')}
                          />
                        </View>
                        <View style={styles.textcontainer}>
                          <Text style={styles.inactivetext}>Halal</Text>
                        </View>
                      </View>
                    )}
                  </TouchableOpacity>
                </View>
                <View style={styles.ButonContainer}>
                  <TouchableOpacity
                    style={styles.tochablestyle}
                    onPress={() => this.setState({lactose: !this.state.lactose})}>
                    {this.state.lactose ? (
                      <View>
                        <View style={styles.itemcontainer}>
                          <Image
                            style={styles.imageactive}
                            source={require('../../../Assets/bgimages/DietIcons/lactose.png')}
                          />
                        </View>

                        <View style={styles.textcontainer}>
                          <Text style={styles.activetext}>Lactose Free</Text>
                        </View>
                      </View>
                    ) : (
                      <View>
                        <View style={styles.itemInactivecontainer}>
                          <Image
                            style={styles.imageInactive}
                            source={require('../../../Assets/bgimages/DietIcons/lactose.png')}
                          />
                        </View>
                        <View style={styles.textcontainer}>
                          <Text style={styles.inactivetext}>Lactose Free</Text>
                        </View>
                      </View>
                    )}
                  </TouchableOpacity>
                </View>
              </View>
           
		   


		   {/* Row 3   =============== */}


		   <View style={{flexDirection: 'row'}}>
                <View style={styles.ButonContainer}>
                  <TouchableOpacity
                    style={styles.tochablestyle}
                    onPress={() => this.setState({koshar: !this.state.koshar})}>
                    {this.state.koshar ? (
                      <View>
                        <View style={styles.itemcontainer}>
                          <Image
                            style={styles.imageactive}
                            source={require('../../../Assets/bgimages/DietIcons/koshar.png')}
                          />
                        </View>

                        <View style={styles.textcontainer}>
                          <Text style={styles.activetext}>Koshar</Text>
                        </View>
                      </View>
                    ) : (
                      <View>
                        <View style={styles.itemInactivecontainer}>
                          <Image
                            style={styles.imageInactive}
                            source={require('../../../Assets/bgimages/DietIcons/koshar.png')}
                          />
                        </View>
                        <View style={styles.textcontainer}>
                          <Text style={styles.inactivetext}>Koshar</Text>
                        </View>
                      </View>
                    )}
                  </TouchableOpacity>
                </View>
                <View style={styles.ButonContainer}>
                  <TouchableOpacity
                    style={styles.tochablestyle}
                    onPress={() => this.setState({sugar: !this.state.sugar})}>
                    {this.state.sugar ? (
                      <View>
                        <View style={styles.itemcontainer}>
                          <Image
                            style={styles.imageactive}
                            source={require('../../../Assets/bgimages/DietIcons/sugar.png')}
                          />
                        </View>

                        <View style={styles.textcontainer}>
                          <Text style={styles.activetext}>Sugar Free</Text>
                        </View>
                      </View>
                    ) : (
                      <View>
                        <View style={styles.itemInactivecontainer}>
                          <Image
                            style={styles.imageInactive}
                            source={require('../../../Assets/bgimages/DietIcons/sugar.png')}
                          />
                        </View>
                        <View style={styles.textcontainer}>
                          <Text style={styles.inactivetext}>Sugar Free</Text>
                        </View>
                      </View>
                    )}
                  </TouchableOpacity>
                </View>
              </View>
           


		   {/* Row 4=============== */}


		   <View style={{flexDirection: 'row'}}>
                <View style={styles.ButonContainer}>
                  <TouchableOpacity
                    style={styles.tochablestyle}
                    onPress={() => this.setState({vegitarian: !this.state.vegitarian})}>
                    {this.state.vegitarian ? (
                      <View>
                        <View style={styles.itemcontainer}>
                          <Image
                            style={styles.imageactive}
                            source={require('../../../Assets/bgimages/DietIcons/vegitarian.png')}
                          />
                        </View>

                        <View style={styles.textcontainer}>
                          <Text style={styles.activetext}>Vegitarian</Text>
                        </View>
                      </View>
                    ) : (
                      <View>
                        <View style={styles.itemInactivecontainer}>
                          <Image
                            style={styles.imageInactive}
                            source={require('../../../Assets/bgimages/DietIcons/vegitarian.png')}
                          />
                        </View>
                        <View style={styles.textcontainer}>
                          <Text style={styles.inactivetext}>Vegitarian</Text>
                        </View>
                      </View>
                    )}
                  </TouchableOpacity>
                </View>
                <View style={styles.ButonContainer}>
                  <TouchableOpacity
                    style={styles.tochablestyle}
                    onPress={() => this.setState({fractose: !this.state.fractose})}>
                    {this.state.fractose ? (
                      <View>
                        <View style={styles.itemcontainer}>
                          <Image
                            style={styles.imageactive}
                            source={require('../../../Assets/bgimages/DietIcons/fractose.png')}
                          />
                        </View>

                        <View style={styles.textcontainer}>
                          <Text style={styles.activetext}>Fractose Free</Text>
                        </View>
                      </View>
                    ) : (
                      <View>
                        <View style={styles.itemInactivecontainer}>
                          <Image
                            style={styles.imageInactive}
                            source={require('../../../Assets/bgimages/DietIcons/fractose.png')}
                          />
                        </View>
                        <View style={styles.textcontainer}>
                          <Text style={styles.inactivetext}>Fractose Free</Text>
                        </View>
                      </View>
                    )}
                  </TouchableOpacity>
                </View>
              </View>
           

		   {/* Row 5     ===================== */}

		   <View style={{flexDirection: 'row'}}>
                <View style={styles.ButonContainer}>
                  <TouchableOpacity
                    style={styles.tochablestyle}
                    onPress={() => this.setState({vegan: !this.state.vegan})}>
                    {this.state.vegan ? (
                      <View>
                        <View style={styles.itemcontainer}>
                          <Image
                            style={styles.imageactive}
                            source={require('../../../Assets/bgimages/DietIcons/vegan.png')}
                          />
                        </View>

                        <View style={styles.textcontainer}>
                          <Text style={styles.activetext}>Vegan</Text>
                        </View>
                      </View>
                    ) : (
                      <View>
                        <View style={styles.itemInactivecontainer}>
                          <Image
                            style={styles.imageInactive}
                            source={require('../../../Assets/bgimages/DietIcons/vegan.png')}
                          />
                        </View>
                        <View style={styles.textcontainer}>
                          <Text style={styles.inactivetext}>Vegan</Text>
                        </View>
                      </View>
                    )}
                  </TouchableOpacity>
                </View>
                <View style={styles.ButonContainer}>
                  <TouchableOpacity
                    style={styles.tochablestyle}
                    onPress={() => this.setState({fractose: !this.state.fractose})}>
                    {this.state.fractose ? (
                      <View>
                        <View style={styles.itemcontainer}>
                          <Image
                            style={styles.imageactive}
                            source={require('../../../Assets/bgimages/DietIcons/fractose.png')}
                          />
                        </View>

                        <View style={styles.textcontainer}>
                          <Text style={styles.activetext}>Fractose Free</Text>
                        </View>
                      </View>
                    ) : (
                      <View>
                        <View style={styles.itemInactivecontainer}>
                          <Image
                            style={styles.imageInactive}
                            source={require('../../../Assets/bgimages/DietIcons/fractose.png')}
                          />
                        </View>
                        <View style={styles.textcontainer}>
                          <Text style={styles.inactivetext}>Fractose Free</Text>
                        </View>
                      </View>
                    )}
                  </TouchableOpacity>
                </View>
              </View>
           
		    </ScrollView>

            <View style={styles.colmn3}>
             
                  <TouchableOpacity onPress={this.NextScreen}>
                    <Image
                      style={styles.imagestyle}
                      source={require('../../../Assets/bgimages/arrowforward.png')}
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

const Data = [
	{
		id: 1,
		name: 'Nothing Special',
		image: '../../../Assets/bgimages/DietIcons/Nothingsp.png',
		image2: '../../../Assets/bgimages/DietIcons/halal.png'
	},
	{
		id: 2,
		name: 'Nothing Special',
		image: '../../../Assets/bgimages/DietIcons/kosher@3x.png',
		image2: '../../../Assets/bgimages/DietIcons/lactose-free.png'
	}
];
