function calculadoraBasica(num1, operador, num2) {
  switch (operador) {
    case '+':
      return num1 + num2
      break
    case '-':
      return num1 - num2
      break
    case '/':
      return num1 / num2
      break
    case '*':
      return num1 * num2
      break
    default:
      return 'Operação inválida'
  }
}

console.log(calculadoraBasica(5, '+', 2))
