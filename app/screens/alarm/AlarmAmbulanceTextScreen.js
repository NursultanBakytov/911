import React, { useEffect, useState } from 'react'
import {
  SafeAreaView,
  Text,
  TextInput,
  ScrollView,
  View,
  TouchableOpacity,
} from 'react-native'
import { useTranslation } from 'react-i18next'
import Geolocation from '@react-native-community/geolocation'

import styles from '../../styles'
import API from '../../api/services'
import validators from '../../store/validators'
import {
  IconMap,
  IconName,
  MenuArrow,
  MenuAmbulance,
  MenuFireTruck,
  MenuGas,
  MenuPolice,
  MenuVirus,
} from '../../components/Icon'
import { ImagePicker } from '../../components'
import { ActivityIndicator } from 'react-native'

const Component = ({ route, navigation }) => {
  if (!route || !route.params) {
    route = {
      params: { type: 'ambulance' },
    }
  }
  useEffect(() => {
    Geolocation.getCurrentPosition((data) => {
      setlatitude(data.coords.latitude)
      setlongitude(data.coords.longitude)
    })
  }, [])
  // console.log('__router__', route.params.type)
  const [Sended, setSended] = useState(false)
  const [description, setDescription] = useState('')
  const { t, i18n } = useTranslation()
  const [pass, setPass] = useState(false)
  const [latitude, setlatitude] = useState('')
  const [longitude, setlongitude] = useState('')
  const [image, setimage] = useState([])
  const sendIssue = () => {
    //"fire/criminal/ambulance/gas/sos"
    setSended(true)
    const dangerType =
      route.params.type == 'virus'
        ? 'ambulance'
        : route.params.type == 'police'
        ? 'criminal'
        : route.params.type

    const data = {
      description: description,
      danger_type: dangerType,
      mode: 'quiet',
      latitude: latitude,
      longitude: longitude,
      photo: image,
    }
    if (description === '') {
      validators.showError(t('fill_all_fields'), t('error'))
      setSended(false)
    } else if ((longitude, latitude === '')) {
      validators.showError(t('enable_geolocation'), t('error'))
      setSended(false)
    } else if (image.length === 0) {
      validators.showError(t('fill_all_fields'), t('error'))
      setSended(false)
    } else {
      API.sendIssue({
        data: data,
      })
        .then((response) => {
          const data =
            response.status == 200 &&
            response.data.type == 'success' &&
            response.data.data
          // navigation.navigate('Alarm', { screen: 'AlarmStartScreen' })
          setPass(true)
          setSended(false)
        })
        .catch((e) => {
          setSended(false)
          validators.showError(t('try_again_later'), ' ')
          navigation.navigate('Alarm', { screen: 'AlarmStartScreen' })
        })
    }
  }

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

  const getTitle = (type) => {
    if (type == 'ambulance')
      return (
        <Text style={{ color: '#0BCDCF' }}>{t('ambulance').toUpperCase()}</Text>
      )
    if (type == 'police')
      return (
        <Text style={{ color: '#519DFF' }}>{t('police').toUpperCase()}</Text>
      )
    if (type == 'fire')
      return (
        <Text style={{ color: '#FF5858' }}>
          {t('fire_service').toUpperCase()}
        </Text>
      )
    if (type == 'gas')
      return (
        <Text style={{ color: '#FF842C' }}>
          {t('gas_service').toUpperCase()}
        </Text>
      )
    if (type == 'virus')
      return (
        <Text style={{ color: '#8364FF' }}>
          {t('virus_suspicion').toUpperCase()}
        </Text>
      )
  }

  const getPhone = (type) => {
    if (type == 'ambulance') return '103'
    else if (type == 'police') return '102'
    else if (type == 'fire') return '101'
    else if (type == 'gas') return '104'
    else if (type == 'virus') return '0800505201'
  }

  const getFormStatus = () => {
    if (pass) {
      return (
        <View style={[styles.containerCenter, { width: '100%', height: 200 }]}>
          <Text
            style={{
              fontSize: 18,
              color: '#999999',
              textAlign: 'center',
              paddingBottom: 40,
            }}
          >
            {t('callAccepted')}
          </Text>
        </View>
      )
    }
    return (
      <View style={[styles.containerCenter, { width: '100%' }]}>
        <ImagePicker setImg={setimage} />
        <TextInput
          style={[styles.txtInput, { height: 100, padding: 10 }]}
          multiline={true}
          value={description}
          onChangeText={(text) => setDescription(text)}
          placeholder={t('describe_problem')}
        />
        {Sended ? (
          <ActivityIndicator size="large" color="#519DFF" />
        ) : (
          <TouchableOpacity style={[styles.btnBlueSimple]} onPress={sendIssue}>
            <Text style={[styles.txtColorWhite]}>
              {t('send').toUpperCase()}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    )
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
          {getTitle(route.params.type)}
        </View>
        <View style={[styles.containerCenter]}>
          <Text style={{ padding: 40, fontSize: 20, color: '#999999' }}>
            {getPhone(route.params.type)}
          </Text>

          {getFormStatus()}

          <View style={{ marginTop: 30, flexDirection: 'row', width: '80%' }}>
            <IconMap style={{ width: 18, height: 18 }} colorFill="#999999" />
            <Text style={{ flex: 1, paddingLeft: 10 }}>
              {t('transfer_geolocation')}
            </Text>
          </View>

          <View style={{ marginTop: 10, flexDirection: 'row', width: '80%' }}>
            <IconName style={{ width: 18, height: 18 }} colorFill="#999999" />
            <Text style={{ flex: 1, paddingLeft: 10 }}>
              {t('transfer_personal_date')}
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Component
