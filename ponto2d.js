/*Crie uma classe TypeScript chamada `Ponto2D` que represente um ponto no plano cartesiano. Além dos atributos identificados, a classe deve oferecer os seguintes membros:

a) Construtores sobrecarregados que permitam a inicialização do ponto:

i) Construtor padrão (sem parâmetros) na origem do plano 2D.

ii) Construtor com dois parâmetros `x` e `y` do tipo `number` para definir as coordenadas do ponto.

iii) Construtor que aceita outro objeto do tipo `Ponto2D` para criar um ponto com as mesmas coordenadas.

b) Métodos de acesso (getter/setter) para os atributos `x` e `y`.

c) Métodos sobrecarregados para movimentação do ponto com os mesmos parâmetros indicados para os construtores.

d) Método `equals(outroPonto: Ponto2D): boolean` para comparação semântica dos pontos.

e) Método `toString(): string` para representação do objeto como string.

f) Método `distancia(outroPonto: Ponto2D): number` para calcular a distância do ponto atual até outro ponto.

g) Método `clone(): Ponto2D` que cria e retorna uma cópia do ponto.*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Ponto2D = /** @class */ (function () {
    function Ponto2D() {
        this.x = 0;
        this.y = 0;
    }
    ;
    Ponto2D.prototype.getX = function () {
        return this.x;
    };
    Ponto2D.prototype.setX = function (value) {
        this.x = value;
    };
    Ponto2D.prototype.getY = function () {
        return this.y;
    };
    Ponto2D.prototype.setY = function (value) {
        this.y = value;
    };
    Ponto2D.prototype.mover = function (novoX, novoY) {
        this.setX(novoX);
        this.setY(novoY);
    };
    Ponto2D.prototype.compara = function (outroPonto) {
        return (this.getX() === outroPonto.getX() && this.getY() === outroPonto.getY());
    };
    Ponto2D.prototype.distancia = function (outroPonto) {
        var dx = this.x - outroPonto.getX();
        var dy = this.y - outroPonto.getY();
        return Math.sqrt(dx * dx + dy * dy);
    };
    Ponto2D.prototype.toString = function () {
        return "Ponto2D(x: ".concat(this.x, ", y: ").concat(this.y, ")");
    };
    Ponto2D.prototype.clone = function () {
        return new Ponto2DComCoordenadas(this.x, this.y);
    };
    return Ponto2D;
}());
var Ponto2DComCoordenadas = /** @class */ (function (_super) {
    __extends(Ponto2DComCoordenadas, _super);
    function Ponto2DComCoordenadas(x, y) {
        var _this = _super.call(this) || this;
        _this.x = x;
        _this.y = y;
        return _this;
    }
    return Ponto2DComCoordenadas;
}(Ponto2D));
var Ponto2DDeOutroPonto = /** @class */ (function (_super) {
    __extends(Ponto2DDeOutroPonto, _super);
    function Ponto2DDeOutroPonto(ponto) {
        var _this = _super.call(this) || this;
        _this.x = ponto.getX();
        _this.y = ponto.getY();
        return _this;
    }
    return Ponto2DDeOutroPonto;
}(Ponto2D));
var ponto1 = new Ponto2DComCoordenadas(3, 4);
var ponto2 = new Ponto2DDeOutroPonto(ponto1);
console.log(ponto1.toString());
console.log(ponto2.toString());
ponto1.mover(5, 4);
console.log(ponto1.distancia(ponto2));
console.log(ponto2.clone().toString());
