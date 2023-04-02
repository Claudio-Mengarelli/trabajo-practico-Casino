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
exports.Dados = void 0;
var juegoDeCasino_1 = require("./juegoDeCasino");
//Esto se aplica a Poker y Dados(Hijos de JuegosDeCasino).
var Dados = /** @class */ (function (_super) {
    __extends(Dados, _super);
    function Dados(p_mesaCompleta, p_cantJugadoresConPremio, p_disponibilidadJuego, p_apuestaMinima, p_cantDeJugadores) {
        var _this = _super.call(this, p_disponibilidadJuego, p_apuestaMinima, p_cantDeJugadores) //Gracias al super()heredo el constructor 
         || this;
        _this.mesaCompleta = p_mesaCompleta; //con sus parametros respectivos.
        _this.cantJugadoresConPremio = p_cantJugadoresConPremio;
        return _this;
    }
    Dados.prototype.getmesaCompleta = function () {
        return this.mesaCompleta;
    };
    Dados.prototype.setmesaCompleta = function (p_mesaCompleta) {
        this.mesaCompleta = p_mesaCompleta;
    };
    Dados.prototype.getcantJugadoresConPremio = function () {
        return this.cantJugadoresConPremio;
    };
    Dados.prototype.setcantJugadoresConPremio = function (p_cantJugadoresConPremio) {
        this.cantJugadoresConPremio = p_cantJugadoresConPremio;
    };
    return Dados;
}(juegoDeCasino_1.JuegoDeCasino));
exports.Dados = Dados;
