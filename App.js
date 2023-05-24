import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator1 from './Navigations/StackNavigator1';
import  AppContext  from './Screens/HomeScreen';
//import BottomTabNavigator1 from './Navigations/BottomTabNavigator1';
import NavigationDrawer from './Navigations/NavigationDrawer'


export default function App() {
  return (
        <NavigationDrawer/>
  );
}

