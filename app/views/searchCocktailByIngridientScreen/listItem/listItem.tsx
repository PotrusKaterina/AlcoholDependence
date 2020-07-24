import React, { } from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
// import { getCocktailByIngridient } from '../../services/alchoholApi';
// import { styles } from './styles';

const ListItem = ({ item }) => {

    return (
        <View style={styles.container}>
            <Text style={styles.name}>{item.item.strDrink}</Text>
        </View>
    );
};

export default ListItem;
