import { Pessoa } from './Pessoa';

export class Cliente extends Pessoa {
    protected cpf: string;
    protected lastLogin: string;

    constructor(usuario: string, senha: string, nome: string, stats: string, cpf: string, lastLogin: string) {
        super(usuario, senha, nome, stats);
        this.cpf = cpf;
        this.lastLogin = lastLogin;
    }

    exibirInformacoes(): void {
        console.log(`Usuário: ${this.usuario}, Senha: ${this.senha}, Nome: ${this.nome}, Stats: ${this.stats}, CPF: ${this.cpf}, Ultimo Acesso: ${this.lastLogin}`);
    }


}
const cliente = new Cliente("Miro", "1234", "Osvaldo", "Ativo", "123.456.789-14", "13/11/2024");
cliente.exibirInformacoes();