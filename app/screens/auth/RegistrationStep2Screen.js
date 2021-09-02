import React from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import { useTranslation } from 'react-i18next'

import globalStyles from '../../styles'
import API from '../../api/services'
import validators from '../../store/validators'
import { useStore } from '../../store'
import { Container } from '../../components'

const RegistrationStep2Screen = ({ route, navigation }) => {
  const { t, i18n } = useTranslation()
  const [state, dispatch] = useStore()

  const { userData } = route.params

  userData.login = state.newUser.username
  userData.token = state.newUser.usertoken
  userData.language = i18n.language

  const completeRegistration = () => {
    API.newTwo(userData)
      .then((response) => {
        // console.log("__two__error__", response)
        const flag = response.data.status == 'success' && response.status == 200
        //&& response.statusText == "OK" // iphone undefined
        // if (flag) navigation.navigate('LoginScreen')
        const newUser = {
          username: state.newUser.username,
          password: userData.password,
          lang: i18n.language,
        }
        API.login(newUser)
          .then((response) => {
            dispatch({
              type: 'setUser',
              user: {
                _id: null,
                username: newUser.username,
                password: newUser.password,
              },
            })
            const tokens = {
              token_type: response.data.token_type,
              refresh_token: response.data.refresh_token,
              access_token: response.data.access_token,
            }
            dispatch({ type: 'setToken', token: tokens })
          })
          .catch((e) => {
            // console.log("__login__error__", e)
            validators.showError(e)
          })
      })
      .catch((e) => {
        // console.log("__two__error__", e)
        validators.showError(e)
      })
  }

  return (
    <Container scroll center padding>
      <Text style={[styles.h6, styles.txtCenter]}>
        {t('information_step_data')}
      </Text>

      <View
        style={{
          marginTop: 50,
          flex: 1,
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}
      >
        <TouchableOpacity
          style={[styles.btnBlueSimple, { width: 180 }]}
          onPress={() =>
            navigation.navigate('RegistrationStep3Screen', { userData })
          }
        >
          <Text style={[styles.txtColorWhite]}>
            {t('information_step_fill_data')}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.btnOpacitySimple,
            { width: '30%', alignItems: 'flex-end' },
          ]}
          onPress={completeRegistration}
        >
          <Text>{t('skip')}</Text>
        </TouchableOpacity>
      </View>
    </Container>
  )
}

const styles = StyleSheet.create({
  ...globalStyles,
})

export default RegistrationStep2Screen
