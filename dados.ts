import { JuegoDeCasino } from './juegoDeCasino';

                                                //Esto se aplica a Poker y Dados(Hijos de JuegosDeCasino).
export class Dados extends JuegoDeCasino {//En esta parte creo una de las clases hijo de JuegosDeCasino
   private mesaCompleta:boolean;          //este mismo va a heredar todos sus atributos y metodos.
   private cantJugadoresConPremio:number;

    constructor (p_mesaCompleta:boolean,p_cantJugadoresConPremio:number,p_disponibilidadJuego:boolean,p_apuestaMinima:number,p_cantDeJugadores:number){
        super(p_disponibilidadJuego,p_apuestaMinima,p_cantDeJugadores)//Gracias al super()heredo el constructor 
        this.mesaCompleta=p_mesaCompleta;                               //con sus parametros respectivos.
        this.cantJugadoresConPremio=p_cantJugadoresConPremio;  
    }
    getmesaCompleta():boolean{
        return this.mesaCompleta;
      }
      setmesaCompleta(p_mesaCompleta):void{
        this.mesaCompleta=p_mesaCompleta;
      }
      getcantJugadoresConPremio():number{
        return this.cantJugadoresConPremio;
      }
      setcantJugadoresConPremio(p_cantJugadoresConPremio):void{
        this.cantJugadoresConPremio=p_cantJugadoresConPremio;
      }
}


