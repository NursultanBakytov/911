import axios from 'axios'
import config from './config'
import moment from 'moment'

const getAuthToken = () => {
  return config.token.token_type + ' ' + config.token.access_token
}

const login = val => {
  const url = '/oauth/token'
  const data = {
    username: val.username,
    password: val.password,
    language: val.lang,
    grant_type: 'password',
    client_id: '2',
    client_secret: config.CLIENT_SECRET,
    scope: '*'
  }
  return axios.request({
    url: url,
    method: 'post',
    baseURL: config.BASE_URL,
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json'
    },
    data: data
  })
}

const forgotSendCode = val => {
  const url = '/auth/forgot/sendCode'
  const data = {
    login: val.username
  }
  return axios.request({
    url: url,
    method: 'post',
    baseURL: config.BASE_URL,
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json'
    },
    data: data
  })
}

const forgotVerifyCode = val => {
  const url = '/auth/forgot/verifyCode'
  const data = {
    login: val.login,
    token: val.token
  }
  return axios.request({
    url: url,
    method: 'post',
    baseURL: config.BASE_URL,
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json'
    },
    data: data
  })
}

const forgotInputPassword = val => {
  const url = '/auth/forgot/inputPassword'
  const data = {
    login: val.login,
    token: val.token,
    password: val.password,
    password_confirmation: val.password_confirmation
  }
  return axios.request({
    url: url,
    method: 'post',
    baseURL: config.BASE_URL,
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json'
    },
    data: data
  })
}

const newOne = val => {
  const url = '/auth/new/one'
  const data = {
    login: val.login || val.username
  }
  return axios.request({
    url: url,
    method: 'post',
    baseURL: config.BASE_URL,
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json'
    },
    data: data
  })
}

const newVerify = val => {
  const url = '/auth/new/verify'
  const data = {
    // email: Math.random() * 100 + 'user911help@gmail.com',
    // login: val.login,
    phone: val.login,
    token: val.token
  }
  return axios.request({
    url: url,
    method: 'post',
    baseURL: config.BASE_URL,
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json'
    },
    data: data
  })
}

const newTwo = val => {
  const url = '/auth/new/two'
  const birthdate = moment(val.birthdate, 'DD-MM-YYYY').format('YYYY-MM-DD')

  const data = {
    role_id: 3,
    token: val.token,
    phone: val.login,
    language: val.language,
    password: val.password,
    password_confirmation: val.confirmPassword,
    first_name: val.firstName,
    last_name: val.lastName,
    birthday_at: birthdate,
    city_id: val.city,
    address: val.address,
    nip: val.nip,
    notify_guarantor: val.notifyAdditionalPerson ? '1' : '0',
    notify_guarantor_name: val.additional_person_name,
    notify_guarantor_phone: val.additional_person_number,
    notify_guarantor_relation: val.additional_person_who_is,
    limitation_hearing: val.hearing ? '1' : '0',
    limitation_vision: val.vision ? '1' : '0',
    physical_inabilities: val.others,
    blood_type: val.bloodType,
    contraindications: val.contraindication,
    deceases_in_past: val.illness,
    allergy: val.allergies,
    pharmaceutical_intolerance: val.drug
  }
  return axios.request({
    url: url,
    method: 'post',
    baseURL: config.BASE_URL,
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json'
    },
    data: data
  })
}

const getUser = val => {
  const url = '/users/current'
  return axios.request({
    url: url,
    method: 'get',
    baseURL: config.BASE_URL,
    headers: {
      Accept: 'application/json',
      Authorization: getAuthToken()
    }
  })
}

const setUser = val => {
  const url = '/users/current'
  const data = val.userModel
  return axios.request({
    url: url,
    method: 'post',
    baseURL: config.BASE_URL,
    headers: {
      Accept: 'application/json',
      Authorization: getAuthToken()
    },
    data: data
  })
}

const getIssues = val => {
  const url = '/issues'
  return axios.request({
    url: url,
    method: 'get',
    baseURL: config.BASE_URL,
    headers: {
      Accept: 'application/json',
      Authorization: getAuthToken()
    }
  })
}

const sendIssue = val => {
  const url = '/issues/subscriber'
  const data = val.data
  return axios.request({
    url: url,
    method: 'post',
    baseURL: config.BASE_URL,
    headers: {
      Accept: 'application/json',
      // "Content-Type": "multipart/form-data",
      Authorization: getAuthToken()
    },
    data: data
  })
}

const loadRegionsDictionary = () => {
  return axios.request({
    url: `/static-lists/geo/regions/${config.COUNTRY_ID}`,
    method: 'get',
    baseURL: config.BASE_URL,
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json'
      // "Authorization": getAuthToken()
    }
  })
}

const loadCitiesDictionary = regionId => {
  return axios.request({
    url: `static-lists/geo/cities/${regionId}`,
    method: 'get',
    baseURL: config.BASE_URL,
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json'
      // "Authorization": getAuthToken()
    }
  })
}

const searchCityByQuery = (text, regionId) => {
  return axios.request({
    url: `static-lists/geo/search/cities`,
    method: 'get',
    baseURL: config.BASE_URL,
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json'
      // "Authorization": getAuthToken()
    },
    params: {
      country_id: config.COUNTRY_ID,
      region_id: regionId || null,
      query: text
    }
  })
}

export default {
  getAuthToken,
  login,
  forgotSendCode,
  forgotVerifyCode,
  forgotInputPassword,
  newOne,
  newVerify,
  newTwo,
  getUser,
  setUser,
  getIssues,
  sendIssue,
  loadRegionsDictionary,
  loadCitiesDictionary,
  searchCityByQuery
}
