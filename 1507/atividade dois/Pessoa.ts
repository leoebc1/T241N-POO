let ask = require('readline-sync')

export interface PessoaInterface {
    nome: string
    sobrenome: string
    nomeDoPai: string
    nomeDaMae: string
    numeroRg: number
    numeroCpf: number
    dataDeNascimento: number

    getPessoa(): void
}

export class Pessoa implements PessoaInterface{
    nome: string
    sobrenome: string
    nomeDoPai: string
    nomeDaMae: string
    numeroRg: number
    numeroCpf: number
    dataDeNascimento: number

    constructor(nomeNovo: string, sobrenomeNovo: string, paiNovo: string, maeNovo: string, rgNovo: number, cpfNovo: number, nascimentoNovo: number){
        this.nome = nomeNovo
        this.sobrenome = sobrenomeNovo
        this.nomeDoPai = paiNovo
        this.nomeDaMae = maeNovo
        this.numeroRg = rgNovo
        this.numeroCpf = cpfNovo
        this.dataDeNascimento = nascimentoNovo
    }

    getPessoa(): void{
        console.clear()
        console.log(`
        Nome: ${this.nome}
        Sobrenome: ${this.sobrenome}
        Nome do pai: ${this.nomeDoPai}
        Nome da mae: ${this.nomeDaMae}
        RG: ${this.numeroRg}
        CPF: ${this.numeroCpf}
        Nascimento: ${this.dataDeNascimento}
        `)
        ask.question('TECLE ENTER PARA CONTINUAR...')
    }

}