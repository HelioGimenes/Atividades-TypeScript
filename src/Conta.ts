export class Conta {
  nomeCliente: string;
  numeroConta: number;
  saldo: number;

  constructor(nomeCliente: string, numeroConta: number, saldo: number) {
    this.nomeCliente = nomeCliente;
    this.numeroConta = numeroConta;
    this.saldo = saldo;
  }

  depositar(valor: number): void {
    if (valor > 0) {
      this.saldo += valor;
      console.log(`Depósito de R$${valor} realizado com sucesso. Saldo atual: R$${this.saldo}`);
    } else {
      console.log("O valor do depósito deve ser positivo.");
    }
  }

  sacar(valor: number): void {
    if (valor > 0 && this.saldo >= valor) {
      this.saldo -= valor;
      console.log(`Saque de R$${valor} realizado com sucesso. Saldo atual: R$${this.saldo}`);
    } else {
      console.log("Saque não realizado. Saldo insuficiente.");
    }
  }
}


import { ContaPoupanca } from './ContaPoupanca';
import { ContaEspecial } from './ContaEspecial';

const contaPoupanca = new ContaPoupanca("Maria Silva", 12345, 1000, 15);
contaPoupanca.depositar(200);
contaPoupanca.sacar(500);
contaPoupanca.atualizarSaldoComRendimento(5);

const contaEspecial = new ContaEspecial("João Santos", 67890, 500, 300);
contaEspecial.depositar(100);
contaEspecial.sacar(800);
