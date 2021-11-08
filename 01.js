// Crie um algoritmo que percorre uma array unidimensional contendo letras e números: [ “a”, 10, “b”, “hola”, 122, 15]
// a. Obtenha uma array contendo apenas as letras
// b. Obtenha uma array contendo apenas os números
// c. Obtenha o maior número da array acima

function getStrings(arr) {
    const strings = arr.filter((item) => typeof item === 'string')
    return strings
}

function getNumbers(arr) {
    const numbers = arr.filter((item) => typeof item === 'number')
    return numbers
}

function getMaxNumber(arr) {
    const numbers = arr.filter((item) => typeof item === 'number')
    const maxNumber = Math.max(...numbers)
    return maxNumber
}

const array = [ 'a', 10, 'b', 'hola', 122, 15]
console.log('Strings: ', getStrings(array))
console.log('Numbers: ', getNumbers(array))
console.log('Max number: ', getMaxNumber(array))
