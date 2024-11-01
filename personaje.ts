//deshabilitación momentánea

// import { Arquero } from "./arquero";
// import { Asesino } from "./asesino";
// import { Barbaro } from "./barbaro";
// import { Clerigo } from "./clerigo";
// import { Luchador } from "./luchador";
// import { Mago } from "./mago";

// export abstract class Juego {
//     protected nombre: string;
//     public constructor(nombre:string){
//         this.nombre = nombre;
//     }
//     //getters----
//     public getNombre(){
//         return this.nombre;
//     }
//     //setters----
//     public setNombre(nombre: string){
//         return this.nombre;
//     }
//     //methods----
//     public crearHeroe(selector:number){
//         if(selector = 1){
//             let asesino1 = new Asesino(this.nombre);
//             console.log(`bienvenido! ${this.nombre}`)
//         }else if(selector = 2){
//             let mago1 = new Mago(this.nombre);
//             console.log(`bienvenido! ${this.nombre}`)
//         }else if(selector = 3){
//             let barbaro1 = new Barbaro(this.nombre);
//             console.log(`bienvenido! ${this.nombre}`)
//         }else if(selector = 4){
//             let luchador1 = new Luchador(this.nombre);
//             console.log(`bienvenido! ${this.nombre}`)
//         }else if(selector = 5){
//             let arquero1 = new Arquero(this.nombre);
//             console.log(`bienvenido! ${this.nombre}`)
//         }else if(selector = 6){
//             let clerigo1 = new Clerigo(this.nombre);
//             console.log(`bienvenido! ${this.nombre}`)
//         }else{
//             return console.error("Debes seleccionar tu héroe");
//             ;
//         }
//     }
// }