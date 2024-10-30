import { StatMain } from "./statMain";

export class Asesino extends StatMain {
    public constructor(nombre: string) {
        super(nombre);
    }
    //methods----
    public establecerStats(): void {
        this.setVelocidad(60);
        this.setVida(150);
        this.setDañoFisico(60);
        this.setDañoMagico(0);
        this.setFuerza(30);
        this.setInteligencia(35);
    }
    public defEvolucionMaestroAsesino() {
        this.getVelocidad() + 190;
        this.getVida() + 380;
        this.getDañoFisico() + 289;
        this.getDañoMagico() + 0;
        this.getFuerza() + 125;
        this.getInteligencia() + 110;
    }

    public defMaestroAsesino() {
        if (this.nivel >= 50) {
            return this.defEvolucionMaestroAsesino;
        } else {
            return false;
        }
    }
    public atacar() {
        this.getDañoFisico() + this.getVelocidad();
    }
    public defender() {
        this.getVida() + this.getVelocidad();
    }
}