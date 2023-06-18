import React from 'react'
import { createStackNavigator } from "@react-navigation/stack"
import { SHome } from '../containers'
import SBooking1 from '../containers/SHome/SBooking1'
import SBooking2 from '../containers/SHome/SBooking2'
import SBooking3 from '../containers/SHome/SBooking3'


const Stack = createStackNavigator()
const HomeNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false,animationEnabled: false}}>
            <Stack.Screen name="SHome" component={SHome}/>
            <Stack.Screen name="SBooking1" component={SBooking1}/>
            <Stack.Screen name="SBooking2" component={SBooking2}/>
            <Stack.Screen name="SBooking3" component={SBooking3}/>
        </Stack.Navigator>
    )
} 
export default HomeNavigator