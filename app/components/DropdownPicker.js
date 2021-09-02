import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker'

import appStyles from '../styles'
import { Icon } from './'
import { Colors } from '../constants'

const DropdownPicker = ({
  icon,
  placeholder,
  onChangeItem,
  onOpen,
  onClose,
  zIndex,
  disabled,
  error,
  defaultValue,
  ...props
}) => {
  const [opened, setOpened] = useState(false)
  const [borderColor, setBorderColor] = React.useState('#b2b3b7')

  useEffect(() => {
    setBorderColor(
      !error || error.length === 0
        ? opened
          ? '#8364FF'
          : '#b2b3b7'
        : '#B00020'
    )
  }, [error, opened])

  const errorComp =
    !error || error.length === 0 ? null : (
      <Text style={[appStyles.formError, { zIndex: -1 }]}>{error}</Text>
    )

  return (
    <View
      style={[
        styles.container,
        Platform.OS !== 'android' && { zIndex: zIndex }
      ]}
    >
      <View style={[styles.wrapper]}>
        <DropDownPicker
          defaultValue={defaultValue}
          placeholder={placeholder}
          onChangeItem={({ value }) => onChangeItem(value)}
          containerStyle={styles.pickerContainer}
          style={[
            styles.picker,
            // opened && styles.pickerOpened,
            disabled && styles.pickerDisabled,
            { borderColor: borderColor }
          ]}
          itemStyle={styles.pickerItem}
          dropDownStyle={[styles.pickerDropdown, { borderColor: borderColor }]}
          placeholderStyle={styles.pickerPlaceholder}
          selectedLabelStyle={styles.pickerSelectedLabel}
          searchablePlaceholderTextColor="#b2b3b7"
          onOpen={() => {
            onOpen && onOpen()
            setOpened(true)
          }}
          onClose={() => {
            onClose && onClose()
            setOpened(false)
          }}
          disabled={disabled}
          {...props}
        />
      </View>
      <Icon type={icon} style={[styles.icon]} />
      {(opened || !!defaultValue) && (
        <Text
          style={[
            styles.label,
            { color: borderColor },
            opened && styles.labelOpened
          ]}
        >
          {placeholder}
        </Text>
      )}
      {errorComp}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#fff',
    marginBottom: 20
  },
  wrapper: {},
  label: {
    backgroundColor: 'white',
    position: 'absolute',
    top: -8,
    left: 5,
    paddingLeft: 5,
    paddingRight: 5,
    fontSize: 12,
    color: Colors.placeholder
  },
  labelOpened: {
    color: '#8364FF'
  },
  icon: {
    position: 'absolute',
    top: 15,
    left: 10
  },
  pickerContainer: {},
  picker: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  pickerOpened: {
    borderColor: '#8364FF'
  },
  pickerDisabled: {
    backgroundColor: '#eee'
  },
  pickerItem: {
    borderRadius: 0,
    justifyContent: 'flex-start'
  },
  pickerDropdown: {
    backgroundColor: '#fff',
    borderColor: '#b2b3b7',
    borderTopColor: '#e3e3e3',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  pickerDropdownOpened: {
    borderColor: '#8364FF'
  },
  pickerPlaceholder: {
    fontSize: 16,
    color: Colors.placeholder,
    paddingLeft: 20
  },
  pickerSelectedLabel: {
    fontSize: 16,
    paddingLeft: 20
  }
})

export default DropdownPicker
