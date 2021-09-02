import React from 'react'
import {
  SafeAreaView,
  Text,
  ScrollView,
  View,
  TouchableOpacity,
} from 'react-native'
import { useTranslation } from 'react-i18next'

import styles from '../../styles'
import {
  TitleHeader,
} from '../../components'
import {
  IconLupa
} from '../../components/Icon'

const Component = ({ navigation }) => {
  const {t, i18n} = useTranslation()
  return (
    <SafeAreaView style={[styles.containerSafeAreaView, styles.bgWhiteDark]}>
      <TitleHeader 
        title={t('notifications').toUpperCase()} 
        leftIcon="back" leftPress={() => navigation.goBack()}
      />
      <ScrollView style={[styles.containerScrollView]}>
        <View style={[styles.containerCenter]}>
          
          <Text style={{margin:20}}>{t('notification_playback')}</Text>

          <TouchableOpacity 
            style={[styles.bottomLightBorder, styles.topLightBorder, styles.containerCenter, styles.bgWhite, {height:40, padding:10, width:'100%'}]} 
          >
            <Text>{t('notification_incoming').toUpperCase()}</Text>
          </TouchableOpacity>
          <View style={[styles.containerCenter, {margin:30}]}>
            <IconLupa style={{width:50, height:50}} />
            <Text>{t('incoming_notifications_no_new')}</Text>
          </View>

          <TouchableOpacity 
            style={[styles.bottomLightBorder, styles.topLightBorder, styles.containerCenter, styles.bgWhite, {height:40, padding:10, width:'100%'}]} 
          >
            <Text>{t('notification_selected').toUpperCase()}</Text>
          </TouchableOpacity>
          <View style={[styles.containerCenter, {margin:30}]}>
            <IconLupa style={{width:50, height:50}} />
            <Text>{t('favorite_notifications_no_new')}</Text>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Component
