"use strict";
/*### Questão 2 - Calendário Mágico

Escreva uma classe Data cuja instância (objeto) represente uma data mágica. Esta
classe deverá dispor dos seguintes métodos: */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Data = void 0;
var Data = /** @class */ (function () {
    function Data(dia, mes, ano) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
    Data.prototype.compara = function (outraData) {
        var retorno;
        if (this.dia === outraData.getDia()) {
            if (this.mes === outraData.getMes()) {
                if (this.ano === outraData.getAno()) {
                    retorno = true;
                }
                else {
                    retorno = false;
                }
            }
            else {
                retorno = false;
            }
        }
        else {
            retorno = false;
        }
        return retorno;
    };
    Data.prototype.getDia = function () {
        return this.dia;
    };
    Data.prototype.getMes = function () {
        return this.mes;
    };
    Data.prototype.getMesExtenso = function () {
        var mesRetorno;
        switch (this.mes) {
            case 1:
                mesRetorno = 'Janeiro';
                break;
            case 2:
                mesRetorno = 'Fevereiro';
                break;
            case 3:
                mesRetorno = 'Marco';
                break;
            case 4:
                mesRetorno = 'Abril';
                break;
            case 5:
                mesRetorno = 'Maio';
                break;
            case 6:
                mesRetorno = 'Junho';
                break;
            case 7:
                mesRetorno = 'Julho';
                break;
            case 8:
                mesRetorno = 'Agosto';
                break;
            case 9:
                mesRetorno = 'Setembro';
                break;
            case 10:
                mesRetorno = 'Outubro';
                break;
            case 11:
                mesRetorno = 'Novembro';
                break;
            case 12:
                mesRetorno = 'Dezembro';
                break;
        }
        return mesRetorno;
    };
    Data.prototype.getAno = function () {
        return this.ano;
    };
    Data.prototype.isBissexto = function () {
        return (this.ano % 4 === 0 && this.ano % 100 !== 0) || (this.ano % 400 === 0);
    };
    return Data;
}());
exports.Data = Data;
