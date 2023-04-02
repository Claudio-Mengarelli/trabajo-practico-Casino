"use strict";
exports.__esModule = true;
var juegoDeCasino_1 = require("./juegoDeCasino");
var poker_1 = require("./poker");
var dados_1 = require("./dados");
var casino_1 = require("./casino");
//En el archivo app.js cree el las instancias de las clases , heredadas y no heredadas,
//para mostrarlas por consola y generar cambios con get y set .
var JuegoDeCasino1 = new juegoDeCasino_1.JuegoDeCasino(true, 1500, 4);
var poker1 = new poker_1.Poker(true, 1, false, 1600, 1);
var dados1 = new dados_1.Dados(true, 2, true, 2500, 1);
var casinoLaCiudad = new casino_1.Casino("Sarmiento 1555", 223344421, false, true, 150000000, poker1, dados1);
console.log(casinoLaCiudad); //Aca muestro el casino y sus juegos .
casinoLaCiudad.setabierto(true); //Veo que el casino esta cerrado,lo abro y muestro en consola.
console.log(casinoLaCiudad); //
