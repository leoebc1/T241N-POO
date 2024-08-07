import { Carro } from "./Carro";

export interface GaragemInterface{
    carros: Carro[]

    getCarros() : void
}