import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import CustomHeader from '../component/CustomHeader'
import CustomText from '../component/CustomText'
import CustomInput from '../component/CustomInput'
import CustomButton from '../component/CustomButton'





export default function SubcribeWhats() {
  return (
    <View style={styles.container}>
      <CustomHeader label='WhatsApp' />
      <View style={styles.View_detail}>
        <CustomText label='Subcribe For WhatsApp' style={{ fontWeight: 'bold', fontSize: 20 }} />
      </View >
      <View style={{ alignItems: 'center' }}>
        <CustomText label='Please Enter Your Name and Number With 
Country Code +92 *******' style={{ fontWeight: '400', fontSize: 15 }} />
      </View>
      <View style={styles.View_input}>
        <CustomInput placeholder='Full Name' l style={styles.input} />
        <CustomInput placeholder='Phone Number' style={styles.input} />

      </View>
      <CustomText label='Kindly Add +923 111 772 111 in your Phone.' style={{ fontWeight: '400', fontSize: 15, marginTop: '2%', alignSelf: 'center' }} />
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
    alignSelf: 'center',
    marginTop: '10%',
    width: '50%',
  }

}
)