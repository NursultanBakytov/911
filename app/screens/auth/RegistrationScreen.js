import React from 'react'
import { SafeAreaView, Text, ScrollView, View, Pressable } from 'react-native'
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

  const phonePrefix = '+380'

  const formModel = {
    username: phonePrefix,
  }

  const formSchema = yup.object().shape({
    username: yup
      .string()
      .required(validators.required(t('email_or_phone_number')))
      .min(13, validators.minLength(13)),
    // .max(14, validators.maxLength(14))
  })

  const handleSubmit = (values, actions) => {
    API.newOne(values)
      .then((response) => {
        const flag = response.data.status == 'success' && response.status == 200
        //&& response.statusText == "OK" // iphone undefined
        if (flag)
          navigation.navigate('RegistrationCodeScreen', {
            userNumber: values.username,
          })
      })
      .catch((e) => validators.showError(t('existe'), t('error')))
  }

  const FormTemplate = ({
    values,
    handleChange,
    errors,
    setFieldTouched,
    setValues,
    touched,
    dirty,
    isValid,
    handleSubmit,
    ...props
  }) => {
    const btnActive = dirty && isValid

    return (
      <View style={[styles.fullWidth]}>
        <FormInput
          icon="call"
          label={t('phone_number')}
          placeholder="{phonePrefix}"
          value={values.username}
          maxLength={13}
          keyboardType="numeric"
          onBlur={(value) => {
            if (value === phonePrefix) {
              setValues({
                username: phonePrefix,
              })
              setFieldTouched('username', false)
            } else {
              setFieldTouched('username')
            }
          }}
          onChangeText={(value) => {
            if (value.includes(phonePrefix)) {
              handleChange('username')(value)
            } else {
              setValues({
                username: phonePrefix,
              })
            }
          }}
          // error={touched.username && errors.username ? errors.username : ''}
        />
        <Pressable
          disabled={!btnActive}
          style={({ pressed }) => [
            (!btnActive || pressed) && { opacity: 0.5 },
            styles.btnBlueSimple,
            styles.containerWidth100,
          ]}
          onPress={handleSubmit}
        >
          <Text style={[styles.txtColorWhite]}>{t('authorize_submit')}</Text>
        </Pressable>
      </View>
    )
  }

  return (
    <Container center scroll padding white>
      <IconIntroFirst
        style={{ width: 115, height: 68, marginTop: 60, marginBottom: 30 }}
      />
      <Text style={[styles.fullWidth, { paddingBottom: 20 }]}>
        {t('enter_your_phone')}
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
          placeholder={t('phone_number')}
        />
        <TouchableOpacity style={[styles.btnBlueSimple]} onPress={() => navigation.navigate('RegistrationCodeScreen')} >
          <Text style={[styles.txtColorWhite]}>{t('authorize_submit')}</Text>
        </TouchableOpacity> */}
    </Container>
  )
}

export default Component
