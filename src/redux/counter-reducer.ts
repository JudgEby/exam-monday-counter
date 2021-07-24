import { ActionsType } from './store'

const SET_START_COUNTER_VALUE = 'SET_START_COUNTER_VALUE'
const SET_MAX_COUNTER_VALUE = 'SET_MAX_COUNTER_VALUE'
const SET_BUTTON_DISABLED = 'SET_BUTTON_DISABLED'
const SET_COUNTER_VALUE = 'SET_COUNTER_VALUE'

// export type CounterType = {
//   counterValue: number
//   startCounterValue: number
//   maxCounterValue: number
//   setButtonDisabled: boolean
// }

export type SetValueACT = {
  type:
    | typeof SET_START_COUNTER_VALUE
    | typeof SET_MAX_COUNTER_VALUE
    | typeof SET_COUNTER_VALUE
  value: number
}

export type SetSetButtonDisabledACT = {
  type: typeof SET_BUTTON_DISABLED
  value: boolean
}

const initialState = {
  counterValue: 0,
  startCounterValue: 0,
  maxCounterValue: 1,
  setButtonDisabled: false,
}

export type CounterType = typeof initialState

const counterReducer = (
  state: CounterType = initialState,
  action: ActionsType
): CounterType => {
  switch (action.type) {
    case SET_COUNTER_VALUE: {
      return { ...state, counterValue: action.value }
    }
    case SET_START_COUNTER_VALUE: {
      return { ...state, startCounterValue: action.value }
    }
    case SET_MAX_COUNTER_VALUE: {
      return { ...state, maxCounterValue: action.value }
    }
    case SET_BUTTON_DISABLED: {
      return { ...state, setButtonDisabled: action.value }
    }
    default:
      return state
  }
}

// utils functions

const toNumber = (value: string | number) =>
  typeof value === 'string' ? Number(value) : value

//action creators
export const setCounterValueActionCreator = (
  value: number | string
): SetValueACT => {
  return { type: SET_COUNTER_VALUE, value: toNumber(value) }
}

export const setStartCounterValueActionCreator = (
  value: number | string
): SetValueACT => {
  return { type: SET_START_COUNTER_VALUE, value: toNumber(value) }
}

export const setMaxCounterValueActionCreator = (
  value: number | string
): SetValueACT => {
  return { type: SET_MAX_COUNTER_VALUE, value: toNumber(value) }
}

export const setSetButtonDisabledActionCreator = (
  value: boolean
): SetSetButtonDisabledACT => {
  return { type: SET_BUTTON_DISABLED, value: value }
}

export default counterReducer
