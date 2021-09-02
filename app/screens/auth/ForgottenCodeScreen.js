import React from 'react'
import {
  SafeAreaView,
  Text,
  TextInput,
  ScrollView,
  View,
  TouchableOpacity
} from 'react-native'
import { useTranslation } from 'react-i18next'
import * as yup from 'yup'
import { Formik } from 'formik'

import styles from '../../styles'
import { IconIntroFirst } from '../../components/Icon'
import { Container, FormInput } from '../../components'
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
    username: ''
  }

  const formSchema = yup.object().shape({
    username: yup
      .string()
      .required(t('enter_code_hint'))
      .min(4, validators.minLength(4))
  })

  const handleSubmit = (values, actions) => {
    API.forgotVerifyCode({
      login: userNumber,
      token: values.username
    })
      .then(response => {
        const flag = response.data.status == 'success' && response.status == 200
        //&& response.statusText == "OK" // iphone undefined
        if (flag)
          navigation.navigate('PasswordNewScreen', {
            userNumber: userNumber,
            userToken: values.username
          })
      })
      .catch(e => {
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
        label={t('enter_code_hint')}
        value={values.username}
        onBlur={() => setFieldTouched('username')}
        onChangeText={handleChange('username')}
        error={touched.username && errors.username ? errors.username : ''}
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
    <Container scroll padding center white>
      <IconIntroFirst
        style={{ width: 115, height: 68, marginTop: 60, marginBottom: 30 }}
      />
      <Text style={[styles.fullWidth, { paddingVertical: 20 }]}>{title}</Text>

      <Formik
        initialValues={formModel}
        validationSchema={formSchema}
        onSubmit={handleSubmit}
      >
        {props => <FormTemplate {...props} />}
      </Formik>

      <Text
        style={[
          styles.fullWidth,
          styles.txtRight,
          { paddingTop: 20, paddingBottom: 10 }
        ]}
      >
        {t('not_receive_code')}
      </Text>
      <Text style={[styles.fullWidth, styles.txtRight, { paddingBottom: 10 }]}>
        {timer}
      </Text>
      <TouchableOpacity
        style={[styles.btnYellowSimple, styles.fullWidth]}
        onPress={() => navigation.navigate('ForgottenPasswordScreen')}
      >
        <Text style={[styles.txtColorWhite]}>{t('edit_phone_number')}</Text>
      </TouchableOpacity>
    </Container>
  )
}

export default Component
