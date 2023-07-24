abstract class Conta {
  public constructor(protected numero: string) {}

  public abstract depositar(): boolean;
  public abstract sacar(): boolean;
}

export default Conta;
