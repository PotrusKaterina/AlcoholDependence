import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../views/splashScreen/splashScreen';
import MainScreen from '../views/mainScreen/mainScreen';
import DetailIngridientScreen from '../views/detailIngridient/detailIngridient';
import SearchCocktailByNameScreen from '../views/searchCocktailByNameScreen/searchCocktailByNameScreen';
import SearchCocktailByIngridientScreen from '../views/searchCocktailByIngridientScreen/searchCocktailByIngridientScreen';

const NavigationMainStack = () => {
    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
            <Stack.Navigator initialRouteName="SplashScreen" >
                <Stack.Screen name="MainScreen" component={MainScreen} options={{ headerShown: false }} />
                <Stack.Screen name="DetailIngridientScreen" component={DetailIngridientScreen} />
                <Stack.Screen name="SearchCocktailByNameScreen" component={SearchCocktailByNameScreen} />
                <Stack.Screen name="SearchCocktailByIngridientScreen" component={SearchCocktailByIngridientScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default NavigationMainStack;