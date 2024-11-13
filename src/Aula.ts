
import { Conteudo } from "./Conteudo";

export class Aula {
    nome: string;
    conteudos: Conteudo[];

    constructor(nome: string, conteudos: Conteudo[]) {
        this.nome = nome;
        this.conteudos = conteudos;
    }
}
