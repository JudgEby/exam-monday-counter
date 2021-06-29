import React from 'react'
import style from './Display.module.css'

type DisplayType = {
  value: number | string
}

const Display = ({ value }: DisplayType) => {
  return (
    <div className={typeof value === 'string' ? style.string : ''}>{value}</div>
  )
}

export default Display
