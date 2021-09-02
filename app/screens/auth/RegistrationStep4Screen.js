import React, { useState } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { useTranslation } from 'react-i18next'
import * as yup from 'yup'
import { Formik } from 'formik'

import styles from '../../styles'
import API from '../../api/services'
import validators from '../../store/validators'
import { useStore } from '../../store'
import {
  Container,
  FormInput,
  Checkbox,
  DropdownPicker
} from '../../components'

const Component = ({ route, navigation }) => {
  const { t, i18n } = useTranslation()
  const [state, dispatch] = useStore()
  const [hearing, setHearing] = useState(false)
  const [vision, setVision] = useState(false)
  const [dataAgreement, setDataAgreement] = useState(false)

  const { userData } = route.params

  userData.login = state.newUser.username
  userData.token = state.newUser.usertoken
  userData.language = i18n.language

  const bloodTypes = {
    // 0: '-',
    1: '4+ (AB+)',
    2: '3+ (B+)',
    3: '2+ (A+)',
    4: '1+ (0+)',
    5: '1- (0−)',
    6: '2- (A−)',
    7: '3- (B−)',
    8: '4- (AB−)'
  }

  const formModel = {
    bloodType: '',
    others: '',
    contraindication: '',
    illness: '',
    allergies: '',
    drug: ''
  }

  const formSchema = yup.object().shape({
    others: yup.string(),
    contraindication: yup.string(),
    illness: yup.string(),
    allergies: yup.string(),
    drug: yup.string()
  })

  const handleSubmit = values => {
    const data = { ...userData, ...values, hearing, vision }

    API.newTwo(data)
      .then(response => {
        // console.log('RESPONSE', response)
        const flag = response.data.status == 'success' && response.status == 200
        //&& response.statusText == "OK" // iphone undefined
        // if (flag) navigation.navigate('LoginScreen')
        const newUser = {
          username: state.newUser.username,
          password: userData.password,
          lang: i18n.language
        }
        API.login(newUser)
          .then(response => {
            dispatch({
              type: 'setUser',
              user: {
                _id: null,
                username: newUser.username,
                password: newUser.password
              }
            })
            const tokens = {
              token_type: response.data.token_type,
              refresh_token: response.data.refresh_token,
              access_token: response.data.access_token
            }
            dispatch({ type: 'setToken', token: tokens })
          })
          .catch(e => {
            // console.log('__login__error__', e)
            validators.showError(e)
          })
      })
      .catch(e => {
        // console.log('__two__error__', e.response)
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
    setFieldValue,
    ...props
  }) => (
    <View style={[styles.fullWidth]}>
      <Text style={{ marginBottom: 20 }}>{t('additional_data')}</Text>
      <Text style={{ marginBottom: 10 }}>{t('special_needs')}</Text>
      <View
        style={{
          flex: 1,
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginBottom: 20
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center'
          }}
        >
          <Text style={{ marginRight: 10 }}>{t('hearing')}</Text>
          <Checkbox value={hearing} onChange={setHearing} />
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center'
          }}
        >
          <Text style={{ marginRight: 10 }}>{t('vision')}</Text>
          <Checkbox value={vision} onChange={setVision} />
        </View>
      </View>

      <FormInput
        icon="others"
        label={t('others')}
        value={values.others}
        onBlur={() => setFieldTouched('others')}
        onChangeText={handleChange('others')}
        error={touched.others && errors.others ? errors.others : ''}
      />

      <DropdownPicker
        icon="drop"
        placeholder={t('blood_group')}
        items={Object.keys(bloodTypes).map(index => ({
          value: index,
          label: bloodTypes[index]
        }))}
        defaultValue={values.bloodType}
        zIndex={1000}
        onChangeItem={value => {
          setFieldValue('bloodType', value)
          setTimeout(() => setFieldTouched('bloodType', true))
        }}
        error={touched.bloodType && errors.bloodType ? errors.bloodType : ''}
      />

      <FormInput
        icon="contraind"
        label={t('contraindication')}
        value={values.contraindication}
        onBlur={() => setFieldTouched('contraindication')}
        onChangeText={handleChange('contraindication')}
        error={
          touched.contraindication && errors.contraindication
            ? errors.contraindication
            : ''
        }
      />
      <FormInput
        icon="illness"
        label={t('postponed_illness')}
        value={values.illness}
        onBlur={() => setFieldTouched('illness')}
        onChangeText={handleChange('illness')}
        error={touched.illness && errors.illness ? errors.illness : ''}
      />
      <FormInput
        icon="allergies"
        label={t('allergies')}
        value={values.allergies}
        onBlur={() => setFieldTouched('allergies')}
        onChangeText={handleChange('allergies')}
        error={touched.allergies && errors.allergies ? errors.allergies : ''}
      />
      <FormInput
        icon="drug"
        label={t('drug_intolerance')}
        value={values.drug}
        onBlur={() => setFieldTouched('drug')}
        onChangeText={handleChange('drug')}
        error={touched.drug && errors.drug ? errors.drug : ''}
      />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          marginBottom: 10
        }}
      >
        <Checkbox
          style={{ marginRight: 10 }}
          value={dataAgreement}
          onChange={setDataAgreement}
        />
        <Text style={{ flex: 1, flexWrap: 'wrap' }}>
          {t('agreement_for_collection_personal_data')}
        </Text>
      </View>
      <Text>{t('this_information_is_used_only_by_special_services')}</Text>

      <View
        style={{
          marginTop: 20,
          flex: 1,
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-around'
        }}
      >
        <TouchableOpacity
          style={[styles.btnBlueSimple, styles.containerWidth30]}
          onPress={() => navigation.navigate('RegistrationStep3Screen')}
        >
          <Text style={[styles.txtColorWhite]}>{t('back')}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          disabled={!dataAgreement}
          style={[
            styles.btnBlueSimple,
            styles.containerWidth30,
            !dataAgreement && styles.btnDisabled
          ]}
          onPress={handleSubmit}
        >
          <Text style={[styles.txtColorWhite]}>{t('save')}</Text>
        </TouchableOpacity>
      </View>
    </View>
  )

  return (
    <Container scroll center padding>
      <Formik
        initialValues={formModel}
        validationSchema={formSchema}
        onSubmit={handleSubmit}
      >
        {props => <FormTemplate {...props} />}
      </Formik>
    </Container>
  )
}

export default Component
