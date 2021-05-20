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
				
           
            </ScrollView>
		);
	}
}
export default index;

