import { Pessoa } from './Pessoa';

export class Fornecedor extends Pessoa {
    protected cnpj: string;

    constructor(usuario: string, senha: string, nome: string, stats: string, cnpj: string) {
        super(usuario, senha, nome, stats);
        this.cnpj = cnpj;
    }

    exibirInformacoes(): void {
        console.log(`Usuário: ${this.usuario}, Senha: ${this.senha}, Nome: ${this.nome}, Stats: ${this.stats}, CNPJ: ${this.cnpj}`);
    }


}
const fornecedor = new Fornecedor("Miro&Biro", "1234", "Miro & Biro LTDA", "Ativo", "12.135.546.0001-15",);
fornecedor.exibirInformacoes();
