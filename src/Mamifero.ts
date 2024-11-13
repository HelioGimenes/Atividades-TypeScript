import { Animal } from './Animal';

export class Mamifero extends Animal {
  nome: string;
  pedigree: boolean;

  constructor(peso: number, idade: number, sexo: string, nome: string, pedigree: boolean) {
    super(peso, idade, sexo);
    this.nome = nome;
    this.pedigree = pedigree;
  }
}
