"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Garagem = void 0;
var Garagem = /** @class */ (function () {
    function Garagem() {
        this.carros = [];
    }
    // Função que lista todos os carros seguido de seu combustivel
    Garagem.prototype.getCarros = function () {
        if (this.carros.length !== 0) {
            var i = 1;
            for (var _i = 0, _a = this.carros; _i < _a.length; _i++) {
                var carro = _a[_i];
                console.log("".concat(i, ")").concat(carro.getNome(), " - ").concat(carro.obterGasolina(), "l\n"));
                i++;
            }
        }
    };
    return Garagem;
}());
exports.Garagem = Garagem;
