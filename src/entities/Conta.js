"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Credito_1 = __importDefault(require("./Credito"));
class Conta {
    constructor(numero, titular) {
        this.numero = numero;
        this.titular = titular;
        this.creditos = [];
        this.debitos = [];
    }
    depositar(valor) {
        let data = new Date();
        this.creditos.push(new Credito_1.default(valor, `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`));
    }
}
exports.default = Conta;
