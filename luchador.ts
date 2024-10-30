import { StatMain } from "./statMain";

export class Luchador extends StatMain {
    public constructor(nombre: string) {
        super(nombre);
    }
    //methods----
    public establecerStats(): void {
        this.setVelocidad(70);
        this.setVida(460);
        this.setDañoFisico(108);
        this.setDañoMagico(0);
        this.setFuerza(30);
        this.setInteligencia(28);
    }
    public defEvolucionPaladin() {
            this.getVelocidad() + 40;
            this.getVida() + 1800;
            this.getDañoFisico() + 280;
            this.getDañoMagico() + 30;
            this.getFuerza() + 180;
            this.getInteligencia() + 30;
    }
    public asignarPaladin() {
        if (this.getNivel() >= 50) {
            return this.defEvolucionPaladin();
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