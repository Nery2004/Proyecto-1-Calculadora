export const calculate = (a, b, operation) => {
  const numA = parseFloat(a)
  const numB = parseFloat(b)
  
  switch(operation) {
    case '+': return numA + numB
    case '-': return numA - numB
    case '*': return numA * numB
    case '/': return numA / numB
    case '%': return numA % numB
    default: return numB
  }
}

export const validateDisplay = (value) => {
  const strValue = value.toString()
  
  if (strValue.length > 9) return 'ERROR'
  if (strValue.includes('-')) return 'ERROR'
  if (parseFloat(value) > 999999999) return 'ERROR'
  
  return strValue.slice(0, 9)
}

// Resto de funciones de ayuda