"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
var ask = require('readline-sync');
var Pessoa = /** @class */ (function () {
    function Pessoa(nomeNovo, sobrenomeNovo, paiNovo, maeNovo, rgNovo, cpfNovo, nascimentoNovo) {
        this.nome = nomeNovo;
        this.sobrenome = sobrenomeNovo;
        this.nomeDoPai = paiNovo;
        this.nomeDaMae = maeNovo;
        this.numeroRg = rgNovo;
        this.numeroCpf = cpfNovo;
        this.dataDeNascimento = nascimentoNovo;
    }
    Pessoa.prototype.getPessoa = function () {
        console.clear();
        console.log("\n        Nome: ".concat(this.nome, "\n        Sobrenome: ").concat(this.sobrenome, "\n        Nome do pai: ").concat(this.nomeDoPai, "\n        Nome da mae: ").concat(this.nomeDaMae, "\n        RG: ").concat(this.numeroRg, "\n        CPF: ").concat(this.numeroCpf, "\n        Nascimento: ").concat(this.dataDeNascimento, "\n        "));
        ask.question('TECLE ENTER PARA CONTINUAR...');
    };
    return Pessoa;
}());
exports.Pessoa = Pessoa;
