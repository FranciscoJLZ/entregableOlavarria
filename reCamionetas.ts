import { Vehiculos } from "./reVehiculos";
import { patentes } from "./patentes";

export class Camionetas extends Vehiculos {
    private arrCamionetas: Camionetas[]=[];
    //-----------------
    constructor(marca: string, modelo: string, valor: string){
     super(marca,modelo,valor);   
    }
    //Methods-------
    public agregarCamioneta(marca:string,modelo:string,valor:string){
        const nuevaCamioneta = new Camionetas(marca,modelo,valor)
        this.arrCamionetas.push(nuevaCamioneta);
        const patente = new patentes("");
        console.log("Se agregó la nueva Camioneta ",+marca,"\nCon el dominio: ",+ patente.asignarPatente());
    }
    public modificarMoto(nuevaMarca:string, nuevoModelo: string, nuevoValor: string,i: number) {
        if(i>=0 && i< this.arrCamionetas.length) {
            const camioneta: Camionetas = this.arrCamionetas[i];
            camioneta.setMarca(nuevaMarca);
            camioneta.setModelo(nuevoModelo);
            camioneta.setValor(nuevoValor);
            console.log("Se ha modificado el vehiculo con exito.")
        }else{
            console.log("Iterador inválido.")
        }
    }
    public darDeBaja(i: number): void {
        if (i >= 0 && i < this.arrCamionetas.length) {
            this.arrCamionetas.splice(i, 1);
            console.log("Se ha dado de baja el auto en el índice ", i);
        } else {
            console.log("Iterador inválido.");
        }
    }
}