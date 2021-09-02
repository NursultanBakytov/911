import React from 'react'
import { Text } from 'react-native'

import styles from '../styles'
import {
  IconAge,
  IconCall,
  IconEye,
  IconFamily,
  IconKey,
  IconMail,
  IconMap,
  IconMedic,
  IconName,
  IconNip,
  IconAllergies,
  IconIllness,
  IconOthers,
  IconDrug,
  IconContraindication,
  IconDrop
} from './Icon'

const Component = ({ type, style }) => {
  switch (type) {
    case 'age':
      return <IconAge style={[{ width: 16, height: 17 }, style]} />
    case 'call':
      return <IconCall style={[{ width: 16, height: 16 }, style]} />
    case 'eye':
      return <IconEye style={[{ width: 19, height: 13 }, style]} />
    case 'family':
      return <IconFamily style={[{ width: 16, height: 16 }, style]} />
    case 'key':
      return <IconKey style={[{ width: 16, height: 16 }, style]} />
    case 'key-dark':
      return (
        <IconKey
          style={[{ width: 16, height: 16 }, style]}
          colorFill="#519DFF"
        />
      )
    case 'mail':
      return <IconMail style={[{ width: 16, height: 16 }, style]} />
    case 'map-yellow':
      return (
        <IconMap
          style={[{ width: 16, height: 16 }, style]}
          colorFill="#FFCF17"
        />
      )
    case 'map-orange':
      return (
        <IconMap
          style={[{ width: 16, height: 16 }, style]}
          colorFill="#FF842C"
        />
      )
    case 'map-purple':
      return (
        <IconMap
          style={[{ width: 16, height: 16 }, style]}
          colorFill="#FB65FE"
        />
      )
    case 'medic':
      return <IconMedic style={[{ width: 16, height: 16 }, style]} />
    case 'name':
      return <IconName style={[{ width: 16, height: 16 }, style]} />
    case 'name-yellow':
      return (
        <IconName
          style={[{ width: 16, height: 16 }, style]}
          colorFill="#FFCF17"
        />
      )
    case 'nip':
      return <IconNip style={[{ width: 16, height: 16 }, style]} />
    case 'drop':
      return <IconDrop style={[{ width: 16, height: 16 }, style]} />
    case 'others':
      return <IconOthers style={[{ width: 16, height: 16 }, style]} />
    case 'allergies':
      return <IconAllergies style={[{ width: 16, height: 16 }, style]} />
    case 'illness':
      return <IconIllness style={[{ width: 16, height: 16 }, style]} />
    case 'drug':
      return <IconDrug style={[{ width: 16, height: 16 }, style]} />
    case 'contraind':
      return <IconContraindication style={[{ width: 16, height: 16 }, style]} />
  }
  return <Text> </Text>
}

export default Component

// INTRO
export { default as IconIntroFirst } from './svg/IconIntroFirst'
export { default as IconIntroSecond } from './svg/IconIntroSecond'
export { default as IconIntroThird } from './svg/IconIntroThird'

// MENU1
export { default as MenuAmbulance } from './svg/MenuAmbulance'
export { default as MenuFireTruck } from './svg/MenuFireTruck'
export { default as MenuGas } from './svg/MenuGas'
export { default as MenuPolice } from './svg/MenuPolice'
export { default as MenuVirus } from './svg/MenuVirus'

// MENU2
export { default as MenuAccount } from './svg/MenuAccount'
export { default as MenuCatalog } from './svg/MenuCatalog'
export { default as MenuInfo } from './svg/MenuInfo'
export { default as MenuQueries } from './svg/MenuQueries'
export { default as MenuReport } from './svg/MenuReport'
export { default as MenuSettings } from './svg/MenuSettings'

export { default as MenuEdit } from './svg/MenuEdit'
export { default as MenuExit } from './svg/MenuExit'
export { default as MenuArrow } from './svg/MenuArrow'

