import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { SLogin, SSignup } from '../containers'

const Stack = createStackNavigator()
const SignUpNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false, animationEnabled: false }}>
            <Stack.Screen name="SSignup" component={SSignup}/>
            <Stack.Screen name="SLogin" component={SLogin}/>
        </Stack.Navigator>
    )
}

export default SignUpNavigator