import { RegistroAutomotor } from "./reMain"
import { Vehiculos } from "./reVehiculos";
export class Motos extends Vehiculos {
    private cilindrada: number;
    //-----------------
    constructor(marca: string, modelo: string, valor: string, cilindrada: number) {
        super(marca, modelo, valor)
        this.cilindrada = cilindrada;
    }
    //getters----
    public getCilindrada() {
        return this.cilindrada;
    }
    //setters----
    public setCilindrada(cilindrada: number) {
        return this.cilindrada;
    }
    //methods----
    public esAltaCilindrada() {
        if (this.cilindrada>200) {
            console.log("No es alta cilindrada");
        }else if(this.cilindrada<200){
            console.log("Es alta cilindrada");
        }
    }

}