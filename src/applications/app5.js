"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cliente_1 = require("../entities/Cliente");
var ContaCorrente_1 = require("../entities/ContaCorrente");
var Endereco_1 = require("../entities/Endereco");
// Criando cliente1.
var endereco1 = new Endereco_1.default("74943-170", "Rua Hadock Lobo", "257", "Ao lado de um jardim", "Aparecida de Goiânia", "GO");
var cliente1 = new Cliente_1.default("306.606.299-68", "Mário Diego Cláudio da Rosa", "(79) 99934-8623", false, endereco1);
var conta1 = new ContaCorrente_1.default("000111000", cliente1, 100);
// Realizando depósito.
conta1.depositar(300);
// Criando cliente2.
var endereco2 = new Endereco_1.default("78551-308", "Rua da Corvina", "137", "", "Sinop", "MT");
var cliente2 = new Cliente_1.default("156.623.952-41", "Carla Lorena Josefa Moraes", "(42) 99834-7955", true, endereco2);
var conta2 = new ContaCorrente_1.default("123654789", cliente2, 0);
// Realizando depósito
conta2.depositar(100);
// Fazendo a transferência.
conta1.transferir(conta2, 1000);
