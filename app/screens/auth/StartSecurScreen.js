import React from 'react'
import {
  SafeAreaView,
  Text,
  Image,
  ScrollView,
  View,
  TouchableOpacity
} from 'react-native'
import { useTranslation } from 'react-i18next'

import styles from '../../styles'
import { IconIntroSecond } from '../../components/Icon'
import { Container, SlidesFooter } from '../../components'

const Component = ({ navigation }) => {
  const { t } = useTranslation()
  return (
    <Container center white>
      <View style={[styles.fullWidth, styles.alignItemsCenter, styles.flex]}>
        <IconIntroSecond
          style={{ width: 100, height: 70, marginTop: 60, marginBottom: 30 }}
        />
        <Text style={[styles.txtCenter, styles.txtPaddingTB5LR20]}>
          {t('care')}
        </Text>
        <Text style={[styles.txtCenter, styles.txtPaddingTB5LR20]}>
          {t('we_connect_you_with_institutions')}
        </Text>
      </View>

      <SlidesFooter
        activeIndex={1}
        onPrevPress={() => navigation.navigate('StartLangScreen')}
        onNextPress={() => navigation.navigate('StartInfoScreen')}
      />
    </Container>
  )
}

export default Component
