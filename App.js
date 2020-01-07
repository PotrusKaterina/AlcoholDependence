import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import MainScreen from './app/views/mainScreen/mainScreen';

const App = () => {
  return (
    <View>
      <MainScreen />
    </View>
  );
};

export default App;
