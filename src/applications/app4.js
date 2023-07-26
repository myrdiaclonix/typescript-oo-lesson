"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Cliente_1 = __importDefault(require("../entities/Cliente"));
const ContaCorrente_1 = __importDefault(require("../entities/ContaCorrente"));
const ContaPoupanca_1 = __importDefault(require("../entities/ContaPoupanca"));
const Endereco_1 = __importDefault(require("../entities/Endereco"));
// Criando cliente 1, com ContaCorrente.
const endereco1 = new Endereco_1.default("74943-170", "Rua Hadock Lobo", "257", "Ao lado de um jardim", "Aparecida de Goiânia", "GO");
const cliente1 = new Cliente_1.default("306.606.299-68", "Mário Diego Cláudio da Rosa", "(79) 99934-8623", false, endereco1);
const conta1 = new ContaCorrente_1.default("000111000", cliente1, 500);
// Realizando o depósito.
conta1.depositar(1000);
// Criando cliente 2, com ContaPoupanca.
const endereco2 = new Endereco_1.default("78551-308", "Rua da Corvina", "137", "", "Sinop", "MT");
const cliente2 = new Cliente_1.default("156.623.952-41", "Carla Lorena Josefa Moraes", "(42) 99834-7955", true, endereco2);
const conta2 = new ContaPoupanca_1.default("123654789", cliente2);
// Realizando o depósito.
conta2.depositar(1000);
// Fazendo a transferência.
conta1.transferir(conta2, 500);
// Exibindo os saldos.
console.log(`> Saldo da conta 1: R$ ${conta1.calcularSaldo()}.`);
console.log(`> Saldo da conta 2: R$ ${conta2.calcularSaldo()}.`);
