import { StatMain } from "./statMain";

export class Clerigo extends StatMain {
    public constructor(nombre: string) {
        super(nombre);
    }
    //methods----
    public establecerStats(): void {
        this.setVelocidad(70);
        this.setVida(210);
        this.setDañoFisico(15);
        this.setDañoMagico(90);
        this.setFuerza(10);
        this.setInteligencia(110);
    }
    public atacar() {
        this.getDañoFisico() + this.getFuerza();
    }
    public defender() {
        this.getVida() + this.getFuerza();
    }
}