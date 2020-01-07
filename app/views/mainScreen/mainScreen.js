

import React, { useEffect, useState } from 'react';
import { View, Text, } from 'react-native';
import { getFromApiAsync } from '../../services/alchoholApi';
import { styles } from './styles';

const MainScreen = () => {
    const [res, setRes] = useState('');

    useEffect(() => {
        getFromApi();
        console.log('render')
    }, [res])

    const getFromApi = async () => {
        let data = await getFromApiAsync();
        let result = {}

        result = await data.json();
        console.log('result', result.ingredients[0].strDescription)
        setRes (result.ingredients[0].strDescription.toString());
    }


    return (
        <View style={styles.container}>
            <Text style={styles.text}>{res}</Text>
        </View>
    );
};

export default MainScreen;
