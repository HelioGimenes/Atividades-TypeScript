import promptSync from 'prompt-sync';
const prompt = promptSync();

class Livro {
  titulo: string;
  autor: string;
  anoPublicacao: number;
  private disponivel: boolean;

  constructor(titulo: string, autor: string, anoPublicacao: number, disponivel: boolean) {
    this.titulo = titulo;
    this.autor = autor;
    this.anoPublicacao = anoPublicacao;
    this.disponivel = disponivel;
  }

  emprestar(): void {
    if (this.disponivel) {
      this.disponivel = false;
      console.log("Livro emprestado com sucesso.");
    } else {
      console.log("Livro não disponível.");
    }
  }

  devolver(): void {
    if (!this.disponivel) {
      this.disponivel = true;
      console.log("Livro devolvido com sucesso.");
    } else {
      console.log("O livro já está disponível.");
    }
  }

  exibirInformacoes(): void {
    console.log(`Título: ${this.titulo}, Autor: ${this.autor}, Ano: ${this.anoPublicacao}, Disponível: ${this.disponivel}`);
  }
}


const livros = [
  new Livro('Senhor dos Aneis', 'J.R.R. Tolkien', 1954, true),
  new Livro('O Hobbit', 'J.R.R. Tolkien', 1937, true),
  new Livro('As Cronicas de Narnia', 'C.S. Lewis', 1950, true)
];

function exibirOpcoes() {
  console.log("\nEscolha uma opção:");
  console.log("1. Exibir informações dos livros");
  console.log("2. Emprestar um livro");
  console.log("3. Devolver um livro");
  console.log("4. Sair");
}

function interagirComLivros() {
  let opcao = '';

  while (opcao !== '4') {
    exibirOpcoes();
    opcao = prompt('Escolha a opção: ');

    switch (opcao) {
      case '1':
        livros.forEach(livro => livro.exibirInformacoes());
        break;
      case '2':

        const livroEmprestar = prompt('Digite o título do livro que deseja emprestar: ');
        const livroParaEmprestar = livros.find(livro => livro.titulo.toLowerCase() === livroEmprestar.toLowerCase());
        if (livroParaEmprestar) {
          livroParaEmprestar.emprestar();
        } else {
          console.log("Livro não encontrado.");
        }
        break;
      case '3':

        const livroDevolver = prompt('Digite o título do livro que deseja devolver: ');
        const livroParaDevolver = livros.find(livro => livro.titulo.toLowerCase() === livroDevolver.toLowerCase());
        if (livroParaDevolver) {
          livroParaDevolver.devolver();
        } else {
          console.log("Livro não encontrado.");
        }
        break;
      case '4':
        console.log("Saindo...");
        break;
      default:
        console.log("Opção inválida. Tente novamente.");
        break;
    }
  }
}

interagirComLivros();
