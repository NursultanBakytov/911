import React, { createContext, useContext, useReducer, useEffect } from 'react'
import { Platform } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'

const StateContext = createContext()

const StateProvider = ({ reducer, initialState, children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const syncLocalState = async () => {
    AsyncStorage.getItem('stateHelp911').then(localState => {
      // console.log("__start localState__", JSON.parse(localState) )
      setTimeout( ()=>{
        dispatch({ type: 'setLocalState', localState: { ...JSON.parse(localState), isLoading: false } })
      }, 100)
    })
  }

  useEffect(() => {
    syncLocalState()
  }, [])

  return (
    <StateContext.Provider value={[state, dispatch]}>
      {children}
    </StateContext.Provider>
  )
}

const useStore = () => useContext(StateContext)

export {
  StateProvider,
  useStore
}
