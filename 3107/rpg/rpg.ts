export class Mago{
    public conjurarMagia(): void{
        console.log(`Mago conjura magia e tal`)
    }
}

export class Guerreiro{
    public atacar(): void{
        console.log(`O guerreiro da um murro`)
    }
}

export class Criatura{
    public conjurarMagia(): void{
        console.log(`Criatura magica conjura feitiço`)
    }
}

export class TimeAventura{
    public membros: (Mago | Guerreiro | Criatura) [] = []

    public enfrentarDesafio(): void{
        console.log(`Time de aventura se preparando para o desafio!`)

        this.membros.forEach(jogador => {
            if(jogador instanceof Mago){
                jogador.conjurarMagia()
            }
        })
    }
}