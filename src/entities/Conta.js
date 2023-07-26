"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Credito_1 = require("./Credito");
var Conta = /** @class */ (function () {
    function Conta(numero, titular) {
        this.numero = numero;
        this.titular = titular;
        this.creditos = [];
        this.debitos = [];
    }
    Conta.prototype.depositar = function (valor) {
        var data = new Date();
        this.creditos.push(new Credito_1.default(valor, "".concat(data.getDate(), "/").concat(data.getMonth() + 1, "/").concat(data.getFullYear())));
    };
    return Conta;
}());
exports.default = Conta;
