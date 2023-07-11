//Função em JS é First-Class Object (citizens)
//Higher-Order Function

//criar de forma literal
function fun1() {}

//criar função em uma variável
const fun2 = function () {}

//criar função em Array
const array = [
  function (a, b) {
    return a + b
  },
  fun2
]

console.log(array[0](2, 5))

//Armazenar uma função como atributo de objeto
const obj = {}
obj.falar = function () {
  return 'Epa!'
}
console.log(obj.falar())

//Passar uma função como parametro
function run(fun) {
  fun()
}

run(function () {
  console.log('Executando...')
})

// uma função pode retorna/conter uma função

function soma(a, b) {
  return function (c) {
    console.log(a + b + c)
  }
}

soma(2, 3)(5)
