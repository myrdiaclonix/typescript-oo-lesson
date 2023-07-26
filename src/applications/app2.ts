import Cliente from "../entities/Cliente";
import Endereco from "../entities/Endereco";

// Criando os endereços.
const endereco1 = new Endereco(
  "74943-170",
  "Rua Hadock Lobo",
  "257",
  "Ao lado de um jardim",
  "Aparecida de Goiânia",
  "GO"
);
const endereco2 = new Endereco(
  "78551-308",
  "Rua da Corvina",
  "137",
  "",
  "Sinop",
  "MT"
);
const endereco3 = new Endereco(
  "49075-900",
  "Rua Acre 2504",
  "806",
  "Perto do Posto Fagundes",
  "Aracaju",
  "SE"
);

// Criando o cliente.
const cliente = new Cliente(
  "306.606.299-68",
  "Mário Diego Cláudio da Rosa",
  "(79) 99934-8623",
  false,
  endereco1,
  endereco2,
  endereco3
);

// Imprimindo os endereços.
cliente.listarEnderecos();
