export interface CarroInterface {
    nomeCarro: string
    consumoCarro: number
    combustivelCarro: number

    andar(distancia: number): void
    obterGasolina(): number
    adicionarGasolina(combustivelAdicionado: number): void
}