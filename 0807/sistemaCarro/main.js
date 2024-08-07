"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ask = require('readline-sync');
var Garagem_1 = require("./Garagem");
var Carro_1 = require("./Carro");
// Declaração do objeto garagem
var garagem = new Garagem_1.Garagem;
// Variavel que mantém o menu rodando
var menu = true;
// Loop do menu
while (menu) {
    console.clear();
    var opcao = ask.questionInt("Digite uma opcao:\n1)Inserir novo carro\n2)Andar com algum carro\n3)Abastecer algum carro\n4)Sair\n\n");
    console.clear();
    switch (opcao) {
        // Inserir novo carro
        case 1:
            var nomeNovo = ask.question("Digite o nome novo do carro: ");
            var consumoNovo = ask.questionInt("Digite o consumo de litros por Km de ".concat(nomeNovo, ": "));
            var carro = new Carro_1.Carro(nomeNovo, consumoNovo);
            garagem.carros.push(carro);
            break;
        // Andar com algum carro
        case 2:
            console.clear();
            garagem.getCarros();
            var opcaoCarro = ask.questionInt('Qual carro voce quer que ande? ');
            var distanciaAndada = ask.questionInt('Quanto voce quer que este carro ande? ');
            if (garagem.carros[opcaoCarro - 1].calcularCombustivelNecessario(distanciaAndada)) {
                garagem.carros[opcaoCarro - 1].andar(distanciaAndada);
                console.clear();
                ask.question("".concat(garagem.carros[opcaoCarro - 1].getNome(), " andou ").concat(distanciaAndada, " quilometros, e agora esta com ").concat(garagem.carros[opcaoCarro - 1].obterGasolina(), " litros de combustivel. Aperte ENTER para continuar..."));
            }
            else {
                ask.question("".concat(garagem.carros[opcaoCarro - 1].getNome(), " nao possui combustivel suficiente pra fazer esta viagem."));
            }
            break;
        // Abastecer algum carro
        case 3:
            console.clear();
            garagem.getCarros();
            var opcaoCarroAbastecer = ask.questionInt('Qual carro voce quer abastecer? ');
            var quantidadeAbastecida = ask.questionInt('Quanto voce quer abastecer? ');
            garagem.carros[opcaoCarroAbastecer - 1].adicionarGasolina(quantidadeAbastecida);
            console.clear();
            ask.question("".concat(garagem.carros[opcaoCarroAbastecer - 1].getNome(), " agora esta com ").concat(garagem.carros[opcaoCarroAbastecer - 1].obterGasolina(), " litros de combustivel. Aperte ENTER para continuar..."));
            break;
        // Sair
        case 4:
            menu = false;
            break;
        default:
            console.log('Digita direito o bagulho maluco');
    }
}
