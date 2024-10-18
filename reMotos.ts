import { Vehiculos } from "./reVehiculos";
export class Motos extends Vehiculos{
    //-----------------
    constructor(marca:string,modelo:string,valor:string){
        super(marca,modelo,valor)
    }
}