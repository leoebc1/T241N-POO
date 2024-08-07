import { Data } from "../../2907/exercicios/ex2";
import { Voo } from "./voo";

export interface VooInterface {
    constructor(numeroVoo: string, data: Data);
    proximoLivre(): number;
    verifica(cadeira: number): boolean;
    ocupa(cadeira: number): boolean;
    vagas(): number;
    getVoo(): string;
    getData(): Data;
    clone(): Voo;
}
