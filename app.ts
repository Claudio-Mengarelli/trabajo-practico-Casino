import { JuegoDeCasino } from './juegoDeCasino';
import { Poker } from './poker';
import { Dados } from './dados';
import { Casino } from './casino';


//En el archivo app.js cree el las instancias de las clases , heredadas y no heredadas,
//para mostrarlas por consola y generar cambios con get y set .





let JuegoDeCasino1 :JuegoDeCasino=new JuegoDeCasino(true,1500,4);
let poker1:Poker= new Poker(true,1,false,1600,1);
let dados1:Dados=new Dados(true,2,true,2500,1);
let casinoLaCiudad:Casino=new Casino("Sarmiento 1555",223344421,false,true,150000000,poker1,dados1);



console.log(casinoLaCiudad);//Aca muestro el casino y sus juegos .
casinoLaCiudad.setabierto(true);//Veo que el casino esta cerrado,lo abro y muestro en consola.
console.log(casinoLaCiudad);//

    
    
