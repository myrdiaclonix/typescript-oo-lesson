import Cliente from "../entities/Cliente";
import ContaCorrente from "../entities/ContaCorrente";
import Endereco from "../entities/Endereco";

// Criando cliente1.
const endereco1 = new Endereco(
  "74943-170",
  "Rua Hadock Lobo",
  "257",
  "Ao lado de um jardim",
  "Aparecida de Goiânia",
  "GO"
);
const cliente1 = new Cliente(
  "306.606.299-68",
  "Mário Diego Cláudio da Rosa",
  "(79) 99934-8623",
  false,
  endereco1
);
const conta1 = new ContaCorrente("000111000", cliente1, 100);

// Realizando depósito.
conta1.depositar(300);

// Criando cliente2.
const endereco2 = new Endereco(
  "78551-308",
  "Rua da Corvina",
  "137",
  "",
  "Sinop",
  "MT"
);
const cliente2 = new Cliente(
  "156.623.952-41",
  "Carla Lorena Josefa Moraes",
  "(42) 99834-7955",
  true,
  endereco2
);
const conta2 = new ContaCorrente("123654789", cliente2, 0);

// Realizando depósito
conta2.depositar(100);

// Fazendo a transferência.
conta1.transferir(conta2, 1000);
