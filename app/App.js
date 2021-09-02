import 'react-native-gesture-handler'
import React from 'react'
import { StatusBar } from 'react-native'

import './i18n'
import { StateProvider, initialState, reducer } from './store'
import Layouts from './navigation/Layouts'

const App = () => (
  <StateProvider initialState={initialState} reducer={reducer}>
    <StatusBar barStyle="dark-content" backgroundColor="white" />
    <Layouts />
  </StateProvider>
)

export default App
