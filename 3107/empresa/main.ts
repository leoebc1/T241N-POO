import { Junior } from "./junior";
import { Pleno } from "./pleno";
import { Senior } from "./senior";
import { EmpresaDev } from "./empresaDev";

let empresa = new EmpresaDev
let juniorNovo = new Junior
let plenoNovo = new Pleno
let seniorNovo = new Senior

empresa.adicionarFuncionario(juniorNovo)
empresa.adicionarFuncionario(plenoNovo)
empresa.adicionarFuncionario(seniorNovo)
empresa.empresar()