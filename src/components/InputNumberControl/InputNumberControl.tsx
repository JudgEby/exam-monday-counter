import React from 'react'
import style from './InputNumberControl.module.css'

type InputNumberControlType = {
  value: number
  onChange: (value: number) => void
  setSetButtonDisabled: (value: boolean) => void
  error: boolean
}

const InputNumberControl = ({
  value,
  onChange,
  setSetButtonDisabled,
  error,
}: InputNumberControlType) => {
  return (
    <input
      type='number'
      className={`${style.input} ${error ? style.error : ''}`}
      value={value}
      onChange={(e) => {
        onChange(Number(e.currentTarget.value))
        setSetButtonDisabled(false)
      }}
    />
  )
}

export default InputNumberControl
