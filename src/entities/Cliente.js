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
var Pessoa_1 = require("./Pessoa");
var Cliente = /** @class */ (function (_super) {
    __extends(Cliente, _super);
    function Cliente(cpf, nome, telefone, vip) {
        var endereco = [];
        for (var _i = 4; _i < arguments.length; _i++) {
            endereco[_i - 4] = arguments[_i];
        }
        var _this = _super.call(this, cpf, nome, telefone) || this;
        _this.vip = vip;
        _this.enderecos = [];
        _this.enderecos = endereco;
        return _this;
    }
    Cliente.prototype.autenticar = function () {
        return true;
    };
    Cliente.prototype.listarEnderecos = function () {
        console.log("> Endere\u00E7os do cliente ".concat(this.nome, ":"));
        for (var _i = 0, _a = this.enderecos; _i < _a.length; _i++) {
            var endereco = _a[_i];
            console.log("> ".concat(endereco));
        }
        console.log();
    };
    return Cliente;
}(Pessoa_1.default));
exports.default = Cliente;
