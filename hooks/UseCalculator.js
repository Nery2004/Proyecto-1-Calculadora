import { useState } from 'react'
import { calculate } from '../utils/calculator'

const useCalculator = () => {
  const [display, setDisplay] = useState('0')
  const [storedValue, setStoredValue] = useState(null)
  const [operation, setOperation] = useState(null)
  const [waitingForOperand, setWaitingForOperand] = useState(false)

  const handleButtonClick = (value) => {
    if (/[0-9]/.test(value)) {
      handleNumberInput(value)
    } else if (value === '.') {
      handleDecimalInput()
    } else if (value === '+/-') {
      handleSignChange()
    } else if (['+', '-', '*', '/', '%'].includes(value)) {
      handleOperation(value)
    } else if (value === '=') {
      handleEquals()
    } else if (value === 'C') {
      handleClear()
    }
  }

  // Resto de funciones handler (se movieron al archivo utils/calculator.js)

  return { display, handleButtonClick }
}

export default useCalculator