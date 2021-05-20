import React, { Component } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text ,ScrollView} from 'react-native';
import { CheckBox } from 'react-native-elements'; // 0.16.0
import styles from './styles';
class index extends Component {
	state = {
		Status: false,
        gluten: false,
        halal: false,
        lactose: false,
        koshar: false,
        sugar: false,
        vegitarian: false,
        fractose: false,
        vegan: false,
        paloe: false,
        penut:false,
        whole: false,
        Pescetarian: false,
        lectoveg: false


	};

	render() {
		return (
			<ScrollView style={{ alignSelf:'center'}} showsVerticalScrollIndicator={false}>
				<View style={{ flexDirection: 'row', width: 200  }}>
					<View style={{ alignItems:'center'}}>
						<CheckBox
							uncheckedIcon={
								<Image
									style={styles.uncheckedImage}
									source={require('../../../../Assets/bgimages/DietIcons/NothingSpecial.png')}
								/>
							}
                           

							checkedIcon={
								<Image
									style={styles.checkedImage}
									source={require('../../../../Assets/bgimages/DietIcons/NothingSpecial.png')}
								/>
							}
						
							size={60}
							checked={this.state.Status}
							onPress={() => this.setState({ Status: !this.state.Status })}
						/>
                        <Text style={styles.text1}>Nothing Special</Text>
					</View>
					<View style={{ alignItems:'center'}}>
						<CheckBox
							uncheckedIcon={
								<Image
									style={styles.uncheckedImage}
									source={require('../../../../Assets/bgimages/DietIcons/glutenfree.png')}
								/>
							}
							checkedIcon={
								<Image
									style={styles.checkedImage}
									source={require('../../../../Assets/bgimages/DietIcons/glutenfree.png')}
								/>
							}
							// uncheckedColor="blue"
							size={60}
							checked={this.state.gluten}
							onPress={() => this.setState({ gluten: !this.state.gluten })}
						/>
						<Text  style={styles.text1}>Gluten Free</Text>
					</View>
				</View>
			

            {/* //row2 */}
                <View style={{ flexDirection: 'row', marginBottom:10,  }}>
					<View style={{ alignItems:'center'}}>
						<CheckBox
							uncheckedIcon={
								<Image
									style={styles.uncheckedImage}
									source={require('../../../../Assets/bgimages/DietIcons/lactose-free.png')}
								/>
							}
							checkedIcon={
								<Image
									style={styles.checkedImage}
									source={require('../../../../Assets/bgimages/DietIcons/lactose-free.png')}
								/>
							}
							uncheckedColor="blue"
							size={60}
							checked={this.state.lactose}
							onPress={() => this.setState({ lactose: !this.state.lactose })}
						/>
                        <Text  style={styles.text1}>Lactose Freel</Text>
					</View>
					<View style={{ alignItems:'center'}}>
						<CheckBox
							uncheckedIcon={
								<Image
									style={styles.uncheckedImage}
									source={require('../../../../Assets/bgimages/DietIcons/kosher.png')}
								/>
							}
							checkedIcon={
								<Image
									style={styles.checkedImage}
									source={require('../../../../Assets/bgimages/DietIcons/kosher.png')}
								/>
							}
							uncheckedColor="blue"
							size={60}
							checked={this.state.koshar}
							onPress={() => this.setState({ koshar: !this.state.koshar })}
						/>
						<Text  style={styles.text1}>Kosher</Text>
					</View>
				</View>
            



            {/* row 3 */}
            <View style={{ flexDirection: 'row', marginBottom:10,  }}>
					<View style={{ alignItems:'center'}}>
						<CheckBox
							uncheckedIcon={
								<Image
									style={styles.uncheckedImage}
									source={require('../../../../Assets/bgimages/DietIcons/sugar-free.png')}
								/>
							}
							checkedIcon={
								<Image
									style={styles.checkedImage}
									source={require('../../../../Assets/bgimages/DietIcons/sugar-free.png')}
								/>
							}
							uncheckedColor="blue"
							// size={60}
							checked={this.state.sugar}
							onPress={() => this.setState({ sugar: !this.state.sugar })}
						/>
                        <Text  style={styles.text1}>Sugar Free</Text>
					</View>
					<View style={{ alignItems:'center'}}>
						<CheckBox
							uncheckedIcon={
								<Image
									style={styles.uncheckedImage}
									source={require('../../../../Assets/bgimages/DietIcons/vegeterian.png')}
								/>
							}
							checkedIcon={
								<Image
									style={styles.checkedImage}
									source={require('../../../../Assets/bgimages/DietIcons/vegeterian.png')}
								/>
							}
							uncheckedColor="blue"
							// size={60}
							checked={this.state.vegitarian}
							onPress={() => this.setState({ vegitarian: !this.state.vegitarian })}
						/>
						<Text  style={styles.text1}>Vegitarian</Text>
					</View>
				</View>


                {/* row 4 */}

                <View style={{ flexDirection: 'row', marginBottom:10,  }}>
					<View style={{ alignItems:'center'}}>
						<CheckBox
							uncheckedIcon={
								<Image
									style={styles.uncheckedImage}
									source={require('../../../../Assets/bgimages/DietIcons/fructose-free.png')}
								/>
							}
							checkedIcon={
								<Image
									style={styles.checkedImage}
									source={require('../../../../Assets/bgimages/DietIcons/fructose-free.png')}
								/>
							}
							uncheckedColor="blue"
							// size={60}
							checked={this.state.fractose}
							onPress={() => this.setState({ fractose: !this.state.fractose })}
						/>
                        <Text  style={styles.text1}>Fractose Free</Text>
					</View>
					<View style={{ alignItems:'center'}}>
						<CheckBox
							uncheckedIcon={
								<Image
									style={styles.uncheckedImage}
									source={require('../../../../Assets/bgimages/DietIcons/vegan.png')}
								/>
							}
							checkedIcon={
								<Image
									style={styles.checkedImage}
									source={require('../../../../Assets/bgimages/DietIcons/vegan.png')}
								/>
							}
							uncheckedColor="blue"
							// size={60}
							checked={this.state.vegan}
							onPress={() => this.setState({ vegan: !this.state.vegan })}
						/>
						<Text  style={styles.text1}>Vegan</Text>
					</View>
				</View>

                {/* Row 5 */}

                <View style={{ flexDirection: 'row', marginBottom:10,  }}>
					<View style={{ alignItems:'center'}}>
						<CheckBox
							uncheckedIcon={
								<Image
									style={styles.uncheckedImage}
									source={require('../../../../Assets/bgimages/DietIcons/paleo.png')}
								/>
							}
							checkedIcon={
								<Image
									style={styles.checkedImage}
									source={require('../../../../Assets/bgimages/DietIcons/paleo.png')}
								/>
							}
							uncheckedColor="blue"
							// size={60}
							checked={this.state.paloe}
							onPress={() => this.setState({ paloe: !this.state.paloe })}
						/>
                        <Text  style={styles.text1}>Paleo</Text>
					</View>
					<View style={{ alignItems:'center'}}>
						<CheckBox
							uncheckedIcon={
								<Image
									style={styles.uncheckedImage}
									source={require('../../../../Assets/bgimages/DietIcons/whole.png')}
								/>
							}
							checkedIcon={
								<Image
									style={styles.checkedImage}
									source={require('../../../../Assets/bgimages/DietIcons/whole.png')}
								/>
							}
							uncheckedColor="blue"
							// size={60}
							checked={this.state.whole}
							onPress={() => this.setState({ whole: !this.state.whole })}
						/>
						<Text  style={styles.text1}>Whole30</Text>
					</View>
				</View>
              

                <View style={{ flexDirection: 'row', marginBottom:10,  }}>
					<View style={{ alignItems:'center'}}>
						<CheckBox
							uncheckedIcon={
								<Image
									style={styles.uncheckedImage}
									source={require('../../../../Assets/bgimages/DietIcons/pesce.png')}
								/>
							}
							checkedIcon={
								<Image
									style={styles.checkedImage}
									source={require('../../../../Assets/bgimages/DietIcons/pesce.png')}
								/>
							}
							uncheckedColor="blue"
							// size={60}
							checked={this.state.Pescetarian}
							onPress={() => this.setState({ Pescetarian: !this.state.Pescetarian })}
						/>
                        <Text  style={styles.text1}>Pescetarian</Text>
					</View>
					<View style={{ alignItems:'center'}}>
						<CheckBox
							uncheckedIcon={
								<Image
									style={styles.uncheckedImage}
									source={require('../../../../Assets/bgimages/DietIcons/lactoveg.png')}
								/>
							}
							checkedIcon={
								<Image
									style={styles.checkedImage}
									source={require('../../../../Assets/bgimages/DietIcons/lactoveg.png')}
								/>
							}
							uncheckedColor="blue"
							// size={60}
							checked={this.state.lectoveg}
							onPress={() => this.setState({ lectoveg: !this.state.lectoveg })}
						/>
						<Text  style={styles.text1}>Lacto-Vegetarian</Text>
					</View>
				</View>
           
            </ScrollView>
		);
	}
}
export default index;

