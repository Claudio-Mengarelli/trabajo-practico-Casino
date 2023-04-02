"use strict";
exports.__esModule = true;
exports.JuegoDeCasino = void 0;
var JuegoDeCasino = /** @class */ (function () {
    function JuegoDeCasino(p_disponibilidadJuego, p_apuestaMinima, p_cantDeJugadores) {
        this.disponibilidadJuego = p_disponibilidadJuego;
        this.apuestaMinima = p_apuestaMinima;
        this.cantDeJugadores = p_cantDeJugadores;
    }
    JuegoDeCasino.prototype.getdisponibilidadJuego = function () {
        return this.disponibilidadJuego;
    };
    JuegoDeCasino.prototype.setdisponibilidadJuego = function (p_disponibilidadJuego) {
        this.disponibilidadJuego = p_disponibilidadJuego;
    };
    JuegoDeCasino.prototype.getapuestaMinima = function () {
        return this.apuestaMinima;
    };
    JuegoDeCasino.prototype.setapuestaMinima = function (p_apuestaMinima) {
        this.apuestaMinima = p_apuestaMinima;
    };
    JuegoDeCasino.prototype.getcantDeJugadores = function () {
        return this.cantDeJugadores;
    };
    JuegoDeCasino.prototype.setcantDeJugadores = function (p_cantDeJugadores) {
        this.cantDeJugadores = p_cantDeJugadores;
    };
    return JuegoDeCasino;
}());
exports.JuegoDeCasino = JuegoDeCasino;
