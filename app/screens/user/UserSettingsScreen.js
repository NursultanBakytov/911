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
import { useStore } from '../../store'
import {
  TitleHeader,
} from '../../components'
import {
  ArrowRight,
  MenuLang,
  MenuPlus,
  MenuQuadro,
  MenuQuest,
  MenuExit,
} from '../../components/Icon'

const Component = ({ navigation }) => {
  const {t, i18n} = useTranslation()
  const [, dispatch] = useStore()

  const goExit = (values, actions) => {
    dispatch({ type : 'setToken', token : null})
    dispatch({ type : 'setLogout' })  
  }

  const goChangeLang = () => {
    navigation.navigate('User', { screen: 'SwitchLangScreen' })
  }

  const goHotKeys = () => {
    navigation.navigate('User', { screen: 'HotKeyScreen' })
  }

  const goSupport = () => {
    navigation.navigate('User', { screen: 'SupportScreen' })
  }

  const goSimpleMode = () => {
    navigation.navigate('User', { screen: 'SimpleModeScreen' })
  }

  return (
    <SafeAreaView style={[styles.containerSafeAreaView, styles.bgWhiteDark]}><ScrollView style={[styles.containerScrollView]}>
      <TitleHeader 
        title={t('menu_settings').toUpperCase()} 
        leftIcon="back" leftPress={() => navigation.goBack()}
      />
      <View style={[styles.containerCenter, {marginTop:20}]}>

        <TouchableOpacity onPress={goChangeLang}
          style={[styles.containerProfileItem, styles.topLightBorder, styles.bottomLightBorder, styles.bgWhite, {height:60, padding:20}]} 
        >
          <MenuLang style={{width:22, height:22, marginLeft:5, marginRight:18}} />
          <Text style={{flex:1}}>{t('change_language').toUpperCase()}</Text>
          <ArrowRight style={{width:8, height:12, marginTop:3}} />
        </TouchableOpacity>

        <TouchableOpacity onPress={goHotKeys}
          style={[styles.containerProfileItem, styles.bottomLightBorder, styles.bgWhite, {height:60, padding:20}]} 
        >
          <MenuPlus style={{width:22, height:22, marginLeft:5, marginRight:18}} />
          <Text style={{flex:1}}>{t('hot_keys').toUpperCase()}</Text>
          <ArrowRight style={{width:8, height:12, marginTop:3}} />
        </TouchableOpacity>

        <TouchableOpacity onPress={goSupport}
          style={[styles.containerProfileItem, styles.bottomLightBorder, styles.bgWhite, {height:60, padding:20}]} 
        >
          <MenuQuest style={{width:22, height:22, marginLeft:5, marginRight:18}} />
          <Text style={{flex:1}}>{t('contact_to_support').toUpperCase()}</Text>
          <ArrowRight style={{width:8, height:12, marginTop:3}} />
        </TouchableOpacity>

        <TouchableOpacity onPress={goSimpleMode}
          style={[styles.containerProfileItem, styles.bottomLightBorder, styles.bgWhite, {height:60, padding:20}]} 
        >
          <MenuQuadro style={{width:22, height:22, marginLeft:5, marginRight:18}} />
          <Text style={{flex:1}}>{t('simplified_mode').toUpperCase()}</Text>
          <ArrowRight style={{width:8, height:12, marginTop:3}} />
        </TouchableOpacity>

        <Text> </Text>
        <TouchableOpacity onPress={goExit}
          style={[styles.containerProfileItem, styles.topLightBorder, styles.bottomLightBorder, styles.bgWhite, {height:60, padding:20}]} 
        >
          <MenuExit style={{width:22, height:22, marginLeft:5, marginRight:18}} />
          <Text style={{flex:1}}>{t('exit').toUpperCase()}</Text>
        </TouchableOpacity>

      </View>
    </ScrollView></SafeAreaView>
  )
}

export default Component
