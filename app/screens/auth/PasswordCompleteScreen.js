import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { useTranslation } from 'react-i18next'

import styles from '../../styles'
import { IconIntroFirst } from '../../components/Icon'
import { Container } from '../../components'

const Component = ({ navigation }) => {
  const { t } = useTranslation()
  return (
    <Container padding scroll center white>
      <IconIntroFirst
        style={{ width: 115, height: 68, marginTop: 60, marginBottom: 30 }}
      />
      <Text style={[styles.txtLineHeight40]}>{t('password_changed')}</Text>

      <TouchableOpacity
        style={[styles.btnBlueSimple, styles.fullWidth]}
        onPress={() => navigation.navigate('LoginScreen')}
      >
        <Text style={[styles.txtColorWhite]}>{t('enter_account')}</Text>
      </TouchableOpacity>
    </Container>
  )
}

export default Component
