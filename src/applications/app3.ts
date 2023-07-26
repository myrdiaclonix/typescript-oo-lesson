import Cliente from "../entities/Cliente";
import ContaCorrente from "../entities/ContaCorrente";
import Endereco from "../entities/Endereco";

const endereco = new Endereco(
  "74943-170",
  "Rua Hadock Lobo",
  "257",
  "Ao lado de um jardim",
  "Aparecida de Goiânia",
  "GO"
);
const cliente = new Cliente(
  "306.606.299-68",
  "Mário Diego Cláudio da Rosa",
  "(79) 99934-8623",
  false,
  endereco
);
const conta = new ContaCorrente("000111000", cliente, 500);

// Realizando os depósitos.
conta.depositar(100);
conta.depositar(100);
conta.depositar(100);

conta.sacar(50);

// Imprimindo o saldo da conta.
console.log(`> Saldo atual: R$ ${conta.calcularSaldo()}\n`);
