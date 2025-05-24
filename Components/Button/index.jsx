import React from 'react'

const Button = ({ value, onClick }) => (
  <button
    className={`btn ${value === '=' ? 'equals' : ''}`}
    onClick={() => onClick(value)}
  >
    {value}
  </button>
)

export default Button