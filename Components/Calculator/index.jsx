import React from 'react'
import Display from '../Display'
import Keypad from '../Keypad'
import useCalculator from '../../hooks/useCalculator'
import './Calculator.css'

const Calculator = () => {
  const { display, handleButtonClick } = useCalculator()

  return (
    <div className="calculator">
      <Display value={display} />
      <Keypad onClick={handleButtonClick} />
    </div>
  )
}

export default Calculator
