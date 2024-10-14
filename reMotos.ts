
import { patentes } from "./patentes";
import { Vehiculos } from "./reVehiculos";

export class Motos extends Vehiculos{
    private arrMotos: Motos[]=[];
    //-----------------
    constructor(marca:string,modelo:string,valor:string){
        super(marca,modelo,valor)
    }
    //Methods----
    public agregarMoto(marca:string,modelo:string,valor:string){
        const nuevaMoto: Motos = new Motos(marca,modelo,valor);
        this.arrMotos.push(nuevaMoto);
        const patente = new patentes("");
        console.log("Se agregó la nueva Moto ",+marca,"\nCon el dominio: ",+ patente.asignarPatente());
    }
    public modificarMoto(nuevaMarca:string, nuevoModelo: string, nuevoValor: string,i: number) {
        if(i>=0 && i< this.arrMotos.length) {
            const moto: Motos = this.arrMotos[i];
            moto.setMarca(nuevaMarca);
            moto.setModelo(nuevoModelo);
            moto.setValor(nuevoValor);
            console.log("Se ha modificado el vehiculo con exito.")
        }else{
            console.log("Iterador inválido.")
        }
    }
    public darDeBaja(i: number): void {
        if (i >= 0 && i < this.arrMotos.length) {
            this.arrMotos.splice(i, 1);
            console.log("Se ha dado de baja el auto en el índice ", i);
        } else {
            console.log("Iterador inválido.");
        }
    }
}