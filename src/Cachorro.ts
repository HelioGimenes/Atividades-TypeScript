import { Mamifero } from './Mamifero';

export class Cachorro extends Mamifero {
  constructor(peso: number, idade: number, sexo: string, nome: string, pedigree: boolean) {
    super(peso, idade, sexo, nome, pedigree);
  }

  movimentar(): void {
    console.log("O cachorro está correndo.");
  }

  latir(): void {
    console.log("O cachorro está latindo.");
  }

  comer(): void {
    super.comer(10);
  }
}
