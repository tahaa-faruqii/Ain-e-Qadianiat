import React, { useEffect, useRef } from 'react'
import { Animated, Dimensions, Image, Text, View } from "react-native";
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';

// Logo....
// import Logo from '../Assets/andriodsplash.png';
// import Home from './Home';
import Login from './Login';


const BGColor = "#4D4A95"

export default function SplashScreen() {

    // SafeArea Value...


    const edges = useSafeAreaInsets();

    // Animation Values....
    const startAnimation = useRef(new Animated.Value(0)).current;

    // Scaling Down Both logo and Title...
    const scaleLogo = useRef(new Animated.Value(1)).current;
    const scaleTitle = useRef(new Animated.Value(1)).current;

    // Offset Animation....
    const moveLogo = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
    const moveTitle = useRef(new Animated.ValueXY({ x: 0, y: 0.5 })).current;

    // Animating COntent...
    const contentTransition = useRef(new Animated.Value(Dimensions.get('window').height)).current;

    // Animation Done....
    useEffect(() => {

        // Starting Animation after 500ms....
        setTimeout(() => {

            // Parallel Animation...
            Animated.parallel([
                Animated.timing(
                    startAnimation,
                    {
                        // For same Height for non safe Area Devices...
                        toValue: -Dimensions.get('window').height + (edges.top + 91),
                        useNativeDriver: true
                    }
                ),
                Animated.timing(
                    scaleLogo,
                    {
                        // Scaling to 0.35
                        toValue: 0.1,
                        useNativeDriver: true
                    }
                ),
                Animated.timing(
                    scaleTitle,
                    {
                        // Scaling to 0.8
                        toValue: 0.8,
                        useNativeDriver: true
                    }
                ),
                Animated.timing(
                    moveLogo,
                    {
                        // Moving to Right Most...
                        toValue: {
                            x: (Dimensions.get("window").width / 2) - 35,
                            y: (Dimensions.get('window').height / 2) - 5
                        },
                        useNativeDriver: true
                    }
                ),
                Animated.timing(
                    moveTitle,
                    {
                        // Moving to Right Most...
                        toValue: {
                            x: 0,
                            // Since image size is 100...
                            y: (Dimensions.get('window').height / 2) - 90
                        },
                        useNativeDriver: true
                    }
                ),
                Animated.timing(
                    contentTransition,
                    {
                        toValue: 0,
                        useNativeDriver: true
                    }
                )
            ])
                .start();

        }, 1000);

    }, [])

    // Going to Move Up like Nav Bar...
    return (

        <View style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        }}>
            <Animated.View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Animated.Image source={Logo} style={{
                    flex: 1,
                    resizeMode: 'cover',
                    width: '100%',
                    height: '100%',
                    transform: [
                        { translateX: moveLogo.y },
                        { translateY: moveLogo.y },
                        { scale: scaleLogo },

                    ]
                }}>

                </Animated.Image>


                {/* <Animated.View style={{
                flex: 1,
                backgroundColor: BGColor,
                // transform: [
                //     { translateX: moveLogo.y },
                //     { translateY: moveLogo.y },
                //     { scale: scaleLogo },

                // ]
                // zIndex: 2,
                transform: [
                    { translateY: startAnimation },
                    { scale: scaleLogo },


                ]
            }}> */}

                {/* <Animated.View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Animated.Image source={Logo} style={{
                    flex: 1,
                    resizeMode: 'cover',
                    width: '100%',
                    height: '100%',
                    // marginBottom: 20,
                    transform: [
                        { translateX: moveLogo.y },
                        { translateY: moveLogo.y },
                        { scale: scaleLogo },

                    ]
                }}>

                </Animated.Image> */}

                {/* <Animated.Text style={{
                    fontSize: 50,
                    fontWeight: 'bold',
                    color: 'white',
                    transform: [
                        { translateY: moveTitle.y },
                        { scale: scaleTitle }
                    ]
                }}>WELCOME
                </Animated.Text> */}

            </Animated.View>

            {/* </Animated.View> */}

            <Animated.View style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: 'rgba(0,0,0,0.04)',
                zIndex: 0,
                transform: [
                    { translateY: contentTransition }
                ]
            }}>

                {/* <Login /> */}
                {/* <OnBoarding /> */}


            </Animated.View>

        </View>

    );
}