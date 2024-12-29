import { View, Text, Image } from 'react-native';
import React from 'react';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';


export default function Customdrawer(props) {
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={{ flex: 1 }}>

                    <Image source={require('../Assets/Images/drawqadianiat.png')} resizeMode='cover'
                        style={{ marginTop: '-2%', width: '110%' }} />
                </View>
                {/* <Text style={{ fontSize: 20, color: 'black', fontFamily: 'arial', fontWeight: '700', marginLeft: 30, marginTop: 5 }}>Tahaa</Text>
                <Text style={{ fontSize: 18, color: 'black', fontFamily: 'arial', fontWeight: '700', marginLeft: 30, marginTop: 2 }}>email@example.com</Text> */}
                {/* <View style={{ borderBottomWidth: 0.5, marginTop: 10 }} /> */}
                {/* <View style={{ borderBottomWidth: 0.5, marginTop: 10 }}> */}

                <DrawerItemList {...props} />
                {/* </View> */}
            </DrawerContentScrollView>
            <View>

            </View>
        </View>
    );
}
