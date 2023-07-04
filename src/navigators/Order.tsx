import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SOrder } from '../containers';
import SOrderDetail from '../containers/SOrder/SOrderDetail';
import SDeliveryTracking from '../containers/SOrder/SDeliveryTracking';

const Stack = createStackNavigator();

const OrderNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false}}>
      <Stack.Screen name="SOrder" component={SOrder} />
      <Stack.Screen name="SOrderDetail" component={SOrderDetail} />
      <Stack.Screen name="SDeliveryTracking" component={SDeliveryTracking} />
    </Stack.Navigator>
  );
};
export default OrderNavigator;
