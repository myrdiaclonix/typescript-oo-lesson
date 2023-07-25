abstract class Conta {
  public constructor(protected numero: string) {}

  public abstract depositar(valor: number): boolean;
  public abstract sacar(valor: number): boolean;
}

export default Conta;
