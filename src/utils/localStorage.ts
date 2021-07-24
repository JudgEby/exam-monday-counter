import { AppStateType } from '../redux/store'

export const loadState = (): any => {
  try {
    const serializedState = localStorage.getItem('state')

    return serializedState ? JSON.parse(serializedState) : undefined
  } catch (err) {
    return undefined
  }
}

export const saveState = (state: AppStateType) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)
  } catch {
    // ignore write errors
  }
}
