import React from 'react'
import {
  Dimensions,
  SafeAreaView,
  Text,
  Linking,
  ScrollView,
  View,
  TouchableOpacity,
} from 'react-native'
import { useTranslation } from 'react-i18next'

import styles from '../../styles'
import API from '../../api/services'
import validators from '../../store/validators'
import {
  CallStart,
  CallSMS,
  MenuArrow,
  MenuAmbulance,
  MenuFireTruck,
  MenuGas,
  MenuPolice,
  MenuVirus,
} from '../../components/Icon'

const Component = ({ route, navigation }) => {
  const { t, i18n } = useTranslation()

  const sendIssue = () => {
    //"fire/criminal/ambulance/gas/sos"
    const dangerType =
      route.params.type == 'virus'
        ? 'ambulance'
        : route.params.type == 'police'
        ? 'criminal'
        : route.params.type

    const data = {
      danger_type: dangerType,
      mode: 'default',
      latitude: '50.365954',
      longitude: '31.104736',
    }
    API.sendIssue({
      data: data,
    })
      .then((response) => {
        const data =
          response.status == 200 &&
          response.data.type == 'success' &&
          response.data.data
        //console.log("__response__", data)
      })
      .catch((e) => {
        console.log('__error__', e)
        // validators.showError(e)
        navigation.navigate('Alarm', { screen: 'AlarmStartScreen' })
      })
  }

  const height = Math.floor(Dimensions.get('window').height * 0.5)
  const width = Math.floor(Dimensions.get('window').width * 0.5) - 20

  const getIcon = (type) => {
    if (type == 'ambulance')
      return <MenuAmbulance style={{ width: 22, height: 22, margin: 15 }} />
    if (type == 'police')
      return <MenuPolice style={{ width: 22, height: 22, margin: 15 }} />
    if (type == 'fire')
      return <MenuFireTruck style={{ width: 22, height: 22, margin: 15 }} />
    if (type == 'gas')
      return <MenuGas style={{ width: 22, height: 22, margin: 15 }} />
    if (type == 'virus')
      return <MenuVirus style={{ width: 22, height: 22, margin: 15 }} />
  }

  const getColor = (type) => {
    if (type == 'ambulance') return { color: '#0BCDCF' }
    if (type == 'police') return { color: '#519DFF' }
    if (type == 'fire') return { color: '#FF5858' }
    if (type == 'gas') return { color: '#FF842C' }
    if (type == 'virus') return { color: '#8364FF' }
  }

  const callTo = () => {
    const type = route.params.type
    let phoneNumber = '103'
    if (type == 'ambulance') phoneNumber = '103'
    else if (type == 'police') phoneNumber = '102'
    else if (type == 'fire') phoneNumber = '101'
    else if (type == 'gas') phoneNumber = '104'
    else if (type == 'virus') phoneNumber = '0800505201'

    sendIssue()
    Linking.openURL(`tel:${phoneNumber}`)
  }

  const goScreen = () => {
    const type = route.params.type
    if (type == 'virus') {
      navigation.navigate('Alarm', {
        screen: 'AlarmVirusTextScreen',
        params: { type: route.params.type },
      })
    } else {
      navigation.navigate('Alarm', {
        screen: 'AlarmAmbulanceTextScreen',
        params: { type: route.params.type },
      })
    }
  }

  return (
    <SafeAreaView style={[styles.containerSafeAreaView, styles.bgWhite]}>
      <ScrollView style={[styles.containerScrollView]}>
        <View
          style={{
            width: '100%',
            height: 40,
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <TouchableOpacity
            style={{
              width: 40,
              height: 40,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => navigation.goBack()}
          >
            <MenuArrow style={{ width: 33, height: 8 }} />
          </TouchableOpacity>
          {getIcon(route.params.type)}
          <Text style={getColor(route.params.type)}>
            {t('menu_report').toUpperCase()}
          </Text>
        </View>
        <View style={[styles.containerCenter]}>
          <View style={{ height: height }}></View>

          <View style={styles.containerMenuItem}>
            <TouchableOpacity
              style={[
                {
                  height: width,
                  width: width,
                  alignItems: 'center',
                  justifyContent: 'center',
                },
              ]}
              onPress={callTo}
            >
              <Text style={{ textAlign: 'center', marginBottom: 10 }}>
                {t('ordinary_call').toUpperCase()}
              </Text>
              <CallStart style={{ width: 86, height: 86 }} />
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                {
                  height: width,
                  width: width,
                  marginLeft: 15,
                  alignItems: 'center',
                  justifyContent: 'center',
                },
              ]}
              onPress={goScreen}
            >
              <Text style={{ textAlign: 'center', marginBottom: 10 }}>
                {t('text_mode').toUpperCase()}
              </Text>
              <CallSMS style={{ width: 86, height: 86 }} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Component
