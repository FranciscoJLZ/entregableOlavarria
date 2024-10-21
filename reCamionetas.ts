import { RegistroAutomotor } from "./reMain";
export class Camionetas extends RegistroAutomotor {
    private tieneTacos: boolean;
    //-----------------
    constructor(marca: string, modelo: string, valor: string, tieneTacos: boolean){
     super(marca,modelo,valor);   
     this.tieneTacos=tieneTacos;
    }
    //Getters-----
    getTieneTacos(){
        return this.tieneTacos;
    }
    //Setters----
    setTieneTacos(tieneTacos:boolean) {
        return this.tieneTacos;
    }
    //methods---- 
    public hayTacos() {
        let tieneTacos:boolean;
        if(tieneTacos = true){
            console.log("Tiene tacos");
        }else if(tieneTacos = false){
            console.log("Necesita cambiar las ruedas");
        }
    }
}