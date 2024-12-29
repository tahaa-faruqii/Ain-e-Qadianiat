import { View, Text } from 'react-native'
import React from 'react'
import SplashScreen from './Screens/SplashScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StackNav from './Navigation/StackNav';
import Login from './Screens/Login';
import DrawerNav from './Navigation/DrawerNav';
import Showpdf from './Screens/Showpdf';
import AboutSerat from './DrawerScreen/AboutSerat';

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <StackNav />
    </NavigationContainer>
  )
}