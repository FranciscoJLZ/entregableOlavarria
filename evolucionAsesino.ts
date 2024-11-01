import { Asesino } from "./asesino";

export class evolucionAsesino extends Asesino {
    public constructor(nombre: string){
        super(nombre);
    }
    public defEvolucionAsesino() {
        this.setVelocidad(this.getVelocidad() + 190);
        this.setVida(this.getVida() + 380);
        this.setDañoFisico(this.getDañoFisico() + 289);
        this.setDañoMagico(this.getDañoMagico() + 0);
        this.setFuerza(this.getFuerza() + 125);
        this.setInteligencia(this.getInteligencia() + 110);
    }

    public defMaestroAsesino() {
        if (this.getNivel() >= 50) {
            return this.defEvolucionAsesino;
        } else {
            return false;
        }
    }
}