import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { TextInputMask } from 'react-native-masked-text'

import { Colors } from '../constants'
import globalStyles from '../styles'
import { Icon } from './'

const InputComp = ({ mask, ...props }) =>
  mask ? <TextInputMask type={mask} {...props} /> : <TextInput {...props} />

const Component = ({
  icon,
  type,
  label,
  maxLength,
  value,
  error,
  onChangeText,
  onBlur,
  onFocus,
  ...props
}) => {
  const [pass, setPass] = React.useState(true)
  const [holder, setHolder] = React.useState(true)
  const [focus, setFocus] = React.useState(false)
  const [color, setColor] = React.useState('#b2b3b7') // E5E5E5 8364FF B00020

  React.useEffect(() => {
    setColor(
      !error || error.length === 0 ? (focus ? '#8364FF' : '#b2b3b7') : '#B00020'
    )
  }, [error])

  const onBlurInput = ev => {
    onBlur && onBlur()
    setFocus(false)
    setColor(!error || error.length == 0 ? '#b2b3b7' : '#B00020')
    setHolder(true)
  }

  const onFocusInput = ev => {
    onFocus && onFocus()
    setFocus(true)
    setColor(!error || error.length == 0 ? '#8364FF' : '#B00020')
    setHolder(false)
  }

  const onChangeInput = ev => {
    onChangeText && onChangeText(ev)
  }

  const rightIconComp =
    type == 'password' ? (
      <TouchableOpacity onPress={() => setPass(pass ? false : true)}>
        <Icon type="eye" style={globalStyles.formIcon} />
      </TouchableOpacity>
    ) : (
      <Text></Text>
    )

  const errorComp =
    !error || error.length == 0 ? null : (
      <Text style={globalStyles.formError}>{error}</Text>
    )

  return (
    <View style={globalStyles.formContainer}>
      <View style={[globalStyles.formInputDefault, { borderColor: color }]}>
        <Icon type={icon} style={globalStyles.formIcon} />

        <InputComp
          style={globalStyles.formTextInput}
          secureTextEntry={pass && type == 'password'}
          placeholderTextColor={Colors.placeholder}
          value={value}
          placeholder={label && holder ? label : ''}
          maxLength={maxLength}
          onBlur={onBlurInput}
          onFocus={onFocusInput}
          onChangeText={onChangeInput}
          {...props}
        />

        {/*<TextInput
          style={globalStyles.formTextInput}
          secureTextEntry={pass && type == 'password'}
          placeholderTextColor={Colors.placeholder}
          value={value}
          placeholder={label && holder ? label : ''}
          maxLength={maxLength}
          onBlur={onBlurInput}
          onFocus={onFocusInput}
          onChangeText={onChangeInput}
          {...props}
        />*/}
        {rightIconComp}
      </View>
      {(focus || !!value) && (
        <Text style={[globalStyles.formLabel, { color: color }]}>{label}</Text>
      )}
      {errorComp}
    </View>
  )
}

export default Component
