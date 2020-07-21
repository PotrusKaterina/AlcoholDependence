import { StyleSheet } from 'react-native';
import { config } from '../../services/config';

export const styles = StyleSheet.create({
	container: {
		backgroundColor: config.BACKGROUND,
	},
	backgraundImage: {
		width: '100%',
		height: '100%',
	},
	text: {
		textAlign: 'center',
		color: config.TEXT_COLOR,
		fontSize: 18,
		marginHorizontal: 20,
	},
	title: {
		alignSelf: 'center',
		color: config.TEXT_SPLASH_TITLE,
		fontSize: 20,
		margin: 40,
	},
});