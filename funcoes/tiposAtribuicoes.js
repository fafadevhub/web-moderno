console.log(soma(2, 5))

//function declaration
function soma(x, y) {
  return x + y
}

//expressões dão erro, na tentativa de hoisting
//function expression
const sub = function (x, y) {
  return x - y
}

//named function expresion
const mult = function mult(x, y) {
  return x * y
}
