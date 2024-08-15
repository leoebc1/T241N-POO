/*## 3. Número Complexo

Crie uma classe TypeScript chamada `NumeroComplexo` que represente um número complexo. A classe deve fornecer as seguintes operações:

a) Construtor que recebe valores das partes real e imaginária.

b) Métodos getter/setter para os atributos da parte real e imaginária.

c) Método `somar(outroComplexo: NumeroComplexo): NumeroComplexo` que recebe outro número complexo e o adiciona ao número complexo atual. (a+bi) + (c+di) = (a+c) + (b+d)i

d) Método `subtrair(outroComplexo: NumeroComplexo): NumeroComplexo` que recebe outro número complexo e o subtrai do número complexo atual. (a+bi) - (c+di) = (a-c) + (b-d)i

e) Método `multiplicar(outroComplexo: NumeroComplexo): NumeroComplexo` que recebe outro número complexo e o multiplica ao número complexo atual. (a+bi) * (c+di) = (ac - bd) + (ad + bc)i

f) Método `dividir(outroComplexo: NumeroComplexo): NumeroComplexo` que recebe outro número complexo e o divide pelo número complexo atual. (a+bi) / (c+di) = (ac + bd) / (c² + d²) + (bc - ad) / (c² + d²)i

g) Método `equals(outroComplexo: NumeroComplexo): boolean` para comparação semântica dos números complexos.

h) Método `toString(): string` que gera e retorna a representação em string do número complexo.

i) Método `modulo(): number` que retorna o módulo do número complexo.*/
var NumeroComplexo = /** @class */ (function () {
    function NumeroComplexo(parteReal, parteImaginaria) {
        this.parteReal = parteReal;
        this.parteImaginaria = parteImaginaria;
    }
    NumeroComplexo.prototype.getParteReal = function () {
        return this.parteReal;
    };
    NumeroComplexo.prototype.setParteReal = function (parteReal) {
        this.parteReal = parteReal;
    };
    NumeroComplexo.prototype.getParteImaginaria = function () {
        return "".concat(this.parteImaginaria, "i");
    };
    NumeroComplexo.prototype.setParteImaginaria = function (parteImaginaria) {
        var valor = parteImaginaria.slice(0, -1);
        this.parteImaginaria = parseInt(valor, 10);
    };
    NumeroComplexo.prototype.somar = function (outroComplexo) {
        var somaReal = this.parteReal + outroComplexo.getParteReal();
        var imaginariaExtraida = this.separaParteImaginaria(outroComplexo.getParteImaginaria());
        var somaImaginaria = this.parteImaginaria + imaginariaExtraida;
        return this.toStringComParametros(somaReal, somaImaginaria);
    };
    NumeroComplexo.prototype.subtrair = function (outroComplexo) {
        var subtracaoReal = this.parteReal - outroComplexo.getParteReal();
        var imaginariaExtraida = this.separaParteImaginaria(outroComplexo.getParteImaginaria());
        var subtracaoImaginaria = this.parteImaginaria - imaginariaExtraida;
        return this.toStringComParametros(subtracaoReal, subtracaoImaginaria);
    };
    NumeroComplexo.prototype.dividir = function (outroComplexo) {
        var divisaoReal = this.parteReal / outroComplexo.getParteReal();
        var imaginariaExtraida = this.separaParteImaginaria(outroComplexo.getParteImaginaria());
        var divisaoImaginaria = this.parteImaginaria / imaginariaExtraida;
        return this.toStringComParametros(divisaoReal, divisaoImaginaria);
    };
    NumeroComplexo.prototype.multiplicar = function (outroComplexo) {
        var multiplicacaoReal = this.parteReal * outroComplexo.getParteReal();
        var imaginariaExtraida = this.separaParteImaginaria(outroComplexo.getParteImaginaria());
        var multiplicacaoImaginaria = this.parteImaginaria * imaginariaExtraida;
        return this.toStringComParametros(multiplicacaoReal, multiplicacaoImaginaria);
    };
    NumeroComplexo.prototype.equals = function (outroComplexo) {
        var comparacaoReal = this.parteReal === outroComplexo.getParteReal();
        var comparacaoImaginaria = this.parteImaginaria === this.separaParteImaginaria(outroComplexo.getParteImaginaria());
        return (comparacaoReal && comparacaoImaginaria);
    };
    NumeroComplexo.prototype.toString = function () {
        if (this.parteImaginaria > 0) {
            return "".concat(this.parteReal, " + ").concat(this.parteImaginaria, "i");
        }
        else if (this.parteImaginaria < 0) {
            return "".concat(this.parteReal, " ").concat(this.parteImaginaria, "i");
        }
        else {
            return "".concat(this.parteReal);
        }
    };
    NumeroComplexo.prototype.modulo = function () {
        return Math.sqrt(this.parteReal * this.parteReal + this.parteImaginaria * this.parteImaginaria);
    };
    NumeroComplexo.prototype.toStringComParametros = function (valorReal, valorImaginario) {
        if (valorImaginario > 0) {
            return "".concat(valorReal, " + ").concat(valorImaginario, "i");
        }
        else if (valorImaginario < 0) {
            return "".concat(valorReal, " ").concat(valorImaginario, "i");
        }
        else {
            return "".concat(valorReal);
        }
    };
    NumeroComplexo.prototype.separaParteImaginaria = function (valor) {
        var retorno = valor.slice(0, -1);
        return parseInt(valor, 10);
    };
    return NumeroComplexo;
}());
var z1 = new NumeroComplexo(3, 8);
var z2 = new NumeroComplexo(2, 6);
console.log(z1.somar(z2));
console.log(z1.subtrair(z2));
console.log(z1.dividir(z2));
console.log(z1.multiplicar(z2));
console.log(z1.modulo());
