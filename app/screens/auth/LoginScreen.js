import React from 'react'
import { Text, View, TouchableOpacity, Platform } from 'react-native'
import { useTranslation } from 'react-i18next'
import * as yup from 'yup'
import { Formik } from 'formik'

import styles from '../../styles'
import { useStore } from '../../store'
import API from '../../api/services'
import validators from '../../store/validators'

import { IconIntroFirst } from '../../components/Icon'
import { Container, FormInput } from '../../components'
import { Alert } from 'react-native'

const Component = ({ navigation }) => {
  const { t, i18n } = useTranslation()
  const [, dispatch] = useStore()

  const formModel = {
    username: '',
    password: '',
    lang: i18n.language,
  }

  const formSchema = yup.object().shape({
    username: yup
      .string()
      .required(
        t('form.validation.required', { field: t('email_or_phone_number') })
      ),
    password: yup
      .string()
      .required(t('form.validation.required', { field: t('password') })),
  })

  const handleSubmit = (values, actions) => {
    API.login(values)
      .then((response) => {
        dispatch({
          type: 'setUser',
          user: {
            _id: null,
            username: values.username,
            password: values.password,
          },
        })
        const tokens = {
          token_type: response.data.token_type,
          refresh_token: response.data.refresh_token,
          access_token: response.data.access_token,
        }
        dispatch({ type: 'setToken', token: tokens })
        console.log(response)
      })
      .catch((e) => validators.showError(t('enter_correctly'), t('error')))
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
        icon="name"
        label={t('email_or_phone_number')}
        value={values.username}
        onBlur={() => setFieldTouched('username')}
        onChangeText={handleChange('username')}
        error={touched.username && errors.username ? errors.username : ''}
      />
      <FormInput
        icon="key"
        type="password"
        label={t('password')}
        maxLength={50}
        value={values.password}
        onBlur={() => setFieldTouched('password')}
        onChangeText={handleChange('password')}
        error={touched.password && errors.password ? errors.password : ''}
      />
      <TouchableOpacity
        style={[styles.btnBlueSimple, styles.containerWidth100]}
        onPress={handleSubmit}
      >
        <Text style={[styles.txtColorWhite]}>{t('login')}</Text>
      </TouchableOpacity>
    </View>
  )

  return (
    <Container padding scroll center white>
      <IconIntroFirst
        style={{ width: 115, height: 68, marginTop: 60, marginBottom: 30 }}
      />
      <Formik
        initialValues={formModel}
        validationSchema={formSchema}
        onSubmit={handleSubmit}
      >
        {(props) => <FormTemplate {...props} />}
      </Formik>

      <TouchableOpacity
        style={[styles.btnOpacitySimple, styles.fullWidth]}
        onPress={() => navigation.navigate('ForgottenPasswordScreen')}
      >
        <Text style={[styles.txtColorBlue, styles.txtUnderline]}>
          {t('forgot_password')}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.btnYellowSimple, styles.fullWidth]}
        onPress={() => navigation.navigate('RegistrationScreen')}
      >
        <Text style={[styles.txtColorWhite]}>{t('registration')}</Text>
      </TouchableOpacity>
    </Container>
  )
}

export default Component
