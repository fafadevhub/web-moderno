function soma(x, y) {
  return x + y
}

const imprimirSoma = (a, b, operacao = soma) => {
  console.log(operacao(a, b))
}
imprimirSoma(10, 5)
imprimirSoma(3, 4, (x, y) => {
  return x - y
})
