import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, ScrollView, Alert, } from 'react-native'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login() {

    const [userEmail, setUserEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigation = useNavigation()

    //    const storeData = async () => {
    //         try {
    //           const isLoggedIn=true
    //             const jsonValue=JSON.stringify(isLoggedIn);
    //             await AsyncStorage.setItem('@isLoggedIn', jsonValue)
    //             navigation.navigate('Home')
    //         } catch (error) {
    //           // Error saving data
    //         }
    //     };
    //         const getData = async () => {
    //             try{
    //                 const jsonValue = await AsyncStorage.getItem('@isLoggedIn')
    //                 const json_Value=jsonValue != null? JSON.parse(jsonValue):null;
    //                 console.log('isLoggedIn', json_Value)
    //                 setIsLoggedIn(json_Value)
    //             }
    //             catch(error){

    //             }

    //         }
    //         useEffect(() => {
    //             getData()
    //             isLoggedIn ? navigation.navigate('Home') : null
    //           })

    return (
        <View style={styles.container}>
            <ScrollView>
                <View>
                    <Image source={require('../Assets/Images/logo_design.png')}
                        style={styles.image_size} />
                </View>
                <View style={styles.Log_View}>
                    <Text style={styles.Login_text}>Login </Text>
                    <Text style={styles.pls_text}>Please Sign in to continue</Text>
                </View>

                <View style={styles.Input_View}>
                    <Text style={styles.text_mail}>Email</Text>



                    <TextInput style={styles.Input_text}
                        placeholder="email"
                        placeholderTextColor="#000"
                    // onChangeText={(txt) => { setUserEmail(txt) }}
                    />
                    {userEmail.length <= 1 ? <Text style={styles.text_message}>plz enter some text</Text> : null
                    }
                    <Text style={styles.text_pass}>Password</Text>
                    <TextInput style={styles.Input_textp}
                        placeholder="Password"
                        placeholderTextColor="#000"
                        secureTextEntry={true}
                    // onChangeText={(txt) => { setPassword(txt) }}
                    />

                    {password.length <= 1 ? <Text style={styles.text_message}>plz enter some text</Text> : null
                    }
                </View>
                <View style={styles.button_view}>
                    {/* <TouchableOpacity onPress={() => { storeData() }} */}
                    <TouchableOpacity onPress={navigation.navigate("Home")}
                        style={styles.button} >
                        <Text style={styles.text_button}
                        >Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('ForgotPassword')}>
                        <Text style={styles.text_forget}>Forget password</Text>
                    </TouchableOpacity>
                    <View style={styles.sign_view}>
                        <Text>Don't have an account?</Text>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Signup')}
                        >
                            <Text style={styles.sign_text}>Signup</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginBottom: 10,
        backgroundColor: '#000'
    },
    image_size: {

        alignSelf: 'center',
        alignItems: 'center',
        width: 200,
        height: 300
    },
    Log_View: {
        marginLeft: 20

    },
    image_view: {
        color: '#fff',
        fontSize: 16,
        marginTop: 5,
        marginLeft: 30
    },
    text_mail: {
        fontSize: 18,
        fontWeight: "700",
        marginLeft: "5%",
        // color: "black"
    },
    Login_text: {
        fontSize: 25,
        fontWeight: 'bold',
        fontFamily: 'Arial-bold',

    },
    pls_text: {
        fontSize: 12,
        marginTop: '2%'
    },
    Input_View: {
        marginTop: 5
    },
    Input_text: {
        width: 300,
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 20,
        color: "black",
        marginLeft: "5%",

    },
    text_message: {
        fontSize: 14,
        marginLeft: 30
    },

    text_pass: {
        fontSize: 18,
        marginLeft: "5%",
        marginTop: 10,
        fontWeight: "700",

    },
    Input_textp: {
        width: 300,
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 20,
        color: "black",
        marginLeft: "5%",
        marginBottom: 5
    },
    button_view: {
        marginTop: "8%"

    },
    button: {
        width: 180,
        height: 50,
        backgroundColor: '#0DF5E3',
        borderRadius: 50,
        alignSelf: 'center'
    },
    text_button: {
        fontFamily: 'Bookman Old ',
        fontSize: 22,
        fontWeight: 'bold',
        color: 'black',
        alignSelf: 'center',
        top: 10
    },
    text_forget: {
        marginTop: 10,
        alignSelf: 'center',
        color: '#0DF5E3'
    },
    sign_view: {
        marginTop: 30,
        flexDirection: 'row',
        alignSelf: "center"

    },
    sign_text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#0DF5E3'
    }
})