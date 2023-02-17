const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

// respostas aqui ⬇️
// a)
const primeiroAtor = filme.elenco[0]
console.log(primeiroAtor)

// b)
const ultimoAtor = filme.elenco[filme.elenco.length - 1]
console.log(ultimoAtor)

// c)
const todasAsTransmissoes = filme.transmissoesHoje
console.log(todasAsTransmissoes)

// d)
const exibirHorario = filme.transmissoesHoje[1]
console.log(exibirHorario)