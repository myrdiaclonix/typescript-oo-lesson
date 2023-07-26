import Cliente from "./Cliente";
import Conta from "./Conta";
import Debito from "./Debito";

class ContaCorrente extends Conta {
  constructor(numero: string, titular: Cliente, protected limite: number) {
    super(numero, titular);
  }

  public sacar(valor: number): void {
    if (this.calcularSaldo() - valor < 0) {
      console.log(`> Saque de R$ ${valor} negado por falta de saldo.`);
    } else {
      this.debitar(valor);
      console.log(`> Saque de R$ ${valor} realizado com sucesso.`);
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
    return total + this.limite;
  }

  public transferir(contaDestino: Conta, valor: number): void {
    if (this.calcularSaldo() - valor < 0) {
      console.log(`> Transferência de R$ ${valor} negada por falta de saldo.`);
    } else {
      this.debitar(valor);
      contaDestino.depositar(valor);
      console.log(`> Transferência de R$ ${valor} realizada com sucesso.`);
    }
  }

  private debitar(valor: number): void {
    let data = new Date();
    this.debitos.push(
      new Debito(
        valor,
        `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`
      )
    );
  }
}

export default ContaCorrente;
