/*1. Contador

Crie uma classe TypeScript chamada `Contador` que encapsule um valor usado para contagem de itens ou eventos. A classe deve oferecer os seguintes métodos:

a) `zerar()`: Reseta o valor do contador para zero.

b) `incrementar()`: Incrementa o valor do contador em uma unidade.

c) `valor(): number`: Um método que retorna o valor atual do contador.*/

class Contador{
    private variavelContador: number

    public zerar(): boolean{
        try {
            this.variavelContador = 0
            return true
        } catch (error) {
            console.log(`Error: ${error}`)
            return false
        }
        
    }

    public incrementar(): boolean{
        try {
            this.variavelContador += 1
            return true
        } catch (error) {
            console.log(`Error: ${error}`)
            return false
        }
    }

    public valor(): number{
        return this.variavelContador
    }
}