import React from 'react'
import { View, Text, TouchableOpacity, Platform, Image } from 'react-native'
import { useTranslation } from 'react-i18next'

import styles from '../../styles'
import ImagePickerSelect from './ImagePickerSelect'
import validators from '../../store/validators'
import ImagePicker from './ImagePickerNative'

const Component = ({ setImg }) => {
  const { t } = useTranslation()
  const [image, setImage] = React.useState(null)
  const [modalVisible, setModalVisible] = React.useState(false)

  const openCamera = () => {
    ImagePicker.openCamera()
      .then((image) => {
        if (image && image.uri) {
          setImg(image)
          setImage(image.uri)
        }
        if (image && image.path) {
          setImg(image)
          setImage(image.path)
        }
        closeHandler()
      })
      .catch((e) => {
        // console.log('error', e)
        validators.showError(e)
      })
  }

  const openPhotoLib = () => {
    ImagePicker.openPhotoLib()
      .then((image) => {
        if (image && image.uri) {
          setImg(image)
          setImage(image.uri)
        }
        if (image && image.path) {
          setImg(image)
          setImage(image.path)
        }
        closeHandler()
      })
      .catch(
        (e) => console.log('error', e)
        // validators.showError(e)
      )
  }

  const openModal = () => {
    Platform.OS == 'web' ? openPhotoLib() : setModalVisible(true)
  }

  const closeHandler = () => {
    setModalVisible(false)
  }

  return (
    <View style={{ width: '80%', flexDirection: 'row', paddingBottom: 20 }}>
      {image && (
        <Image
          source={{ uri: image }}
          style={{ width: 80, height: 80, borderRadius: 5, marginRight: 10 }}
        />
      )}

      <TouchableOpacity style={styles.addPhoto} onPress={openModal}>
        <Text>+</Text>
        <Text style={{ textAlign: 'center' }}>{t('add_photo')}</Text>
      </TouchableOpacity>

      <ImagePickerSelect
        visible={modalVisible}
        close={closeHandler}
        openPhotoLib={openPhotoLib}
        openCamera={openCamera}
      />
    </View>
  )
}

export default Component
