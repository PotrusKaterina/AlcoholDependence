import { StyleSheet } from 'react-native';
import { config } from '../../../services/config';

export const styles = StyleSheet.create({
    container: {
        borderColor: config.CORALL,
        borderWidth: 6,
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
        height: 60,
        justifyContent: 'center',
    },
    name: {
        fontSize: 20,
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
    inputContainer: {
        flex: 1,
        width: '90%',
        flexDirection: 'row',
        alignSelf: 'center',
        padding: 5,
        borderRadius: 10,
        backgroundColor: config.SKY_BLUE_DARKER
    }
});