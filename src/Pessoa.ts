export class Pessoa {
    protected usuario: string;
    protected senha: string;
    protected nome: string;
    protected stats: string;

    constructor(usuario: string, senha: string, nome: string, stats: string) {
        this.usuario = usuario;
        this.senha = senha;
        this.nome = nome;
        this.stats = stats;
    }
}
