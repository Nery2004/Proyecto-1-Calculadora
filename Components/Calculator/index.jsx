import React from 'react'
import Display from '../Display'
import Keypad from '../Keypad'
import useCalculator from '../../hooks/useCalculator'

const Calculator = () => {
  const { display, handleButtonClick } = useCalculator()

  return (
    <div className="calculator">
      <div className="display-container">
        <Display value={display} />
      </div>
      <Keypad onClick={handleButtonClick} />
    </div>
  )
}

export default Calculator
