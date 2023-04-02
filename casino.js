"use strict";
exports.__esModule = true;
exports.Casino = void 0;
var Casino = /** @class */ (function () {
    function Casino(p_direccion, p_telefono, p_abierto, p_cobroPremio, p_premioMayor, p_poker, p_dados) {
        this.direccion = p_direccion;
        this.telefono = p_telefono;
        this.abierto = p_abierto;
        this.cobroPremio = p_cobroPremio;
        this.premioMayor = p_premioMayor;
        this.Poker = p_poker;
        this.Dados = p_dados;
    }
    Casino.prototype.getdireccion = function () {
        return this.direccion;
    };
    Casino.prototype.setdireccion = function (p_direccion) {
        this.direccion = p_direccion;
    };
    Casino.prototype.gettelefono = function () {
        return this.telefono;
    };
    Casino.prototype.settelefono = function (p_telefono) {
        this.telefono = p_telefono;
    };
    Casino.prototype.getabierto = function () {
        return this.abierto;
    };
    Casino.prototype.setabierto = function (p_abierto) {
        this.abierto = p_abierto;
    };
    Casino.prototype.getcobroPremio = function () {
        return this.cobroPremio;
    };
    Casino.prototype.setcobroPremio = function (p_cobroPremio) {
        this.cobroPremio = p_cobroPremio;
    };
    Casino.prototype.getpremioMayor = function () {
        return this.premioMayor;
    };
    Casino.prototype.setpremioMayor = function (p_premioMayor) {
        this.premioMayor = p_premioMayor;
    };
    return Casino;
}());
exports.Casino = Casino;
