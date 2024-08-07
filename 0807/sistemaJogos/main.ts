let reader = require('readline-sync')
import { Jogo, JogoDeTabuleiro, JogoEletronico } from "./Jogo"
import { BibliotecaDeJogos } from "./BibliotecaDeJogos"


let reddead = new Jogo("red", "aventura", 16)
let supermeatboy = new Jogo("super meat", "plataforma", 16)
let estante = new BibliotecaDeJogos()

estante.adicionarJogo(reddead)
estante.adicionarJogo(supermeatboy)
estante.removerJogo()
console.log(estante);
