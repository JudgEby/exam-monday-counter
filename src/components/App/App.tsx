import React, { useState } from 'react'
import style from './App.module.css'
import Display from '../Display/Display'
import Button from '../Button/Button'

function App() {
  const startCounterValue = 0 //начальное значение счётчика
  const maxCounterValue = 5 //максимальное значение счётчика
  const step = 1 //шаг изменения

  const [counterValue, setCounterValue] = useState<number>(startCounterValue)

  const incDisabled = counterValue === maxCounterValue
  const resetDisabled = counterValue === startCounterValue

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
        <div
          className={`${style.display} ${
            counterValue === maxCounterValue ? style.max : ''
          }`}
        >
          <Display value={counterValue} />
        </div>
        <div className={style.buttonsBlock}>
          <div className={incDisabled ? style.disabled : ''}>
            <Button
              disabled={incDisabled}
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
          <div className={resetDisabled ? style.disabled : ''}>
            <Button
              disabled={resetDisabled}
              title={'reset'}
              onClickHandler={() => setCounterValue(0)}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
