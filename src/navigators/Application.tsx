import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SIntro, SLogin } from '../containers';

const Stack = createStackNavigator();
const ApplicationNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SIntro" component={SIntro} />
        <Stack.Screen name="SLogin" component={SLogin} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default ApplicationNavigator;
