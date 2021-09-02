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
import {
  IconMedicHospital
} from '../../components/Icon'

const Component = ({ navigation }) => {
  const {t, i18n} = useTranslation()
  return (
    <SafeAreaView style={[styles.containerSafeAreaView, styles.bgWhiteDark]}>
      <TitleHeader 
        title={t('menu_catalogue').toUpperCase()} 
        leftIcon="back" leftPress={() => navigation.goBack()}
      />
      <ScrollView style={[styles.containerScrollView]}>
        <View style={[styles.containerCenter]}>

          <View style={{margin:40}}>
            <IconMedicHospital style={{width:50, height:50}} colorFill="#CCCCCC" />
          </View>
          <Text style={[styles.containerWidth80, {textAlign:'center'}]}>{t('organization_feature')}</Text>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Component
