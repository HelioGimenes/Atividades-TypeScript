import { Pessoa } from './Pessoa';

export class FuncionarioProfessor extends Pessoa {
    constructor(
        nome: string, 
        CPF: string, 
        endereço: string, 
        estadoCivil: string, 
        public salario: number, 
        public titulação: string
    ) {
        super(nome, CPF, endereço, estadoCivil);
    }

    public exibirInformacoes(): void {
        console.log(`Nome: ${this.nome}, CPF: ${this.CPF}, Endereço: ${this.endereço}, Estado Civil: ${this.estadoCivil}, Salário: ${this.salario}, Titulação: ${this.titulação}`);
    }
}

const FuncionarioProf = new FuncionarioProfessor("Biro","012.345.678-90","Av.Blablabla","Casado",1850,"Mestre");
FuncionarioProf.exibirInformacoes();
