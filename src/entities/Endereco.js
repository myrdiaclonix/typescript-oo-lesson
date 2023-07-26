"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Endereco {
    constructor(cep, logradouro, numero, complemento, cidade, uf) {
        this.cep = cep;
        this.logradouro = logradouro;
        this.numero = numero;
        this.complemento = complemento;
        this.cidade = cidade;
        this.uf = uf;
        this.toString = () => {
            return `CEP: ${this.cep}, Logradouro: ${this.logradouro}, Num.: ${this.numero}, Compl.: ${this.complemento}, Cidade: ${this.cidade}, UF: ${this.uf}.`;
        };
    }
}
exports.default = Endereco;
