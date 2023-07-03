const valores = [1.2, 3.2, 4.3, 7.5]//array
console.log(valores[0], valores[3])
console.log(valores[4])// retorna undefined porque não tem valor definido no index 4

valores[4] = 10 //o index 4 recebe o valor 10
console.log(valores)

valores.push({id: 3}, false, null, "teste") //função push adicionar os itens no fim da lista
console.log(valores)

console.log(valores.pop())//função pop remove o ultimo item da lista
delete valores[0] //delete, exclui o valor do index indicado
console.log(valores) 

console.log(typeof valores)