import React from 'react'
import {
  Dimensions,
  SafeAreaView,
  Text,
  ScrollView,
  View,
  TouchableOpacity,
} from 'react-native'
import { useTranslation } from 'react-i18next'

import styles from '../../styles'
import {
  MenuAmbulance,
  MenuFireTruck,
  MenuGas,
  MenuPolice,
  MenuVirus,
} from '../../components/Icon'

import { TitleHeader } from '../../components'

const Component = ({ navigation }) => {
  const { t, i18n } = useTranslation()
  const width = Math.floor(Dimensions.get('window').width * 0.5) - 20

  return (
    <SafeAreaView style={[styles.containerSafeAreaView, styles.bgWhiteDark]}>
      <ScrollView style={[styles.containerScrollView]}>
        <TitleHeader title={t('menu_report').toUpperCase()} />
        <View style={[styles.containerCenter]}>
          <View style={styles.containerMenuItem}>
            <TouchableOpacity
              style={[styles.btnMenuItem, { height: width, width: width }]}
              onPress={() =>
                navigation.navigate('Alarm', {
                  screen: 'AlarmAmbulanceScreen',
                  params: { type: 'ambulance' },
                })
              }
            >
              <MenuAmbulance
                style={{ width: 50, height: 50, marginBottom: 6 }}
              />
              <Text style={{ color: '#0BCDCF', textAlign: 'center' }}>
                {t('ambulance').toUpperCase()}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.btnMenuItem,
                { height: width, width: width, marginLeft: 15 },
              ]}
              // onPress={() => navigation.navigate('Alarm', { screen: 'AlarmPoliceScreen' }) }
              onPress={() =>
                navigation.navigate('Alarm', {
                  screen: 'AlarmAmbulanceScreen',
                  params: { type: 'police' },
                })
              }
            >
              <MenuPolice style={{ width: 50, height: 50, marginBottom: 6 }} />
              <Text style={{ color: '#519DFF', textAlign: 'center' }}>
                {t('police').toUpperCase()}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.containerMenuItem}>
            <TouchableOpacity
              style={[styles.btnMenuItem, { height: width, width: width }]}
              // onPress={() => navigation.navigate('Alarm', { screen: 'AlarmFireScreen' }) }
              onPress={() =>
                navigation.navigate('Alarm', {
                  screen: 'AlarmAmbulanceScreen',
                  params: { type: 'fire' },
                })
              }
            >
              <MenuFireTruck
                style={{ width: 50, height: 50, marginBottom: 6 }}
              />
              <Text style={{ color: '#FF5858', textAlign: 'center' }}>
                {t('fire_service').toUpperCase()}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.btnMenuItem,
                { height: width, width: width, marginLeft: 15 },
              ]}
              // onPress={() => navigation.navigate('Alarm', { screen: 'AlarmGasScreen' }) }
              onPress={() =>
                navigation.navigate('Alarm', {
                  screen: 'AlarmAmbulanceScreen',
                  params: { type: 'gas' },
                })
              }
            >
              <MenuGas style={{ width: 50, height: 50, marginBottom: 6 }} />
              <Text style={{ color: '#FF842C', textAlign: 'center' }}>
                {t('gas_service').toUpperCase()}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.containerMenuItem}>
            <TouchableOpacity
              style={[styles.btnMenuItem, { height: width, width: width }]}
              // onPress={() => navigation.navigate('Alarm', { screen: 'AlarmVirusScreen' }) }
              onPress={() =>
                navigation.navigate('Alarm', {
                  screen: 'AlarmAmbulanceScreen',
                  params: { type: 'virus' },
                })
              }
            >
              <MenuVirus style={{ width: 50, height: 50, marginBottom: 6 }} />
              <Text style={{ color: '#8364FF', textAlign: 'center' }}>
                {t('virus_suspicion').toUpperCase()}
              </Text>
            </TouchableOpacity>
            <View
              style={[{ height: width, width: width, marginLeft: 15 }]}
            ></View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Component
