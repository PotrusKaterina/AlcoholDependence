import React, { useEffect } from 'react';
import { Text, View, Image } from 'react-native';
import { styles } from './styles';
import Animated, { Easing } from 'react-native-reanimated';


export const SplashScreen = ({ navigation }) => {


	const _transY = new Animated.Value(0);
	const _config = {
		duration: 1000,
		toValue: 180,
		easing: Easing.inOut(Easing.ease),
	};

	const _transX = new Animated.Value(0);
	const textConfig = {
		duration: 1000,
		toValue: 95,
		easing: Easing.inOut(Easing.ease),
	};

	const anim = Animated.timing(_transY, _config);
	const animText = Animated.timing(_transX, textConfig);


	useEffect(() => {
		anim.start();
		animText.start();
		navigation.navigate('MainScreen');
	}, []);

	return (
		<View style={styles.container}>
			<Animated.Image style={[styles.logoImage, { transform: [{ translateY: _transY }] }]} source={require('../../assets/party.png')} />
			<Animated.Text style={[styles.title, { transform: [{ translateX: _transX }] },]}>Alcohol Dependency</Animated.Text>
		</View>
	);
};

export default SplashScreen;
