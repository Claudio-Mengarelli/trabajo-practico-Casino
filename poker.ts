import { JuegoDeCasino } from './juegoDeCasino';

export class Poker extends JuegoDeCasino{
   private mesaCompleta:boolean;
   private cantJugadoresConPremio:number;

    constructor (p_mesaCompleta:boolean,p_cantJugadoresConPremio:number,p_disponibilidadJuego:boolean,p_apuestaMinima:number,p_cantDeJugadores:number){
        super(p_disponibilidadJuego,p_apuestaMinima,p_cantDeJugadores)
        this.mesaCompleta=p_mesaCompleta;
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
let primerPoker:Poker=new Poker(true,2,true,1500,4);