/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import ApplicationNavigator from './navigators/Application';
import SplashScreen from 'react-native-splash-screen';
function App(): JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return <ApplicationNavigator />;
}

export default App;
