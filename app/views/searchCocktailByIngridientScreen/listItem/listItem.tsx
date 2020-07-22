import React, { useState } from 'react';
import { Text, ScrollView, TextInput, View, TouchableOpacity, FlatList } from 'react-native';
// import { getCocktailByIngridient } from '../../services/alchoholApi';
// import { styles } from './styles';

const ListItem = ({ item }) => {
    const [res, setRes] = useState('');
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    // const searchIngridient = async () => {
    //     if (text) {
    //         let data = await getCocktailByIngridient(text);
    //         let result = {};
    //         // console.log('result.ingredients[0].strType.toString()', data)

    //         result = await data.json();
    //         setRes(result);
    //         // setTitle(result.ingredients[0].strType.toString())
    //         console.log('result.ingredients[0].strType.toString()', result)
    //     }
    // }

    // const setTextState = (text) => {
    //     setText(text);
    // };
    console.log('item.strDrink', item.item.strDrink)

    return (
        <View >
            <Text >{item.item.strDrink}</Text>
        </View>
    );
};

export default ListItem;
