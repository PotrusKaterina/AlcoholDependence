import { StyleSheet } from 'react-native';
import { config } from '../../services/config';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: config.WHITE,
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
    inputContainer: {
        flex: 1,
        width: '90%',
        flexDirection: 'row',
        alignSelf: 'center',
        padding: 5,
        borderRadius: 10,
        backgroundColor: config.CORALL
    },
    input: {
        flex: 7,
        fontSize: 20,
    },
    flatlistContainer: {
        width: '90%',
        alignSelf: 'center',
        marginTop: 10,
    }
});