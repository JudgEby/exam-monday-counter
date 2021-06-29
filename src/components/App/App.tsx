import React, { useEffect, useState } from 'react'
import style from './App.module.css'
import Display from '../Display/Display'
import Button from '../Button/Button'
import InputNumberControl from '../InputNumberControl/InputNumberControl'

function App() {
  const [startCounterValue, setStartCounterValue] = useState(0) //начальное значение счётчика
  const [maxCounterValue, setMaxCounterValue] = useState(1) //максимальное значение счётчика
  const step = 1 //шаг изменения

  const [counterValue, setCounterValue] = useState<number>(startCounterValue)

  const [setButtonDisabled, setSetButtonDisabled] = useState(false)

  useEffect(() => {
    const valuesAsString = localStorage.getItem('localValues')
    if (valuesAsString) {
      const {
        startCounterValue,
        maxCounterValue,
        counterValue,
        setButtonDisabled,
      } = JSON.parse(valuesAsString)
      setStartCounterValue(startCounterValue)
      setMaxCounterValue(maxCounterValue)
      setCounterValue(counterValue)
      setSetButtonDisabled(setButtonDisabled)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(
      'localValues',
      JSON.stringify({
        startCounterValue: startCounterValue,
        maxCounterValue: maxCounterValue,
        counterValue: counterValue,
        setButtonDisabled: setButtonDisabled,
      })
    )
  }, [startCounterValue, maxCounterValue, counterValue, setButtonDisabled])

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
      setCounterValue(counterValue + changeNum)
    }
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
              title={'ine'}
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
