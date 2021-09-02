import React from 'react'
import { Platform, StyleSheet, View } from 'react-native'
import CheckBox from '@react-native-community/checkbox'

import { Colors } from '../constants'

const Checkbox = ({ value, onChange, style, ...props }) => {
  return (
    <CheckBox
      boxType="square"
      tintColor={Colors.border}
      onFillColor="#fff"
      style={[Platform.OS === 'ios' && styles.ios, style]}
      value={value}
      onValueChange={onChange}
      {...props}
    />
  )
}

const styles = StyleSheet.create({
  ios: {
    width: 20,
    height: 20
  }
})

export default Checkbox
