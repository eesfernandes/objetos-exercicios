const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
}

// a)
const pokemon1Copia = {
    ...pokemon1,
    nome: 'Squirtle',
    tipo: 'Água',
}

// b) Adicionando propriedade "Ataques" no objeto Original
pokemon1.ataques = []

// c) Criando um objeto de ataque e adicionando no array ataques que está no objeto principal (Original)
const ataque = {
    nome: "Investida",
    dano: 40,
    tipo: "Normal",
    precisao: 100
}
pokemon1.ataques.push(ataque)

// d) Adicionando a propriedade "Ataques" no objeto Copia
// TIRAR DUVIDA DE COMO FAZER
pokemon1Copia.ataques = [...pokemon1.ataques]

// e) Adicionando mais um objeto de poder no array de ataques NO OBJETO ORIGINAL
pokemon1.ataques.push({nome: 'Folha Navalha', dano: 45, tipo: 'Gama', precisao: 100})

// f) Adicionando mais um objeto de poder no array de ataques NO OBJETO COPIA
pokemon1Copia.ataques.push({nome: 'Jato de Água', dano: 40, tipo: 'Água', precisao: 100})

console.log('Objeto Original: ', pokemon1)
console.log('Objeto Copia: ', pokemon1Copia)