// TABS AND CALLS
export { default as CallFinish } from './svg/CallFinish'
export { default as CallFirst } from './svg/CallFirst'
export { default as CallKeyboard } from './svg/CallKeyboard'
export { default as CallNow } from './svg/CallNow'
export { default as CallSecond } from './svg/CallSecond'
export { default as CallSignal } from './svg/CallSignal'
export { default as CallSMS } from './svg/CallSMS'
export { default as CallSOS } from './svg/CallSOS'
export { default as CallStart } from './svg/CallStart'
export { default as CallStill } from './svg/CallStill'
export { default as CallThird } from './svg/CallThird'

// ICONS
export { default as IconAge } from './svg/IconAge'
export { default as IconCall } from './svg/IconCall'
export { default as IconEye } from './svg/IconEye'
export { default as IconFamily } from './svg/IconFamily'
export { default as IconKey } from './svg/IconKey'
export { default as IconMail } from './svg/IconMail'
export { default as IconMap } from './svg/IconMap'
export { default as IconMedic } from './svg/IconMedic'
export { default as IconName } from './svg/IconName'
export { default as IconNip } from './svg/IconNip'

export { default as IconAllergies } from './svg/IconAllergies'
export { default as IconIllness } from './svg/IconIllness'
export { default as IconOthers } from './svg/IconOthers'
export { default as IconDrug } from './svg/IconDrug'
export { default as IconContraindication } from './svg/IconContraindication'
export { default as IconDrop } from './svg/IconDrop'

export { default as IconMedicCard } from './svg/IconMedicCard'
export { default as IconMedicHospital } from './svg/IconMedicHospital'
export { default as IconMedicInsurance } from './svg/IconMedicInsurance'
export { default as IconAvatar } from './svg/IconAvatar'
export { default as IconMicro } from './svg/IconMicro'

export { default as IconLupa } from './svg/IconLupa'
export { default as IconEgg } from './svg/IconEgg'
export { default as MenuInstruct } from './svg/MenuInstruct'
export { default as ArrowRight } from './svg/ArrowRight'
export { default as ArrowBottom } from './svg/ArrowBottom'

export { default as MenuLang } from './svg/MenuLang'
export { default as MenuPlus } from './svg/MenuPlus'
export { default as MenuQuest } from './svg/MenuQuest'
export { default as MenuQuadro } from './svg/MenuQuadro'
export { default as CallCheck } from './svg/CallCheck'
export { default as CallCancel } from './svg/CallCancel'

export { default as IconMini01 } from './svg/mini/IconMini01'
export { default as IconMini02 } from './svg/mini/IconMini02'
export { default as IconMini03 } from './svg/mini/IconMini03'
export { default as IconMini04 } from './svg/mini/IconMini04'
export { default as IconMini05 } from './svg/mini/IconMini05'

export { default as IconMini06 } from './svg/mini/IconMini06'
export { default as IconMini07 } from './svg/mini/IconMini07'
export { default as IconMini08 } from './svg/mini/IconMini08'
export { default as IconMini09 } from './svg/mini/IconMini09'
export { default as IconMini10 } from './svg/mini/IconMini10'

export { default as IconMini11 } from './svg/mini/IconMini11'
export { default as IconMini12 } from './svg/mini/IconMini12'
export { default as IconMini13 } from './svg/mini/IconMini13'
export { default as IconMini14 } from './svg/mini/IconMini14'
export { default as IconMini15 } from './svg/mini/IconMini15'

export { default as IconMini16 } from './svg/mini/IconMini16'
export { default as IconMini17 } from './svg/mini/IconMini17'
export { default as IconMini18 } from './svg/mini/IconMini18'
export { default as IconMini19 } from './svg/mini/IconMini19'
export { default as IconMini20 } from './svg/mini/IconMini20'

export { default as IconMini21 } from './svg/mini/IconMini21'
export { default as IconMini22 } from './svg/mini/IconMini22'
export { default as IconMini23 } from './svg/mini/IconMini23'
export { default as IconMini24 } from './svg/mini/IconMini24'
export { default as IconMini25 } from './svg/mini/IconMini25'
