class Endereco {
  constructor(
    protected cep: string,
    protected logradouro: string,
    protected numero: string,
    protected complemento: string,
    protected cidade: string,
    protected uf: string
  ) {}
}

export default Endereco;
