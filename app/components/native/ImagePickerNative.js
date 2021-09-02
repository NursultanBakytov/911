import React from 'react'
import { View, Text } from 'react-native'

import { default as RNImagePicker } from 'react-native-image-crop-picker'

const ImagePicker = () => {
  return (
    <View>
      <Text>Image picker Native</Text>
    </View>
  )
}

const openCamera = () => {
  return RNImagePicker.openCamera({
    mediaType: 'photo',
  })
}

const openPhotoLib = () => {
  return RNImagePicker.openPicker({
    mediaType: 'photo',
  })
}

export default {
  ImagePicker,
  openCamera,
  openPhotoLib,
}
