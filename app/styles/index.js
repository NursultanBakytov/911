import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  fullWidth: {
    width: '100%'
  },
  body: {
    fontSize: 14
  },
  h6: {
    fontSize: 16
  },

  mb20: {
    marginBottom: 20
  },

  alignItemsCenter: {
    alignItems: 'center'
  },

  flex: {
    flex: 1
  },

  /*******************************************  CONTAINERS  ************************************/
  containerSafeAreaView: {
    flex: 1,
    height: '100%'
  },

  containerScrollView: {
    flex: 1
  },

  containerHeader: {
    height: 60,
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderBottomColor: '#EEEEEE',
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },

  containerHeaderLeft: {
    width: 40,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },

  containerHeaderRight: {
    width: 40,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },

  containerHeaderTitle: {
    flex: 1,
    paddingLeft: 20
  },

  containerCenter: {
    alignItems: 'center',
    justifyContent: 'center'
  },

  bgWhite: {
    backgroundColor: '#FFFFFF'
  },

  bgRed: {
    backgroundColor: '#FF0000'
  },

  bgGreen: {
    backgroundColor: '#00FF00'
  },

  bgWhiteDark: {
    backgroundColor: '#f8f9fb'
  },

  containerWidth100: {
    width: '100%'
  },

  containerWidth90: {
    width: '90%'
  },

  containerWidth80: {
    width: '80%'
  },

  containerWidth30: {
    width: '30%'
  },

  containerMarginT60B30: {
    marginTop: 60,
    marginBottom: 30
  },

  containerMenuItem: {
    flexDirection: 'row',
    padding: 10
  },

  containerProfileItem: {
    width: '100%',
    height: 50,
    flexDirection: 'row'
  },

  topLightBorder: {
    borderTopColor: '#EEEEEE',
    borderTopWidth: 1
  },

  bottomLightBorder: {
    borderBottomColor: '#EEEEEE',
    borderBottomWidth: 1
  },

  /********************************************  TEXTS  **************************************/
  txtLineHeight40: {
    lineHeight: 40
  },

  txtCenter: {
    textAlign: 'center'
  },

  txtRight: {
    textAlign: 'right'
  },

  txtBold: {
    fontWeight: 'bold'
  },

  txtItalic: {
    fontStyle: 'italic'
  },

  txtUnderline: {
    textDecorationLine: 'underline'
  },

  txtPaddingTB5LR20: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 20,
    paddingRight: 20
  },

  txtPaddingTB10: {
    paddingTop: 10,
    paddingBottom: 10
  },

  txtColorWhite: {
    color: '#FFFFFF'
  },

  txtColorBlue: {
    color: '#519DFF'
  },

  txtInput: {
    height: 40,
    borderColor: '#666666',
    borderRadius: 5,
    borderWidth: 1,
    width: '80%',
    marginBottom: 10,
    color: '#000000'
  },

  containerIssueTitle: {
    flexDirection: 'row',
    marginTop: 5
  },

  /*******************************************  BUTTONS  **************************************/
  btnWhiteOutlineBlack: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 10,
    height: 40,
    width: '80%',
    paddingTop: 10,
    marginTop: 10,
    alignItems: 'center'
  },

  btnMenuItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#d8dae6',
    borderWidth: 1,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowOpacity: 0.1,
    shadowRadius: 6
  },

  btnYellowSimple: {
    backgroundColor: '#FFCF17',
    height: 40,
    width: '80%',
    paddingTop: 10,
    marginTop: 10,
    alignItems: 'center'
  },

  btnBlueSimple: {
    backgroundColor: '#519DFF',
    height: 40,
    width: '80%',
    paddingTop: 10,
    marginTop: 10,
    alignItems: 'center'
  },

  btnOpacitySimple: {
    // backgroundColor: '#FFFFFF',
    height: 40,
    // width: '80%',
    paddingTop: 10,
    marginTop: 10,
    alignItems: 'flex-end'
  },

  btnDisabled: {
    opacity: 0.5
  },

  addPhoto: {
    width: 80,
    height: 80,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#666666',
    borderWidth: 1,
    borderRadius: 5,
    borderStyle: 'dashed'
  },

  /********************************************  FORMS  **************************************/
  formContainer: {
    marginBottom: 15
    // backgroundColor: '#FFCCCC'
  },

  formInputDefault: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    height: 44,
    alignItems: 'center',
    borderColor: '#D7D9E5',
    borderWidth: 1
    // marginBottom: 15
    // marginTop: 10
    // backgroundColor: '#CCFFCC'
  },

  formIcon: {
    margin: 10
  },

  formLabel: {
    backgroundColor: 'white',
    position: 'absolute',
    top: -8,
    left: 5,
    paddingLeft: 5,
    paddingRight: 5,
    fontSize: 12
  },

  formError: {
    color: '#B00020',
    fontSize: 12,
    paddingLeft: 0
  },

  formTextInput: {
    fontSize: 16,
    flex: 1,
    height: 44
  },

  /*******************************************  TAB BAR  ************************************/
  tabButtonIcon: {
    color: '#2A2A2A',
    fontSize: 16
  },

  tabButtonIconActive: {
    color: '#C2262E',
    fontSize: 16
  },

  tabBarLabelStyle: {
    fontWeight: '300',
    fontSize: 11,
    lineHeight: 13
  },

  tabBarStyle: {
    backgroundColor: '#FFFFFF',
    borderColor: '#FFFFFF',
    borderWidth: 7,
    height: 50
  }
})

export default styles
