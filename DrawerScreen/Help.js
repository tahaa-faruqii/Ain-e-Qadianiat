import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import CustomHeader from '../component/CustomHeader'
import CustomText from '../component/CustomText'
import CustomInput from '../component/CustomInput'
import CustomButton from '../component/CustomButton'

export default function Help() {
  return (
    <View style={styles.container}>
      <CustomHeader label='Help Seeraht' />
      <View style={styles.View_detail}>
        <CustomText label='Details' style={{ fontWeight: 'bold', fontSize: 20 }} />
      </View >
      <View style={styles.View_input}>
        <CustomInput placeholder='Full Name' l style={styles.input} />
        <CustomInput placeholder='Phone Number' style={styles.input} />
        <CustomInput placeholder='Email' style={styles.input} />
        <CustomInput placeholder='Describtion'
          multiline style={[styles.input, { paddingBottom: '15%' }]} />
      </View>
      <View style={styles.View_button}>
        <CustomButton label='Submit' />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFDF4'
  },
  View_detail: {
    alignSelf: 'center',
    marginVertical: '5%',
    fontWeight: 'bold'
  },
  View_input: {
    paddingVertical: '2%',
    alignItems: 'center',
    // marginLeft: '5%'
  },
  input: {
    marginTop: '5%',
    // placeholderTextColor: "#b5b8bc"

  },
  View_button: {
    width: '50%',
    alignSelf: 'center',
    marginTop: '10%'
  }

}
)