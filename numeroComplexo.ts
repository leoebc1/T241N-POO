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

class NumeroComplexo{
    private parteReal: number
    private parteImaginaria: number

    constructor(parteReal:number, parteImaginaria:number){
        this.parteReal = parteReal
        this.parteImaginaria = parteImaginaria
    }

    public getParteReal(): number{
        return this.parteReal
    }

    public setParteReal(parteReal: number): void{
        this.parteReal = parteReal
    }

    public getParteImaginaria(): string{
        return `${this.parteImaginaria}i`
    }

    public setParteImaginaria(parteImaginaria: string): void{
        let valor = parteImaginaria.slice(0, -1)
        this.parteImaginaria = parseInt(valor, 10)
    }

    public somar(outroComplexo: NumeroComplexo): string{
        let somaReal = this.parteReal + outroComplexo.getParteReal()
        let imaginariaExtraida = this.separaParteImaginaria(outroComplexo.getParteImaginaria())
        let somaImaginaria = this.parteImaginaria + imaginariaExtraida
        return this.toStringComParametros(somaReal, somaImaginaria)
    }

    public subtrair(outroComplexo: NumeroComplexo): string{
        let subtracaoReal = this.parteReal - outroComplexo.getParteReal()
        let imaginariaExtraida = this.separaParteImaginaria(outroComplexo.getParteImaginaria())
        let subtracaoImaginaria = this.parteImaginaria - imaginariaExtraida
        return this.toStringComParametros(subtracaoReal, subtracaoImaginaria)
    }

    public dividir(outroComplexo: NumeroComplexo): string{
        let divisaoReal = this.parteReal / outroComplexo.getParteReal()
        let imaginariaExtraida = this.separaParteImaginaria(outroComplexo.getParteImaginaria())
        let divisaoImaginaria = this.parteImaginaria / imaginariaExtraida
        return this.toStringComParametros(divisaoReal, divisaoImaginaria)
    }

    public multiplicar(outroComplexo: NumeroComplexo): string{
        let multiplicacaoReal = this.parteReal * outroComplexo.getParteReal()
        let imaginariaExtraida = this.separaParteImaginaria(outroComplexo.getParteImaginaria())
        let multiplicacaoImaginaria = this.parteImaginaria * imaginariaExtraida
        return this.toStringComParametros(multiplicacaoReal, multiplicacaoImaginaria)
    }

    public equals(outroComplexo: NumeroComplexo): boolean{
        let comparacaoReal: boolean = this.parteReal === outroComplexo.getParteReal()
        let comparacaoImaginaria: boolean = this.parteImaginaria === this.separaParteImaginaria(outroComplexo.getParteImaginaria())

        return (comparacaoReal && comparacaoImaginaria)
    }

    public toString(): string{
        if(this.parteImaginaria > 0) {
            return `${this.parteReal} + ${this.parteImaginaria}i`
        } else if (this.parteImaginaria < 0) {
            return `${this.parteReal} ${this.parteImaginaria}i`
        } else {
            return `${this.parteReal}`
        }
    }

    public modulo(): number {
        return Math.sqrt(this.parteReal * this.parteReal + this.parteImaginaria * this.parteImaginaria)
    }

    public toStringComParametros(valorReal: number, valorImaginario: number): string{
        if(valorImaginario > 0) {
            return `${valorReal} + ${valorImaginario}i`
        } else if (valorImaginario < 0) {
            return `${valorReal} ${valorImaginario}i`
        } else {
            return `${valorReal}`
        }
    }

    private separaParteImaginaria(valor: string): number{
        let retorno = valor.slice(0, -1)
        return parseInt(valor, 10)
    }

}


let z1 = new NumeroComplexo(3, 8)
let z2 = new NumeroComplexo(2, 6)
console.log(z1.somar(z2))
console.log(z1.subtrair(z2))
console.log(z1.dividir(z2))
console.log(z1.multiplicar(z2))
console.log(z1.modulo())
