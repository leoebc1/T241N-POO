"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpresaDev = void 0;
var junior_1 = require("./junior");
var pleno_1 = require("./pleno");
var senior_1 = require("./senior");
var EmpresaDev = /** @class */ (function () {
    function EmpresaDev() {
        this.funcionarios = [];
    }
    EmpresaDev.prototype.empresar = function () {
        for (var _i = 0, _a = this.funcionarios; _i < _a.length; _i++) {
            var funcionario = _a[_i];
            if (funcionario instanceof junior_1.Junior) {
                funcionario.resolverBugs();
            }
            else if (funcionario instanceof pleno_1.Pleno) {
                funcionario.criarFeatures();
            }
            else if (funcionario instanceof senior_1.Senior) {
                funcionario.administraEquipe();
            }
        }
    };
    EmpresaDev.prototype.adicionarFuncionario = function (funcionario) {
        this.funcionarios.push(funcionario);
    };
    return EmpresaDev;
}());
exports.EmpresaDev = EmpresaDev;
