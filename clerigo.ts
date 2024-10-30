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
    public defEvolucionSanador() {
            this.getVelocidad() + 80;
            this.getVida() + 380;
            this.getDañoFisico() + 20;
            this.getDañoMagico() + 210;
            this.getFuerza() + 23;
            this.getInteligencia() + 90;
    }
    public asignarSanador() {
        if (this.nivel >= 50) {
            return this.defEvolucionSanador();
        } else{
            return false;
        }
    }
    public atacar() {
        this.getDañoFisico() + this.getFuerza();
    }
    public defender() {
        this.getVida() + this.getFuerza();
    }
}