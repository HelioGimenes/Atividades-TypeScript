// PessoaJuridica.ts
import { Pessoa2 } from "./Pessoa2";

export class PessoaJuridica extends Pessoa2 {
    private cnpj: string;
    private razaoSocial: string;


    constructor(nome: string, idade: number, cnpj: string, razaoSocial: string) {
        super(nome, idade);
        this.cnpj = cnpj;
        this.razaoSocial = razaoSocial;
    }


    public getCnpj(): string {
        return this.cnpj;
    }

    public getRazaoSocial(): string {
        return this.razaoSocial;
    }

    public setRazaoSocial(razaoSocial: string): void {
        this.razaoSocial = razaoSocial;
    }
}
