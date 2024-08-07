var ask = require('readline-sync')

class Professor{
    nome: string
    idade: number
    anosExp: number 

    constructor(nome: string, idade: number, anosExp: number){
        this.nome = nome
        this.idade = idade
        this.anosExp = anosExp
    }

    getProfessor(): void{
        console.clear()
        console.log(`DADOS DO PROFESSOR\nNome: ${this.nome}\nIdade: ${this.idade} anos\nTempo de experiencia: ${this.anosExp} anos`)
        ask.question(`Tecle Enter para retornar`)
        console.clear()
    }

    setProfessor(): void{
        console.clear()
        let nomeUpdate = ask.question(`Digite o nome do professor: `)
        let idadeUpdate = ask.questionInt(`Digite a idade do professor: `)
        let anosExpUpdate = ask.questionInt(`Digite os anos de experiencia do professor: `)
        this.nome = nomeUpdate
        this.idade = idadeUpdate
        this.anosExp = anosExpUpdate
    }
}

class Escola{
    professor: Professor
    nome: string
    endereco: string
    numero: number

    constructor(professor: Professor, nome: string, endereco: string, numero:number){
        this.professor = professor
        this.nome = nome
        this.endereco = endereco 
        this.numero = numero
    }

    getEscola(): void{
        console.clear()
        console.log(`DADOS DA ESCOLA:\nNome do professor: ${this.professor.nome}\nNome da escola: ${this.nome}\nEndereco da escola: ${this.endereco} nro. ${this.numero}`)
        ask.question(`Tecle Enter para retornar`)
        console.clear()
    }

    setEscola(): void{
        console.clear()
        let opcao = ask.question(`Digite S para tambem editar as informacoes do professor e N para editar somente as informacoes da escola: `)
        if(opcao.toUpperCase() === 'S'){
            this.professor.setProfessor()
        } 
        console.clear()
        let nomeUpdate = ask.question(`Digite o novo nome da escola: `)
        let enderecoUpdate = ask.question('Digite o novo endereco da escola: ')
        let numeroUpdate = ask.questionInt('Digite o novo numero da escola: ')
        this.nome = nomeUpdate
        this.endereco = enderecoUpdate
        this.numero = numeroUpdate
    }
}


let professor = new Professor('a', 1, 1)
let escola = new Escola(professor, 'a', 'a', 1)
let menu: Boolean = true

while(menu){
    console.clear()
    console.log(`MENU\n1 - Criar Professor\n2 - Modificar Professor\n3 - Criar Escola\n4 - Modificar Escola\n5 - Visualizar Professor\n6 - Visualizar Escola\n7 - Visualizar Professor e Escola\n0 - Sair\n\n`)
    let opcao = ask.questionInt('Digite a opção desejada: ')
    switch (opcao) {
        case 1: 
            professor.setProfessor()
            break
        case 2:
            professor.setProfessor()
            break
        case 3:
            escola.setEscola()
            break
        case 4:
            escola.setEscola()
            break
        case 5:
            professor.getProfessor()
            break
        case 6:
            escola.getEscola()
            break
        case 7:
            escola.getEscola()
            professor.getProfessor()
            break
        default:
            !menu
            break
    }
}