import { RegistroAutomotor } from "./reMain";
export class Camiones extends RegistroAutomotor{
    private acoplado:boolean;
    public constructor(marca: string, modelo: string, valor: string, acoplado:boolean) {
        super(marca,modelo,valor);
        this.acoplado=acoplado;
    }
    //getters----
    getAcoplado(){
        return this.acoplado;
    }
    //setters----
    setAcoplado(acoplado:boolean){
        return this.acoplado;
    }
    //Methods----
    public incluyeAcoplado(){
        let incluyeAcoplado:boolean;
        if(incluyeAcoplado=true){
            console.log("Para inscribir el camion, tambien debe inscribir el acoplado");
        }else if(incluyeAcoplado=false){
            console.log("Solicitud aprobada, procediendo con la inscripcion del camion");
        }
    }
}