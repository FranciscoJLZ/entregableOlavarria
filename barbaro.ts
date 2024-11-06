import { StatMain } from "./statMain";

export class Barbaro extends StatMain {
    //----
    public constructor(nombre: string) {
        super(nombre);
    }
    //methods----
    public establecerStats(): void {
        this.setVelocidad(20);
        this.setVida(380);
        this.setDañoFisico(98);
        this.setDañoMagico(0);
        this.setFuerza(80);
        this.setInteligencia(8);
    }
    public atacar() {
        this.getDañoFisico() + this.getFuerza();
    }
    public defender() {
        this.getVida() + this.getFuerza();
    }
}