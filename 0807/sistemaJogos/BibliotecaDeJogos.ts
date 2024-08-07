let reader = require('readline-sync')
import { Jogo } from "./Jogo"

export class BibliotecaDeJogos{
    public jogos: Jogo[]

    constructor(){
        this.jogos = []
    }

    public adicionarJogo(jogo: Jogo): void{
        this.jogos.push(jogo)
    }

    public removerJogo(): void{
        this.listarJogos()
        let tituloExcluir = reader.question("Qual título deseja excluir: ")
        this.jogos = this.jogos.filter(objJogo => objJogo.tituloJogo !== tituloExcluir)
    }

    public listarJogos(): void{
        console.log(this.jogos)
    }
}