import * as React from 'react'
import firebase from '@react-native-firebase/app'
import auth from '@react-native-firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBbp05ZsqE2Apt3qP6tkTAT3pIVx9AYKIs",
    authDomain: "ping-5ccd1.firebaseapp.com",
    projectId: "ping-5ccd1",
    storageBucket: "ping-5ccd1.appspot.com",
    messagingSenderId: "482812706701",
    appId: "1:482812706701:web:a26868ca519a300d0607c4",
    measurementId: "G-5PGQRR9FRZ"
}

if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export default () => {
    return { firebase,auth }
}