import React from 'react'
import {
  View, 
  Text,
  TouchableOpacity,
} from 'react-native'

import styles from '../styles'
import {
  MenuArrow,
  MenuEdit,
} from '../components/Icon'

const Component = ({title, leftIcon, leftPress, rightIcon, rightPress}) => {
  const left = (
    (leftIcon && leftPress)
    ? (
      <TouchableOpacity 
        style={styles.containerHeaderLeft}
        onPress={leftPress}
      >
        <MenuArrow style={{width:33, height:8}} />
      </TouchableOpacity>
    ) : (
      <View style={styles.containerHeaderLeft}></View>
    )
  )

  const right = (
    (rightIcon && rightPress)
    ? (
      <TouchableOpacity 
        style={styles.containerHeaderRight}
        onPress={rightPress}
      >
        <MenuEdit style={{width:21, height:21}} />
      </TouchableOpacity>
    ) : (
      <View style={styles.containerHeaderRight}></View>
    )
  )

  return (
    <View style={styles.containerHeader}>
      { left }
      <Text style={styles.containerHeaderTitle}>{title}</Text>
      { right }
    </View>
  )
}

export default Component