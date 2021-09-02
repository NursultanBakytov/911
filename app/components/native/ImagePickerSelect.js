import React from 'react'
import { View, Text, Modal, TouchableOpacity, Platform } from 'react-native'
import { useTranslation } from 'react-i18next'

import styles from '../../styles'

const Component = ({ visible, close, openCamera, openPhotoLib }) => {
  const { t, i18n } = useTranslation()

  const comp =
    Platform.OS == 'web' ? (
      <View></View>
    ) : (
      <TouchableOpacity
        style={{ backgroundColor: '#FFFFFF', alignItems: 'center' }}
      >
        <Text style={{ margin: 30, fontWeight: 'bold' }}>{t('photo')}</Text>
        <TouchableOpacity
          style={{ padding: 20, paddingLeft: 40, paddingRight: 40 }}
          onPress={openPhotoLib}
        >
          <Text>{t('load_from_device')}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ padding: 20 }} onPress={openCamera}>
          <Text>{t('make_photo')}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ padding: 30 }} onPress={close}>
          <Text>{t('cancel')}</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    )

  return (
    <Modal
      animationType="slide"
      transparent={true}
      onPress={close}
      visible={visible}
    >
      <TouchableOpacity
        style={{
          backgroundColor: 'rgba(0,0,0,0.5)',
          alignItems: 'center',
          width: '100%',
          height: '100%',
          justifyContent: 'center',
        }}
        onPress={close}
      >
        {comp}
      </TouchableOpacity>
    </Modal>
  )
}

export default Component
