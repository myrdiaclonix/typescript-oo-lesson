import Endereco from "./Endereco";
import IUsuario from "./IUsuario";
import Pessoa from "./Pessoa";

class Cliente extends Pessoa implements IUsuario {
  protected enderecos: Endereco[] = [];

  constructor(
    cpf: string,
    nome: string,
    telefone: string,
    protected vip: boolean,
    ...endereco: Endereco[]
  ) {
    super(cpf, nome, telefone);
    this.enderecos = endereco;
  }

  public autenticar(): boolean {
    return true;
  }

  public listarEnderecos(): void {
    console.log(`> Endereços do cliente ${this.nome}:`);
    for (let endereco of this.enderecos) {
      console.log(`> ${endereco}`);
    }
    console.log();
  }
}

export default Cliente;
