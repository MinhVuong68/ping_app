import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { SHome, SOrder, SProfile } from '../containers'
import { Icon } from '../components';
import { Colors } from '../theme';
import ProfileNavigator from './Profile';

const Tab = createBottomTabNavigator()
const MainNavigator = () => {

    const tabbarbottom = [
        {
            name: "SHome",
            component: SHome,
            tabBarLabel: "Trang chủ"
        },
        {
            name: "SOrder",
            component: SOrder,
            tabBarLabel: "Đơn"
        },
        {
            name: "Profile",
            component: ProfileNavigator,
            tabBarLabel: "Cá nhân"
        }
    ]

    const screenOptions = ({route}:any) => ({
        headerShown: false,
        tabBarActiveTintColor: Colors.primary,
        tabBarInActiveTintColor:'#ccc',
        tabBarHideOnKeyboard: true,
        animationEnabled: true,
        tabBarIcon: ({focused,color,size}:any) => {
            let screenName = route.name
            let iconName = "home"
            if(screenName == "SOrder") {
                iconName = "dashboard"
            } else if (screenName==='Profile'){
                iconName = "user"
            }
            return <Icon
                type='AntDesign'
                name={iconName}
                size={25}
                color={focused ? Colors.primary : '#666'}
            />
        }
    }) 
    return (
        <Tab.Navigator initialRouteName="SHome" screenOptions={screenOptions} >
            {
                tabbarbottom.map((item,index) => {
                    return (
                        <Tab.Screen key={index} name={item.name} component={item.component} options={{tabBarLabel: item.tabBarLabel}}/>
                    )
                })
            }
        </Tab.Navigator>
    )
}
export default MainNavigator