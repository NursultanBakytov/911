import React from 'react'
import {
  View, 
  Text,
} from 'react-native'

//import * as ImagePicker from 'expo-image-picker'

const Component = () => {
  return (
    <View><Text>Image picker Expo</Text></View>
  )
}

const openCamera = () => {
  return ImagePicker.launchCameraAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images
  })
}

const openPhotoLib = (w) => {
  return ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images
  })
}

export {
  Component,
  openCamera,
  openPhotoLib,
}
