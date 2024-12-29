
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import MIcon from 'react-native-vector-icons/MaterialIcons';

const CustomHeader = ({ label, style, }) => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => {
                navigation.goBack()
            }} style={styles.backButton}>
                <MIcon name="arrow-back-ios" color={'#fff'} size={22} />
            </TouchableOpacity>
            <Text style={[styles.text, style]}>{label}</Text>
        </View>
    )
}

export default CustomHeader

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#22577A',
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    backButton: {
        position: 'absolute',
        left: 15,
        top: '50%',
        transform: [{ translateY: -11 }], // Centers the button vertically
    },
    text: {
        color: '#fff',
        fontSize: 21,
        fontWeight: '700',
        textAlign: 'center',
    }
})
