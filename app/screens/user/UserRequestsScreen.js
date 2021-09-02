import React from 'react'
import {
  SafeAreaView,
  Text,
  Image,
  ScrollView,
  View,
  TouchableOpacity,
} from 'react-native'
import { useTranslation } from 'react-i18next'

import styles from '../../styles'
import API from '../../api/services'
import validators from '../../store/validators'
import { TitleHeader, IssueItem } from '../../components'

const Component = ({ navigation }) => {
  const { t, i18n } = useTranslation()

  const [list, setList] = React.useState(null)

  const getAllIssues = () => {
    API.getIssues({})
      .then((response) => {
        const data =
          response.status == 200 &&
          response.data.type == 'success' &&
          response.data.data
        // console.log("__response__", data)
        setList(data)
      })
      .catch((e) => {
        validators.showError(e)
      })
  }

  React.useEffect(() => {
    getAllIssues()
  }, [])

  const comp =
    list == null ? (
      <Text style={{ marginTop: 50 }}>{t('callSending')}</Text>
    ) : list.length == 0 ? (
      <Text style={{ marginTop: 50 }}>{t('no_requests')}</Text>
    ) : (
      <View style={{ width: '100%' }}>
        {list.map((item, id) => (
          <IssueItem key={id} item={item} />
        ))}
      </View>
    )

  return (
    <SafeAreaView style={[styles.containerSafeAreaView, styles.bgWhiteDark]}>
      <TitleHeader
        title={t('my_requests').toUpperCase()}
        leftIcon="back"
        leftPress={() => navigation.goBack()}
      />
      <ScrollView style={[styles.containerScrollView]}>
        <View style={[styles.containerCenter]}>{comp}</View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Component
