import React from 'react'
import Button from '../Button'

const buttons = [
  '7', '8', '9', '/',
  '4', '5', '6', '*',
  '1', '2', '3', '-',
  '0', '.', '=', '+',
  'C', '+/-', '%'
]

const Keypad = ({ onClick }) => (
  <div className="keypad">
    {buttons.map(btn => (
      <Button key={btn} value={btn} onClick={onClick} />
    ))}
  </div>
)

export default Keypad