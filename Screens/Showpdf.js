
import { View, Text, StyleSheet, Image, TextInput, Dimensions, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Pdf from 'react-native-pdf';
import { useNavigation } from '@react-navigation/native';
import CustomHeader from '../component/CustomHeader';


export default function Showpdf() {
    const navigation = useNavigation()
    // const source = require('../Assets/book.pdf')
    const [pagecount, setpagecount] = useState('')
    const [totalpage, settotalpage] = useState('')
    return (
        <View style={styles.container}>
            <CustomHeader label='Ain e Qadianiat' />
            <View style={{ flex: 1, }}>
                <Image source={require('../Assets/Images/removebg1.png')} resizeMode='contain' style={{ marginTop: "-25%" }} />
                <Pdf
                    trustAllCerts={false}
                    source={require('../Assets/book.pdf')}
                    onLoadComplete={(numberOfPages, filePath) => {
                        console.log(`Number of pages: ${numberOfPages}`);
                        settotalpage(numberOfPages)
                    }}
                    onPageChanged={(page, numberOfPages) => {
                        console.log(`Current page: ${page}`);
                        setpagecount(page)
                    }}
                    onError={(error) => {
                        console.log(error);
                    }}
                    onPressLink={(uri) => {
                        console.log(`Link pressed: ${uri}`);
                    }}
                    style={styles.pdf} />
            </View>
            <View style={{ backgroundColor: '#f2f5f9', height: 50, width: '100%', alignItems: 'center', justifyContent: "center" }}>
                <Image source={require('../Assets/Images/abc.png')} resizeMode='contain' style={{ width: '100%', height: 42, }} />
            </View>
            <View style={styles.botombar}>
                <Text style={{ marginTop: '8%', fontSize: 15, color: '#fff', textAlign: 'center' }}>{`${pagecount} / ${totalpage}`}</Text>
            </View>

        </View>

    )

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    image: {
        // marginRight: '30%',
        alignSelf: 'center',
        marginTop: '-10%',
        resizeMode: 'cover',
        opacity: .1,
        color: '#e1e9f3',
        flex: 1,
        justifyContent: 'center',
        width: '105%',
        height: '120%',
    },
    Searchbar: {
        paddingHorizontal: 20,
        backgroundColor: '#fff',
        top: 20,
        height: 40,
        width: '50%',
        borderRadius: 10,
        color: 'black'
    },
    searchIcon: {
        padding: 10,
    },
    icon: {
        alignSelf: 'center',
        justifyContent: 'center'

    },


    botombar: {
        alignSelf: 'flex-end',
        width: '100%',
        height: '10%',
        backgroundColor: '#22577A',
    },
    pdf: {
        // marginTop: "-5%",
        // flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    }

})