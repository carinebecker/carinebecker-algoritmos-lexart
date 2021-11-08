// Crie um algoritmo que percorre uma array unidimensional contendo letras e números: [ “a”, 10, “b”, “hola”, 122, 15]
// a. Obtenha uma array contendo apenas as letras
// b. Obtenha uma array contendo apenas os números
// c. Obtenha o maior número da array acima

function filterArray(arr) {
    const strings = arr.filter((item) => typeof item === 'string')
    const numbers = arr.filter((item) => typeof item === 'number')
    const maxNumber = Math.max(...numbers)
    return {
        strings,
        numbers,
        maxNumber
    }
}

const array = [ 'a', 10, 'b', 'hola', 122, 15]
console.log(filterArray(array))
