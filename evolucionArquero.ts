import { Arquero } from "./arquero";

export class evolucionArquero extends Arquero {
    public constructor(nombre: string) {
        super(nombre);
    }
    //methods----
    public asignarTirador() {
        if (this.getNivel() >= 50) {
            return this.defEvolucionArquero();
        } else{
            return false;
        }
    }
    public defEvolucionArquero() {
        this.setVelocidad(this.getVelocidad() + 90);
        this.setVida(this.getVida() + 130);
        this.setDañoFisico(this.getDañoFisico() + 160);
        this.setDañoMagico(this.getDañoMagico() + 0);
        this.setFuerza(this.getFuerza() + 70);
        this.setInteligencia(this.getInteligencia() + 30);
    }
}