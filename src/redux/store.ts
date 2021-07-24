import { combineReducers, createStore } from 'redux'
import counterReducer, {
  SetSetButtonDisabledACT,
  SetValueACT,
} from './counter-reducer'
import { loadState, saveState } from '../utils/localStorage'

export type ActionsType = SetValueACT | SetSetButtonDisabledACT

export type AppStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
  counter: counterReducer,
})
console.log(rootReducer)

const store = createStore(rootReducer, loadState())

store.subscribe(() => {
  saveState(store.getState())
})

export default store
