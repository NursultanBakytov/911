import React from 'react'
import { StyleSheet, Pressable, View, Text } from 'react-native'
import { useTranslation } from 'react-i18next'

import { ArrowRight } from '../components/Icon'

const SlidesFooter = ({ activeIndex, onNextPress, onPrevPress }) => {
  const { t } = useTranslation()

  const dots = Array(3)
    .fill(1)
    .map((value, index) => (
      <View
        key={index}
        style={[styles.dot, activeIndex === index && styles.dotActive]}
      />
    ))

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => onPrevPress()}
        style={[
          styles.button,
          styles.buttonLeft,
          onPrevPress && styles.buttonVisible
        ]}
      >
        <ArrowRight
          style={[styles.icon, { transform: [{ rotate: '180deg' }] }]}
        />
      </Pressable>

      <View style={styles.dots}>{dots}</View>

      <Pressable
        onPress={() => onNextPress()}
        style={[
          styles.button,
          styles.buttonRight,
          onNextPress && styles.buttonVisible
        ]}
      >
        {activeIndex === 2 ? (
          <Text style={[styles.btnWhiteOutlineBlack, styles.text]}>
            {t('done')}
          </Text>
        ) : (
          onNextPress && <ArrowRight style={styles.icon} />
        )}
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
    paddingHorizontal: 10
  },
  button: {
    flex: 0,
    width: 80,
    padding: 10,
    opacity: 0
  },
  buttonLeft: {
    alignItems: 'flex-start'
  },
  buttonRight: {
    alignItems: 'flex-end'
  },
  buttonVisible: {
    opacity: 1
  },
  text: {
    height: 20,
    lineHeight: 20
  },
  icon: {
    width: 20,
    height: 20
  },
  dots: {
    flexDirection: 'row'
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 24,
    backgroundColor: '#7B7F98',
    opacity: 0.4,
    marginHorizontal: 3
  },
  dotActive: {
    opacity: 1,
    backgroundColor: '#7B7F98'
  }
})

export default SlidesFooter
