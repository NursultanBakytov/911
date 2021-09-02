import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { useTranslation } from 'react-i18next'
import * as yup from 'yup'
import { Formik } from 'formik'

import styles from '../../styles'
import { IconIntroFirst } from '../../components/Icon'
import { Container, FormInput } from '../../components'
import API from '../../api/services'
import validators from '../../store/validators'

const Component = ({ navigation }) => {
  const { t } = useTranslation()

  const formModel = {
    username: '',
    // username: '380667505088',
  }

  const formSchema = yup.object().shape({
    username: yup
      .string()
      .required(validators.required(t('email_or_phone_number')))
      .min(4, validators.minLength(4))
      .max(14, validators.maxLength(14)),
  })

  const handleSubmit = (values, actions) => {
    API.forgotSendCode(values)
      .then((response) => {
        const flag = response.data.status == 'success' && response.status == 200
        //&& response.statusText == "OK" // iphone undefined
        if (flag)
          navigation.navigate('ForgottenCodeScreen', {
            userNumber: values.username,
          })
      })
      .catch((e) => {
        // console.log("__forgot__error__", e)
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
        icon="name"
        label={t('email_or_phone_number')}
        value={values.username}
        onBlur={() => setFieldTouched('username')}
        onChangeText={handleChange('username')}
        error={touched.username && errors.username ? errors.username : ''}
      />
      <TouchableOpacity
        style={[styles.btnBlueSimple, styles.fullWidth]}
        onPress={handleSubmit}
      >
        <Text style={[styles.txtColorWhite]}>{t('authorize_submit')}</Text>
      </TouchableOpacity>
    </View>
  )

  return (
    <Container center scroll padding white>
      <IconIntroFirst
        style={{ width: 115, height: 68, marginTop: 60, marginBottom: 30 }}
      />
      <Text style={[styles.txtCenter, { paddingVertical: 20 }]}>
        {t('forgot_password')}
      </Text>
      <Text style={[styles.fullWidth, { paddingBottom: 20 }]}>
        {t('forgot_password_text_guidance')}
      </Text>
      <Formik
        initialValues={formModel}
        validationSchema={formSchema}
        onSubmit={handleSubmit}
      >
        {(props) => <FormTemplate {...props} />}
      </Formik>

      {/* <TextInput
          style={styles.txtInput}
          placeholder={t('email_or_phone_number')}
        />
        <TouchableOpacity style={[styles.btnBlueSimple]} onPress={() => navigation.navigate('ForgottenCodeScreen') } >
          <Text style={[styles.txtColorWhite]}>{t('authorize_submit')}</Text>
        </TouchableOpacity> */}

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
