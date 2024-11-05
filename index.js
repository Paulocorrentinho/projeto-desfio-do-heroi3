const entradaDeDados = require("prompt-sync")()

class MeuHeroi {
    constructor(nome, idade, tipo) { 
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar() {
        let ataque

        if (this.tipo === "mago") {
            ataque = "magia"
        } else if (this.tipo === "guerreiro") {
            ataque = "espada"
        } else if (this.tipo === "monge") {
            ataque = "artes marciais"
        } else {
            ataque = "shuriken"
        }

        console.log("O " + this.tipo + " atacou usando " + ataque + ".")
    }
}

function criarHeroi() {
    let nome = entradaDeDados("Digite o nome do Herói: ")
    let idade = parseInt(entradaDeDados("Digite a idade do Herói: "))
    let digitoVerificador
    let tipoHeroi

    do {
        console.log("Opções de Herois")
        console.log("\n1. Mago\n2. Guerreiro\n3. Monge\n4. Ninja\n")
        let tipo = entradaDeDados("Escolha o tipo do Herói: ")
        digitoVerificador = 1

        switch (tipo) {
            case "1":
                tipoHeroi = "mago"
                break
            case "2":
                tipoHeroi = "guerreiro"
                break
            case "3":
                tipoHeroi = "monge"
                break
            case "4":
                tipoHeroi = "ninja"
                break
            default:
                console.log("Opção inválida. Digite novamente.")
                digitoVerificador = 0
                break
        }
    } while (digitoVerificador === 0)

    const heroi = new MeuHeroi(nome, idade, tipoHeroi)
    console.clear()
    console.log("Você criou o herói de nome " + heroi.nome + ", com a idade de " + heroi.idade + " anos , do tipo " + heroi.tipo + ".\n")
    heroi.atacar()
}

criarHeroi()