import Cargo from "./Cargo";
import IUsuario from "./IUsuario";
import Pessoa from "./Pessoa";

class Funcionario extends Pessoa implements IUsuario {
  protected cargo: Cargo[] = [];

  public constructor(
    cpf: string,
    nome: string,
    telefone: string,
    protected salario: number,
    ...args: string[]
  ) {
    super(cpf, nome, telefone);

    for (let arg of args) {
      this.cargo.push(new Cargo(arg));
    }
  }

  public autenticar(): boolean {
    return true;
  }
}

export default Funcionario;
