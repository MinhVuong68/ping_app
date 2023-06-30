import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SChangePassword from '../containers/SProfile/SChangePassword';
import { SProfile } from '../containers';
import SEditProfile from '../containers/SProfile/SEditProfile';
import SSupport from '../containers/SProfile/SSupport';

const Stack = createStackNavigator();
const ProfileNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, animationEnabled: false }}>
      <Stack.Screen name="SProfile" component={SProfile} />
      <Stack.Screen name="SChangePassword" component={SChangePassword} />
      <Stack.Screen name="SEditProfile" component={SEditProfile} />
      <Stack.Screen name="SSupport" component={SSupport} />
    </Stack.Navigator>
  );
};

export default ProfileNavigator;
