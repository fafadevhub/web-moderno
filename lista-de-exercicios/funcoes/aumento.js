function planoSalarial(plano, salario) {
  switch (plano) {
    case 'A':
      return Number(salario + salario * 0.1)
        .toFixed(2)
        .replace('.', ',')
      break
    case 'B':
      return Number(salario + salario * 0.15)
        .toFixed(2)
        .replace('.', ',')
      break
    case 'C':
      return Number(salario + salario * 0.2)
        .toFixed(2)
        .replace('.', ',')
      break
    default:
      return 'Plano Inválido, favor escolha entre o A, B, ou C'
  }
}

console.log(planoSalarial('a', 1880))
