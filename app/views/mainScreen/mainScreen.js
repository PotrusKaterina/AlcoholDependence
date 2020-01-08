

import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, } from 'react-native';
import { getFromApiAsync } from '../../services/alchoholApi';
import { styles } from './styles';

const MainScreen = () => {
    const [res, setRes] = useState('');
    const [title, setTitle] = useState('');

    useEffect(() => {
        getFromApi();
        console.log('render')
    }, [res])

    const getFromApi = async () => {
        let data = await getFromApiAsync();
        let result = {}

        result = await data.json();
        console.log('result', result.ingredients[0])
        setRes(result.ingredients[0].strDescription.toString());
        setTitle(result.ingredients[0].strType.toString())
    }


    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.text}>{res}</Text>
        </ScrollView>
    );
};

export default MainScreen;
