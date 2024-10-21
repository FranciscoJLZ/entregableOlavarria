import { RegistroAutomotor } from "./reMain"
export class Autos extends RegistroAutomotor {
    private tanqueLLeno:Boolean;
    //-----------------
    constructor(marca: string, modelo: string, valor: string,tanqueLLeno:Boolean){
        super(marca,modelo,valor)
        tanqueLLeno = this.tanqueLLeno;
    }
    //getters---
    getTanqueLLeno(){
        return this.tanqueLLeno;
    }
    //setters---
    settanqueLLeno(tanqueLLeno:boolean){
        return this.tanqueLLeno;
    }
    //----
    public estaLLeno() {
    let tanque: boolean;
        if(tanque = true){
            console.log("El tanque está lleno");
        }else if(tanque = false){
            console.log("Hay que llenar le tanque");
        }
    }
}

