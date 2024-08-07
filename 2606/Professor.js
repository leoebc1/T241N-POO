var ask = require('readline-sync');
var Professor = /** @class */ (function () {
    function Professor(nome, idade, anosExp) {
        this.nome = nome;
        this.idade = idade;
        this.anosExp = anosExp;
    }
    Professor.prototype.getProfessor = function () {
        console.clear();
        console.log("DADOS DO PROFESSOR\nNome: ".concat(this.nome, "\nIdade: ").concat(this.idade, " anos\nTempo de experiencia: ").concat(this.anosExp, " anos"));
        ask.question("Tecle Enter para retornar");
        console.clear();
    };
    Professor.prototype.setProfessor = function () {
        console.clear();
        var nomeUpdate = ask.question("Digite o nome do professor: ");
        var idadeUpdate = ask.questionInt("Digite a idade do professor: ");
        var anosExpUpdate = ask.questionInt("Digite os anos de experiencia do professor: ");
        this.nome = nomeUpdate;
        this.idade = idadeUpdate;
        this.anosExp = anosExpUpdate;
    };
    return Professor;
}());
var Escola = /** @class */ (function () {
    function Escola(professor, nome, endereco, numero) {
        this.professor = professor;
        this.nome = nome;
        this.endereco = endereco;
        this.numero = numero;
    }
    Escola.prototype.getEscola = function () {
        console.clear();
        console.log("DADOS DA ESCOLA:\nNome do professor: ".concat(this.professor.nome, "\nNome da escola: ").concat(this.nome, "\nEndereco da escola: ").concat(this.endereco, " nro. ").concat(this.numero));
        ask.question("Tecle Enter para retornar");
        console.clear();
    };
    Escola.prototype.setEscola = function () {
        console.clear();
        var opcao = ask.question("Digite S para tambem editar as informacoes do professor e N para editar somente as informacoes da escola: ");
        if (opcao.toUpperCase() === 'S') {
            this.professor.setProfessor();
        }
        console.clear();
        var nomeUpdate = ask.question("Digite o novo nome da escola: ");
        var enderecoUpdate = ask.question('Digite o novo endereco da escola: ');
        var numeroUpdate = ask.questionInt('Digite o novo numero da escola: ');
        this.nome = nomeUpdate;
        this.endereco = enderecoUpdate;
        this.numero = numeroUpdate;
    };
    return Escola;
}());
var professor = new Professor('a', 1, 1);
var escola = new Escola(professor, 'a', 'a', 1);
var menu = true;
while (menu) {
    console.clear();
    console.log("MENU\n1 - Criar Professor\n2 - Modificar Professor\n3 - Criar Escola\n4 - Modificar Escola\n5 - Visualizar Professor\n6 - Visualizar Escola\n7 - Visualizar Professor e Escola\n0 - Sair\n\n");
    var opcao = ask.questionInt('Digite a opção desejada: ');
    switch (opcao) {
        case 1:
            professor.setProfessor();
            break;
        case 2:
            professor.setProfessor();
            break;
        case 3:
            escola.setEscola();
            break;
        case 4:
            escola.setEscola();
            break;
        case 5:
            professor.getProfessor();
            break;
        case 6:
            escola.getEscola();
            break;
        case 7:
            escola.getEscola();
            professor.getProfessor();
            break;
        default:
            !menu;
            break;
    }
}
