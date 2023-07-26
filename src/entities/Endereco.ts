class Endereco {
  constructor(
    protected cep: string,
    protected logradouro: string,
    protected numero: string,
    protected complemento: string,
    protected cidade: string,
    protected uf: string
  ) {}

  public toString = (): string => {
    return `CEP: ${this.cep}, Logradouro: ${this.logradouro}, Num.: ${this.numero}, Compl.: ${this.complemento}, Cidade: ${this.cidade}, UF: ${this.uf}.`;
  };
}

export default Endereco;
