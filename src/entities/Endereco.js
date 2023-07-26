"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Endereco = /** @class */ (function () {
    function Endereco(cep, logradouro, numero, complemento, cidade, uf) {
        var _this = this;
        this.cep = cep;
        this.logradouro = logradouro;
        this.numero = numero;
        this.complemento = complemento;
        this.cidade = cidade;
        this.uf = uf;
        this.toString = function () {
            return "CEP: ".concat(_this.cep, ", Logradouro: ").concat(_this.logradouro, ", Num.: ").concat(_this.numero, ", Compl.: ").concat(_this.complemento, ", Cidade: ").concat(_this.cidade, ", UF: ").concat(_this.uf, ".");
        };
    }
    return Endereco;
}());
exports.default = Endereco;
