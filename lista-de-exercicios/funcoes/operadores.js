function operadores(num1 = 1, num2 = 1) {
    return `
    soma = ${num1 + num2}
    subtração = ${num1 - num2}
    multiplicação = ${num1 * num2}
    divisão = ${num1 / num2}
    `
}

console.log(operadores(20, 25))