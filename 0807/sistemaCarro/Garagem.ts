import { GaragemInterface } from "./GaragemInterface";
import { Carro } from "./Carro";

export class Garagem implements GaragemInterface{
    carros: Carro[]

    constructor(){
        this.carros = []
    }


    // Função que lista todos os carros seguido de seu combustivel
    getCarros(): void {
        if (this.carros.length !== 0){
            let i: number = 1
            for (let carro of this.carros) {
                console.log(`${i})${carro.getNome()} - ${carro.obterGasolina()}l\n`)
                i++
            }
        }
    }
}