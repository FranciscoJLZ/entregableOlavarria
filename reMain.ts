import { Vehiculos } from "./reVehiculos"; import { Autos } from "./reAutos"; import { Camiones } from "./reCamiones"; import { Camionetas } from "./reCamionetas"; import { Motos } from "./reMotos";

export class RegistroAutomotor {
    //------
    private arrVehiculos: Vehiculos[] = [];

    //-----------------

    //methods----
    public asignarPatente() {
        const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const numeros = "0123456789";
        let patente: string = "";

        // Genera 3 letras aleatorias
        for (let i = 0; i < 3; i++) {
            patente += letras.charAt(Math.floor(Math.random() * letras.length));
        }

        // Genera 3 números aleatorios
        for (let i = 0; i < 3; i++) {
            patente += numeros.charAt(Math.floor(Math.random() * numeros.length));
        }

        return patente;
    }
    //-----
    public agregarVehiculo(marca: string, modelo: string, valor: string) {
        const nuevoVehiculo = new Vehiculos(marca, modelo, valor);
        this.arrVehiculos.push(nuevoVehiculo);
        let patente: any = "";
        console.log("Se agregó el Vehiculo: ", +marca, "\nCon el dominio: ", + patente.asignarPatente());
    }
    //----
    public modificarVehiculo(nuevaMarca: string, nuevoModelo: string, nuevoValor: string, i: number) {
        if (i >= 0 && i < this.arrVehiculos.length) {
            const vehiculo: Vehiculos = this.arrVehiculos[i];
            vehiculo.setMarca(nuevaMarca);
            vehiculo.setModelo(nuevoModelo);
            vehiculo.setValor(nuevoValor);
            console.log("Se ha modificado el vehiculo con exito.")
        } else {
            console.log("Iterador inválido, intente de nuevo: \n",this.modificarVehiculo(nuevaMarca, nuevoModelo, nuevoValor, i));
        }
    }
    //----
    public darDeBaja(i: number): void {
        if (i >= 0 && i < this.arrVehiculos.length) {
            this.arrVehiculos.splice(i, 1);
            console.log("Se ha dado de baja el vehiculo numero: ", i);
        } else {
            console.log("Iterador inválido, intente nuevamente: \n", this.darDeBaja(i));
        }
    }

}