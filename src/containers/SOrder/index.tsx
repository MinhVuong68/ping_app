import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import SDelivering from './SDelivering';
import SDeliverd from './SDelivered';
import { Icon } from '../../components';
import { Colors } from '../../theme';

const Tab = createMaterialTopTabNavigator();

const tabbarTop = [
  {
    name: 'SDelivering',
    component: SDelivering,
    tabBarLabel: 'Đang giao',
  },
  {
    name: 'SDeliverd',
    component: SDeliverd,
    tabBarLabel: 'Đã giao',
  },
];

const SOrder = () => {
  const screenOptions = ({ route }: any) => ({
    headerShown: false,
    tabBarActiveTintColor: Colors.blue,
    tabBarInactiveTintColor: '#666',
    tabBarHideOnKeyboard: true,
    animationEnabled: true,
    tabBarIcon: ({ focused, color, size }: any) => {
      let screenName = route.name;
      let iconName = 'cloud-check';
      if (screenName == 'SDelivering') {
        iconName = 'truck-delivery';
      }
      return (
        <Icon
          type="MaterialCommunityIcons"
          name={iconName}
          size={25}
          color={focused ? Colors.blue : '#666'}
        />
      );
    },
  });
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      {tabbarTop.map((item, index) => {
        return (
          <Tab.Screen
            key={index}
            name={item.name}
            component={item.component}
            options={{
              tabBarLabel: item.tabBarLabel,
              tabBarLabelStyle: {
                textTransform: 'none', // Áp dụng chữ thường
              },
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default SOrder;
