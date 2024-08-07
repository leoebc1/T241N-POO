/*### Questão 1 - Notas e Médias Mágicas

Escreva uma classe cujos objetos representam alunos matriculados em uma
disciplina mágica. Cada objeto dessa classe deve guardar os seguintes dados do
aluno: matrícula, nome, 2 notas de prova e 1 nota de trabalho. Escreva os seguintes
métodos para esta classe: */

interface Aluno {
    constructor(matricula: number, nome: string, notaProva1: number, notaProva2: number, notaTrabalho: number);
    media(): number;
    final(): number;
}

class Aluno implements Aluno {
    matricula: number
    nome: string
    notaProva1: number
    notaProva2: number
    notaTrabalho: number

    constructor(matricula: number, nome: string, notaProva1: number, notaProva2: number, notaTrabalho: number){
        this.matricula = matricula
        this.nome = nome
        this.notaProva1 = notaProva1
        this.notaProva2 = notaProva2
        this.notaTrabalho = notaTrabalho
    }

    media(): number{
        return (this.notaProva1 + this.notaProva2)/2
    }

    final(): number{
        return (this.notaProva1 + this.notaProva2 + this.notaTrabalho)/3
    }


}