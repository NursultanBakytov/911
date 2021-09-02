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
  AlarmItem,
} from '../../components'
import {
  ArrowBottom,
  MenuAmbulance,
  MenuPolice,
  MenuFireTruck,
  MenuGas,
} from '../../components/Icon'

const Component = ({ navigation }) => {
  const {t, i18n} = useTranslation()

  const getAmbulanceList = ()=>{
    const items = [
      {icon:'IconMini05', label:'cardiopulmonary_resuscitation' },
      {icon:'IconMini13', label:'suffocation' },
      {icon:'IconMini08', label:'alien_objects_in_the_respiratory_tract' },
      {icon:'IconMini12', label:'epileptic_seizure' },
      {icon:'IconMini14', label:'stroke' },
      {icon:'IconMini22', label:'chest_pain' },
      {icon:'IconMini20', label:'wounds_and_bleeding' },
      {icon:'IconMini19', label:'head_and_spine_injuries' },
      {icon:'IconMini15', label:'fractures' },
      {icon:'IconMini10', label:'burns' },
      {icon:'IconMini24', label:'poisoning' },
      {icon:'IconMini18', label:'allergic_attack' }
    ]
    const list = items.map( (item, id) => {
      return <AlarmItem key={id} item={ item } color="#0BCDCF" />
    })
    return (
      <View style={{width:'100%', paddingTop:10, paddingBottom:10, paddingHorizontal: 20}}>
        { list }
      </View>
    )
  }

  const getPoliceList = ()=>{
    const items = [
      {icon:'IconMini21', label:'physical_assault_threat' },
      {icon:'IconMini04', label:'domestic_violence' },
      {icon:'IconMini07', label:'severe_bodily_injury' },
      {icon:'IconMini11', label:'rape' },
      {icon:'IconMini25', label:'fraud' },
      {icon:'IconMini16', label:'extortion' },
      {icon:'IconMini03', label:'theft' },
      {icon:'IconMini23', label:'looting' }
    ]
    const list = items.map( (item, id) => {
      return <AlarmItem key={id} item={ item } color="#519DFF" />
    })
    return (
      <View style={{width:'100%', paddingTop:10, paddingBottom:10, paddingHorizontal: 20}}>
        { list }
      </View>
    )
  }

  const getFireList = ()=>{
    const items = [
      {icon:'IconMini09', label:'fires' },
      {icon:'IconMini06', label:'explosions' },
      {icon:'IconMini17', label:'weather_phenomena' }
    ]
    const list = items.map( (item, id) => {
      return <AlarmItem key={id} item={ item } color="#FF5858" />
    })
    return (
      <View style={{width:'100%', paddingTop:10, paddingBottom:10, paddingHorizontal: 20}}>
        { list }
      </View>
    )
  }

  const getGasList = ()=>{
    const items = [
      {icon:'IconMini02', label:'gas_leak' }
    ]
    const list = items.map( (item, id) => {
      return <AlarmItem key={id} item={ item } color="#FF842C" />
    })
    return (
      <View style={{width:'100%', paddingTop:10, paddingBottom:10, paddingHorizontal: 20}}>
        { list }
      </View>
    )
  }

  return (
    <SafeAreaView style={[styles.containerSafeAreaView, styles.bgWhiteDark]}><ScrollView style={[styles.containerScrollView]}>
      <TitleHeader
        title={t('simplified_mode').toUpperCase()}
        leftIcon="back" leftPress={() => navigation.goBack()}
      />
      <View style={[styles.containerCenter]}>

        <Text style={{margin:15}}>{t('simplified_mode_instruction')}</Text>

        <TouchableOpacity onPress={() => {} }
          style={[styles.containerProfileItem, {height:40, backgroundColor:'#0BCDCF', alignItems: 'center',}]}
        >
          <MenuAmbulance style={{width:25, height:25, marginLeft:15, marginRight:15}} colorFill="#FFFFFF" />
          <Text style={{flex:1, color:'#FFFFFF'}}>{t('ambulance').toUpperCase()}</Text>
          <ArrowBottom style={{width:12, height:8, marginRight:15}} colorFill="#FFFFFF" />
        </TouchableOpacity>
        { getAmbulanceList() }

        <TouchableOpacity onPress={() => {} }
          style={[styles.containerProfileItem, {height:40, backgroundColor:"#519DFF", marginTop:10, alignItems: 'center',}]}
        >
          <MenuPolice style={{width:25, height:25, marginLeft:15, marginRight:15}} colorFill="#FFFFFF" />
          <Text style={{flex:1, color:'#FFFFFF'}}>{t('police').toUpperCase()}</Text>
          <ArrowBottom style={{width:12, height:8, marginRight:15}} colorFill="#FFFFFF" />
        </TouchableOpacity>
        { getPoliceList() }

        <TouchableOpacity onPress={() => {} }
          style={[styles.containerProfileItem, {height:40, backgroundColor:"#FF5858", marginTop:10, alignItems: 'center',}]}
        >
          <MenuFireTruck style={{width:25, height:25, marginLeft:15, marginRight:15}} colorFill="#FFFFFF" />
          <Text style={{flex:1, color:'#FFFFFF'}}>{t('fire_service').toUpperCase()}</Text>
          <ArrowBottom style={{width:12, height:8, marginRight:15}} colorFill="#FFFFFF" />
        </TouchableOpacity>
        { getFireList() }

        <TouchableOpacity onPress={() => {} }
          style={[styles.containerProfileItem, {height:40, backgroundColor:"#FF842C", marginTop:10, alignItems: 'center',}]}
        >
          <MenuGas style={{width:25, height:25, marginLeft:15, marginRight:15}} colorFill="#FFFFFF" />
          <Text style={{flex:1, color:'#FFFFFF'}}>{t('gas_service').toUpperCase()}</Text>
          <ArrowBottom style={{width:12, height:8, marginRight:15}} colorFill="#FFFFFF" />
        </TouchableOpacity>
        { getGasList() }


        <TouchableOpacity
          style={[styles.btnWhiteOutlineBlack]}
          // onPress={() => changeLang('en') }
        >
          <Text>{t('enter_simplified_mode').toUpperCase()}</Text>
        </TouchableOpacity>

      </View>
    </ScrollView></SafeAreaView>
  )
}

export default Component
