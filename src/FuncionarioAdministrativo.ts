import { Pessoa } from './Pessoa';

export class FuncionarioAdministrativo extends Pessoa {
    constructor(
        nome: string, 
        CPF: string, 
        endereço: string, 
        estadoCivil: string, 
        public salario: number, 
        public setor: string
    ) {
        super(nome, CPF, endereço, estadoCivil);
    }

    public exibirInformacoes(): void {
        console.log(`Nome: ${this.nome}, CPF: ${this.CPF}, Endereço: ${this.endereço}, Estado Civil: ${this.estadoCivil}, Salário: ${this.salario}, Setor: ${this.setor}`);
    }
}

const FuncionarioADM = new FuncionarioAdministrativo("Biro","012.345.678-90","Av.Blablabla","Casado",2850,"RH");
FuncionarioADM.exibirInformacoes();
