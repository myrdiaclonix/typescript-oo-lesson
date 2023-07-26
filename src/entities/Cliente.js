"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Pessoa_1 = __importDefault(require("./Pessoa"));
class Cliente extends Pessoa_1.default {
    constructor(cpf, nome, telefone, vip, ...endereco) {
        super(cpf, nome, telefone);
        this.vip = vip;
        this.enderecos = [];
        this.enderecos = endereco;
    }
    autenticar() {
        return true;
    }
    listarEnderecos() {
        console.log(`Endereços do cliente ${this.nome}:`);
        for (let endereco of this.enderecos) {
            console.log(`> ${endereco}`);
        }
        console.log();
    }
}
exports.default = Cliente;
