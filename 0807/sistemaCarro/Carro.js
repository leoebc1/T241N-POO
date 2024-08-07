"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carro = void 0;
var Carro = /** @class */ (function () {
    function Carro(nomeNovo, consumoNovo) {
        this.nomeCarro = nomeNovo;
        this.consumoCarro = consumoNovo;
        this.combustivelCarro = 50;
    }
    Carro.prototype.andar = function (distancia) {
        var combustivelGasto = distancia / this.consumoCarro;
        this.combustivelCarro -= combustivelGasto;
    };
    Carro.prototype.calcularCombustivelNecessario = function (distancia) {
        var combustivelGasto = distancia / this.consumoCarro;
        if (this.combustivelCarro - combustivelGasto < 0) {
            return false;
        }
        else {
            return true;
        }
    };
    Carro.prototype.obterGasolina = function () {
        return Number(this.combustivelCarro.toFixed(1));
    };
    Carro.prototype.getNome = function () {
        return this.nomeCarro;
    };
    Carro.prototype.adicionarGasolina = function (combustivelAdicionado) {
        this.combustivelCarro += combustivelAdicionado;
    };
    return Carro;
}());
exports.Carro = Carro;
