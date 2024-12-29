import { StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { Color } from '../Assets/theme'

const CustomInput = ({ placeholder, style, multiline }) => {
    return (
        <TextInput
            placeholder={placeholder}
            placeholderTextColor={50}
            multiline={multiline}
            style={[
                styles.input,
                multiline && { textAlignVertical: 'top' },
                style,
            ]}
        />
    )
}

export default CustomInput

const styles = StyleSheet.create({
    input: {
        width: '90%',
        padding: '2%',
        backgroundColor: "#fff",
        elevation: 1.5,
        borderRadius: 20,
        paddingHorizontal: 25,
        color: '#000'
        // marginTop: '3%'
    }
})