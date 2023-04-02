import { Dados } from "./dados";

export class JuegoDeCasino{         //Clase padre de Dados y Poker, estos van a heredar atributos,
   protected disponibilidadJuego:boolean;//y metodos gracias a la herencia usando "protected",
   protected apuestaMinima:number;       //puedo acceder desde fuera de la clase,
   protected cantDeJugadores:number;   //pero este mismo sigue siendo NO-MODIFICABLE,por el usuario.

   constructor(p_disponibilidadJuego:boolean,p_apuestaMinima:number,p_cantDeJugadores:number){
      this.disponibilidadJuego=p_disponibilidadJuego;
      this.apuestaMinima=p_apuestaMinima;
      this.cantDeJugadores=p_cantDeJugadores;
   }

   getdisponibilidadJuego():boolean{
      return this.disponibilidadJuego;
   }
   setdisponibilidadJuego(p_disponibilidadJuego:boolean):void{
      this.disponibilidadJuego=p_disponibilidadJuego;
   }
   getapuestaMinima():number{
      return this.apuestaMinima;
   }
   setapuestaMinima(p_apuestaMinima:number):void{
      this.apuestaMinima=p_apuestaMinima;
   }
   getcantDeJugadores():number{
      return this.cantDeJugadores;
   }
   setcantDeJugadores(p_cantDeJugadores:number):void{
      this.cantDeJugadores=p_cantDeJugadores;
   }
}

