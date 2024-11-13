export class Animal {
    peso: number;
    idade: number;
    sexo: string;

    constructor(peso: number, idade: number, sexo: string) {
        this.peso = peso;
        this.idade = idade;
        this.sexo = sexo;
    }

    movimentar(): void {
        console.log("O animal está se movendo.");
    }

    comer(percentual: number): void {
        this.peso += this.peso * (percentual / 100);
        console.log(`O animal comeu e agora pesa ${this.peso.toFixed(2)} kg.`);
    }

    envelhecer(): void {
        this.idade += 1;
        console.log(`O animal envelheceu. Agora tem ${this.idade} anos.`);
    }
}

import { Peixe } from './Peixe';
import { Cachorro } from './Cachorro';
import { Gato } from './Gato';
import { Gamba } from './Gamba';

const peixe = new Peixe(1.5, 2, "feminino", true);
peixe.movimentar();
peixe.comer(5);
peixe.envelhecer();

const cachorro = new Cachorro(20, 3, "masculino", "Rex", true);
cachorro.movimentar();
cachorro.latir();
cachorro.comer();
cachorro.envelhecer();

const gato = new Gato(4, 1, "feminino", "Mimi", false);
gato.movimentar();
gato.miar();
gato.comer();
gato.envelhecer();

const gamba = new Gamba(3, 4, "masculino", 8);
gamba.movimentar();
gamba.aromatizar();
gamba.comer();
gamba.envelhecer();
