import React from 'react'
import {
  SafeAreaView,
  Text,
  Image,
  ScrollView,
  View,
  TouchableOpacity,
} from 'react-native'
import { useTranslation } from 'react-i18next'

import styles from '../../styles'
import {
  TitleHeader,
} from '../../components'

const Component = ({ navigation }) => {
  const {t, i18n} = useTranslation()
  return (
    <SafeAreaView style={[styles.containerSafeAreaView, styles.bgWhiteDark]}><ScrollView style={[styles.containerScrollView]}>
      <TitleHeader 
        title={t('hot_keys').toUpperCase()} 
        leftIcon="back" leftPress={() => navigation.goBack()}
      />
      <View style={[{marginLeft:30, marginRight:30}]}>
        <Text style={{padding:10}}>{t('use_hot_keys')}</Text>
        <Text style={{padding:10}}>{t('hot_keys_description')}</Text>
        <Text style={{padding:10}}>{t('one_long_press')}</Text>
        <Text style={{padding:10}}>{t('two_short_one_long_press')}</Text>
      </View>
    </ScrollView></SafeAreaView>
  )
}

export default Component
