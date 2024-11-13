
export class Pessoa2 {
    private nome: string;
    private idade: number;


    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }


    public getNome(): string {
        return this.nome;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public getIdade(): number {
        return this.idade;
    }

    public setIdade(idade: number): void {
        this.idade = idade;
    }
}



import { PessoaFisica } from "./PessoaFisica";
import { PessoaJuridica } from "./PessoaJuridica";

const pessoaFisica = new PessoaFisica("João", 30, "123.456.789-00", "123456789");
const pessoaJuridica = new PessoaJuridica("Empresa X", 10, "12.345.678/0001-00", "Razão Social X");

console.log(`Pessoa Física: ${pessoaFisica.getNome()}, CPF: ${pessoaFisica.getCpf()}`);
console.log(`Pessoa Jurídica: ${pessoaJuridica.getNome()}, CNPJ: ${pessoaJuridica.getCnpj()}`);
