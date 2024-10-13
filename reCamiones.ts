import { patentes } from "./patentes";
import { Vehiculos } from "./reVehiculos";

export class Camiones extends Vehiculos{
    private arrCamiones: Camiones[]=[];
    public constructor(marca: string, modelo: string, valor: string) {
        super(marca,modelo,valor);
    }
    //------
    public agregarCamion(marca:string,modelo:string,valor:string) {
        const nuevoCamion = new Camiones(marca,modelo,valor);
        const patente = new patentes("");
        console.log("Se agregó el nuevo Camion: ",+marca,"\nCon el dominio: ",+ patente.asignarPatente());
    }
    //-----
    public modificarCamion(nuevaMarca:string, nuevoModelo: string, nuevoValor: string,i: number) {
        if(i>=0 && i< this.arrCamiones.length) {
            const camion: Camiones = this.arrCamiones[i];
            camion.setMarca(nuevaMarca);
            camion.setModelo(nuevoModelo);
            camion.setValor(nuevoValor);
            console.log("Se ha modificado el vehiculo con exito.")
        }else{
            console.log("Iterador inválido.")
        }
    }
    //----
    public darDeBaja(i: number): void {
        if (i >= 0 && i < this.arrCamiones.length) {
            this.arrCamiones.splice(i, 1);
            console.log("Se ha dado de baja el camion numero: ", i);
        } else {
            console.log("Iterador inválido.");
        }
    }

}