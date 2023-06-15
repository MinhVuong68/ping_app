/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ApplicationNavigator from './navigators/Application';
import SplashScreen from 'react-native-splash-screen';
import { Provider } from 'react-redux';

import store from './redux/store';
import { navigate } from './navigators/utils';

function App(): JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  // const checkLoginStatus = async () => {
  //   const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
  //   // Kiểm tra giá trị của isLoggedIn để xác định trạng thái đăng nhập
  //   // Ví dụ:
  //   if (isLoggedIn === 'true') {
  //     navigate('MainNavigation')
  //   } else {
  //     navigate('SLogin')
  //   }
  // };
  return (
    <Provider store={store}>
      <ApplicationNavigator />
    </Provider>
  );
}

export default App;
