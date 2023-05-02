import React from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { SIntro, SLogin } from '../containers';
import { StatusBar } from 'react-native';
import { Colors } from '../theme';

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
    <NavigationContainer theme={MyTheme}>
      <StatusBar backgroundColor={Colors.statusBar}/>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SIntro" component={SIntro} />
        <Stack.Screen name="SLogin" component={SLogin} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default ApplicationNavigator;
