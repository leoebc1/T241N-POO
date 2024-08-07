import { Junior } from "./junior";
import { Pleno } from "./pleno";
import { Senior } from "./senior";

export class EmpresaDev{
    funcionarios: (Junior | Pleno | Senior) [] = []

    empresar(): void {
        for (let funcionario of this.funcionarios){
            if(funcionario instanceof Junior){
                funcionario.resolverBugs()
            } else if(funcionario instanceof Pleno){
                funcionario.criarFeatures()
            } else if(funcionario instanceof Senior){
                funcionario.administraEquipe()
            }
        }
    }

    adicionarFuncionario(funcionario: (Junior | Pleno | Senior)): void {
        this.funcionarios.push(funcionario)
    }
}