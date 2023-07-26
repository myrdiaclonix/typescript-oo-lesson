class Debito {
  constructor(protected valor: number, protected data: string) {}

  getValor(): number {
    return this.valor;
  }
}

export default Debito;
