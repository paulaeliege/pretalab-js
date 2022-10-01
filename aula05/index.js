// const senha = "123456"
// let senhaCerta = false

//     if(!senhaCerta){
//         const senhaDigitada = prompt('Digite sua senha!')
//         console.log(senhaDigitada)
//         if(senhaDigitada === senha){
//             senhaCerta = true
//         }
//     }


const senha = "123456"
const senhaCerta = false
let senhaDigitada = prompt('Digite sua senha')

while (senhaDigitada != senha) {
    console.log(senhaDigitada)
    senhaDigitada = prompt('digite a senha novamente')
}

console.log("parabens, vc digitou a senha certa")