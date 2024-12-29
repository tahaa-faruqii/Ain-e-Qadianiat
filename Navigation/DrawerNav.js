import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../Screens/Home';
// import Inbox from '../DrawerScreen/Inbox'
// import Outbox from '../DrawerScreen/Outbox'
// import Trash from '../DrawerScreen/Trash'
// import Spam from '../DrawerScreen/Spam'
// import Update from '../DrawerScreen/Update'
import Customdrawer from "../component/Customdrawer.1";
import Icons from 'react-native-vector-icons/MaterialIcons';
import AntIcons from 'react-native-vector-icons/AntDesign';
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FIcon from 'react-native-vector-icons/FontAwesome';

import DownloadCourse from '../DrawerScreen/DownloadCourse';
import MoreApps from '../DrawerScreen/MoreApps';
import AboutSerat from '../DrawerScreen/AboutSerat';
import ConnectWithSeraht from '../DrawerScreen/ConnectWithSeraht';
import SubcribeWhats from '../DrawerScreen/SubcribeWhats';
import Help from '../DrawerScreen/Help';
import Share from '../DrawerScreen/Share';
import BuyNow from '../DrawerScreen/BuyNow';



const Drawer = createDrawerNavigator();


export default function DrawerNav() {

    return (
        <Drawer.Navigator initialRouteName='Home' drawerContent={(props) => <Customdrawer {...props} />}
            screenOptions={{
                headerShown: false,
                drawerActiveBackgroundColor: '#FFFFFF ',
                drawerActiveTintColor: '#217E8F',
                // drawerInactiveTintColor: '#333',
                drawerLabelStyle: {
                    // marginLeft: -20,
                    fontFamily: 'arial',
                    fontSize: 18,
                    fontWeight: 'bold'
                }
            }}>
            <Drawer.Screen name="Aina E Qadianiat" component={Home} options={{
                drawerIcon: ({ focused, size }) => (
                    <TouchableOpacity>
                        <Image
                            source={require('../Assets/Images/quran.png')}
                            style={[focused ? '#217E8F' : '#808080', { height: size, width: size, marginTop: '3%' }]}
                        />
                    </TouchableOpacity>
                )
            }} />
            {/* <Drawer.Screen name="Download Course" component={DownloadCourse} options={{
                drawerIcon: ({ focused, size }) => (
                    <Image
                        source={require('../Assets/downloading.png')}
                        style={[focused ? '#217E8F' : '#808080', { height: size, width: size, marginTop: '3%' }]}
                    />
                )
            }} /> */}
            {/* <Drawer.Screen name="More Apps" component={MoreApps} options={{
                drawerIcon: ({ focused, size }) => (
                    <Image
                        source={require('../Assets/Images/app.png')}
                        style={[focused ? '#217E8F' : '#808080', { height: size, width: size }]}
                    />
                )
            }} /> */}
            <Drawer.Screen name="About Seeraht" component={AboutSerat} options={{
                drawerIcon: ({ focused, size }) => (
                    <Image
                        source={require('../Assets/Images/information.png')}
                        style={[focused ? '#217E8F' : '#808080', { height: size, width: size }]}
                    />
                )
            }} />
            {/* <Drawer.Screen name="Connect With Seeraht" component={ConnectWithSeraht} options={{
                drawerIcon: ({ focused, size }) => (
                    <Image
                        source={require('../Assets/link.png')}
                        style={[focused ? '#217E8F' : '#808080', { height: size, width: size }]}
                    />
                )
            }} /> */}
            <Drawer.Screen name="Subcirbe For WhatsApp" component={SubcribeWhats} options={{
                drawerIcon: ({ color }) => (
                    <FIcon name="whatsapp" size={26} color={color} />
                )
            }} />
            <Drawer.Screen name="Help Seeraht" component={Help} options={{
                drawerIcon: ({ focused, size }) => (
                    <Image
                        source={require('../Assets/Images/handshake.png')}
                        style={[focused ? '#217E8F' : '#808080', { height: size, width: size }]}
                    />
                )
            }} />
            {/* <Drawer.Screen name="Share" component={Share} options={{
                drawerIcon: ({ color }) => (
                    <MCIcons name="share-variant" size={26} color={color} />
                )
            }} /> */}
            <Drawer.Screen name="Buy Now" component={BuyNow} options={{
                drawerIcon: ({ focused, size }) => (
                    <Image
                        source={require('../Assets/Images/cart.png')}
                        style={[focused ? '#217E8F' : '#808080', { height: size, width: size }]}
                    />
                )
            }} />
            <Drawer.Screen name="Submit Feedback" component={Help} options={{
                drawerIcon: ({ focused, size }) => (
                    <Image
                        source={require('../Assets/Images/comment.png')}
                        style={[focused ? '#217E8F' : '#808080', { height: size, width: size }]}
                    />
                )
            }} />
        </Drawer.Navigator>
    )
}