import { Pessoa } from './Pessoa';

export class Aluno extends Pessoa {
    constructor(
        nome: string, 
        CPF: string, 
        endereço: string, 
        estadoCivil: string, 
        public turma: string
    ) {
        super(nome, CPF, endereço, estadoCivil);
    }

    public exibirInformacoes(): void {
        console.log(`Nome: ${this.nome}, CPF: ${this.CPF}, Endereço: ${this.endereço}, Estado Civil: ${this.estadoCivil}, Turma: ${this.turma}`);
    }
}

const aluno = new Aluno("Miro","012.345.678-90","Av.Blablabla","Casado","A");
aluno.exibirInformacoes();
