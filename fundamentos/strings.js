const escola = "Cod3r"


console.log(escola.charAt(4))//diz qual o caractere que está no index indicado
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3))// diz qual o código unicode no index indicado da string
console.log(escola.indexOf("3"))//diz qual o index da string indicada

console.log(escola.substring(1))//diz a string a partir do index 1
console.log(escola.substring(0, 3))//diz a string a partir do index 0 ao 3, por exemplo

console.log("Escola ".concat(escola).concat("!"))//concatena
console.log("Escola" + escola + "!")
console.log(escola.replace(3, "e"))//coloca no lugar de um certo index outra string

console.log(escola.split(""))// divide a string a partir de um indicados, uma virgula, ou espaços, e etc.