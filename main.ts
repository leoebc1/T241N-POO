import { NumeroComplexo } from "./numeroComplexo";
import { Contador } from "./contador";
import { Ponto2D, Ponto2DComCoordenadas, Ponto2DDeOutroPonto} from "./ponto2d";
let ask = require('readline-sync')

let menuRodando: boolean = true

while(menuRodando){
    let opcaoUsuario: number 
    console.clear()
    console.log(`
    1 - Contador
    2 - Ponto 2D
    3 - Numero Complexo`)
    opcaoUsuario = ask.questionInt(`Qual atividade voce quer testar? `)
    switch(opcaoUsuario){
        case 1:
            console.clear()
            let inicioContador = ask.questionInt(`Para testar este exercicio vamos criar um novo contador. Em qual numero este contador deve iniciar? `)
            let contador1 = new Contador(inicioContador)
            let menuContador: boolean = true
            while(menuContador){
                console.clear()
                let opcaoUsuarioContador = ask.questionInt(`
                Contador atualmente em: ${contador1.valor()}
                1 - Zerar
                2 - Incrementar
                0 - Voltar
                Qual funcionalidade voce quer testar? `)
                switch(opcaoUsuarioContador){
                    case 1: 
                        contador1.zerar()
                        console.clear()
                        ask.question(`O contador foi zerado. Tecle ENTER para prosseguir.`)
                    break;
                    case 2: 
                        contador1.incrementar()
                        console.clear()
                        ask.question(`O contador foi incrementado em 1: Tecle ENTER para prosseguir`)
                    break;
                    case 0:
                        menuContador = false
                    break;
                    default: 
                        console.clear()
                        ask.question(`Opcao invalida. Tecle ENTER para continuar.`)
                    break;
                }
            }
        break;
        case 2: 
        console.clear()
        console.log(`Para testar o Ponto 2D vamos utilizar dois objetos Ponto2D`)
        let x: number = ask.questionInt(`Digite a coordenada X do primeiro ponto: `)
        let y: number = ask.questionInt('Digite a coordenada Y do primeiro ponto: ')
        let ponto1 = new Ponto2DComCoordenadas(x,y)
        console.clear()
        console.log(`Para testar o Ponto 2D vamos utilizar dois objetos Ponto2D`)
        x = ask.question('Digite a coordenada X do segundo ponto: ')
        y = ask.question(`Digite a coordenda Y do segundo ponto: `)
        let ponto2 = new Ponto2DComCoordenadas(x, y)
        let menuPonto2D: boolean = true
        while(menuPonto2D){
            console.clear()
            console.log(`
            1 - Mover um dos pontos
            2 - Comparar os dois pontos
            3 - Calcular a distancia dos dois pontos
            4 - Verificar os dois pontos por extenso
            0 - Voltar`)
            let opcaoUsuarioPonto: number = ask.questionInt(`Qual funcionalidade voce quer testar? `)
            switch(opcaoUsuarioPonto){
                case 1:
                    console.clear()
                    let pontoParaMover = ask.questionInt(`
                    1 - ${ponto1.toString()}
                    2 - ${ponto2.toString()}
                    Qual ponto voce quer mover? `)
                    console.clear()
                    let xNovo: number = ask.questionInt(`Digite a nova coordenada X: `)
                    let yNovo: number = ask.questionInt(`Digite a nova coordenada Y: `)
                    if(pontoParaMover === 1){
                        ponto1.mover(xNovo, yNovo)
                    } else if (pontoParaMover === 2) {
                        ponto2.mover(xNovo, yNovo)
                    } else {
                        console.clear()
                        console.log(`Infelizmente o ponto que voce escolheu nao existe.`)
                        ask.question(`Tecle ENTER para continuar.`)
                    }
                break;
                case 2: 
                    console.clear()
                    if(ponto1.compara(ponto2)){
                        console.log(`Os dois pontos sao iguais`)
                    } else {
                        console.log(`Os dois pontos sao diferentes`)
                    }
                    ask.question(`Tecle ENTER para continuar.`)
                break;
                case 3:
                    console.clear()
                    console.log(`A distancia entre os dois pontos é ${ponto1.distancia(ponto2)}`)
                    ask.question(`Tecle ENTER para continuar.`)
                break;
                case 4:
                    console.clear()
                    console.log(`
                    1 - ${ponto1.toString()}
                    2 - ${ponto2.toString()}`)
                    ask.question(`Tecle ENTER para continuar.`)
                break;
                case 0:
                    menuPonto2D = false
                break;
                default:
                    console.clear()
                    console.log(`Opcao invalida.`)
                    ask.question(`Tecle ENTER para continuar.`)
            }
        }
        break;
        case 3:
            console.clear()
            console.log(`Para testar esta atividade vamos criar dois numeros complexos`)
            let parteReal: number = ask.questionInt(`Digite a parte real do primeiro numero complexo: `)
            let parteImaginaria: number = ask.questionInt('Digite a parte imaginaria do primeiro numero complexo, sem o i: ')
            let complexo1 = new NumeroComplexo(parteReal,parteImaginaria)
            console.clear()
            parteReal = ask.questionInt(`Digite a parte real do segundo numero complexo: `)
            parteImaginaria = ask.questionInt('Digite a parte imaginaria do segundo numero complexo, sem o i: ')
            let complexo2 = new NumeroComplexo(parteReal,parteImaginaria)
            let menuComplexo: boolean = true
            while(menuComplexo){
                console.clear()
                let opcaoUsuarioComplexo: number = ask.questionInt(`
                1 - Somar
                2 - Subtrair
                3 - Dividir
                4 - Multiplicar
                5 - Comparar
                6 - Modulo
                7 - Por extenso
                0 - Sair
                Qual funcionalidade voce quer testar? `)
                console.clear()
                switch(opcaoUsuarioComplexo){
                    case 1: 
                        console.log(`
                        ${complexo1.toString()}    +    ${complexo2.toString()}    =     ${complexo1.somar(complexo2)}`)
                        ask.question(`Tecle ENTER para continuar.`)
                    break;
                    case 2:
                        console.log(`
                        ${complexo1.toString()}    -    ${complexo2.toString()}    =     ${complexo1.subtrair(complexo2)}`)
                        ask.question(`Tecle ENTER para continuar.`)
                    break;
                    case 3:
                        console.log(`
                        ${complexo1.toString()}    /    ${complexo2.toString()}    =     ${complexo1.dividir(complexo2)}`)
                        ask.question(`Tecle ENTER para continuar.`)
                    break;
                    case 4:
                        console.log(`
                        ${complexo1.toString()}    *    ${complexo2.toString()}    =     ${complexo1.multiplicar(complexo2)}`)
                        ask.question(`Tecle ENTER para continuar.`)
                    break;
                    case 5: 
                        if(complexo1.equals(complexo2)){
                            console.log(`Os numeros complexos sao iguais`)
                        } else {
                            console.log(`Os numeros complexos sao diferentes`)
                        }
                        ask.question(`Tecle ENTER para continuar.`)
                    break;
                    case 6:
                        console.log(`
                        Modulo de ${complexo1.toString()}: ${complexo1.modulo()}
                        Modulo de ${complexo2.toString()}: ${complexo2.modulo()}`)
                        ask.question(`Tecle ENTER para continuar.`)
                    break;
                    case 7:
                        console.log(`
                        Primeiro numero complexo: ${complexo1.toString()}
                        Segundo numero complexo: ${complexo2.toString()}
                        `)
                        ask.question(`Tecle ENTER para continuar.`)
                    break;
                    case 0:
                        menuComplexo = false
                    break;
                    default:
                        ask.question('Opcao invalida. Tecle ENTER para continuar.')
                    break;
                }
            }
        break;
        default:
            ask.question('Opcao invalida. Tecle ENTER para continuar.')
        break;
    }
}
