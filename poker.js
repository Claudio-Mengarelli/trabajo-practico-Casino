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
exports.__esModule = true;
exports.Poker = void 0;
var juegoDeCasino_1 = require("./juegoDeCasino");
var Poker = /** @class */ (function (_super) {
    __extends(Poker, _super);
    function Poker(p_mesaCompleta, p_cantJugadoresConPremio, p_disponibilidadJuego, p_apuestaMinima, p_cantDeJugadores) {
        var _this = _super.call(this, p_disponibilidadJuego, p_apuestaMinima, p_cantDeJugadores) || this;
        _this.mesaCompleta = p_mesaCompleta;
        _this.cantJugadoresConPremio = p_cantJugadoresConPremio;
        return _this;
    }
    Poker.prototype.getmesaCompleta = function () {
        return this.mesaCompleta;
    };
    Poker.prototype.setmesaCompleta = function (p_mesaCompleta) {
        this.mesaCompleta = p_mesaCompleta;
    };
    Poker.prototype.getcantJugadoresConPremio = function () {
        return this.cantJugadoresConPremio;
    };
    Poker.prototype.setcantJugadoresConPremio = function (p_cantJugadoresConPremio) {
        this.cantJugadoresConPremio = p_cantJugadoresConPremio;
    };
    return Poker;
}(juegoDeCasino_1.JuegoDeCasino));
exports.Poker = Poker;
var primerPoker = new Poker(true, 2, true, 1500, 4);
