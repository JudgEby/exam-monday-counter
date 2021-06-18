import React from 'react'

type DisplayType = {
  value: number
}

const Display = ({ value }: DisplayType) => {
  return <div>{value}</div>
}

export default Display
