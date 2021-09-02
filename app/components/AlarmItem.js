import React from 'react'
import { View, Text } from 'react-native'
import CheckBox from '@react-native-community/checkbox'
import { useTranslation } from 'react-i18next'

import styles from '../styles'
import {
  IconMini01,
  IconMini02,
  IconMini03,
  IconMini04,
  IconMini05,
  IconMini06,
  IconMini07,
  IconMini08,
  IconMini09,
  IconMini10,
  IconMini11,
  IconMini12,
  IconMini13,
  IconMini14,
  IconMini15,
  IconMini16,
  IconMini17,
  IconMini18,
  IconMini19,
  IconMini20,
  IconMini21,
  IconMini22,
  IconMini23,
  IconMini24,
  IconMini25,
} from './Icon'

const Component = ({ item, color, onSelect }) => {
  const { t, i18n } = useTranslation()
  const [isSelected, setSelection] = React.useState(false)

  const getIcon = (icon) => {
    if (icon == 'IconMini01')
      return <IconMini01 style={{ width: 18, height: 18 }} colorFill={color} />
    if (icon == 'IconMini02')
      return <IconMini02 style={{ width: 18, height: 18 }} colorFill={color} />
    if (icon == 'IconMini03')
      return <IconMini03 style={{ width: 18, height: 18 }} colorFill={color} />
    if (icon == 'IconMini04')
      return <IconMini04 style={{ width: 18, height: 18 }} colorFill={color} />
    if (icon == 'IconMini05')
      return <IconMini05 style={{ width: 18, height: 18 }} colorFill={color} />
    if (icon == 'IconMini06')
      return <IconMini06 style={{ width: 18, height: 18 }} colorFill={color} />
    if (icon == 'IconMini07')
      return <IconMini07 style={{ width: 18, height: 18 }} colorFill={color} />
    if (icon == 'IconMini08')
      return <IconMini08 style={{ width: 18, height: 18 }} colorFill={color} />
    if (icon == 'IconMini09')
      return <IconMini09 style={{ width: 18, height: 18 }} colorFill={color} />
    if (icon == 'IconMini10')
      return <IconMini10 style={{ width: 18, height: 18 }} colorFill={color} />

    if (icon == 'IconMini11')
      return <IconMini11 style={{ width: 18, height: 18 }} colorFill={color} />
    if (icon == 'IconMini12')
      return <IconMini12 style={{ width: 18, height: 18 }} colorFill={color} />
    if (icon == 'IconMini13')
      return <IconMini13 style={{ width: 18, height: 18 }} colorFill={color} />
    if (icon == 'IconMini14')
      return <IconMini14 style={{ width: 18, height: 18 }} colorFill={color} />
    if (icon == 'IconMini15')
      return <IconMini15 style={{ width: 18, height: 18 }} colorFill={color} />
    if (icon == 'IconMini16')
      return <IconMini16 style={{ width: 18, height: 18 }} colorFill={color} />
    if (icon == 'IconMini17')
      return <IconMini17 style={{ width: 18, height: 18 }} colorFill={color} />
    if (icon == 'IconMini18')
      return <IconMini18 style={{ width: 18, height: 18 }} colorFill={color} />
    if (icon == 'IconMini19')
      return <IconMini19 style={{ width: 18, height: 18 }} colorFill={color} />
    if (icon == 'IconMini20')
      return <IconMini20 style={{ width: 18, height: 18 }} colorFill={color} />

    if (icon == 'IconMini21')
      return <IconMini21 style={{ width: 18, height: 18 }} colorFill={color} />
    if (icon == 'IconMini22')
      return <IconMini22 style={{ width: 18, height: 18 }} colorFill={color} />
    if (icon == 'IconMini23')
      return <IconMini23 style={{ width: 18, height: 18 }} colorFill={color} />
    if (icon == 'IconMini24')
      return <IconMini24 style={{ width: 18, height: 18 }} colorFill={color} />
    if (icon == 'IconMini25')
      return <IconMini25 style={{ width: 18, height: 18 }} colorFill={color} />
  }

  return (
    <View
      style={{
        flexDirection: 'row',
        width: '100%',
        paddingTop: 10,
        paddingBottom: 10,
      }}
    >
      {getIcon(item.icon)}
      <Text style={{ flex: 1, paddingLeft: 20 }}>{t(item.label)}</Text>
      <View style={{ width: 20, height: 20 }}>
        <CheckBox
          style={{ height: 20, width: 20 }}
          value={isSelected}
          onValueChange={(value) => {
            setSelection(value)
            onSelect && onSelect(item.label)
          }}
        />
      </View>
    </View>
  )
}

export default Component
