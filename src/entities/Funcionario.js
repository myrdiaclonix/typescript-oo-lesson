"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Cargo_1 = __importDefault(require("./Cargo"));
const Pessoa_1 = __importDefault(require("./Pessoa"));
class Funcionario extends Pessoa_1.default {
    constructor(cpf, nome, telefone, salario, ...args) {
        super(cpf, nome, telefone);
        this.salario = salario;
        this.cargo = [];
        for (let arg of args) {
            this.cargo.push(new Cargo_1.default(arg));
        }
    }
    autenticar() {
        return true;
    }
}
exports.default = Funcionario;
