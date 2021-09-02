import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import {
  ForgottenCodeScreen,
  ForgottenPasswordScreen,
  LoginScreen,
  PasswordCompleteScreen,
  PasswordNewScreen,
  RegistrationCodeScreen,
  RegistrationScreen,
  RegistrationStartScreen,
  RegistrationStep1Screen,
  RegistrationStep2Screen,
  RegistrationStep3Screen,
  RegistrationStep4Screen,
  StartInfoScreen,
  StartLangScreen,
  StartSecurScreen
} from '../screens'
import { createStack } from './Config'

const Stack = createStack([
  {
    name: 'StartLangScreen',
    component: StartLangScreen,
    options: { headerShown: false }
  },
  {
    name: 'StartSecurScreen',
    component: StartSecurScreen,
    options: { headerShown: false }
  },
  {
    name: 'StartInfoScreen',
    component: StartInfoScreen,
    options: { headerShown: false }
  },
  {
    name: 'LoginScreen',
    component: LoginScreen,
    options: { headerShown: false }
  },
  {
    name: 'ForgottenPasswordScreen',
    component: ForgottenPasswordScreen,
    options: { headerShown: false }
  },
  {
    name: 'ForgottenCodeScreen',
    component: ForgottenCodeScreen,
    options: { headerShown: false }
  },
  {
    name: 'PasswordNewScreen',
    component: PasswordNewScreen,
    options: { headerShown: false }
  },
  {
    name: 'PasswordCompleteScreen',
    component: PasswordCompleteScreen,
    options: { headerShown: false }
  },
  {
    name: 'RegistrationScreen',
    component: RegistrationScreen,
    options: { headerShown: false }
  },
  {
    name: 'RegistrationCodeScreen',
    component: RegistrationCodeScreen,
    options: { headerShown: false }
  },
  {
    name: 'RegistrationStartScreen',
    component: RegistrationStartScreen,
    options: { headerShown: false }
  },
  {
    name: 'RegistrationStep1Screen',
    component: RegistrationStep1Screen,
    options: { headerShown: false }
  },
  {
    name: 'RegistrationStep2Screen',
    component: RegistrationStep2Screen,
    options: { headerShown: false }
  },
  {
    name: 'RegistrationStep3Screen',
    component: RegistrationStep3Screen,
    options: { headerShown: false }
  },
  {
    name: 'RegistrationStep4Screen',
    component: RegistrationStep4Screen,
    options: { headerShown: false }
  }
])

const Component = () => (
  <NavigationContainer>
    <Stack></Stack>
  </NavigationContainer>
)

export default Component
