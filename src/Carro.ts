import promptSync from 'prompt-sync';

class Carro {
  marca: string;
  modelo: string;
  ano: number;
  quilometragem: number;

  constructor(marca: string, modelo: string, ano: number, quilometragem: number) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.quilometragem = quilometragem;
  }


  exibirInformacoes(): void {
    console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}, Quilometragem: ${this.quilometragem} km`);
  }


  andar(km: number): void {
    this.quilometragem += km;
    console.log(`O carro andou ${km} km.`);
  }
}

const meuCarro = new Carro('Toyota', 'Corolla', 2020, 15000);
meuCarro.exibirInformacoes();
meuCarro.andar(400);
meuCarro.exibirInformacoes(); 
