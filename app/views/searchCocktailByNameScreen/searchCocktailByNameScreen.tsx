import React, { useState } from 'react';
import { Text, ScrollView, TextInput, View, TouchableOpacity } from 'react-native';
import { getCocktailByName } from '../../services/alchoholApi';
import { styles } from './styles';

const SearchCocktailByNameScreen = () => {
    const [res, setRes] = useState('');
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    const searchIngridient = async () => {
        if (text) {
            let data = await getCocktailByName(text);
            let result = {};
            console.log('result.ingredients[0].strType.toString()', data)

            result = await data.json();
            // setRes(result.ingredients[0].strDescription.toString());
            // setTitle(result.ingredients[0].strType.toString())
            console.log('result.ingredients[0].strType.toString()', result)
        }
    }

    const setTextState = (text) => {
        setText(text);
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput style={{ flex: 5 }} placeholder={'Search your cocktail by name'} onChange={(value) => setTextState(value.nativeEvent.text)} />
                <TouchableOpacity onPress={searchIngridient} style={{ backgroundColor: 'white', width: 20, flex: 1 }} />
            </View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.text}>{res}</Text>
        </ScrollView>
    );
};

export default SearchCocktailByNameScreen;
