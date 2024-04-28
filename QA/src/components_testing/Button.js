import React from 'react'

const Button = ({onClick, label = 'CLick me'}) => {
  return (
    <div>
    <button onClick={onClick} data-testid="button">
      {label}
    </button>
    </div>
  )
}

export default Button
