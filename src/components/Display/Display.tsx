import React from 'react'

type DisplayType = {
  value: number
  maxValue: number
  maxStyle: string
}

const Display = ({ value, maxValue, maxStyle }: DisplayType) => {
  return <div className={value === maxValue ? maxStyle : ''}>{value}</div>
}

export default Display
