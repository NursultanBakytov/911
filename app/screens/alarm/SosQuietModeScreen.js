import React, { useEffect, useState } from 'react'
import {
  SafeAreaView,
  Text,
  Image,
  ScrollView,
  View,
  TouchableOpacity,
} from 'react-native'
import { useTranslation } from 'react-i18next'
import Geolocation from '@react-native-community/geolocation'
import Voice from '@react-native-community/voice'
// import { NativeModules } from 'react-native'

import styles from '../../styles'
import API from '../../api/services'
import validators from '../../store/validators'
import { useStore } from '../../store'
import {
  CallStill,
  CallCheck,
  CallCancel,
  IconMap,
  IconMicro,
  IconName,
} from '../../components/Icon'
import { ActivityIndicator } from 'react-native'

const Component = ({ navigation }) => {
  const { t, i18n } = useTranslation()
  const [state, dispatch] = useStore()
  const [sended, setSended] = useState(false)
  const [result, setResult] = useState([])
  const [isLoading, setLoading] = useState(false)
  const [voicesend, setVoicesend] = useState(true)

  const [timeleft, setTimeLeft] = useState(0)
  const [min, setmin] = useState(0)

  useEffect(() => {
    const timer =
      timeleft >= 0 && setInterval(() => setTimeLeft(timeleft + 1), 1000)
    timeleft >= 60 && setmin(min + 1, setTimeLeft(0))
    return () => clearInterval(timer)
  }, [timeleft])

  useEffect(() => {
    startRecording()
    Geolocation.getCurrentPosition((data) => {
      setlatitude(data.coords.latitude)
      setlongitude(data.coords.longitude)
    })
    Voice.onSpeechStart = onSpeechStartHandler
    Voice.onSpeechEnd = onSpeechEndHandler
    Voice.onSpeechResults = onSpeechResultsHandler

    return () => {
      Voice.destroy().then(Voice.removeAllListeners)
    }
  }, [])
  // ---------- Start MicroPhone ----------
  const onSpeechStartHandler = (e) => {
    // timeleft >= 0 && setInterval(() => setTimeLeft(timeleft + 1), 1000)
    // timeleft >= 60 && setmin(min + 1, setTimeLeft(0))
  }
  const onSpeechEndHandler = (e) => {
    setLoading(false)
    console.log('stop handler', e)
  }
  const onSpeechResultsHandler = (e) => {
    let text = e.value[0]
    setResult(e.value)
    console.log('speech result handler', e.value[0])
  }
  const startRecording = async () => {
    setLoading(true)
    try {
      await Voice.start('en-Us')
    } catch (error) {
      console.log('error raised', error)
    }
  }

  // const stopRecording = async () => {
  //   try {
  //     await Voice.stop()
  //   } catch (error) {
  //     console.log('error raised', error)
  //   }
  // }
  // ---------- Start MicroPhone ----------

  const [latitude, setlatitude] = useState('')
  const [longitude, setlongitude] = useState('')

  const sendIssue = () => {
    if (result.length === 0) {
      validators.showError(t('fill_all_fields'), t('error'))
      setSended(false)
    } else if ((longitude, latitude === '')) {
      validators.showError(t('enable_geolocation'), t('error'))
      setSended(false)
    } else {
      setSended(true)
      const data = {
        danger_type: 'sos',
        mode: 'quiet',
        latitude: latitude,
        longitude: longitude,
        comment: result,
      }
      API.sendIssue({
        data: data,
        token: state.token,
      })
        .then((response) => {
          const data =
            response.status == 200 &&
            response.data.type == 'success' &&
            response.data.data
          console.log('__response__', data)
          navigation.goBack()
        })
        .catch((e) => {
          validators.showError(t('try_again_later'), ' ')
          navigation.goBack()
        })
    }
  }

  return (
    <SafeAreaView style={[styles.containerSafeAreaView, styles.bgWhite]}>
      <ScrollView style={[styles.containerScrollView]}>
        <View style={[styles.containerCenter, { marginTop: 30 }]}>
          <CallStill style={{ width: 60, height: 60 }} />
          <Text style={{ color: '#FF842C', margin: 20, fontSize: 20 }}>
            {t('quiet_mode').toUpperCase()}
          </Text>
          {/* {result ? console.log(result) : null} */}
          <Text style={{ color: '#999999', margin: 10, fontSize: 30 }}>
            112
          </Text>
          {sended ? (
            <View
              style={[styles.containerCenter, { width: '100%', height: 200 }]}
            >
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
          ) : (
            <View>
              <ActivityIndicator size="large" color="#999999" />
              {voicesend && (
                <Text style={{ color: '#999999', margin: 10, fontSize: 20 }}>
                  {t('qm_sound_record').toUpperCase()}
                </Text>
              )}
              <Text
                style={{ alignSelf: 'center' }}
              >{`${min}:${timeleft}`}</Text>
              {/* {console.log(NativeModules.Voice)} */}
              <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity
                  style={{
                    marginTop: 10,
                    marginRight: 30,
                    width: 100,
                    height: 100,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  onPress={() => navigation.goBack()}
                >
                  <CallCancel style={{ width: 60, height: 60 }} />
                  <Text style={{ paddingTop: 10 }}>
                    {t('nm_cancel').toUpperCase()}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    marginTop: 10,
                    marginLeft: 60,
                    width: 100,
                    height: 100,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  onPress={sendIssue}
                >
                  <CallCheck
                    style={{ width: 60, height: 60 }}
                    fillColor="#CCCCCC"
                  />
                  <Text style={{ paddingTop: 10 }}>
                    {t('send').toUpperCase()}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}

          <View style={{ marginTop: 30, flexDirection: 'row', width: '80%' }}>
            <IconMap style={{ width: 18, height: 18 }} colorFill="#FF842C" />
            <Text style={{ flex: 1, paddingLeft: 10, color: '#FF842C' }}>
              {t('transfer_geolocation')}
            </Text>
          </View>

          <View style={{ marginTop: 10, flexDirection: 'row', width: '80%' }}>
            <IconMicro style={{ width: 18, height: 18 }} colorFill="#FF842C" />
            <Text style={{ flex: 1, paddingLeft: 10, color: '#FF842C' }}>
              {t('voice_record')}
            </Text>
          </View>

          <View style={{ marginTop: 10, flexDirection: 'row', width: '80%' }}>
            <IconName style={{ width: 18, height: 18 }} colorFill="#FF842C" />
            <Text style={{ flex: 1, paddingLeft: 10, color: '#FF842C' }}>
              {t('transfer_personal_date')}
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Component

{
  /* <View
            style={[styles.containerCenter, { width: '100%', height: 200 }]}
          >
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
          </View> */
}
