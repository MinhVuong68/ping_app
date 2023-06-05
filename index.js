/**
 * @format
 */
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import setup from './src/configs/firebase.config'



AppRegistry.registerComponent(appName, () => App);
