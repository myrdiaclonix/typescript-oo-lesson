import Cliente from "./Cliente";
import Conta from "./Conta";
import Debito from "./Debito";

class ContaPoupanca extends Conta {
  constructor(numero: string, titular: Cliente) {
    super(numero, titular);
  }

  public sacar(valor: number): void {
    if (this.calcularSaldo() - valor < 0) {
      console.log(`> Saque de R$ ${valor} negado por falta de saldo.`);
    } else {
      let data = new Date();
      this.debitos.push(
        new Debito(
          valor,
          `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`
        )
      );
      console.log(`> Saque de  R$ ${valor} realizado com sucesso.`);
    }
  }

  public calcularSaldo(): number {
    let total: number = 0;
    for (let credit of this.creditos) {
      total += credit.getValor();
    }
    for (let debit of this.debitos) {
      total -= debit.getValor();
    }
    return total;
  }
}
