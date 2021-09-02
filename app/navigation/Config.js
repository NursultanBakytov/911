import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import {
  View,
  Text,
} from 'react-native'

import styles from '../styles'

const createStack = (screens) => {
  const Stack = createStackNavigator()

  const renderScreens = () => (
    screens.map(props => <Stack.Screen {...props} key="{{props.name}}"></Stack.Screen>)
  )

  return () => (
    <Stack.Navigator headerMode="screen">
      {renderScreens()}
    </Stack.Navigator>
  )
}

const publicStackScreenOptions = { 
  headerTransparent: true,
  headerShown: true,
  headerTitle: props => {
    return (
      <View>
        <Text>headerTitle</Text>
      </View>
    )
  },
}

const navigationSetOptions = (navigation, left, right) => {
  navigation.setOptions({
    headerLeft: () => (
      <Text>headerLeft</Text>
    ),
    headerRight: () => (
      <Text>headerRight</Text>
    )
  })
}

export {
  createStack,
  publicStackScreenOptions,
  navigationSetOptions,
}
