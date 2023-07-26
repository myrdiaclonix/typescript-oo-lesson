"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Conta_1 = __importDefault(require("./Conta"));
const Debito_1 = __importDefault(require("./Debito"));
class ContaPoupanca extends Conta_1.default {
    constructor(numero, titular) {
        super(numero, titular);
    }
    sacar(valor) {
        if (this.calcularSaldo() - valor < 0) {
            console.log(`> Saque de R$ ${valor} negado por falta de saldo.`);
        }
        else {
            let data = new Date();
            this.debitos.push(new Debito_1.default(valor, `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`));
            console.log(`> Saque de  R$ ${valor} realizado com sucesso.`);
        }
    }
    calcularSaldo() {
        let total = 0;
        for (let credit of this.creditos) {
            total += credit.getValor();
        }
        for (let debit of this.debitos) {
            total -= debit.getValor();
        }
        return total;
    }
}
exports.default = ContaPoupanca;
