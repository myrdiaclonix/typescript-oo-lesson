"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Conta_1 = __importDefault(require("./Conta"));
const Debito_1 = __importDefault(require("./Debito"));
class ContaCorrente extends Conta_1.default {
    constructor(numero, titular, limite) {
        super(numero, titular);
        this.limite = limite;
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
        return total + this.limite;
    }
    transferir(contaDestino, valor) {
        if (this.calcularSaldo() - valor < 0) {
            console.log(`> Transferência de R$ ${valor} negada por falta de saldo.`);
        }
        else {
            let data = new Date();
            this.debitos.push(new Debito_1.default(valor, `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`));
            contaDestino.depositar(valor);
            console.log(`> Transferência de  R$ ${valor} realizada com sucesso.`);
        }
    }
}
exports.default = ContaCorrente;
