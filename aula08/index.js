// function bemVinda (){
//     const mensagem = document.createElement('h1')
//     mensagem.innerHTML = 'Bem vinda'
//     document.querySelector('#mensagem').appendChild(mensagem)
// }

// function outraFuncao() {
//     alert('Saindo da div')
// }



function bemVinda() {

    if (!document.querySelector('#bemVinda')) {
        const mensagem = document.createElement('h1')
        mensagem.innerHTML = 'Bem vinda Paula Eliege'
        mensagem.id = 'bemVinda'
        document.querySelector('#mensagem').appendChild(mensagem)
    }
}

function mudaCor() {
    let corFonte = document.querySelector('#bemVinda').style.color
    console.log(corFonte)
    if (corFonte == '' || corFonte == 'rgb9(0, 0, 0)') {
        document.querySelector('#bemVinda').style.color = '#A020F0'
    } else {
        document.querySelector('#bemVinda').style.color = '#000000'
    }
}



