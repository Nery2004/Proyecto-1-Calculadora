import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ value, onClick }) => {
  const getButtonClass = () => {
    if (value === '=') return 'btn btn-equals'
    if (['+', '-', '*', '/', '%'].includes(value)) return 'btn btn-operator'
    if (value === 'C') return 'btn btn-clear'
    return 'btn'
  }

  return (
    <button
      className={getButtonClass()}
      onClick={() => onClick(value)}
    >
      {value}
    </button>
  )
}

Button.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Button
