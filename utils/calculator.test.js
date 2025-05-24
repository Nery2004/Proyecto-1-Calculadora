import { calculate, validateDisplay } from './calculator'

describe('calculate', () => {
  test('basic operations', () => {
    expect(calculate(5, 3, '+')).toBe(8)
    expect(calculate(5, 3, '-')).toBe(2)
    expect(calculate(5, 3, '*')).toBe(15)
    expect(calculate(10, 2, '/')).toBe(5)
    expect(calculate(10, 3, '%')).toBe(1)
  })
})

describe('validateDisplay', () => {
  test('valid inputs', () => {
    expect(validateDisplay('123456789')).toBe('123456789')
    expect(validateDisplay('123.45678')).toBe('123.45678')
  })
  
  test('error cases', () => {
    expect(validateDisplay('-123')).toBe('ERROR')
    expect(validateDisplay('1234567890')).toBe('ERROR')
    expect(validateDisplay('9999999991')).toBe('ERROR')
  })
})