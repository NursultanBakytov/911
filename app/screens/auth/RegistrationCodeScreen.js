import React from 'react'
import {
  SafeAreaView,
  Text,
  TextInput,
  Image,
  ScrollView,
  View,
  TouchableOpacity,
} from 'react-native'
import { useTranslation } from 'react-i18next'
import * as yup from 'yup'
import { Formik } from 'formik'

import styles from '../../styles'
import { IconIntroFirst } from '../../components/Icon'
import { FormInput } from '../../components'
import API from '../../api/services'
import validators from '../../store/validators'

const Component = ({ route, navigation }) => {
  const { userNumber } = route.params
  const { t, i18n } = useTranslation()
  const [title, setTitle] = React.useState('')
  const [timer, setTimer] = React.useState('')

  React.useEffect(() => {
    const lbl = t('we_sent_phone_code').split('%1s')
    setTitle(lbl[0] + userNumber + lbl[1])
    const tmr = t('resending_code').split('%1d')
    setTimer(tmr[0] + 59 + tmr[1])
  }, [])

  const formModel = {
    token: '',
  }

  const formSchema = yup.object().shape({
    token: yup
      .string()
      .required(validators.required(t('enter_code_hint')))
      .min(4, validators.minLength(4)),
  })

  const handleSubmit = (values, actions) => {
    API.newVerify({
      login: userNumber,
      token: values.token,
    })
      .then((response) => {
        // console.log('__forgot__error__', response)
        const flag = response.data.status == 'success' && response.status == 200
        //&& response.statusText == "OK" // iphone undefined
        if (flag)
          navigation.navigate('RegistrationStartScreen', {
            userNumber: userNumber,
            userToken: values.token,
          })
      })
      .catch((e) => {
        console.log('__forgot__error__', e)
        validators.showError(e)
      })
  }

  const FormTemplate = ({
    values,
    handleChange,
    errors,
    setFieldTouched,
    touched,
    isValid,
    handleSubmit,
    ...props
  }) => (
    <View style={[styles.containerWidth80]}>
      <FormInput
        label={t('enter_code_hint')}
        value={values.token}
        onBlur={() => setFieldTouched('token')}
        onChangeText={handleChange('token')}
        error={touched.token && errors.token ? errors.token : ''}
      />
      <TouchableOpacity
        style={[styles.btnBlueSimple, styles.containerWidth100]}
        onPress={handleSubmit}
      >
        <Text style={[styles.txtColorWhite]}>{t('authorize_submit')}</Text>
      </TouchableOpacity>
    </View>
  )

  return (
    <SafeAreaView style={[styles.containerSafeAreaView, styles.bgWhite]}>
      <ScrollView style={[styles.containerScrollView]}>
        <View style={[styles.containerCenter]}>
          <IconIntroFirst
            style={{ width: 115, height: 68, marginTop: 60, marginBottom: 30 }}
          />
          <Text style={[styles.txtPaddingTB10, styles.containerWidth80]}>
            {title}
          </Text>

          <Formik
            initialValues={formModel}
            validationSchema={formSchema}
            onSubmit={handleSubmit}
          >
            {(props) => <FormTemplate {...props} />}
          </Formik>

          <Text
            style={[
              styles.txtPaddingTB10,
              styles.containerWidth80,
              styles.txtRight,
            ]}
          >
            {t('not_receive_code')}
          </Text>
          <Text
            style={[
              styles.txtPaddingTB10,
              styles.containerWidth80,
              styles.txtRight,
            ]}
          >
            {timer}
          </Text>
          <TouchableOpacity
            style={[styles.btnYellowSimple]}
            onPress={() => navigation.navigate('RegistrationScreen')}
          >
            <Text style={[styles.txtColorWhite]}>{t('edit_phone_number')}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Component
