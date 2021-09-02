import React from 'react'
import {
  View, 
  Text,
} from 'react-native'
import { useTranslation } from 'react-i18next'

import styles from '../styles'
import {
  ArrowBottom,
  MenuAmbulance,
  MenuPolice,
  MenuFireTruck,
  MenuGas,
  MenuVirus,
  CallStill,
} from './Icon'


const Component = ({ item }) => {
  const {t, i18n} = useTranslation()
  // console.log(item)

  const getTitle = (type) => {
    if (type=='ambulance') return (
      <View style={styles.containerIssueTitle}>
        <MenuAmbulance style={{width:25, height:25, marginLeft:15, marginRight:15}} />
        <Text style={{color:'#0BCDCF', marginTop:3}}>{t('ambulance').toUpperCase()}</Text>
      </View>)

    if (type=='criminal') return (
      <View style={styles.containerIssueTitle}>
        <MenuPolice style={{width:25, height:25, marginLeft:15, marginRight:15}} />
        <Text style={{color:'#519DFF', marginTop:3}}>{t('police').toUpperCase()}</Text>
      </View>)

    if (type=='fire') return (
      <View style={styles.containerIssueTitle}>
        <MenuFireTruck style={{width:22, height:22, marginLeft:15, marginRight:15}} />
        <Text style={{color:'#FF5858', marginTop:3}}>{t('fire_service').toUpperCase()}</Text>
      </View>)
    
    if (type=='gas') return (
      <View style={styles.containerIssueTitle}>
        <MenuGas style={{width:22, height:22, marginLeft:15, marginRight:15}} />
        <Text style={{color:'#FF842C', marginTop:3}}>{t('gas_service').toUpperCase()}</Text>
      </View>)

    if (type=='virus') return (
      <View style={styles.containerIssueTitle}>
        <MenuVirus style={{width:22, height:22, marginLeft:15, marginRight:15}} />
        <Text style={{color:'#8364FF', marginTop:3}}>{t('virus_suspicion').toUpperCase()}</Text>
      </View>)

    if (type=='sos') return (
      <View style={styles.containerIssueTitle}>
        <CallStill style={{width:22, height:22, marginLeft:15, marginRight:15}} />
        <Text style={{color:'#000000', marginTop:3}}>{t('sos_quite_mode').toUpperCase()}</Text>
      </View>)

    return <Text>{type}</Text>
  }
  
  const getStatus = status => {
    if (status=='processed') status='precessed'
    else if (status=='canceled_by_dispatcher') status='cancelled_by_dispatcher'
    else if (status=='canceled_by_tourist') status='cancelled_by_tourist'

    return (<Text style={{paddingLeft:16, paddingTop:3, fontSize:12}}>{t(status)}</Text>)
  }

  return (
    <View style={[styles.topLightBorder, styles.bottomLightBorder, {backgroundColor:"#FFFFFF", marginTop:10, width:'100%', height:70}]}>
      { getTitle(item.danger_type) }
      <View style={{flexDirection:'row'}}>
        { getStatus(item.status) }
        <Text style={{flex:1, textAlign:'right', marginRight:20}}>{ item.created_at_human }</Text>
      </View>
      <View style={{alignItems: 'center', padding:5}}>
        <ArrowBottom style={{width:12, height:8 }} colorFill="#999999" />
      </View>
    </View>
  )
}

export default Component