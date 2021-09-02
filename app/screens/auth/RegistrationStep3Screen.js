import React, { useEffect, useState } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { useTranslation } from 'react-i18next'
import * as yup from 'yup'
import { Formik } from 'formik'

import API from '../../api/services'
import styles from '../../styles'
import validators from '../../store/validators'
import { Regex } from '../../constants'
import {
  Container,
  FormInput,
  DropdownPicker,
  Checkbox
} from '../../components'

const RegistrationStep3Screen = ({ route, navigation }) => {
  const { t, i18n } = useTranslation()
  const [regions, setRegions] = useState([])
  const [cities, setCities] = useState([])
  const [selectedRegion, setSelectedRegion] = useState(null)
  const [notifyAdditionalPerson, setNotifyAdditionalPerson] = useState(false)
  const [isCitiesDropdownVisible, setCitiesDropdownVisible] = useState(false)
  let searchTimeout = null
  let citiesController = null

  const { userData } = route.params

  useEffect(() => {
    API.loadRegionsDictionary()
      .then(response => {
        setRegions(
          response.data.data.map(({ id, title_ru }) => ({
            label: title_ru,
            value: id
          }))
        )
      })
      .catch(e => {
        console.log('__two__error__', e)
        validators.showError(e)
      })
  }, [])

  const clearSearchTimeout = () => {
    clearTimeout(searchTimeout)
    searchTimeout = null
  }

  const searchCities = value => {
    if (searchTimeout) {
      clearSearchTimeout()
    }

    if (value) {
      searchTimeout = setTimeout(() => {
        API.searchCityByQuery(value, selectedRegion)
          .then(response => {
            if (response.data?.data?.length) {
              const mappedCities = response.data.data.map(
                ({ id, title_ru }) => ({
                  label: title_ru,
                  value: id
                })
              )
              // citiesController.resetItems(mappedCities, [])
              setCities(mappedCities)
            }
            clearSearchTimeout()
          })
          .catch(e => {
            console.log('__two__error__', e)
            validators.showError(e)
            clearSearchTimeout()
          })
      }, 500)
    }
  }

  const formModel = {
    region: '',
    city: '',
    address: '',
    nip: '',
    additional_person_name: '',
    additional_person_number: '',
    additional_person_who_is: ''
  }

  const formSchema = yup.object().shape({
    region: yup.string(),
    city: yup.string(),
    address: yup.string(),
    nip: yup
      .string()
      .min(8, t('form.validation.min', { count: 8 }))
      .max(15, t('form.validation.max', { count: 15 })),
    additional_person_name: yup.string(),
    additional_person_number: yup
      .string()
      .matches(Regex.phone, t('form.validation.phone')),
    additional_person_who_is: yup.string()
  })

  const handleSubmit = values => {
    navigation.navigate('RegistrationStep4Screen', {
      userData: { ...userData, ...values, notifyAdditionalPerson }
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
    validateForm,
    ...props
  }) => (
    <View style={[styles.fullWidth]}>
      <Text style={{ marginBottom: 20 }}>{t('additional_data')}</Text>

      <DropdownPicker
        icon="map-yellow"
        placeholder={t('region')}
        items={regions}
        defaultValue={values.region}
        zIndex={9999}
        onChangeItem={value => {
          setFieldValue('region', value)
          setSelectedRegion(value)
          setFieldValue('city', '')
          setCities([])
          setTimeout(() => setFieldTouched('region', true))
        }}
        error={touched.region && errors.region ? errors.region : ''}
      />

      <DropdownPicker
        icon="map-yellow"
        searchable
        disabled={!values.region}
        zIndex={8888}
        onSearch={value => {
          setFieldValue('city', null)
          searchCities(value)
        }}
        searchablePlaceholder={t('search_city')}
        searchableError={() => <Text>{t('city_not_found')}</Text>}
        placeholder={t('city')}
        items={cities}
        controller={instance => (citiesController = instance)}
        defaultValue={values.city}
        onChangeItem={value => setFieldValue('city', value)}
        isVisible={isCitiesDropdownVisible}
        onOpen={() => setCitiesDropdownVisible(true)}
        onClose={() => setCitiesDropdownVisible(false)}
        error={touched.city && errors.city ? errors.city : ''}
      />

      <FormInput
        icon="map-yellow"
        label={t('residence_address')}
        value={values.address}
        onBlur={() => setFieldTouched('address')}
        onChangeText={handleChange('address')}
        error={touched.address && errors.address ? errors.address : ''}
      />

      <FormInput
        icon="nip"
        label={t('nip')}
        value={values.nip}
        maxLength={15}
        onBlur={() => setFieldTouched('nip')}
        onChangeText={handleChange('nip')}
        error={touched.nip && errors.nip ? errors.nip : ''}
      />

      <Text style={{ marginTop: 20, marginBottom: 20 }}>
        {t('additional_info_emergency')}
      </Text>

      <FormInput
        icon="name"
        label={t('additional_person_name')}
        value={values.additional_person_name}
        onBlur={() => setFieldTouched('additional_person_name')}
        onChangeText={handleChange('additional_person_name')}
        error={
          touched.additional_person_name && errors.additional_person_name
            ? errors.additional_person_name
            : ''
        }
      />
      <FormInput
        icon="call"
        keyboardType="phone-pad"
        maxLength={13}
        label={t('additional_person_number')}
        value={values.additional_person_number}
        onBlur={() => setFieldTouched('additional_person_number')}
        onChangeText={handleChange('additional_person_number')}
        error={
          touched.additional_person_number && errors.additional_person_number
            ? errors.additional_person_number
            : ''
        }
      />
      <FormInput
        icon="family"
        label={t('additional_person_who_is')}
        value={values.additional_person_who_is}
        onBlur={() => setFieldTouched('additional_person_who_is')}
        onChangeText={handleChange('additional_person_who_is')}
        error={
          touched.additional_person_who_is && errors.additional_person_who_is
            ? errors.additional_person_who_is
            : ''
        }
      />

      <View
        style={{
          width: '100%',
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center'
        }}
      >
        <Text style={{ flex: 1, flexWrap: 'wrap', paddingRight: 10 }}>
          {t('notify_guarantor')}
        </Text>

        <Checkbox
          value={notifyAdditionalPerson}
          onChange={setNotifyAdditionalPerson}
        />
      </View>

      <View
        style={{
          marginTop: 50,
          flex: 1,
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-around'
        }}
      >
        <TouchableOpacity
          style={[styles.btnBlueSimple, styles.containerWidth30]}
          onPress={() => navigation.navigate('RegistrationStep2Screen')}
        >
          <Text style={[styles.txtColorWhite]}>{t('back')}</Text>
        </TouchableOpacity>

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
      <Formik
        initialValues={formModel}
        validationSchema={formSchema}
        onSubmit={handleSubmit}
        validateOnChange
      >
        {props => <FormTemplate {...props} />}
      </Formik>
    </Container>
  )
}

export default RegistrationStep3Screen
