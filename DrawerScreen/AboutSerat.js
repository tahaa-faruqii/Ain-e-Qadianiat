import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import CustomHeader from '../component/CustomHeader'
import CustomText from '../component/CustomText'

export default function AboutSerat() {
  return (
    <View style={styles.container}>
      <CustomHeader label='About Seerat' />
      <View style={styles.View_mufti}>
        <CustomText label='Mufti Mustafa Aziz' />
      </View>
      <View style={styles.View_islamic}>
        <CustomText label={'Islamic Scholar \n Author'} style={styles.text_islamic} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFDF4'
  },
  View_mufti: {
    alignSelf: 'center',
    marginVertical: '5%',


  },
  View_islamic: {
    // flex: 1,
    backgroundColor: "#fff",
    paddingLeft: 10,
    padding: '1%',
    height: '30%'

  },
  text_islamic: {
    color: "#185A66"
  }

})