import 'react-native-gesture-handler';
import { LogBox } from 'react-native';

// Ignore logs from Reanimated 2
LogBox.ignoreLogs(['Reanimated 2']);

import Reanimated from 'react-native-reanimated';
Reanimated.setUpLayoutAnimation();

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/pages/Login';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
