import { Vehiculos } from "./reVehiculos";
import { patentes } from "./patentes";

export class Autos extends Vehiculos {
    private arrAutos: Autos[]=[];
    //-----------------
    constructor(marca: string, modelo: string, valor: string){
        super(marca,modelo,valor)
    }
    //methods----
    public agregarAuto(marca:string,modelo:string,valor:string){ 
        const nuevoAuto = new Autos(marca,modelo,valor);
        this.arrAutos.push(nuevoAuto);
        const patente = new patentes("");
        console.log("Se agregó el nuevo Auto: ",+marca,"\nCon el dominio: ",+ patente.asignarPatente());
    }

    public modificarAuto(nuevaMarca:string, nuevoModelo: string, nuevoValor: string,i: number) {
        if(i>=0 && i< this.arrAutos.length) {
            const auto: Autos = this.arrAutos[i];
            auto.setMarca(nuevaMarca);
            auto.setModelo(nuevoModelo);
            auto.setValor(nuevoValor);
            console.log("Se ha modificado el vehiculo con exito.")
        }else{
            console.log("Iterador inválido.")
        }
    }
    public darDeBaja(i: number): void {
        if (i >= 0 && i < this.arrAutos.length) {
            this.arrAutos.splice(i, 1);
            console.log("Se ha dado de baja el auto en el índice ", i);
        } else {
            console.log("Iterador inválido.");
        }
    }
}

