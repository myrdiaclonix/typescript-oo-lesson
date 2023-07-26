"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Cliente_1 = __importDefault(require("../entities/Cliente"));
const ContaCorrente_1 = __importDefault(require("../entities/ContaCorrente"));
const Endereco_1 = __importDefault(require("../entities/Endereco"));
const endereco = new Endereco_1.default("74943-170", "Rua Hadock Lobo", "257", "Ao lado de um jardim", "Aparecida de Goiânia", "GO");
const cliente = new Cliente_1.default("306.606.299-68", "Mário Diego Cláudio da Rosa", "(79) 99934-8623", false, endereco);
const conta = new ContaCorrente_1.default("000111000", cliente, 500);
// Realizando os depósitos.
conta.depositar(100);
conta.depositar(100);
conta.depositar(100);
conta.sacar(50);
// Imprimindo o saldo da conta.
console.log(`> Saldo atual: R$ ${conta.calcularSaldo()}\n`);
