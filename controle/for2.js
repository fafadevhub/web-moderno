const notas = [5.1, 7.2, 6.3, 7.4]

for (let i in notas) {
  console.log(i /*index*/, notas[i] /*valor no index*/)
}

const pessoa = {
  nome: 'Fabricio',
  idade: 18,
  peso: 80
}

for (let atributo in pessoa) {
  console.log(atributo /*chave*/, pessoa[atributo] /*Valor*/)
}
