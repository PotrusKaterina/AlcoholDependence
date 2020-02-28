import { StyleSheet } from 'react-native';
import { config } from '../../services/config';

export const styles = StyleSheet.create({
	container: {
		height: '100%',
	},
	logoImage: {
		alignSelf: 'center',
		width: 200,
		height: 200,
	},
	title: {
		fontWeight: 'bold',
		justifyContent: 'center',
		color: config.TEXT_SPLASH_TITLE,
		fontSize: 20,
		marginVertical: 180,
		alignContent: 'center'
	},
});