import { patentes } from "./patentes"; import { Vehiculos } from "./reVehiculos";
//----------------------


class RegistroAutomotor extends Vehiculos{
    //------
    constructor(modelo, marca, valor){
        super(modelo,marca,valor)
    }
    //methods----
    public agregarVehiculo(marca:string,modelo:string,valor:string, agg:Vehiculos){ 
        const nuevoVehiculo = new RegistroAutomotor(marca,modelo,valor);
        this.arrVehiculos.push(nuevoVehiculo);
        const patente = new patentes("");
        console.log("Se agregó el Vehiculo: ",+marca,"\nCon el dominio: ",+ patente.asignarPatente());
    }

    public modificarVehiculo(nuevaMarca:string, nuevoModelo: string, nuevoValor: string,i: number) {
        if(i>=0 && i< this.arrVehiculos.length) {
            const auto: Vehiculos = this.arrVehiculos[i];
            auto.setMarca(nuevaMarca);
            auto.setModelo(nuevoModelo);
            auto.setValor(nuevoValor);
            console.log("Se ha modificado el vehiculo con exito.")
        }else{
            console.log("Iterador inválido.")
        }
    }
    public darDeBaja(i: number): void {
        if (i >= 0 && i < this.arrVehiculos.length) {
            this.arrVehiculos.splice(i, 1);
            console.log("Se ha dado de baja el vehiculo numero: ", i);
        } else {
            console.log("Iterador inválido.");
        }
    }

}