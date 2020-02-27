import React, { useEffect, useState } from 'react';
import { Text, ScrollView } from 'react-native';
import { getFromApiAsync } from '../../services/alchoholApi';
import { styles } from './styles';

const MainScreen = () => {
    const [res, setRes] = useState('');
    const [title, setTitle] = useState('');

    useEffect(() => {
        getFromApi();
    }, [res])

    const getFromApi = async () => {
        let data = await getFromApiAsync();
        let result = {}

        result = await data.json();
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
