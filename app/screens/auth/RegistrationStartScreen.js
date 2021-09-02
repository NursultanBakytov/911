import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { useTranslation } from 'react-i18next'

import styles from '../../styles'
import { useStore } from '../../store'
import { IconIntroFirst } from '../../components/Icon'
import { Container } from '../../components'

const Component = ({ route, navigation }) => {
  const { t } = useTranslation()
  const [state, dispatch] = useStore()

  const { userNumber, userToken } = route.params
  const newUser = {
    username: userNumber,
    usertoken: userToken,
  }

  React.useEffect(() => {
    dispatch({
      type: 'setNewUser',
      newUser,
    })
  }, [])

  return (
    <Container scroll center padding white>
      <IconIntroFirst
        style={{ width: 115, height: 68, marginTop: 60, marginBottom: 30 }}
      />
      <Text style={[styles.txtCenter, { marginBottom: 20 }]}>
        {t('authorize_greeting_phone')}
      </Text>

      <TouchableOpacity
        style={[styles.btnBlueSimple, styles.fullWidth]}
        onPress={() => {
          navigation.navigate('RegistrationStep1Screen', {
            userData: newUser,
          })
        }}
      >
        <Text style={[styles.txtColorWhite]}>{t('next')}</Text>
      </TouchableOpacity>
    </Container>
  )
}

export default Component
