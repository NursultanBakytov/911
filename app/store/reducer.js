import AsyncStorage from '@react-native-community/async-storage'
import initialState from './initialState'
import config from '../api/config'

const setUser = (state, { user }) => ({ ...state, user })
const setNewUser = (state, { newUser }) => ({...state, newUser })
const setToken = (state, { token }) => {
  config.token = token
  return {
    ...state,
    token,
    isLogged: true
  }
} 
const setLogout = (state) => {
  return {
    ...state,
    ...initialState,
    isLoading: false
  }
} 
const setLocalState = (state, { localState }) => {
  config.token = localState.token
  return {
    ...state,
    ...localState,
    isLoading: false
  }
} 

const reducers = {
  setUser,
  setToken,
  setNewUser,
  setLogout,
  setLocalState,
}

export default (state, { type, ...action }) => {
  const reducer = reducers[type]
  const updatedState = reducer(state, action)

  AsyncStorage.setItem('stateHelp911', JSON.stringify(updatedState))
  
  return updatedState
}
