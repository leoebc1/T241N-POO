import { CarroInterface } from "./CarroInterface";

export class Carro implements CarroInterface {
    nomeCarro: string
    consumoCarro: number
    combustivelCarro: number

    constructor (nomeNovo: string, consumoNovo: number){
        this.nomeCarro = nomeNovo
        this.consumoCarro = consumoNovo
        this.combustivelCarro = 50
    }

    andar(distancia: number): void{
        let combustivelGasto = distancia/this.consumoCarro
        this.combustivelCarro -= combustivelGasto
    }

    calcularCombustivelNecessario(distancia: number): boolean{
        let combustivelGasto: number = distancia/this.consumoCarro
        if(this.combustivelCarro - combustivelGasto < 0){
            return false
        }else {
            return true
        }
    }

    obterGasolina(): number {
        return Number(this.combustivelCarro.toFixed(1))
    }

    getNome(): string {
        return this.nomeCarro
    }

    adicionarGasolina(combustivelAdicionado: number): void{
        this.combustivelCarro += combustivelAdicionado
    }
}