// let i = 0;

// while (i < 11){
//     console.log("7 x " + i + " = " + 7*i );
//     i++;
// } 


// let salario = 1000;

// while (salario < 5000){
//     salario += 500;

//     console.log("O salário é R$" + salario.toFixed(2));
// }


// const alunas = [
//     { aluno: 'Amanda', nota: 10},
//     { aluno: 'Simara', nota: 8},
//     { aluno: 'Nathy', nota: 9},
//     { aluno: 'Vera', nota: 10},
// ];

// let index = 0;
// let somaDasNotas = 0;
// let totalAlunas = alunas.length;

// do {
//     somaDasNotas += alunas[index].nota;

//     index++;
// } while(index < totalAlunas);

// let media = somaDasNotas / totalAlunas;

// console.log(media);

const lista = [
    { lista: "Arroz", quantidade: 4 },
    { lista: "Feijão", quantidade: 3 },
    { lista: "Açucar", quantidade: 2 },
    { lista: "Óleo", quantidade: 2 },
    { lista: "Café", quantidade: 2 },

];

let index = 0;
let somaDeProdutos = 0;
let totalLista = lista.length;

do {
    somaDeProdutos += lista[index].quantidade;

    index++;

} while (index < totalLista);

let total = somaDeProdutos / totalLista;

console.log(somaDeProdutos);



