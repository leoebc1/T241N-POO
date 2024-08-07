import { Pessoa } from "./Pessoa";

let ask = require('readline-sync')

console.clear()
let nome = ask.question(`Nome: `)
console.clear()
let sobrenome = ask.question(`Sobrenome: `)
console.clear()
let nomeDoPai = ask.question(`Nome do pai: `)
console.clear()
let nomeDaMae = ask.question(`Nome da mae: `)
console.clear()
let rg = ask.question(`RG: `)
console.clear()
let cpf = ask.question(`CPF: `)
console.clear()
let nasc = ask.question(`Nascimento(DDMMAAAA): `)

let pessoa = new Pessoa(nome, sobrenome, nomeDoPai, nomeDaMae, rg, cpf, nasc)
pessoa.getPessoa()
console.clear()

