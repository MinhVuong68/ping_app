import React from "react"
import { createStackNavigator } from "@react-navigation/stack"

import { SLogin } from "../containers"
import SForgotPassword from "../containers/SLogin/SForgotPassword"
import SEnterOTP from "../containers/SLogin/SEnterOTP"

const Stack = createStackNavigator()
const LoginNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false, animationEnabled: false }}>
            <Stack.Screen name="SSignin" component={SLogin}/>
            <Stack.Screen name="SForgotPassword" component={SForgotPassword}/>
            <Stack.Screen name="SEnterOTP" component={SEnterOTP}/>
        </Stack.Navigator>
    )
}

export default LoginNavigator