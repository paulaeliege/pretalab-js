// let nome = 'Paula'

// const dados = fetch('https://pokeapi.co/api/v2/pokemon/ditto')
// .then(resposta => resposta.json())
// .then(dados => console.log(dados))

// console.log(nome)

// function qualquer() {
//     return 2
// }

// console.log(qualquer())

// const curso = 'Pretalab'



let nome = 'Paula'

fetch('https://cep.awesomeapi.com.br/02713000')
.then(resposta => resposta.json())
.then(dados => console.log(dados.address_nome))

console.log(nome)

function qualquer() {
    
    return 2

}
    
console.log(qualquer())
    
const curso = 'Pretalab'

// document.getElementById('aula').innerHTML = 'Trabalhando com Dom no JS'

// const novaDiv = document.createElement('div')

// novaDiv.innerHTML = 'Div criada com Dom'

// document.getElementById('aula').appendChild(novaDiv)

