import React from 'react'

type ButtonType = {
  onClickHandler: () => void
  title: string
  disabled: boolean
  disabledStyle: string
}

const Button = ({
  onClickHandler,
  title,
  disabled,
  disabledStyle,
}: ButtonType) => {
  return (
    <button
      className={disabled ? disabledStyle : ''}
      onClick={onClickHandler}
      disabled={disabled}
    >
      {title}
    </button>
  )
}

export default Button
