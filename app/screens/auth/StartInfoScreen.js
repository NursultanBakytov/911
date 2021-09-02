import React from 'react'
import { Text, View } from 'react-native'
import { useTranslation } from 'react-i18next'

import styles from '../../styles'
import { IconIntroThird } from '../../components/Icon'
import { Container, SlidesFooter } from '../../components'

const Component = ({ navigation }) => {
  const { t } = useTranslation()
  return (
    <Container center white>
      <View style={[styles.fullWidth, styles.alignItemsCenter, styles.flex]}>
        <IconIntroThird
          style={{ width: 89, height: 82, marginTop: 60, marginBottom: 30 }}
        />
        <Text style={[styles.txtCenter, styles.txtPaddingTB5LR20]}>
          {t('registration_info')}
        </Text>
        <Text style={[styles.txtCenter, styles.txtPaddingTB5LR20]}>
          {t('give_us_info')}
        </Text>
      </View>

      <SlidesFooter
        activeIndex={2}
        onPrevPress={() => navigation.navigate('StartSecurScreen')}
        onNextPress={() => navigation.navigate('LoginScreen')}
      />
    </Container>
  )
}

export default Component
