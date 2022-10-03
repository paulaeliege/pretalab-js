class Aluna {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
        this.notas = [8, 9, 8]
    }

    pegarMedia() {
        console.log(this.calcularMedia())
    }

    calcularMedia() {
        let somarNotas = 0
        this.notas.forEach(notas => {
            somarNotas += notas
        })

        return somarNotas / this.notas.length
    }
}

const aluna = new Aluna('Paula', 47)

aluna.pegarMedia()