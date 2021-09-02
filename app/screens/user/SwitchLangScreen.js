import React from 'react'
import {
  SafeAreaView,
  Text,
  Image,
  ScrollView,
  View,
  TouchableOpacity
} from 'react-native'
import { useTranslation } from 'react-i18next'

import styles from '../../styles'
import { TitleHeader } from '../../components'

const Component = ({ navigation }) => {
  const { t, i18n } = useTranslation()

  const changeLang = lang => {
    i18n.changeLanguage(lang)
    navigation.navigate('User', { screen: 'UserSettingsScreen' })
  }
  console.log('___', i18n.language)

  return (
    <SafeAreaView style={[styles.containerSafeAreaView, styles.bgWhiteDark]}>
      <ScrollView style={[styles.containerScrollView]}>
        <TitleHeader
          title={t('change_language').toUpperCase()}
          leftIcon="back"
          leftPress={() => navigation.goBack()}
        />
        <View style={[styles.containerCenter]}>
          <TouchableOpacity
            style={[
              styles.btnWhiteOutlineBlack,
              i18n.language == 'uk' ? { backgroundColor: '#f8f9fb' } : {}
            ]}
            onPress={() => changeLang('uk')}
          >
            <Text>Українська</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.btnWhiteOutlineBlack,
              i18n.language == 'ru' ? { backgroundColor: '#f8f9fb' } : {}
            ]}
            onPress={() => changeLang('ru')}
          >
            <Text>Русский</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.btnWhiteOutlineBlack,
              i18n.language == 'en' ? { backgroundColor: '#f8f9fb' } : {}
            ]}
            onPress={() => changeLang('en')}
          >
            <Text>English</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Component
