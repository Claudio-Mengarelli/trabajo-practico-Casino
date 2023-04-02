import { Poker } from './poker';
import { Dados } from './dados';


export class Casino {
    private direccion:string;    //Esta clase al ser totalmente distinta y no compartir atributos,
    private telefono:number;     //y metodos con las otras clases , solo llama a los juegos,
    private abierto:boolean;     //ya que son los que estan dentro del establecimiento,
    private cobroPremio:boolean;//y como es un establecimiento, no comparte ninguna caracteristica ,
    private premioMayor:number;//con un juego ,o juegosDecasino.
    private Poker:Poker;       //solamente estos estan dentro de el.
    private Dados:Dados;

    constructor(p_direccion:string,p_telefono:number,p_abierto:boolean,p_cobroPremio:boolean,p_premioMayor:number,p_poker:Poker,p_dados:Dados){
        this.direccion=p_direccion;
        this.telefono=p_telefono;
        this.abierto=p_abierto;
        this.cobroPremio=p_cobroPremio;
        this.premioMayor=p_premioMayor;
        this.Poker=p_poker;
        this.Dados=p_dados;
    }
    getdireccion():string{
        return this.direccion;
    }
    setdireccion(p_direccion):void{
        this.direccion=p_direccion;
    }
    gettelefono():number{
        return this.telefono;
    }
    settelefono(p_telefono):void{
        this.telefono=p_telefono;
    }
    getabierto():boolean{
        return this.abierto;
    }
    setabierto(p_abierto):void{
        this.abierto=p_abierto;
    }
    getcobroPremio():boolean{
        return this.cobroPremio;
    }
    setcobroPremio(p_cobroPremio):void{
        this.cobroPremio=p_cobroPremio;
    }
    getpremioMayor():number{
        return this.premioMayor;
    }
    setpremioMayor(p_premioMayor):void{
        this.premioMayor=p_premioMayor;
    }
}



