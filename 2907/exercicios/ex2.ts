/*### Questão 2 - Calendário Mágico

Escreva uma classe Data cuja instância (objeto) represente uma data mágica. Esta
classe deverá dispor dos seguintes métodos: */


export interface Data {
    constructor(dia: number, mes: number, ano: number);
    compara(outraData: Data): boolean;
    getDia(): number;
    getMes(): number;
    getMesExtenso(): string;
    getAno(): number;
    isBissexto(): boolean;
    clone(): Data;
}

export class Data implements Data {
    dia: number
    mes: number
    ano: number

    constructor(dia: number, mes: number, ano: number){
        this.dia = dia
        this.mes = mes
        this.ano = ano
    }

    compara(outraData: Data): boolean{
        let retorno: boolean

        if(this.dia === outraData.getDia()){
            if(this.mes === outraData.getMes()){
                if(this.ano === outraData.getAno()){
                    retorno = true
                }else{
                    retorno = false
                }
            } else {
                retorno = false
            }
        } else {
            retorno = false
        }

        return retorno
    }

    getDia(): number {
        return this.dia
    }

    getMes(): number {
        return this.mes
    }

    getMesExtenso(): string {
        let mesRetorno
        switch (this.mes){
            case 1: 
                mesRetorno = 'Janeiro' 
            break;
            case 2:
                mesRetorno = 'Fevereiro'
            break;
            case 3: 
                mesRetorno = 'Marco'
            break;
            case 4:
                mesRetorno = 'Abril'
            break;
            case 5:
                mesRetorno = 'Maio'
            break;
            case 6:
                mesRetorno = 'Junho'
            break;
            case 7:
                mesRetorno = 'Julho'
            break;
            case 8:
                mesRetorno = 'Agosto'
            break;
            case 9:
                mesRetorno = 'Setembro'
            break;
            case 10:
                mesRetorno = 'Outubro'
            break;
            case 11:
                mesRetorno = 'Novembro'
            break;
            case 12:
                mesRetorno = 'Dezembro'
            break;
        }
        return mesRetorno
    }

    getAno(): number {
        return this.ano
    }

    isBissexto(): boolean {
        return (this.ano % 4 === 0 && this.ano % 100 !== 0) || (this.ano % 400 === 0)
    }
}