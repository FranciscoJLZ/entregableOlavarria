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
    public asignarBerserker() {
        if (this.getNivel() >= 50) {
            return this.establecerStats();
        } else{
            return false;
        }
    }
    public defEvolucionBerserker() {
            this.getVelocidad() + 90;
            this.getVida() + 1080;
            this.getDañoFisico() + 310;
            this.getDañoMagico() + 0;
            this.getFuerza() + 210;
            this.getInteligencia() + 1;
    }
    public atacar() {
        this.getDañoFisico() + this.getFuerza();
    }
    public defender() {
        this.getVida() + this.getFuerza();
    }
}