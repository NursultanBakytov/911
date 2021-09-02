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

const Component = ({ navigation }) => {
  const {t, i18n} = useTranslation()
  return (
    <SafeAreaView style={[styles.containerSafeAreaView, styles.bgWhite]}><ScrollView style={[styles.containerScrollView]}>
      <View style={[styles.containerCenter]}>
        <Text style={[styles.txtLineHeight40]}>МЕДИЦИНСКИЕ ДАННЫЕ</Text>

      </View>
    </ScrollView></SafeAreaView>
  )
}

export default Component
