let isAtivo = true
console.log(isAtivo)

isAtivo = false
console.log(isAtivo)

console.log("Os verdadeiros ...")
console.log(!!3)
console.log(!!-1)
console.log(!!" ")
console.log(!!"Texto")
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log("os falsos...")
console.log(!!0)
console.log(!!"")
console.log(!!null)
console.log(!!undefined)
console.log(!!NaN)
console.log(!!(isAtivo == false))

console.log("pra finalizar")
console.log(("" || null || 0 || "epa"))