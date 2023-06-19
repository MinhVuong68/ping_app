import React from 'react'
import { createStackNavigator } from "@react-navigation/stack"
import { SHome } from '../containers'
import SBooking1 from '../containers/SHome/SBooking/SBooking1'
import SBooking2 from '../containers/SHome/SBooking/SBooking2'
import SBooking3 from '../containers/SHome/SBooking/SBooking3'
import SOrderReview from '../containers/SHome/SBooking/SOrderReview'
import SListDeliver from '../containers/SHome/SBooking/SListDeliver'
import SOrderResult from '../containers/SHome/SBooking/SOrderResult'


const Stack = createStackNavigator()
const HomeNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false,animationEnabled: false}}>
            <Stack.Screen name="SHome" component={SHome}/>
            <Stack.Screen name="SBooking1" component={SBooking1}/>
            <Stack.Screen name="SBooking2" component={SBooking2}/>
            <Stack.Screen name="SBooking3" component={SBooking3}/>
            <Stack.Screen name="SOrderReview" component={SOrderReview}/>
            <Stack.Screen name="SListDeliver" component={SListDeliver}/>
            <Stack.Screen name="SOrderResult" component={SOrderResult}/>
        </Stack.Navigator>
    )
} 
export default HomeNavigator