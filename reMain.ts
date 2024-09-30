//Implementar la clase RegistroAutomotor (Autos, motos, camiones) y deben tener los metodos: AgregarVehiculo, get y set, modificar un vechiculo, y dar de baja. 
//Incorporando conceptos nuevos: Encapsulamiento y composición


import  { Autos } from "./reAutos"; import { Camionetas } from "./reCamionetas"; import { Motos } from "./reMotos";

//----------------------

export class RegistroAutomotor {
    private vehiculos: Autos[] | Motos[] | Camionetas[] = [];
    //------
    constructor(){
        this.vehiculos=this.vehiculos;
    }
    //-------------
}

let nuevoAuto_1 = new Autos("Chevrolet","Corsa","4500000");
let nuevaMoto_1 = new Motos("Honda","Waves","220000");
let nuevaCamioneta_2 = new Camionetas("Nissan","Kicks","6000000");