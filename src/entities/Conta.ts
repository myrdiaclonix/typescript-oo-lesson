import Cliente from "./Cliente";
import Credito from "./Credito";
import Debito from "./Debito";

abstract class Conta {
  protected creditos: Credito[] = [];
  protected debitos: Debito[] = [];

  public constructor(protected numero: string, protected titular: Cliente) {}

  public depositar(valor: number): void {
    let data = new Date();
    this.creditos.push(
      new Credito(
        valor,
        `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`
      )
    );
  }
  public abstract sacar(valor: number): void;
}

export default Conta;
