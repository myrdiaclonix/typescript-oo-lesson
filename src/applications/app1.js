"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Cargo_1 = __importDefault(require("../entities/Cargo"));
const Funcionario_1 = __importDefault(require("../entities/Funcionario"));
// Criando os cargos.
const cargo1 = new Cargo_1.default("gerente");
const cargo2 = new Cargo_1.default("atendente");
// Criando os funcionários.
const funcionario1 = new Funcionario_1.default("548.770.623-94", "Allana Simone Olivia Alves", "(83) 98341-3836", 7550, cargo1);
const funcionario2 = new Funcionario_1.default("831.901.885-48", "Teresinha Mariah Costa", "(44) 98403-9986", 2340, cargo2);
