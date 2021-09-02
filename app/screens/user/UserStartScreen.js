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
  MenuAccount,
  MenuCatalog,
  MenuInfo,
  MenuQueries,
  MenuReport,
  MenuSettings,
} from '../../components/Icon'

const Component = ({ navigation }) => {
  const { t, i18n } = useTranslation()
  const width = Math.floor(Dimensions.get('window').width * 0.5) - 20

  return (
    <SafeAreaView style={[styles.containerSafeAreaView, styles.bgWhiteDark]}>
      <ScrollView style={[styles.containerScrollView]}>
        <View style={[styles.containerCenter]}>
          <View style={styles.containerMenuItem}>
            <TouchableOpacity
              style={[styles.btnMenuItem, { height: width, width: width }]}
              onPress={() =>
                navigation.navigate('User', { screen: 'UserRequestsScreen' })
              }
            >
              <MenuQueries style={{ width: 25, height: 25, marginBottom: 6 }} />
              <Text style={{ color: '#519DFF', textAlign: 'center' }}>
                {t('menu_my_requests').toUpperCase()}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.btnMenuItem,
                { height: width, width: width, marginLeft: 15 },
              ]}
              onPress={() =>
                navigation.navigate('User', { screen: 'UserProfileScreen' })
              }
            >
              <MenuAccount style={{ width: 25, height: 25, marginBottom: 6 }} />
              <Text style={{ color: '#8364FF', textAlign: 'center' }}>
                {t('menu_my_profile').toUpperCase()}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.containerMenuItem}>
            <TouchableOpacity
              style={[styles.btnMenuItem, { height: width, width: width }]}
              onPress={() =>
                navigation.navigate('User', { screen: 'UserCatalogScreen' })
              }
            >
              <MenuCatalog style={{ width: 25, height: 25, marginBottom: 6 }} />
              <Text style={{ color: '#0BCDCF', textAlign: 'center' }}>
                {t('menu_catalogue').toUpperCase()}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.btnMenuItem,
                { height: width, width: width, marginLeft: 15 },
              ]}
              onPress={() =>
                navigation.navigate('User', {
                  screen: 'UserNotificationsScreen',
                })
              }
            >
              <MenuReport style={{ width: 25, height: 25, marginBottom: 6 }} />
              <Text style={{ color: '#FF842C', textAlign: 'center' }}>
                {t('notifications').toUpperCase()}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.containerMenuItem}>
            <TouchableOpacity
              style={[styles.btnMenuItem, { height: width, width: width }]}
              onPress={() =>
                navigation.navigate('User', { screen: 'UserSettingsScreen' })
              }
            >
              <MenuSettings
                style={{ width: 25, height: 25, marginBottom: 6 }}
              />
              <Text style={{ color: '#FB65FE', textAlign: 'center' }}>
                {t('menu_settings').toUpperCase()}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.btnMenuItem,
                { height: width, width: width, marginLeft: 15 },
              ]}
              onPress={() =>
                navigation.navigate('User', { screen: 'UserInfoScreen' })
              }
            >
              <MenuInfo style={{ width: 25, height: 25, marginBottom: 6 }} />
              <Text style={{ color: '#40C9FF', textAlign: 'center' }}>
                {t('menu_more_info').toUpperCase()}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Component
