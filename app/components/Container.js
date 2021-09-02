import React from 'react'
import { StyleSheet, SafeAreaView, ScrollView, View } from 'react-native'

import { Colors } from '/constants'

const Container = ({ children, scroll, center, padding, white, style }) => {
  const content = (
    <View
      style={[
        styles.content,
        center && styles.center,
        padding && styles.padding
      ]}
    >
      {children}
    </View>
  )

  return (
    <SafeAreaView style={[styles.root, white && styles.bgWhite, style]}>
      {scroll ? (
        <ScrollView
          keyboardShouldPersistTaps="handled"
          style={styles.scrollView}
        >
          {content}
        </ScrollView>
      ) : (
        content
      )}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    height: '100%',
    backgroundColor: Colors.background
  },
  bgWhite: {
    backgroundColor: '#fff'
  },
  scrollView: {
    flex: 1
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  padding: {
    padding: 25
  },
  content: {
    flex: 1
  }
})

export default Container
