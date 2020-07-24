import React, { useState, useEffect } from 'react';
import { ScrollView, TextInput, View, TouchableOpacity, FlatList } from 'react-native';
import { getCocktailByIngridient } from '../../services/alchoholApi';
import { styles } from './styles';
import ListItem from './listItem/listItem';
import FindInFile from '../../assets/svg/findInFile';
import { AppDispatch } from '../../services/redux/store';
import { useDispatch, shallowEqual, useSelector } from 'react-redux';
import { createSelector } from 'reselect'
import { addIngridient } from '../../services/redux/reducersActions/reducer/actions';

const SearchCocktailByIngridientScreen = () => {
    const [res, setRes] = useState('');
    const [text, setText] = useState('');
    const dispatch: AppDispatch = useDispatch();

    useEffect(() => { 

    }, [])

    const searchIngridient = async () => {
        try {
            if (text) {
                let data = await getCocktailByIngridient(text);
                let result = {};
                // console.log('result.ingredients[0].strType.toString()', data)
                console.log(data)

                result = await data.json();

                setRes(result);
                console.log(result)
                if (result) {
                    dispatch(addIngridient(text));
                }
                // console.log('result.ingredients[0].strType.toString()', result)
            }
        } catch (error) {
            alert('Can`t find any cocktaiol by this ingridient');
            setRes('');
            console.warn('searchIngridient', error);
        }

    }

    const setTextState = (text) => {
        setText(text);
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder={'Search your cocktail by ingridient'} onChange={(value) => setTextState(value.nativeEvent.text)} />
                <TouchableOpacity onPress={searchIngridient} style={{ backgroundColor: 'white', width: 20, flex: 1 }} />
            </View>
            {res ? <View style={styles.flatlistContainer}>
                <FlatList data={res.drinks} renderItem={(item) => <ListItem {...{ item }} />} />
            </View> : <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <FindInFile height={200} width={200} />
                </View>}
        </ScrollView>
    );
};

export default SearchCocktailByIngridientScreen;
