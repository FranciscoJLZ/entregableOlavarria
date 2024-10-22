import { Vehiculos } from "./reVehiculos";
export class Autos extends Vehiculos {
    private tanqueLLeno:Boolean;
    //-----------------
    constructor(marca: string, modelo: string, valor: string,tanqueLLeno:Boolean){
        super(marca,modelo,valor)
        tanqueLLeno = this.tanqueLLeno;
    }
    //getters---
    public getTanqueLLeno(){
        return this.tanqueLLeno;
    }
    //setters---
    public settanqueLLeno(tanqueLLeno:boolean){
        return this.tanqueLLeno;
    }
    //----
    public estaLLeno() {
    let tanque: boolean;
        if(tanque = true){
            console.log("El tanque está lleno");
        }else if(tanque = false){
            console.log("Hay que llenar el tanque");
        }
    }
}

