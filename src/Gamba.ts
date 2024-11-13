import { Animal } from './Animal';

export class Gamba extends Animal {
  nivelDeAroma: number;

  constructor(peso: number, idade: number, sexo: string, nivelDeAroma: number) {
    super(peso, idade, sexo);
    this.nivelDeAroma = nivelDeAroma;
  }

  movimentar(): void {
    console.log("O gambá está andando silenciosamente.");
  }

  aromatizar(): void {
    console.log("O gambá está liberando um aroma forte.");
  }

  comer(): void {
    super.comer(5);
  }
}
