import React from 'react'
import {
  SafeAreaView,
  Text,
  Image,
  ScrollView,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native'
import { useTranslation } from 'react-i18next'
import * as yup from 'yup'
import { Formik } from 'formik'

import styles from '../../styles'
import { FormInput, TitleHeader, ModalProfileSave } from '../../components'
import { IconAvatar, IconCall, IconMail } from '../../components/Icon'
import API from '../../api/services'
import validators from '../../store/validators'
import ImagePicker from 'react-native-image-crop-picker'

const Component = ({ route, navigation }) => {
  const { t, i18n } = useTranslation()

  const [modalVisible, setModalVisible] = React.useState(false)

  const phonePrefix = '+380'

  const user = route.params.user
  const formModel = {
    name: user.first_name || '',
    surname: user.last_name || '',
    birthday: user.birthday || '',
    nip: user.nip || '',
    region: user.region || '',
    city: user.city || '',
    address: user.address || '',
    guarantor_name: user.guarantor_name || '',
    guarantor_phone: user.guarantor_phone || '',
    guarantor_relation: user.guarantor_relation || '',
    username: phonePrefix,
  }
  // console.log("___route", route.params.user, formModel)

  const formSchema = yup.object().shape({
    name: yup
      .string()
      .required(validators.required(t('your_name')))
      .min(2, validators.minLength(4)),
    surname: yup
      .string()
      .required(validators.required(t('your_surname')))
      .min(2, validators.minLength(4)),
    birthday: yup
      .string()
      .required(validators.required(t('date_of_birth')))
      .min(2, validators.minLength(4)),
    nip: yup
      .string()
      .required(validators.required(t('nip')))
      .min(2, validators.minLength(4)),
    region: yup
      .string()
      .required(validators.required(t('region')))
      .min(2, validators.minLength(4)),
    city: yup
      .string()
      .required(validators.required(t('city')))
      .min(2, validators.minLength(4)),
    address: yup
      .string()
      .required(validators.required(t('residence_address')))
      .min(2, validators.minLength(4)),
    guarantor_name: yup
      .string()
      .required(validators.required(t('additional_person_name')))
      .min(2, validators.minLength(4)),
    guarantor_phone: yup
      .string()
      .required(validators.required(t('phone_number')))
      .min(2, validators.minLength(4)),
    guarantor_relation: yup
      .string()
      .required(validators.required(t('additional_person_who_is')))
      .min(2, validators.minLength(4)),
    username: yup
      .string()
      .required(validators.required(t('email_or_phone_number')))
      .min(13, validators.minLength(13)),
    // .max(14, validators.maxLength(14))
  })

  const handleSubmit = (values, actions) => {
    API.setUser({
      userModel: {
        address: values.address,
        first_name: values.name,
        last_name: values.surname,
        nip: values.nip,
      },
    })
      .then((response) => {
        const flag = response.data.type == 'success' && response.status == 200
        //&& response.statusText == "OK" // iphone undefined
        if (flag) {
          setModalVisible(true)
        }
      })
      .catch((e) => {
        validators.showError(e)
      })
  }

  const closeModal = () => {
    setModalVisible(false)
    navigation.goBack()
  }

  const addEmail = () => {}

  // -------------------------------
  const getAvatarLocal = () => {
    Alert.alert(`${t('choose_ava_title')}`, '', [
      {
        text: `${t('choose_ava_cancel')}`,
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },

      {
        text: `${t('choose_ava_from_camera')}`,
        onPress: () => console.log('Cancel Pressed'),
      },
      {
        text: `${t('choose_ava_from_local')}`,
        onPress: () => {
          ImagePicker.openPicker({
            // width: 300,
            // height: 400,
            cropping: true,
          })
            .then((image) => {
              console.log(image)
            })
            .catch((e) => console.log(e))
        },
      },
    ])
  }
  // -------------------------------
  const getAvatar = () => {
    if (user.avatar && user.avatar.length > 10) {
      return (
        <Image
          style={{ width: 60, height: 60, borderRadius: 30 }}
          source={{ uri: user.avatar }}
        />
      )
    }
    return <IconAvatar style={{ width: 60, height: 60 }} />
  }

  const FormTemplate = ({
    values,
    handleChange,
    errors,
    setValues,
    setFieldTouched,
    touched,
    isValid,
    handleSubmit,
    ...props
  }) => (
    <View style={[styles.containerWidth100, styles.containerCenter]}>
      <View style={[styles.containerWidth80]}>
        <TouchableOpacity
          onPress={getAvatarLocal}
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
          }}
        >
          {getAvatar()}
          <Text style={{ paddingLeft: 10 }}>{t('load_photo')}</Text>
        </TouchableOpacity>

        <FormInput
          icon="name"
          label={t('your_name')}
          value={values.name}
          onBlur={() => setFieldTouched('name')}
          onChangeText={handleChange('name')}
          error={touched.name && errors.name ? errors.name : ''}
        />
        <FormInput
          icon="name-yellow"
          label={t('your_surname')}
          value={values.surname}
          onBlur={() => setFieldTouched('surname')}
          onChangeText={handleChange('surname')}
          error={touched.surname && errors.surname ? errors.surname : ''}
        />
        <FormInput
          icon="age"
          label={t('date_of_birth')}
          value={values.birthday}
          onBlur={() => setFieldTouched('birthday')}
          onChangeText={handleChange('birthday')}
          error={touched.birthday && errors.birthday ? errors.birthday : ''}
        />
      </View>
      <TouchableOpacity
        style={[
          styles.containerProfileItem,
          styles.bottomLightBorder,
          styles.topLightBorder,
          { height: 40, padding: 10 },
        ]}
        onPress={addEmail}
      >
        <IconMail
          style={{
            width: 16,
            height: 16,
            marginLeft: 35,
            marginRight: 18,
            marginTop: 2,
          }}
          colorFill="#519DFF"
        />
        <Text>{t('add_email')}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.containerProfileItem,
          styles.bottomLightBorder,
          { height: 40, padding: 10 },
        ]}
        onPress={addEmail}
      >
        <IconCall
          style={{
            width: 16,
            height: 16,
            marginLeft: 35,
            marginRight: 18,
            marginTop: 2,
          }}
          colorFill="#519DFF"
        />
        <Text>{t('add_phone')}</Text>
      </TouchableOpacity>

      <View style={[styles.containerWidth80]}>
        <FormInput
          icon="nip"
          label={t('nip')}
          value={values.nip}
          onBlur={() => setFieldTouched('nip')}
          onChangeText={handleChange('nip')}
          error={touched.nip && errors.nip ? errors.nip : ''}
        />
        <FormInput
          icon="map-yellow"
          label={t('region')}
          value={values.region}
          onBlur={() => setFieldTouched('region')}
          onChangeText={handleChange('region')}
          error={touched.region && errors.region ? errors.region : ''}
        />
        <FormInput
          icon="map-orange"
          label={t('city')}
          value={values.city}
          onBlur={() => setFieldTouched('city')}
          onChangeText={handleChange('city')}
          error={touched.city && errors.city ? errors.city : ''}
        />
        <FormInput
          icon="map-purple"
          label={t('residence_address')}
          value={values.address}
          onBlur={() => setFieldTouched('address')}
          onChangeText={handleChange('address')}
          error={touched.address && errors.address ? errors.address : ''}
        />

        <Text>{t('notify_guarantor')}</Text>
        <Text> </Text>
        <Text style={{ marginBottom: 20 }}>
          {t('additional_info_emergency')}
        </Text>

        <FormInput
          icon="name"
          label={t('additional_person_name')}
          value={values.guarantor_name}
          onBlur={() => setFieldTouched('guarantor_name')}
          onChangeText={handleChange('guarantor_name')}
          error={
            touched.guarantor_name && errors.guarantor_name
              ? errors.guarantor_name
              : ''
          }
        />
        <FormInput
          icon="call"
          label={t('phone_number')}
          placeholder={phonePrefix}
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
        {/* <FormInput
          icon="call"
          label={t('phone_number')}
          value={'+380' + values.guarantor_phone}
          onBlur={() => setFieldTouched('guarantor_phone')}
          onChangeText={handleChange('guarantor_phone')}
          error={
            touched.guarantor_phone && errors.guarantor_phone
              ? errors.guarantor_phone
              : ''
          }
        /> */}
        <FormInput
          icon="family"
          label={t('additional_person_who_is')}
          value={values.guarantor_relation}
          onBlur={() => setFieldTouched('guarantor_relation')}
          onChangeText={handleChange('guarantor_relation')}
          error={
            touched.guarantor_relation && errors.guarantor_relation
              ? errors.guarantor_relation
              : ''
          }
        />

        <View
          style={{
            marginTop: 20,
            marginBottom: 20,
            flex: 1,
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}
        >
          <TouchableOpacity
            style={[styles.btnOpacitySimple, styles.containerWidth30]}
            onPress={() => navigation.goBack()}
          >
            <Text>{t('cancel')}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btnBlueSimple, styles.containerWidth30]}
            onPress={handleSubmit}
          >
            <Text style={[styles.txtColorWhite]}>{t('save')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )

  return (
    <SafeAreaView style={[styles.containerSafeAreaView, styles.bgWhite]}>
      <ScrollView style={[styles.containerScrollView]}>
        <TitleHeader
          title={t('editing').toUpperCase()}
          leftIcon="back"
          leftPress={() => navigation.goBack()}
        />
        <View style={[styles.containerCenter, { marginTop: 10 }]}>
          <Formik
            initialValues={formModel}
            validationSchema={formSchema}
            onSubmit={handleSubmit}
          >
            {(props) => <FormTemplate {...props} />}
          </Formik>
        </View>
        <ModalProfileSave visible={modalVisible} close={closeModal} />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Component
