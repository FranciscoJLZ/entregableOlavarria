import { StatMain } from "./statMain";

export class Mago extends StatMain {
    public constructor(nombre: string) {
        super(nombre);
    }
    //methods----
    public establecerStats(): void {
        this.setVelocidad(20);
        this.setVida(150);
        this.setDañoFisico(13);
        this.setDañoMagico(100);
        this.setFuerza(7);
        this.setInteligencia(80);
    }
    public atacar() {
        this.getDañoMagico() + this.getInteligencia();
    }
    public defender() {
        this.getVida() + this.getInteligencia();
    }
}