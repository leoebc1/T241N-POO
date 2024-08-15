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

class Ponto2D{
    protected x: number
    protected y: number

    public constructor(){
        this.x = 0
        this.y = 0
    };

    public getX(): number {
        return this.x
    }

    private setX(value: number): void {
        this.x = value
    }

    public getY(): number {
        return this.y
    }

    private setY(value: number): void {
        this.y = value;
    }

    public mover(novoX: number, novoY: number){
        this.setX(novoX)
        this.setY(novoY)
    }

    public compara(outroPonto: Ponto2D): boolean{
        return (this.getX() === outroPonto.getX() && this.getY() === outroPonto.getY())
    }

    public distancia(outroPonto: Ponto2D): number {
        const dx = this.x - outroPonto.getX()
        const dy = this.y - outroPonto.getY()
        return Math.sqrt(dx * dx + dy * dy)
    }

    public toString(): string {
        return `Ponto2D(x: ${this.x}, y: ${this.y})`
    }

    clone(): Ponto2D {
        return new Ponto2DComCoordenadas(this.x, this.y)
    }
}

class Ponto2DComCoordenadas extends Ponto2D {
    constructor(x: number, y: number) {
        super()
        this.x = x
        this.y = y
    }
}

class Ponto2DDeOutroPonto extends Ponto2D {
    constructor(ponto: Ponto2D) {
        super()
        this.x = ponto.getX()
        this.y = ponto.getY()
    }
}

const ponto1 = new Ponto2DComCoordenadas(3, 4)
const ponto2 = new Ponto2DDeOutroPonto(ponto1)

console.log(ponto1.toString())
console.log(ponto2.toString())
ponto1.mover(5, 4)
console.log(ponto1.distancia(ponto2))
console.log(ponto2.clone().toString())