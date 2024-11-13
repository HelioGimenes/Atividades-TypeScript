import { Pessoa } from './Pessoa';

export class Funcionario extends Pessoa {
    protected cpf: string;
    protected dataAdmissao: string;
    protected lastLogin: string;

    constructor(usuario: string, senha: string, nome: string, stats: string, cpf: string, dataAdmissao: string, lastLogin: string) {
        super(usuario, senha, nome, stats);
        this.cpf = cpf;
        this.dataAdmissao = dataAdmissao;
        this.lastLogin = lastLogin;
    }

    exibirInformacoes(): void {
        console.log(`Usuário: ${this.usuario}, Senha: ${this.senha}, Nome: ${this.nome}, Stats: ${this.stats}, CPF: ${this.cpf},Data Admissão: ${this.dataAdmissao}, Ultimo Acesso: ${this.lastLogin}`);
    }


}
const funcionario = new Funcionario("Biro", "1234", "Armando", "Ativo", "123.456.789-14", "13/11/2020", "13/11/2024");
funcionario.exibirInformacoes();