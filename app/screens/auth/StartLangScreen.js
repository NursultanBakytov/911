import React from 'react'
import {
  SafeAreaView,
  Text,
  ScrollView,
  View,
  TouchableOpacity
} from 'react-native'
import { useTranslation } from 'react-i18next'

import styles from '../../styles'
import { IconIntroFirst } from '../../components/Icon'
import { Container, SlidesFooter } from '../../components'

const Component = ({ navigation }) => {
  const { t, i18n } = useTranslation()

  const changeLang = lang => {
    i18n.changeLanguage(lang)
    navigation.navigate('StartSecurScreen')
  }

  return (
    <Container center white>
      <View style={[styles.fullWidth, styles.alignItemsCenter, styles.flex]}>
        <IconIntroFirst
          style={{ width: 115, height: 68, marginTop: 60, marginBottom: 30 }}
        />
        <Text style={[styles.txtCenter, styles.txtPaddingTB5LR20]}>
          {t('welcome_in_112')}
        </Text>
        <Text style={[styles.txtCenter, styles.txtPaddingTB5LR20]}>
          {t('choose_language')}
        </Text>

        <TouchableOpacity
          style={[styles.btnWhiteOutlineBlack]}
          onPress={() => changeLang('uk')}
        >
          <Text>Українська</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btnWhiteOutlineBlack]}
          onPress={() => changeLang('ru')}
        >
          <Text>Русский</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btnWhiteOutlineBlack]}
          onPress={() => changeLang('en')}
        >
          <Text>English</Text>
        </TouchableOpacity>
      </View>

      <SlidesFooter
        activeIndex={0}
        onNextPress={() => navigation.navigate('StartSecurScreen')}
      />
    </Container>
  )
}

export default Component
