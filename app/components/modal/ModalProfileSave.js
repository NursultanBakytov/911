import React from 'react'
import {
  View, 
  Text,
  Modal,
  TouchableOpacity,
  Platform,
} from 'react-native'
import { useTranslation } from 'react-i18next'

import styles from '../../styles'
import { 
  CallCheck,
} from '../../components/Icon'

const Component = ({ visible, close }) => {
  const {t, i18n} = useTranslation()

  const comp = (Platform.OS == 'web') 
    ? <View></View> 
    : <TouchableOpacity style={{backgroundColor:'#FFFFFF', alignItems:'center', borderRadius:10}} >

        <CallCheck style={{width:50, height:50, margin:20 }} fillColor="#519DFF" />
        <Text style={{margin:0}}>{t('change_profile_success_title')}</Text>
        <Text style={{margin:10}}>{t('change_profile_success_message')}</Text>
        
        <TouchableOpacity 
          style={[styles.btnBlueSimple, {margin:20, width:200}]} 
          onPress={close} 
        >
          <Text style={[styles.txtColorWhite]}>Ok</Text>
        </TouchableOpacity>

      </TouchableOpacity>

  return (
    <Modal
      animationType="slide"
      transparent={true}
      onPress={close}
      visible={visible}
    >
      <TouchableOpacity 
        style={{backgroundColor:'rgba(0,0,0,0.5)', alignItems:'center', width:'100%', height:'100%', justifyContent:'center'}}
        onPress={close}
      >
        { comp } 
      </TouchableOpacity>
    </Modal>
  )
} 

export default Component
