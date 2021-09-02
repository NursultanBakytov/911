import React from 'react'
import {
  SafeAreaView,
  Text,
  Linking,
  TouchableOpacity,
  ScrollView,
  View,
} from 'react-native'
import { useTranslation } from 'react-i18next'

import styles from '../../styles'
import API from '../../api/services'
import { 
  CallFinish,
  CallFirst,
  CallSecond,
  CallThird,
  CallCancel,
  IconMap,
  IconName,
} from '../../components/Icon'

const Component = ({ navigation }) => {
  const {t, i18n} = useTranslation()
  const [icon, setIcon] = React.useState(<CallThird style={{width:86, height:86}} />)

  let count = 3

  const sendIssue = () => {
    const data = {
      "danger_type" : "sos", 
      "mode" : "call",
      "latitude" : "50.365954",
      "longitude" : "31.104736"
    }
    API.sendIssue({
      data: data,
    })
      .then(response => {
        const data = (
          response.status == 200 && response.data.type == "success" && response.data.data
        )
        // console.log("__response__", data)
      })
      .catch(e => {
        // console.log("__error__", e)
      })
  }

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIcon(<CallSecond style={{width:86, height:86}} />)
    }, 1000);
    const timer2 = setTimeout(() => {
      setIcon(<CallFirst style={{width:86, height:86}} />)
    }, 2000);
    const timer3 = setTimeout(() => {
      setIcon(<CallFinish style={{width:86, height:86}} />)
      const phoneNumber = 112
      sendIssue()
      Linking.openURL(`tel:${phoneNumber}`)
    }, 3000);
  }, []);

  return (
    <SafeAreaView style={[styles.containerSafeAreaView, styles.bgWhite]}><ScrollView style={[styles.containerScrollView]}>
      <View style={[styles.containerCenter]}>

        <View style={{marginTop:30, flexDirection:'row', width:'80%'}}>
          <IconMap style={{width:18, height:18 }} colorFill="#999999" />
          <Text style={{flex:1, paddingLeft:10}}>{t('transfer_geolocation')}</Text>
        </View>

        <View style={{marginTop:10, flexDirection:'row', width:'80%'}}>
          <IconName style={{width:18, height:18 }} colorFill="#999999" />
          <Text style={{flex:1, paddingLeft:10}}>{t('transfer_personal_date')}</Text>
        </View>

        <Text style={{fontSize:30, padding:30, color:'#999999', textAlign:'center'}}>{t('nm_title')}</Text>
        { icon }

        <TouchableOpacity
          style={{marginTop:70, width:100, height:100,alignItems:'center', justifyContent:'center'}}
          onPress={()=>navigation.goBack()}
        >
          <CallCancel style={{width:50, height:50 }} />
          <Text style={{paddingTop:10}}>{t('nm_cancel').toUpperCase()}</Text>
        </TouchableOpacity>
        
      </View>
    </ScrollView></SafeAreaView>
  )
}

export default Component
