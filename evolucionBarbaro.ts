import { Barbaro } from "./barbaro";

export class evolucionBarbaro extends Barbaro{
    public constructor(nombre: string){
        super(nombre);
    }
    public asignarEvolucion() {
        if (this.getNivel() >= 50) {
            return this.defEvolucionBarbaro();
        } else{
            return false;
        }
    }
    public defEvolucionBarbaro() {
            this.setVelocidad(this.getVelocidad() + 90);
            this.setVida(this.getVida() + 1080);
            this.setDañoFisico(this.getDañoFisico() + 310);
            this.setDañoMagico(this.getDañoMagico() + 0);
            this.setFuerza(this.getFuerza() + 210);
            this.setFuerza(this.getInteligencia() + 1);
    }
}