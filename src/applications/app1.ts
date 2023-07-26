import Cargo from "../entities/Cargo";
import Funcionario from "../entities/Funcionario";

// Criando os cargos.
const cargo1 = new Cargo("gerente");
const cargo2 = new Cargo("atendente");

// Criando os funcionários.
const funcionario1 = new Funcionario(
  "548.770.623-94",
  "Allana Simone Olivia Alves",
  "(83) 98341-3836",
  7550,
  cargo1
);
const funcionario2 = new Funcionario(
  "831.901.885-48",
  "Teresinha Mariah Costa",
  "(44) 98403-9986",
  2340,
  cargo2
);
