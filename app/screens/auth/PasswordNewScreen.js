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
import API from '../../api/services'
import validators from '../../store/validators'
import { Container, FormInput } from '../../components'

const Component = ({ route, navigation }) => {
  const { userNumber, userToken } = route.params
  // const { userNumber, userToken } = {
  //   userNumber: '123123123',
  //   userToken: '234234234'
  // }
  const { t, i18n } = useTranslation()

  const formModel = {
    password: '',
    confirm: '',
  }

  const formSchema = yup.object().shape({
    confirm: yup
      .string()
      .required(validators.required('Confirm'))
      .min(4, validators.minLength(4)),
    password: yup
      .string()
      .required(validators.required('Password'))
      .min(4, validators.minLength(4)),
  })

  const handleSubmit = (values, actions) => {
    API.forgotInputPassword({
      login: userNumber,
      token: userToken,
      password: values.password,
      password_confirmation: values.confirm,
    })
      .then((response) => {
        const flag = response.data.status == 'success' && response.status == 200
        //&& response.statusText == "OK" // iphone undefined
        if (flag) navigation.navigate('PasswordCompleteScreen')
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
    <View style={[styles.fullWidth]}>
      <FormInput
        icon="key"
        type="password"
        label={t('new_password')}
        maxLength={50}
        value={values.password}
        onBlur={() => setFieldTouched('password')}
        onChangeText={handleChange('password')}
        error={touched.password && errors.password ? errors.password : ''}
      />
      <FormInput
        icon="key-dark"
        type="password"
        label={t('confirm_password')}
        value={values.confirm}
        onBlur={() => setFieldTouched('confirm')}
        onChangeText={handleChange('confirm')}
        error={touched.confirm && errors.confirm ? errors.confirm : ''}
      />

      <TouchableOpacity
        style={[styles.btnBlueSimple, styles.containerWidth100]}
        onPress={handleSubmit}
      >
        <Text style={[styles.txtColorWhite]}>
          {t('change_password_button_text')}
        </Text>
      </TouchableOpacity>
    </View>
  )

  return (
    <Container scroll padding center white>
      <IconIntroFirst
        style={{ width: 115, height: 68, marginTop: 60, marginBottom: 30 }}
      />
      <Text style={{ paddingVertical: 20 }}>{t('create_new_password')}</Text>

      <Formik
        initialValues={formModel}
        validationSchema={formSchema}
        onSubmit={handleSubmit}
      >
        {(props) => <FormTemplate {...props} />}
      </Formik>
    </Container>
  )
}

export default Component
