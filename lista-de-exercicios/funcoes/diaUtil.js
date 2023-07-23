function diaUtil(dia) {
  switch (dia) {
    case 'segunda':
    case 'terça':
    case 'quarta':
    case 'quinta':
    case 'sexta':
      return 'Dia Útil'
      break
    case 'sabado':
    case 'domingo':
      return 'fim de semana'
      break
    default:
      return 'dia inválido'
  }
}

console.log(diaUtil('segunda'))
