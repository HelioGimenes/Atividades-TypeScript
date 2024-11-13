import { Conta } from './Conta';

export class ContaEspecial extends Conta {
  limite: number;

  constructor(nomeCliente: string, numeroConta: number, saldo: number, limite: number) {
    super(nomeCliente, numeroConta, saldo);
    this.limite = limite;
  }

  sacar(valor: number): void {
    if (valor > 0 && this.saldo + this.limite >= valor) {
      this.saldo -= valor;
      console.log(`Saque de R$${valor} realizado com sucesso. Saldo atual: R$${this.saldo}`);
    } else {
      console.log("Saque não realizado. Limite insuficiente.");
    }
  }
}
