import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../views/splashScreen/splashScreen';
import MainScreen from '../views/mainScreen/mainScreen';


const NavigationMainStack = () => {
    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="SplashScreen">
                <Stack.Screen name="SplashScreen" component={SplashScreen} />
                <Stack.Screen name="MainScreen" component={MainScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default NavigationMainStack;