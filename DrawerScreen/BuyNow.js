import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native'
import React from 'react'
import CustomHeader from '../component/CustomHeader'
import CustomText from '../component/CustomText'
import CustomInput from '../component/CustomInput'
import CustomButton from '../component/CustomButton'

export default function BuyNow() {
  return (
    <View style={styles.container}>
      <CustomHeader label='Buy Now' />
      <View style={styles.View_detail}>
        <CustomText label='Book Details' style={{ fontWeight: '700', fontSize: 20 }} />
      </View >
      <ScrollView>
        <View style={{ alignSelf: 'center', backgroundColor: '#fff', width: '90%', height: '30%', borderRadius: 20, }}>
          <View style={styles.Price_Detail}>
            <CustomText label='Price' style={styles.custom_txt1} />
            <CustomText label='649' style={styles.custom_txt1} />
          </View>
          <View style={styles.Price_Detail}>
            <CustomText label='Discount' style={styles.custom_txt1} />
            <CustomText label='649' style={styles.custom_txt1} />
          </View>
          <View style={styles.Price_Detail}>
            <CustomText label='Net Price' style={styles.custom_txt1} />
            <CustomText label='649' style={styles.custom_txt1} />
          </View>
          <View style={styles.Price_Detail}>
            <CustomText label='Shipping Charges' style={styles.custom_txt1} />
            <CustomText label='649' style={styles.custom_txt1} />
          </View>
          <View style={styles.Price_Detail}>
            <CustomText label='Grand Total' style={styles.custom_txt2} />
            <CustomText label='649' style={styles.custom_txt2} />
          </View>

        </View>
        <View style={styles.form_detail}>
          <CustomText label='Form Details' style={{ fontWeight: '700', fontSize: 20 }} />
        </View >
        <View style={styles.View_input}>
          <CustomInput placeholder='Full Name' l style={styles.input} />
          <CustomInput placeholder='Phone Number' style={styles.input} />
          <CustomInput placeholder='Email' style={styles.input} />
          <CustomInput placeholder='Address' style={styles.input} />
        </View>
        <View style={styles.View_payment}>
          <CustomText label='Payment :' style={{ fontWeight: '700', fontSize: 20, }} />
          <TextInput placeholder='Cash in hand' placeholderTextColor={50}
          />

        </View>
      </ScrollView>

      <View style={styles.View_button}>
        <CustomButton label='Order' />
      </View>
    </View>

  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFDF4'
  },
  Price_Detail: {
    marginRight: '5%',
    marginLeft: '5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '2%',

  },
  custom_txt1: {
    fontWeight: '400', fontSize: 16
  },
  custom_txt2: {
    marginTop: '3%',
    fontWeight: '700',
    fontSize: 18
  },
  View_detail: {
    // marginTop: "10%",
    alignSelf: 'center',
    marginVertical: '5%',
    fontWeight: 'bold'
  },
  form_detail: {
    marginTop: "5%",
    alignSelf: 'center',
    // marginVertical: '5%',
    fontWeight: 'bold'
  },
  View_input: {
    alignItems: 'center',
    marginBottom: '2%'
  },
  input: {
    marginTop: '5%',
    // placeholderTextColor: "#b5b8bc"

  },
  View_button: {
    marginBottom: '6%',
    width: '50%',
    alignSelf: 'center',
    // marginTop: '10%'
  },
  View_payment: {
    marginTop: '2%',
    flexDirection: 'row',
    height: 40, width: '90%',
    backgroundColor: '#fff',
    alignSelf: 'center',
    borderRadius: 7,
    borderColor: '#9f9fad',
    elevation: 1.5,
    //  padding: 5
  }
}
)