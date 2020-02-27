import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {SplashScreen} from './app/views/splashScreen/splashScreen';

const App = () => {
  return (
    <NavigationContainer>
      <View>
        <SplashScreen />
      </View>
    </NavigationContainer>
  );
};

export default App;
