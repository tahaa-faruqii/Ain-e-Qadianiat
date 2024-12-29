import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Color } from '../Assets/theme'

const CustomText = ({ label, style, textBold, textColor, fontSize }) => {
    return (

        <View>
            <Text
                style={[{
                    fontWeight: textBold && '700',
                    // fontFamily: textBold ? 'GothamBold' : 'GothamMedium',
                    fontSize: fontSize,
                    // fontWeight: textBold,
                    color: textColor ? textColor : '#000000'
                }, style
                ]}
            >
                {label}
            </Text>
        </View>
    )
}

export default CustomText

const styles = StyleSheet.create({})