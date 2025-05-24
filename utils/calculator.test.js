import { calculate, validateDisplay } from './calculator'

describe('Calculator functions', () => {
  test('adds numbers correctly', () => {
    expect(calculate(2, 3, '+')).toBe(5)
  })

  test('displays ERROR for negative results', () => {
    expect(validateDisplay('-5')).toBe('ERROR')
  })

  test('limits display to 9 characters', () => {
    expect(validateDisplay('1234567890')).toBe('ERROR')
  })
})