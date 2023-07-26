"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Credito = /** @class */ (function () {
    function Credito(valor, data) {
        this.valor = valor;
        this.data = data;
    }
    Credito.prototype.getValor = function () {
        return this.valor;
    };
    return Credito;
}());
exports.default = Credito;
