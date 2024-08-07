import { Data } from "../../2907/exercicios/ex2";
import { VooInterface } from "./vooInterface";

export class Voo {
    numeroVoo: string
    data: Data
    lugares: boolean [] = []

    constructor(numerovoo: string, data: Data){
        this.numeroVoo = numerovoo
        this.data = data
        for(let i = 0; i < 100; i++){
            this.lugares[i] = false
        }
    }

    public proximoLivre(): number {
        let assentoLivre: number = -1;
        
        for (let i = 0; i < this.lugares.length; i++) {
            if (!this.lugares[i]) {
                assentoLivre = i; 
                break; 
            }
        }
        return assentoLivre + 1;
    }

    public verifica (cadeira: number): boolean{
        return !this.lugares[cadeira-1]
    }

    public ocupa (cadeira: number): boolean{
        if(this.verifica(cadeira)){
            this.lugares[cadeira] = true
            return true
        } else {
            return false
        }
    }

    public vagas(): number{
        let contador: number = 0;
        for (let i = 0; i < this.lugares.length; i++) {
            if (!this.lugares[i]) {
                contador ++; 
            }
        }
        return contador + 1;
    }
}

let data1 = new Data(22, 1, 2025)

let voo1 = new Voo(`15`, data1)