/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

import FloatingScreen from './src/screens/FloatingScreen';
import FlexScreen from './src/screens/FlexScreen';
import AlignSelfScreen from './src/screens/AlignSelfScreen';
import DefaultChildWidthScreen from './src/screens/DefaultChildWidthScreen';
import DynamicScreen from './src/screens/DynamicScreen';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="FloatingScreen" component={FloatingScreen} />
        <Drawer.Screen name="FlexScreen" component={FlexScreen} />
        <Drawer.Screen name="AlignSelfScreen" component={AlignSelfScreen} />
        <Drawer.Screen
          name="DefaultChildWidthScreen"
          component={DefaultChildWidthScreen}
        />
        <Drawer.Screen name="DynamicScreen" component={DynamicScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
