// const linguagens = ['JS', 1, 2, 3, 'HTML', 'CSS']

// linguagens.forEach((codigo) => {
//     if (isNaN(codigo)) {
//         console.log(codigo)
//     }
// }) 



let cidades = ['Brasilia', 'Sao Paulo', 'Minas Gerais', 'Amapa', 'Tocantins']
// o sort ordena o array por ordem alfabetica e crescente.
cidades.sort()

console.log(cidades)
// o reverse inverte a ordem dos elementos em uma matriz.
cidades.reverse()

console.log(cidades)

// lista não altera o código.
const lista = ['Manaus', 'Floripa', 'Paraíba']

// concat concatena duas arrays ou mais. Não altera a matriz que já existe.
cidades = cidades.concat(lista)

console.log(cidades)
