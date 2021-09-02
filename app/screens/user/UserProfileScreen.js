import React from 'react'
import {
  SafeAreaView,
  Text,
  Image,
  ScrollView,
  View,
  TouchableOpacity,
} from 'react-native'
import { useTranslation } from 'react-i18next'

import styles from '../../styles'
import API from '../../api/services'
import validators from '../../store/validators'
import { IconKey, IconMedic, IconAvatar } from '../../components/Icon'
import { TitleHeader, FormInput, ProfileItem } from '../../components'

const Component = ({ navigation }) => {
  const { t, i18n } = useTranslation()
  const userData = {
    avatar: '',
    birthday: '-',
    fullname: '-',
    first_name: '-',
    last_name: '-',
    nip: '-',
    email: '-',
    phone: '-',
    region: '-',
    city: '-',
    address: '-',
  }
  const [user, setUser] = React.useState(userData)
  const [avatar, setAvatar] = React.useState(
    <IconAvatar style={{ width: 60, height: 60 }} />
  )

  const getBirthday = (birthday) => {
    let bd = new Date(birthday)
    if (isNaN(bd.getDate())) {
      bd = new Date(birthday.split(' ')[0])
    }
    const day =
      bd.getDate().toString().length < 2
        ? '0' + bd.getDate().toString()
        : bd.getDate()
    const month =
      bd.getMonth().toString().length < 2
        ? '0' + (bd.getMonth() + 1).toString()
        : bd.getMonth() + 1
    return day + '/' + month + '/' + bd.getFullYear()
  }

  const getCity = (city) => {
    if (i18n.language == 'ru') return city.title_ru
    else if (i18n.language == 'en') return city.title_en
    return city.title_uk
  }

  const getRegion = (region) => {
    if (i18n.language == 'ru') return region.title_ru
    else if (i18n.language == 'en') return region.title_en
    return region.title_uk
  }

  const updateUser = () => {
    API.getUser({})
      .then((response) => {
        let data = {}
        if (
          response.status == 200 &&
          response.data.type == 'success' &&
          response.data.data
        ) {
          data = response.data.data
        }
        // console.log("__data__", data)

        userData.email = data.email || '-'
        userData.phone = data.phone || '-'
        userData.region = (data.city && getRegion(data.city.region)) || '-' // data.city_id
        userData.city = (data.city && getCity(data.city)) || '-' // data.city
        userData.address = data.address || '-'
        userData.birthday = getBirthday(data.profileable.birthday_at.date)
        userData.fullname = data.profileable.fullname || '-'
        userData.first_name = data.profileable.first_name || '-'
        userData.last_name = data.profileable.last_name || '-'
        userData.nip = data.profileable.nip || '-'
        userData.guarantor_name = data.profileable.notify_guarantor_name || '-'
        userData.guarantor_phone =
          data.profileable.notify_guarantor_phone || '-'
        userData.guarantor_relation =
          data.profileable.notify_guarantor_relation || '-'
        // console.log("__userdata__", userData)
        setUser(userData)

        if (data.photo && data.photo.thumb_100_100) {
          userData.avatar = data.photo.thumb_100_100
          setAvatar(
            <Image
              style={{ width: 60, height: 60, borderRadius: 30 }}
              source={{ uri: data.photo.thumb_100_100 }}
            />
          )
        } else {
          setAvatar(<IconAvatar style={{ width: 60, height: 60 }} />)
        }
      })
      .catch((e) => {
        validators.showError(e)
      })
  }

  React.useEffect(() => {
    updateUser()
  }, [])

  const editProfileHandler = () => {
    navigation.navigate('User', {
      screen: 'ChangeProfileScreen',
      params: { user: user },
    })
  }

  const goMedical = () => {
    // navigation.navigate('User', { screen: 'MedicalDataScreen' })
  }

  const goChangePass = () => {
    navigation.navigate('User', { screen: 'ChangePassScreen' })
  }

  return (
    <SafeAreaView style={[styles.containerSafeAreaView, styles.bgWhite]}>
      <ScrollView style={[styles.containerScrollView]}>
        <TitleHeader
          title={t('menu_my_profile').toUpperCase()}
          leftIcon="back"
          leftPress={() => navigation.goBack()}
          rightIcon="edit"
          rightPress={editProfileHandler}
        />
        <View style={[styles.containerCenter]}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              width: '90%',
              marginTop: 10,
              marginBottom: 10,
            }}
          >
            {avatar}
            <Text style={{ fontSize: 20, color: '#999999', paddingLeft: 10 }}>
              {user.fullname}
            </Text>
          </View>

          <ProfileItem
            icon="mail"
            title={t('email')}
            label={user.email}
            rightBoderStyle={styles.bottomLightBorder}
          />
          <ProfileItem
            icon="age"
            title={t('date_of_birth')}
            label={user.birthday}
            rightBoderStyle={styles.bottomLightBorder}
          />
          <ProfileItem
            icon="call"
            title={t('your_phone_number')}
            label={user.phone}
            rightBoderStyle={styles.bottomLightBorder}
          />
          <ProfileItem
            icon="nip"
            title={t('nip')}
            label={user.nip}
            rightBoderStyle={styles.bottomLightBorder}
          />
          <ProfileItem
            icon="map-yellow"
            title={t('region')}
            label={user.region}
            rightBoderStyle={styles.bottomLightBorder}
          />
          <ProfileItem
            icon="map-orange"
            title={t('city')}
            label={user.city}
            rightBoderStyle={styles.bottomLightBorder}
          />
          <ProfileItem
            icon="map-purple"
            title={t('residence_address')}
            label={user.address}
            rightBoderStyle={styles.bottomLightBorder}
          />

          <View
            style={[
              styles.bgWhiteDark,
              styles.bottomLightBorder,
              { padding: 10, paddingLeft: 30, paddingRight: 30 },
            ]}
          >
            <Text>{t('additional_info_emergency')}</Text>
          </View>

          <ProfileItem
            icon="name"
            title={t('additional_person_name')}
            label={user.guarantor_name}
            rightBoderStyle={styles.bottomLightBorder}
          />
          <ProfileItem
            icon="call"
            title={t('phone_number')}
            label={user.guarantor_phone}
            rightBoderStyle={styles.bottomLightBorder}
          />
          <ProfileItem
            icon="family"
            title={t('additional_person_who_is')}
            label={user.guarantor_relation}
            rightBoderStyle={styles.bottomLightBorder}
          />

          <View
            style={[
              styles.bgWhiteDark,
              styles.bottomLightBorder,
              { padding: 10, paddingLeft: 30, paddingRight: 30 },
            ]}
          >
            <Text>{t('notify_guarantor')}</Text>
          </View>

          <TouchableOpacity
            style={[
              styles.containerProfileItem,
              styles.bottomLightBorder,
              { height: 40, padding: 10 },
            ]}
            onPress={goChangePass}
          >
            <IconKey
              style={{
                width: 16,
                height: 16,
                marginLeft: 5,
                marginRight: 18,
                marginTop: 2,
              }}
              colorFill="#519DFF"
            />
            <Text>{t('edit_password').toUpperCase()}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={goMedical}
            style={[
              styles.containerProfileItem,
              styles.bottomLightBorder,
              { height: 40, padding: 10 },
            ]}
          >
            <IconMedic
              style={{
                width: 16,
                height: 16,
                marginLeft: 5,
                marginRight: 18,
                marginTop: 2,
              }}
            />
            <Text>{t('medical_data').toUpperCase()}</Text>
          </TouchableOpacity>

          <View
            style={[
              styles.bgWhiteDark,
              styles.bottomLightBorder,
              styles.containerWidth100,
              { height: 30 },
            ]}
          >
            <Text></Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Component
