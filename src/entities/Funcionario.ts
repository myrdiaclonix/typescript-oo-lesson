import Cargo from "./Cargo";
import IUsuario from "./IUsuario";
import Pessoa from "./Pessoa";

class Funcionario extends Pessoa implements IUsuario {
  protected cargos: Cargo[] = [];

  public constructor(
    cpf: string,
    nome: string,
    telefone: string,
    protected salario: number,
    ...cargo: Cargo[]
  ) {
    super(cpf, nome, telefone);
    this.cargos = cargo;

    console.log(`> Funcionário criado com sucesso: ${nome}.`)
  }

  public autenticar(): boolean {
    return true;
  }
}

export default Funcionario;
