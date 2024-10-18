import { Vehiculos } from "./reVehiculos";
export class Camiones extends Vehiculos{
    public constructor(marca: string, modelo: string, valor: string) {
        super(marca,modelo,valor);
    }
}