"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Conta_1 = require("./Conta");
var Debito_1 = require("./Debito");
var ContaCorrente = /** @class */ (function (_super) {
    __extends(ContaCorrente, _super);
    function ContaCorrente(numero, titular, limite) {
        var _this = _super.call(this, numero, titular) || this;
        _this.limite = limite;
        return _this;
    }
    ContaCorrente.prototype.sacar = function (valor) {
        if (this.calcularSaldo() - valor < 0) {
            console.log("> Saque de R$ ".concat(valor, " negado por falta de saldo."));
        }
        else {
            this.debitar(valor);
            console.log("> Saque de R$ ".concat(valor, " realizado com sucesso."));
        }
    };
    ContaCorrente.prototype.calcularSaldo = function () {
        var total = 0;
        for (var _i = 0, _a = this.creditos; _i < _a.length; _i++) {
            var credit = _a[_i];
            total += credit.getValor();
        }
        for (var _b = 0, _c = this.debitos; _b < _c.length; _b++) {
            var debit = _c[_b];
            total -= debit.getValor();
        }
        return total + this.limite;
    };
    ContaCorrente.prototype.transferir = function (contaDestino, valor) {
        if (this.calcularSaldo() - valor < 0) {
            console.log("> Transfer\u00EAncia de R$ ".concat(valor, " negada por falta de saldo."));
        }
        else {
            this.debitar(valor);
            contaDestino.depositar(valor);
            console.log("> Transfer\u00EAncia de R$ ".concat(valor, " realizada com sucesso."));
        }
    };
    ContaCorrente.prototype.debitar = function (valor) {
        var data = new Date();
        this.debitos.push(new Debito_1.default(valor, "".concat(data.getDate(), "/").concat(data.getMonth() + 1, "/").concat(data.getFullYear())));
    };
    return ContaCorrente;
}(Conta_1.default));
exports.default = ContaCorrente;
