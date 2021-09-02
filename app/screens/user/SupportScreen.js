import React from 'react'
import {
  SafeAreaView,
  Text,
  TextInput,
  ScrollView,
  View,
  TouchableOpacity,
} from 'react-native'
import { useTranslation } from 'react-i18next'

import styles from '../../styles'
import {
  TitleHeader,
} from '../../components'

const Component = ({ navigation }) => {
  const {t, i18n} = useTranslation()

  const handleSubmit = (values, actions) => {
    navigation.goBack()
  }

  return (
    <SafeAreaView style={[styles.containerSafeAreaView, styles.bgWhiteDark  ]}><ScrollView style={[styles.containerScrollView]}>
      <TitleHeader 
        title={t('contact_to_support').toUpperCase()} 
        leftIcon="back" leftPress={() => navigation.goBack()}
      />
      <View style={[styles.containerCenter, {margin:20}]}>

        <TextInput
          style={[styles.txtInput, {height:80}]}
          multiline={true}
          placeholder={t('your_message')}
        />
        <TouchableOpacity style={[styles.btnBlueSimple]} onPress={handleSubmit} >
          <Text style={[styles.txtColorWhite]}>{t('send').toUpperCase()}</Text>
        </TouchableOpacity>

      </View>
    </ScrollView></SafeAreaView>
  )
}

export default Component
