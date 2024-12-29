

import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import FIcon from 'react-native-vector-icons/Feather';
import CustomHeader from '../component/CustomHeader';

export default function Home({ navigation }) {

    return (
        <View style={styles.container}>
            <View style={styles.headercontainer}>
                <View style={styles.backButton}>
                    <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                        <Icon name="menu" color={'#fff'} size={22} />
                    </TouchableOpacity>
                    <Text style={styles.text}>Ain e Qadianiat</Text>
                </View>

            </View>



            <View style={{ backgroundColor: '#FFF7EE', }}>

                {/* <Image source={require('../Assets/Images/k.png')} resizeMode='contain' */}
                {/* style={{ alignSelf: "center", width: '100%', marginTop: '5%' }} /> */}
            </View>

            <ImageBackground source={require('../Assets/Images/bg.png')} style={styles.image} >
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate('Showpdf')} style={styles.button}>
                        <Image source={require('../Assets/Images/groupbutton.png')} style={styles.buttonImage} />

                    </TouchableOpacity>
                </View>



            </ImageBackground>


        </View >











    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headercontainer: {
        backgroundColor: '#22577A',
        height: 80,
        justifyContent: 'center',
        position: 'relative',
    },
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginLeft: '-20%'
    },
    text: {
        color: '#fff',
        fontSize: 21,
        fontWeight: '700',
        // textAlign: 'center',
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        width: '100%',
        height: '100%',
    },
    button: {

        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        marginLeft: '12%',
        marginTop: '-15%'

    },
    buttonImage: {
        borderRadius: 20,
        height: '68%',
        width: '90%',
        // marginBottom: '8%'

    },
    texticon: {


        width: 158,
        height: 24,

        color: "#E6E6E6",
        // fontFamily: 'Poppins',s
        fontStyle: 'normal',
        fontSize: 400,
        fontSize: 16,
        // line-height: 24px;
    },
    botombar: {
        flex: 1,
        width: 360,
        height: 420,
        backgroundColor: '#22577A',
        alignSelf: 'center',
        top: 546,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        right: 34

    },
    texttoday: {
        color: "#E6E6E6",
        top: 60,
        fontSize: 20,
        left: 40,
        borderBottomWidth: 2,
        borderBottomColor: '#E6E6E6',
        width: 200
    }

})