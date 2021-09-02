import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { CustomTabBar } from '../components'
import {
  AlarmAmbulanceScreen,
  AlarmAmbulanceTextScreen,
  AlarmVirusTextScreen,
  AlarmStartScreen,
  SosNormalModeScreen,
  SosQuietModeScreen,
  SosScreen,
  ChangePassScreen,
  ChangeProfileScreen,
  HotKeyScreen,
  MedicalDataScreen,
  SimpleModeScreen,
  SupportScreen,
  SwitchLangScreen,
  UserCatalogScreen,
  UserInfoScreen,
  UserNotificationsScreen,
  UserProfileScreen,
  UserRequestsScreen,
  UserStartScreen,
  UserSettingsScreen,
  CityInfoScreen,
  AppInstructionScreen,
} from '../screens'
import { createStack } from './Config'

const Tab1Stack = createStack([
  { name: 'SosScreen', component: SosScreen, options: { headerShown: false } },
  {
    name: 'SosNormalModeScreen',
    component: SosNormalModeScreen,
    options: { headerShown: false },
  },
  {
    name: 'SosQuietModeScreen',
    component: SosQuietModeScreen,
    options: { headerShown: false },
  },
])

const Tab2Stack = createStack([
  {
    name: 'AlarmStartScreen',
    component: AlarmStartScreen,
    options: { headerShown: false },
  },
  {
    name: 'AlarmAmbulanceScreen',
    component: AlarmAmbulanceScreen,
    options: { headerShown: false },
  },
  {
    name: 'AlarmAmbulanceTextScreen',
    component: AlarmAmbulanceTextScreen,
    options: { headerShown: false },
  },
  {
    name: 'AlarmVirusTextScreen',
    component: AlarmVirusTextScreen,
    options: { headerShown: false },
  },
  // { name: 'AlarmStartScreen',
  // component: AlarmStartScreen, options: {headerShown: false} },
])

const Tab3Stack = createStack([
  {
    name: 'UserStartScreen',
    component: UserStartScreen,
    options: { headerShown: false },
  },
  {
    name: 'UserCatalogScreen',
    component: UserCatalogScreen,
    options: { headerShown: false },
  },
  {
    name: 'UserInfoScreen',
    component: UserInfoScreen,
    options: { headerShown: false },
  },
  {
    name: 'AppInstructionScreen',
    component: AppInstructionScreen,
    options: { headerShown: false },
  },
  {
    name: 'CityInfoScreen',
    component: CityInfoScreen,
    options: { headerShown: false },
  },
  {
    name: 'UserNotificationsScreen',
    component: UserNotificationsScreen,
    options: { headerShown: false },
  },
  {
    name: 'UserProfileScreen',
    component: UserProfileScreen,
    options: { headerShown: false },
  },
  {
    name: 'UserRequestsScreen',
    component: UserRequestsScreen,
    options: { headerShown: false },
  },
  {
    name: 'UserSettingsScreen',
    component: UserSettingsScreen,
    options: { headerShown: false },
  },
  {
    name: 'HotKeyScreen',
    component: HotKeyScreen,
    options: { headerShown: false },
  },
  {
    name: 'SimpleModeScreen',
    component: SimpleModeScreen,
    options: { headerShown: false },
  },
  {
    name: 'SupportScreen',
    component: SupportScreen,
    options: { headerShown: false },
  },
  {
    name: 'SwitchLangScreen',
    component: SwitchLangScreen,
    options: { headerShown: false },
  },
  {
    name: 'ChangePassScreen',
    component: ChangePassScreen,
    options: { headerShown: false },
  },
  {
    name: 'MedicalDataScreen',
    component: MedicalDataScreen,
    options: { headerShown: false },
  },
  {
    name: 'ChangeProfileScreen',
    component: ChangeProfileScreen,
    options: { headerShown: false },
  },
])

const ClientTabs = createBottomTabNavigator()
const ClientTabsStack = ({ navigation, route }) => (
  <ClientTabs.Navigator
    tabBar={(props) => <CustomTabBar {...props} />}
    initialRouteName="SOS"
    // initialRouteName="Alarm"
    // initialRouteName="User"
  >
    <ClientTabs.Screen name="SOS" component={Tab1Stack} />
    <ClientTabs.Screen name="Alarm" component={Tab2Stack} />
    <ClientTabs.Screen name="User" component={Tab3Stack} />
  </ClientTabs.Navigator>
)

const Component = () => (
  <NavigationContainer>
    <ClientTabsStack />
  </NavigationContainer>
)

export default Component
