function ValorAleatorio(min, max) {
  const valor = Math.random() * (max - min) + min
  return Math.floor(valor)
}

let opcao = -1

do {
  // executa uma vez os códigos dentro do escopo, e depois analisa a condição
  opcao = ValorAleatorio(-1, 10)
  console.log('A opção escolhida foi '.concat(opcao))
} while (opcao != -1)
