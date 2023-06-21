import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { SHome, SNotification, SOrder, SProfile } from '../containers'
import { Icon } from '../components';
import { Colors } from '../theme';
import ProfileNavigator from './Profile';
import HomeNavigator from './Home';
import OrderNavigator from './Order';

const Tab = createBottomTabNavigator()
const MainNavigator = () => {

    const tabbarbottom = [
        {
            name: "Home",
            component: HomeNavigator,
            tabBarLabel: "Trang chủ"
        },
        {
            name: "Order",
            component: OrderNavigator,
            tabBarLabel: "Đơn hàng"
        },
        {
            name: "SNotification",
            component: SNotification,
            tabBarLabel: "Thông báo"
        },
        {
            name: "Profile",
            component: ProfileNavigator,
            tabBarLabel: "Tài khoản"
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
            if(screenName == "Order") {
                iconName = "dashboard"
            } else if (screenName =='Profile'){
                iconName = "user"
            } else if (screenName == "SNotification"){
                iconName = "bells"
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