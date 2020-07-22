import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { config } from '../../services/config';

const MainScreen = ({ navigation }) => {

	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={() => { navigation.navigate('DetailIngridientScreen'); }} style={[{ backgroundColor: config.SKY_BLUE }, styles.buttonContainer]}><Text style={styles.textButton}>Text</Text></TouchableOpacity>
			<View style={styles.rightButtonContainer}>
				<TouchableOpacity onPress={() => { navigation.navigate('SearchCocktailByNameScreen'); }} style={[{ backgroundColor: config.LIGHT_ORANGE }, styles.buttonContainer]}><Text style={styles.textButton}>Text</Text></TouchableOpacity>
				<TouchableOpacity onPress={() => { navigation.navigate('SearchCocktailByIngridientScreen'); }} style={[styles.buttonContainer, { backgroundColor: config.CORALL }]}><Text style={styles.textButton}>Text</Text></TouchableOpacity>
			</View>
		</View>
	);
};

export default MainScreen;
