import React from 'react'
import { Platform } from 'react-native'

import Public from './Public'
import Secure from './Secure'
import SplashScreen from './SplashScreen'
import { useStore } from '../store'

const Component = () => {
  const [{ isLoading, isLogged }] = useStore()
  
  if (isLoading) {
    const Loader = (Platform.OS == 'web') || (Platform.OS === 'ios' && parseInt(Platform.Version, 10) <= 9)
    ? SplashScreen
    : SplashScreen

    return <Loader />
  }

  const Layout = isLogged
    ? Secure
    : Public

  return <Layout />
}

export default Component
