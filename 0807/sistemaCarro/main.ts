let ask = require('readline-sync')
import { Garagem } from "./Garagem";
import { Carro } from "./Carro";

// Declaração do objeto garagem
let garagem: Garagem = new Garagem

// Variavel que mantém o menu rodando
let menu: boolean = true

// Loop do menu
while(menu){
    console.clear()
    let opcao: number = ask.questionInt("Digite uma opcao:\n1)Inserir novo carro\n2)Andar com algum carro\n3)Abastecer algum carro\n4)Sair\n\n")
    console.clear()
    
    switch (opcao){
        
        // Inserir novo carro
        case 1: 
            let nomeNovo: string = ask.question(`Digite o nome novo do carro: `)
            let consumoNovo: number = ask.questionInt(`Digite o consumo de litros por Km de ${nomeNovo}: `)
            let carro: Carro = new Carro(nomeNovo, consumoNovo)
            garagem.carros.push(carro)
        break

        // Andar com algum carro
        case 2:
            console.clear()
            garagem.getCarros()
            let opcaoCarro: number = ask.questionInt('Qual carro voce quer que ande? ')
            let distanciaAndada: number = ask.questionInt('Quanto voce quer que este carro ande? ')
            if(garagem.carros[opcaoCarro-1].calcularCombustivelNecessario(distanciaAndada)){
                garagem.carros[opcaoCarro-1].andar(distanciaAndada)
                console.clear()
                ask.question(`${garagem.carros[opcaoCarro-1].getNome()} andou ${distanciaAndada} quilometros, e agora esta com ${garagem.carros[opcaoCarro-1].obterGasolina()} litros de combustivel. Aperte ENTER para continuar...`)
            } else {
                ask.question(`${garagem.carros[opcaoCarro-1].getNome()} nao possui combustivel suficiente pra fazer esta viagem. Pressione ENTER para continuar`)
            }
        break

        // Abastecer algum carro
        case 3:
            console.clear()
            garagem.getCarros()
            let opcaoCarroAbastecer: number = ask.questionInt('Qual carro voce quer abastecer? ')
            let quantidadeAbastecida: number = ask.questionInt('Quanto voce quer abastecer? ')
            garagem.carros[opcaoCarroAbastecer-1].adicionarGasolina(quantidadeAbastecida)
            console.clear()
            ask.question(`${garagem.carros[opcaoCarroAbastecer-1].getNome()} agora esta com ${garagem.carros[opcaoCarroAbastecer-1].obterGasolina()} litros de combustivel. Aperte ENTER para continuar...`)
        break

        // Sair
        case 4:
            menu = false
        break

        default:
            console.log('Digita direito o bagulho maluco')
    }
}


