import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import Login from '../Screens/Login';
// import SplashScreen from '../Screens/SplashScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screens/Home';

// import AsyncStorage from '@react-native-async-storage/async-storage';
import DrawerNav from './DrawerNav';
import Showpdf from '../Screens/Showpdf';
export default function StackNav() {
  const Stack = createNativeStackNavigator()
  const [firstLaunch, setFirstLaunch] = useState(null);
  return (
    <Stack.Navigator initialRouteName='DrawerNav' screenOptions={{ headerShown: false }}>

      <Stack.Screen name="Showpdf" component={Showpdf} />
      <Stack.Screen name="DrawerNav" component={DrawerNav} />

    </Stack.Navigator>

  )
}

