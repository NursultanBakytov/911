import React from 'react'
import {
  View, 
  Text,
} from 'react-native'

import styles from '../styles'
import { Icon } from './'

const Component = ({icon, title, label, rightBoderStyle}) => {

  return (
    <View style={styles.containerProfileItem} >
      <View style={{width:50, padding:10}}>
        <Icon type={icon} style={styles.formIcon} />
      </View>
      <View style={[rightBoderStyle, {flex:1}]}>
        <Text style={{fontSize:11, marginTop:3, marginBottom:3}}>{ title }</Text>
        <Text>{ label }</Text>
      </View>
      
    </View>
  )
}

export default Component