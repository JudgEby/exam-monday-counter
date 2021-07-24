import React from 'react'
import style from './App.module.css'
import Display from '../Display/Display'
import Button from '../Button/Button'
import InputNumberControl from '../InputNumberControl/InputNumberControl'
import { useDispatch, useSelector } from 'react-redux'
import { AppStateType } from '../../redux/store'
import {
  CounterType,
  setCounterValueActionCreator,
  setMaxCounterValueActionCreator,
  setSetButtonDisabledActionCreator,
  setStartCounterValueActionCreator,
} from '../../redux/counter-reducer'

function App() {
  const step = 1

  const {
    counterValue,
    startCounterValue,
    maxCounterValue,
    setButtonDisabled,
  } = useSelector<AppStateType, CounterType>((state) => state.counter) // получаем стейт из провайдера react-redux

  const dispatch = useDispatch() // получаем функцию диспатч из react-redux

  const incDisabled = counterValue === maxCounterValue
  const resetDisabled = counterValue === startCounterValue

  let startInputError = false
  let maxInputError = false

  if (startCounterValue < 0) {
    startInputError = true
  }

  if (maxCounterValue <= startCounterValue) {
    startInputError = true
    maxInputError = true
  }

  const changeCounterValueHandler = (
    changeNum: number,
    maxValue: number,
    startValue: number
  ) => {
    if (counterValue >= startValue && counterValue < maxValue) {
      dispatch(setCounterValueActionCreator(counterValue + changeNum))
    }
  }

  const setCounterValue = (value: number) => {
    dispatch(setCounterValueActionCreator(value))
  }

  const setStartCounterValue = (value: number) => {
    dispatch(setStartCounterValueActionCreator(value))
  }

  const setMaxCounterValue = (value: number) => {
    dispatch(setMaxCounterValueActionCreator(value))
  }

  const setSetButtonDisabled = (value: boolean) => {
    dispatch(setSetButtonDisabledActionCreator(value))
  }

  return (
    <div className={style.App}>
      <div className={style.container}>
        <div className={style.controlDisplay}>
          <div className={style.controlDisplayTitles}>
            <span>max value</span>
            <span>start value</span>
          </div>
          <div className={style.controlDisplayInputs}>
            <InputNumberControl
              value={maxCounterValue}
              onChange={setMaxCounterValue}
              setSetButtonDisabled={setSetButtonDisabled}
              error={maxInputError}
            />
            <InputNumberControl
              value={startCounterValue}
              onChange={setStartCounterValue}
              setSetButtonDisabled={setSetButtonDisabled}
              error={startInputError}
            />
          </div>
        </div>
        <div className={style.setButtonBlock}>
          <div
            className={
              setButtonDisabled || startInputError || maxInputError
                ? style.disabled
                : ''
            }
          >
            <Button
              disabled={setButtonDisabled || startInputError || maxInputError}
              title={'set'}
              onClickHandler={() => {
                setCounterValue(startCounterValue)
                setSetButtonDisabled(true)
              }}
            />
          </div>
        </div>
      </div>
      <div className={style.container}>
        <div
          className={`${style.display} ${
            (counterValue === maxCounterValue &&
              startCounterValue !== maxCounterValue &&
              setButtonDisabled) ||
            startInputError ||
            maxInputError
              ? style.max
              : ''
          }`}
        >
          <Display
            value={
              setButtonDisabled
                ? counterValue
                : startInputError || maxInputError
                ? 'Incorrect value!'
                : 'enter value and press "set"'
            }
          />
        </div>
        <div className={style.buttonsBlock}>
          <div
            className={incDisabled || !setButtonDisabled ? style.disabled : ''}
          >
            <Button
              disabled={incDisabled || !setButtonDisabled}
              title={'inc'}
              onClickHandler={() =>
                changeCounterValueHandler(
                  step,
                  maxCounterValue,
                  startCounterValue
                )
              }
            />
          </div>
          <div
            className={
              resetDisabled || !setButtonDisabled ? style.disabled : ''
            }
          >
            <Button
              disabled={resetDisabled || !setButtonDisabled}
              title={'reset'}
              onClickHandler={() => setCounterValue(startCounterValue)}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
