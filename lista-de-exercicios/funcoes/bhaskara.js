function baskara(a, b, c) {
  const delta = b * b - 4 * a * c
  const xPositivo = (-b + Math.sqrt(delta)) / (2 * a)
  const xNegativo = (-b - Math.sqrt(delta)) / (2 * a)

  return [xPositivo, xNegativo]
}

console.log(baskara(1, 5, -14))
