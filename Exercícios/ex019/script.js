let num = [5, 3, 4, 2, 1]

console.log("--------===Informações sobre o ARRAY ===--------")
console.log(`O array normal tem essa ordem`)
console.log(num)
console.log("")

num.sort()
console.log(`O array em ordem crescente tem essa ordem`)
console.log(num)
console.log("")

console.log(`O menor valor deste array é: ${num[0]}`)
console.log(`O maior valor deste array é: ${Math.max(...num)}`)