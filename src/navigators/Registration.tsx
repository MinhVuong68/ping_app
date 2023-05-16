import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { SSignup } from '../containers'
import SEnterPhoneNumber from '../containers/SSignup/SEnterPhoneNumber'

const Stack = createStackNavigator()
const SignUpNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false, animationEnabled: false }}>
            <Stack.Screen name="SSignup" component={SSignup}/>
            <Stack.Screen name="SEnterPhoneNumber" component={SEnterPhoneNumber}/>
        </Stack.Navigator>
    )
}

export default SignUpNavigator