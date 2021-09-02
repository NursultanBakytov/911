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
  ArrowRight,
  MenuInfo,
  MenuInstruct,
} from '../../components/Icon'

const Component = ({ navigation }) => {
  const {t, i18n} = useTranslation()

  const goCityInfo = () => {
    navigation.navigate('User', { screen: 'CityInfoScreen' })
  }

  const goAppInstr = () => {
    navigation.navigate('User', { screen: 'AppInstructionScreen' })
  }

  return (
    <SafeAreaView style={[styles.containerSafeAreaView, styles.bgWhiteDark]}><ScrollView style={[styles.containerScrollView]}>
      <TitleHeader 
        title={t('menu_more_info').toUpperCase()} 
        leftIcon="back" leftPress={() => navigation.goBack()}
      />
      <View style={[styles.containerCenter, {marginTop:20}]}>
        
        <TouchableOpacity onPress={goAppInstr}
          style={[styles.containerProfileItem, styles.topLightBorder, styles.bottomLightBorder, styles.bgWhite, {height:60, padding:20}]} 
        >
          <MenuInstruct style={{width:22, height:22, marginLeft:5, marginRight:18}} />
          <Text style={{flex:1}}>{t('instruction').toUpperCase()}</Text>
          <ArrowRight style={{width:8, height:12, marginTop:3}} />
        </TouchableOpacity>

        <TouchableOpacity onPress={goCityInfo}
          style={[styles.containerProfileItem, styles.bottomLightBorder, styles.bgWhite, {height:60, padding:20}]} 
        >
          <MenuInfo style={{width:22, height:22, marginLeft:5, marginRight:18}} />
          <Text style={{flex:1}}>{t('city_info').toUpperCase()}</Text>
          <ArrowRight style={{width:8, height:12, marginTop:3}} />
        </TouchableOpacity>


      </View>
    </ScrollView></SafeAreaView>
  )
}

export default Component
