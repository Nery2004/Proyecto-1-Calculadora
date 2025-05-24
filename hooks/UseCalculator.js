import { useState } from 'react'
import { calculate, isOverflow, isValidInput } from '../utils/calculator'

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

  const handleNumberInput = (number) => {
    if (waitingForOperand) {
      setDisplay(number)
      setWaitingForOperand(false)
    } else {
      const newValue = display === '0' ? number : display + number
      if (isValidInput(newValue)) {
        setDisplay(newValue)
      }
    }
  }

  const handleDecimalInput = () => {
    if (waitingForOperand) {
      setDisplay('0.')
      setWaitingForOperand(false)
    } else if (!display.includes('.')) {
      const newValue = display + '.'
      if (isValidInput(newValue)) {
        setDisplay(newValue)
      }
    }
  }

  const handleSignChange = () => {
    const newValue = display.startsWith('-') ? display.slice(1) : `-${display}`
    if (isValidInput(newValue)) {
      setDisplay(newValue)
    } else {
      setDisplay('ERROR')
      setWaitingForOperand(true)
    }
  }

  const handleOperation = (op) => {
    if (storedValue === null) {
      setStoredValue(parseFloat(display))
    } else if (!waitingForOperand) {
      const result = calculate(storedValue, parseFloat(display), operation)
      if (isOverflow(result)) {
        setDisplay('ERROR')
        setStoredValue(null)
        setOperation(null)
        setWaitingForOperand(true)
        return
      }
      setStoredValue(result)
      setDisplay(String(result))
    }
    setOperation(op)
    setWaitingForOperand(true)
  }

  const handleEquals = () => {
    if (operation && storedValue !== null && !waitingForOperand) {
      const result = calculate(storedValue, parseFloat(display), operation)
      if (isOverflow(result)) {
        setDisplay('ERROR')
      } else {
        setDisplay(String(result))
      }
      setStoredValue(null)
      setOperation(null)
      setWaitingForOperand(true)
    }
  }

  const handleClear = () => {
    setDisplay('0')
    setStoredValue(null)
    setOperation(null)
    setWaitingForOperand(false)
  }

  return { display, handleButtonClick }
}

export default useCalculator