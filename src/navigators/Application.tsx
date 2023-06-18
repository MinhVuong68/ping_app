import React from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SIntro } from '../containers';
import { StatusBar } from 'react-native';
import { Colors } from '../theme';
import { navigationRef } from './utils';
import SignUpNavigator from './Registration';
import LoginNavigator from './Login';
import MainNavigator from './Main';

const Stack = createStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.white
  },
};
const ApplicationNavigator = () => {
  return (
    <NavigationContainer theme={MyTheme} ref={navigationRef}>
      
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SIntro" component={SIntro}/>
        <Stack.Screen name="SLogin" component={LoginNavigator}/>
        <Stack.Screen name="SRegitration" component={SignUpNavigator}/>
        <Stack.Screen name="MainNavigation" component={MainNavigator}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default ApplicationNavigator;
