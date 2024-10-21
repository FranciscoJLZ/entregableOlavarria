import { RegistroAutomotor } from "./reMain"
export class Motos extends RegistroAutomotor {
    private cilindrada: number;
    //-----------------
    constructor(marca: string, modelo: string, valor: string, cilindrada: number) {
        super(marca, modelo, valor)
        this.cilindrada = cilindrada;
    }
    //getters----
    getCilindrada() {
        return this.cilindrada;
    }
    //setters----
    setCilindrada(cilindrada: number) {
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