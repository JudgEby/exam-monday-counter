import React from 'react'

type ButtonType = {
  onClickHandler: () => void
  title: string
  disabled?: boolean
}

const Button = ({ onClickHandler, title, disabled }: ButtonType) => {
  return (
    <button onClick={onClickHandler} disabled={disabled}>
      {title}
    </button>
  )
}

export default Button
