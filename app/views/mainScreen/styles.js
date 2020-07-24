import { StyleSheet } from 'react-native';
import { config } from '../../services/config';

export const styles = StyleSheet.create({
	container: {
		backgroundColor: config.WHITE,
		flex: 1,
		flexDirection: 'row',
	},
	buttonContainer: {
		flex: 1,
		margin: 5,
		justifyContent: 'center',
	},
	textButton: {
		textAlign: 'center',
		color: config.TITLE_COLOR,
		fontSize: 20,
		marginHorizontal: 20,
	},
	rightButtonContainer: {
		flex: 1
	},
	infoIconContainer: {
		alignItems: 'center'
	}
});