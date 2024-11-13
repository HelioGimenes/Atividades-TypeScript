import { Pessoa2 } from "./Pessoa2";

export class PessoaFisica extends Pessoa2 {
    private cpf: string;
    private cnh: string;


    constructor(nome: string, idade: number, cpf: string, cnh: string) {
        super(nome, idade);
        this.cpf = cpf;
        this.cnh = cnh;
    }


    public getCpf(): string {
        return this.cpf;
    }

    public getCnh(): string {
        return this.cnh;
    }


    public hashCode(): number {
        let hash = 0;
        for (let i = 0; i < this.cpf.length; i++) {
            const char = this.cpf.charCodeAt(i);
            hash = (hash << 5) - hash + char;
            hash |= 0;
        }
        return hash;
    }


    public equals(obj: PessoaFisica): boolean {
        return this.cpf === obj.getCpf();
    }
}
