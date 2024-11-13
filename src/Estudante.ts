import promptSync from 'prompt-sync';
const prompt = promptSync();

class Estudante {
    nome: string;
    idade: number;
    private matricula: string;
    private notas: number[] = [];

    constructor(nome: string, idade: number, matricula: string) {
        this.nome = nome;
        this.idade = idade;
        this.matricula = matricula;
    }

    adicionarNota(nota: number): void {
        if (nota < 0 || nota > 10) {
            console.log("Nota inválida. A nota deve estar entre 0 e 10.");
        } else {
            this.notas.push(nota);
            console.log(`Nota ${nota} adicionada com sucesso.`);
        }
    }

    calcularMedia(): number {
        const somaNotas = this.notas.reduce((acc, nota) => acc + nota, 0);
        return this.notas.length > 0 ? somaNotas / this.notas.length : 0;
    }

    exibirInformacoes(): void {
        console.log(`Nome: ${this.nome}, Idade: ${this.idade}, Matrícula: ${this.matricula}`);
    }
}


function cadastrarAluno() {
    const nome = prompt('Digite o nome do estudante: ');
    const idade = parseInt(prompt('Digite a idade do estudante: '), 10);
    const matricula = prompt('Digite a matrícula do estudante: ');

    const estudante = new Estudante(nome, idade, matricula);


    for (let i = 1; i <= 3; i++) {
        let notaValida = false;
        while (!notaValida) {
            const nota = parseFloat(prompt(`Digite a nota ${i} (0-10): `));
            if (isNaN(nota) || nota < 0 || nota > 10) {
                console.log("Nota inválida. A nota deve ser um número entre 0 e 10.");
            } else {
                estudante.adicionarNota(nota);
                notaValida = true;
            }
        }
    }


    estudante.exibirInformacoes();
    console.log(`Média: ${estudante.calcularMedia()}`);
}


function main() {
    let continuarCadastro = true;
    while (continuarCadastro) {
        cadastrarAluno();
        const continuar = prompt('Deseja cadastrar outro aluno? (S/N): ').toUpperCase();
        if (continuar === 'N') {
            continuarCadastro = false;
        }
    }
    console.log('Fim do programa.');
}

main(); 
