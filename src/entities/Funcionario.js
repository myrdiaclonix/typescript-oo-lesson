"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Pessoa_1 = __importDefault(require("./Pessoa"));
class Funcionario extends Pessoa_1.default {
    constructor(cpf, nome, telefone, salario, ...cargo) {
        super(cpf, nome, telefone);
        this.salario = salario;
        this.cargos = [];
        this.cargos = cargo;
        console.log(`> Funcionário criado com sucesso: ${nome}.`);
    }
    autenticar() {
        return true;
    }
}
exports.default = Funcionario;
