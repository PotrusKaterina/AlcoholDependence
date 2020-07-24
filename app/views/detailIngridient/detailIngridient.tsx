import React, { useState } from 'react';
import { Text, ScrollView, TextInput, View, TouchableOpacity } from 'react-native';
import { getIngridient } from '../../services/alchoholApi';
import { styles } from './styles';
import { config } from '../../services/config';

const DetailIngridientScreen = () => {
    const [res, setRes] = useState('');
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    const searchIngridient = async () => {
        if (text) {
            let data = await getIngridient(text);
            let result = {};

            result = await data.json();
            setRes(result.ingredients[0].strDescription.toString());
            setTitle(result.ingredients[0].strType.toString())
            console.log('result.ingredients[0].strType.toString()', result.ingredients[0].strType.toString())
        }
    }

    const setTextState = (text) => {
        setText(text);
        console.log('text', text)
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput style={{ flex: 5 }} placeholder={'Search your ingridient'} onChange={(value) => setTextState(value.nativeEvent.text)} />
                <TouchableOpacity onPress={searchIngridient} style={{ backgroundColor: 'white', width: 20, flex: 1 }} />
            </View>
            <Text style={styles.title}>{title}</Text>
            <Text style={[styles.text, { backgroundColor: res ? config.SKY_BLUE : null }]}>{res}</Text>
        </ScrollView>
    );
};

export default DetailIngridientScreen;
