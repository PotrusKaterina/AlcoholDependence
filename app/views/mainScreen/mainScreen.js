import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { config } from '../../services/config';

const MainScreen = ({ navigation }) => {

	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={() => { navigation.navigate('DetailIngridientScreen') }} style={[{ backgroundColor: config.BACKGROUND }, styles.buttonContainer]}><Text style={styles.textButton}>Text</Text></TouchableOpacity>
			<View style={styles.rightButtonContainer}>
				<TouchableOpacity style={[{ backgroundColor: 'yellow' }, styles.buttonContainer]}><Text style={styles.textButton}>Text</Text></TouchableOpacity>
				<TouchableOpacity style={[styles.buttonContainer, { backgroundColor: 'pink' }]}><Text style={styles.textButton}>Text</Text></TouchableOpacity>
			</View>
		</View>
	);
};

export default MainScreen;
