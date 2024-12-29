import { View, Text } from 'react-native'
import React from 'react'

export default function Downloadpdf() {
    return (
        <View>
            <View style={styles.Top}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', marginTop: '5%', marginLeft: '-15%' }}>
                    <TouchableOpacity >
                        <Icon name="menu" color={'#fff'} size={22} />
                    </TouchableOpacity>
                    <Text style={styles.TextNot}>Ain e Qadianiat</Text>

                </View>
            </View>
        </View>
    )
}