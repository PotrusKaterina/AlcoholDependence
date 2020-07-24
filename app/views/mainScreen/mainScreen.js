import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { config } from '../../services/config';
import InfoIcon from '../../assets/svg/icon';
import Document from '../../assets/svg/document';
import Folder from '../../assets/svg/folder';

const MainScreen = ({ navigation }) => {

	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={() => { navigation.navigate('DetailIngridientScreen'); }} style={[{ backgroundColor: config.SKY_BLUE }, styles.buttonContainer]}>
				<View style={styles.infoIconContainer}>
					<InfoIcon height={200} width={200} />
				</View>
				<Text style={styles.textButton}>Info</Text>
			</TouchableOpacity>
			<View style={styles.rightButtonContainer}>
				<TouchableOpacity onPress={() => { navigation.navigate('SearchCocktailByNameScreen'); }} style={[{ backgroundColor: config.LIGHT_ORANGE }, styles.buttonContainer]}>
					<View style={styles.infoIconContainer}>
						<Document height={200} width={200} />
					</View>
					<Text style={styles.textButton}>Name</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => { navigation.navigate('SearchCocktailByIngridientScreen'); }} style={[styles.buttonContainer, { backgroundColor: config.CORALL }]}>
					<View style={styles.infoIconContainer}>
						<Folder height={200} with={200} />
					</View>
					<Text style={styles.textButton}>Text</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default MainScreen;
