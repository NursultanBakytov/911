import { Alert, Platform } from 'react-native'

const required = (value) => `${value} is required!`

const email = 'E-mail is invalid!'

const minLength = (value) => `Minimum of ${value} characters`

const maxLength = (value) => `Maximum of ${value} characters`

const sameAsPassword = 'Password is incorrect!'

const showError = (message, title) => {
  let txt = JSON.stringify(message).slice(0, 300)
  const res = message && message.request && message.request.response
  if (res && JSON.parse(res)) {
    // console.log("_____json______", JSON.parse(res) )
    const title = JSON.parse(res).title || ''
    const msg = JSON.parse(res).message || ''
    txt = title + ' ' + msg
  } else if (message.title) {
    txt = message.title
  } else if (message.message) {
    txt = message.message
  }

  if (Platform.OS === 'web') {
    alert(txt)
  } else {
    Alert.alert(
      title || 'Error',
      txt,
      [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
      { cancelable: false }
    )
  }
}

export default {
  required,
  email,
  minLength,
  maxLength,
  sameAsPassword,
  showError,
}
