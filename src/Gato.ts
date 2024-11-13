import { Mamifero } from './Mamifero';

export class Gato extends Mamifero {
  constructor(peso: number, idade: number, sexo: string, nome: string, pedigree: boolean) {
    super(peso, idade, sexo, nome, pedigree);
  }

  movimentar(): void {
    console.log("O gato está se movendo suavemente.");
  }

  miar(): void {
    console.log("O gato está miando.");
  }

  comer(): void {
    super.comer(5);
  }
}
