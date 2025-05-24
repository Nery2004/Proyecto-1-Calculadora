export const calculate = (a, b, operation) => {
  const numA = parseFloat(a)
  const numB = parseFloat(b)
  
  try {
    switch(operation) {
      case '+': 
        return numA + numB
      case '-': 
        return numA - numB
      case '*': 
        return numA * numB
      case '/': 
        if (numB === 0) throw new Error('Division by zero')
        return numA / numB
      case '%': 
        return numA % numB
      default: 
        return numB
    }
  } catch (error) {
    return NaN // Para manejar errores como división por cero
  }
}

export const validateDisplay = (value) => {
  if (value === 'ERROR') return 'ERROR'
  
  const strValue = value.toString()
  const numValue = parseFloat(value)
  
  // Verificación de errores
  if (strValue === '-') return 'ERROR'
  if (numValue < 0) return 'ERROR'
  if (numValue > 999999999) return 'ERROR'
  if (strValue.length > 9 && !strValue.includes('.')) return 'ERROR'
  
  // Manejo de decimales sin truncar números enteros
  if (strValue.includes('.')) {
    const [integer, decimal] = strValue.split('.')
    if (integer.length > 9) return 'ERROR'
    return `${integer.slice(0, 9)}.${decimal}`.slice(0, 10)
  }
  
  return strValue.slice(0, 9)
}

export const formatInput = (value) => {
  // Elimina ceros no significativos al inicio
  const strValue = value.toString().replace(/^0+/, '')
  return strValue === '' ? '0' : strValue
}

export const isOperator = (value) => ['+', '-', '*', '/', '%'].includes(value)