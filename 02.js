// Crie um hashmap (ou um objeto simples em JavaScript) que contenha as funções elementares de adição, subtração, multiplicação e divisão.
// a. Leve em consideração que a divisão não deve permitir dividendo 0
// b. A função sum permite um array como parâmetro de entrada e adiciona todos
// os seus elementos.
// c. A função de subtração permite um array como parâmetro de entrada e
// subtrai todos os seus elementos.
// d. Função de multiplicação - Idem
// e. A função de divisão aceita dois parâmetros: a e b.

const operations = {
    sum: (arr) => {
        return arr.reduce((acc, atual) => acc + atual)
    },
    sub: (arr) => {
        return arr.reduce((acc, atual) => acc - atual)
    },
    mult: (arr) => {
        return arr.reduce((acc, atual) => acc * atual)
    },
    div: (a, b) => {
        if (b === 0) return
        return a / b
    }
}

console.log(operations.sum([2, 2, 2]))
console.log(operations.sub([2, 2, 2]))
console.log(operations.mult([2, 2, 2]))
console.log(operations.div(8, 2))
