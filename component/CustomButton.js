import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Color } from '../Assets/theme'

const CustomButton = ({ label, onPress, style }) => {
    return (
        <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
            <Text style={{ color: "#fff", fontWeight: 'bold', fontSize: 16 }}>{label}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    button: {
        // width: '80%',
        backgroundColor: '#22577A',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: '4%',
        borderRadius: 7,
    }
})