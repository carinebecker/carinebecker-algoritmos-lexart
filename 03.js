// Crie um algoritmo que gere o seguinte padrão de ID aleatório: XXXX-AAAA-BBBB-CCCC
// a. Onde os padrões XXXX, AAAA, BBBB e CCCC são alfanuméricos aleatórios
// b. O padrão é uma string: "XXXX-AAAA-BBBB-CCCC"
// c. O resultado deve ser armazenado em uma variável. Por exemplo:
// i. let id = generarId()
// ii. id vale ~ abc1-bb12-234a-bcc2

function generateCharacters(quantity) {
    return Math.random().toString(36).substr(2, quantity)
}

function generateId() {
    const length = 4
    let result = []
    for(let i = 0; i < length; i += 1) {
        const res = generateCharacters(4)
        result.push(res)
    }
    return result.join('-')
}

let id = generateId()

console.log(id)
