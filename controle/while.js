function valorAleatorio(max, min) {
  const valor = Math.random() * (max - min) + min
  return Math.floor(valor)
}

let opcao = 0

while (opcao != -1) {
  opcao = valorAleatorio(-1, 10)
  console.log('A opção escolhida foi '.concat(opcao))
}

console.log('Fim')
