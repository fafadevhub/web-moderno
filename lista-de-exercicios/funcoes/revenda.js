function lojaDeCarros(carro) {
  switch (carro) {
    case 'Hatch':
      return 'Compra efetuada com sucesso'
      break
    case 'Sedan':
    case 'Motocicleta':
    case 'Caminhonete':
      return 'Tem certeza que não prefere este modelo?'
      break
    default:
      return 'Não trabalhamos com este tipo de automóvel aqui'
  }
}

console.log(lojaDeCarros('Hatch'))
