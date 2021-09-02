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
import { CallSignal, CallStill } from '../../components/Icon'
import { AllIcons } from '../../components'

const Component = ({ navigation }) => {
  const { t, i18n } = useTranslation()
  const height = Math.floor(Dimensions.get('window').height * 0.5)
  const width = Math.floor(Dimensions.get('window').width * 0.5) - 20

  return (
    <SafeAreaView style={[styles.containerSafeAreaView, styles.bgWhiteDark]}>
      <ScrollView style={[styles.containerScrollView]}>
        <View style={[styles.containerCenter]}>
          {/* <AllIcons /> */}

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
              onPress={() =>
                navigation.navigate('SOS', { screen: 'SosNormalModeScreen' })
              }
            >
              <Text style={{ textAlign: 'center', marginBottom: 10 }}>
                {t('normal_mode').toUpperCase()}
              </Text>
              <CallSignal style={{ width: 86, height: 86 }} />
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
              onPress={() =>
                navigation.navigate('SOS', { screen: 'SosQuietModeScreen' })
              }
            >
              <Text style={{ textAlign: 'center', marginBottom: 10 }}>
                {t('quiet_mode').toUpperCase()}
              </Text>
              <CallStill style={{ width: 86, height: 86 }} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Component
