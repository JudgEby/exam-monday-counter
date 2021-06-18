import React, { useState } from 'react'
import style from './App.module.css'
import Display from '../Display/Display'
import Button from '../Button/Button'

function App() {
  const [counterValue, setCounterValue] = useState<number>(0)

  const maxCounterValue = 5 //максимальное значение счётчика

  const incDisabled = counterValue === maxCounterValue
  const resetDisabled = counterValue === 0

  const changeCounterValueHandler = (changeNum: number, maxValue: number) => {
    if (counterValue >= 0 && counterValue < maxValue) {
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
                changeCounterValueHandler(1, maxCounterValue)
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
