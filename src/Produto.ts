import promptSync from 'prompt-sync';
const prompt = promptSync();

class Produto {
  nome: string;
  private preco: number;
  private quantidade: number;

  constructor(nome: string, preco: number, quantidade: number) {
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
  }

  adicionarEstoque(qtd: number): void {
    if (qtd > 0) {
      this.quantidade += qtd;
    } else {
      console.log("Quantidade a adicionar deve ser positiva.");
    }
  }

  removerEstoque(qtd: number): void {
    if (qtd > 0) {
      if (this.quantidade >= qtd) {
        this.quantidade -= qtd;
      } else {
        console.log("Estoque insuficiente.");
      }
    } else {
      console.log("Quantidade a remover deve ser positiva.");
    }
  }

  exibirInformacoes(): void {
    console.log(`Nome: ${this.nome}, Preço: R$${this.preco}, Quantidade: ${this.quantidade}`);
  }
}


const nome = prompt('Digite o nome do produto: ');
const preco = parseFloat(prompt('Digite o preço do produto: '));
const quantidade = parseInt(prompt('Digite a quantidade inicial do produto: '));


const produto = new Produto(nome, preco, quantidade);


produto.exibirInformacoes();


const adicionarQtd = parseInt(prompt('Digite a quantidade para adicionar ao estoque: '));
produto.adicionarEstoque(adicionarQtd);
produto.exibirInformacoes();

const removerQtd = parseInt(prompt('Digite a quantidade para remover do estoque: '));
produto.removerEstoque(removerQtd);
produto.exibirInformacoes();
