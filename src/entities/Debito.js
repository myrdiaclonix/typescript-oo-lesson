"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Debito = /** @class */ (function () {
    function Debito(valor, data) {
        this.valor = valor;
        this.data = data;
    }
    Debito.prototype.getValor = function () {
        return this.valor;
    };
    return Debito;
}());
exports.default = Debito;
