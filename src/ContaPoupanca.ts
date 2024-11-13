import { Conta } from './Conta';

export class ContaPoupanca extends Conta {
  diaRendimento: number;

  constructor(nomeCliente: string, numeroConta: number, saldo: number, diaRendimento: number) {
    super(nomeCliente, numeroConta, saldo);
    this.diaRendimento = diaRendimento;
  }

  atualizarSaldoComRendimento(taxa: number): void {
    if (taxa > 0) {
      this.saldo += this.saldo * (taxa / 100);
      console.log(`Saldo atualizado com rendimento. Saldo atual: R$${this.saldo}`);
    } else {
      console.log("A taxa de rendimento deve ser positiva.");
    }
  }
}
