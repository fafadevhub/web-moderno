function bancaDeFrutas(fruta) {
  switch (fruta) {
    case 'Maçã':
      return 'Não vendemos esta fruta aqui'
      break
    case 'Kiwi':
      return 'Estamos com escassez de kiwis'
      break
    case 'Melancia':
      return 'Aqui está, são 3 reais o quilo'
      break
    default:
      return 'Erro, por favor digite uma das opções: Maçã, Kiwi, Melancia'
  }
}

console.log(bancaDeFrutas('Maçã'))
