import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { useTranslation } from 'react-i18next'
import * as yup from 'yup'
import { Formik } from 'formik'

import { Regex } from '../../constants'
import globalStyles from '../../styles'
import { Container, FormInput } from '../../components'

const RegistrationStep1Screen = ({ route, navigation }) => {
  const { t } = useTranslation()

  const { userData } = route.params

  const FORM_MODEL = {
    firstName: '',
    lastName: '',
    birthdate: '',
    password: '',
    confirmPassword: ''
  }

  const FORM_SCHEMA = yup.object().shape({
    firstName: yup
      .string()
      .required(
        t('form.validation.required', { field: t('form.field.firstName') })
      ),
    lastName: yup
      .string()
      .required(
        t('form.validation.required', { field: t('form.field.lastName') })
      ),
    birthdate: yup
      .string()
      .required(t('form.validation.required', { field: t('date_of_birth') }))
      .matches(Regex.birthdate, t('form.validation.birthdate'))
      .length(10, t('form.validation.birthdate')),
    password: yup
      .string()
      .required(
        t('form.validation.required', { field: t('form.field.password') })
      )
      .matches(Regex.password, t('form.validation.password')),
    confirmPassword: yup
      .string()
      .required(
        t('form.validation.required', {
          field: t('form.field.passwordConfirm')
        })
      )
      .oneOf([yup.ref('password')], t('form.validation.passwordConfirm'))
  })

  const handleSubmit = values => {
    navigation.navigate('RegistrationStep2Screen', {
      userData: { ...userData, ...values }
    })
  }

  const FormTemplate = ({
    values,
    handleChange,
    errors,
    setFieldTouched,
    touched,
    handleSubmit,
    setFieldValue
  }) => (
    <View style={[styles.fullWidth]}>
      <FormInput
        icon="name"
        label={t('form.field.firstName')}
        value={values.firstName}
        onBlur={() => setFieldTouched('firstName')}
        onChangeText={handleChange('firstName')}
        error={touched.firstName && errors.firstName ? errors.firstName : ''}
      />
      <FormInput
        icon="name-yellow"
        label={t('form.field.lastName')}
        value={values.lastName}
        onBlur={() => setFieldTouched('lastName')}
        onChangeText={handleChange('lastName')}
        error={touched.lastName && errors.lastName ? errors.lastName : ''}
      />
      <FormInput
        icon="age"
        label={t('date_of_birth')}
        value={values.birthdate}
        maxLength={10}
        onBlur={() => setFieldTouched('birthdate')}
        onChangeText={handleChange('birthdate')}
        keyboardType="numeric"
        mask="datetime"
        options={{
          format: 'DD-MM-YYYY'
        }}
        error={touched.birthdate && errors.birthdate ? errors.birthdate : ''}
      />

      <FormInput
        icon="key"
        type="password"
        label={t('form.field.password')}
        maxLength={50}
        value={values.password}
        onBlur={() => setFieldTouched('password')}
        onChangeText={handleChange('password')}
        error={touched.password && errors.password ? errors.password : ''}
      />
      <FormInput
        icon="key-dark"
        type="password"
        label={t('form.field.passwordConfirm')}
        value={values.confirmPassword}
        onBlur={() => setFieldTouched('confirmPassword')}
        onChangeText={handleChange('confirmPassword')}
        error={
          touched.confirmPassword && errors.confirmPassword
            ? errors.confirmPassword
            : ''
        }
      />

      <Text style={[styles.fullWidth, styles.body, styles.mb20]}>
        {t('info.password_input_help')}
      </Text>

      <View style={styles.formFooter}>
        <TouchableOpacity
          style={[styles.btnBlueSimple, styles.containerWidth30]}
          onPress={handleSubmit}
        >
          <Text style={[styles.txtColorWhite]}>{t('next')}</Text>
        </TouchableOpacity>
      </View>
    </View>
  )

  return (
    <Container scroll center padding>
      <Text style={[styles.body, styles.fullWidth, styles.mb20]}>
        {t('info.required_fields_guidance')}
      </Text>

      <Formik
        initialValues={FORM_MODEL}
        validationSchema={FORM_SCHEMA}
        onSubmit={handleSubmit}
      >
        {props => <FormTemplate {...props} />}
      </Formik>
    </Container>
  )
}

const styles = StyleSheet.create({
  ...globalStyles,
  formFooter: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end'
  }
})

export default RegistrationStep1Screen
