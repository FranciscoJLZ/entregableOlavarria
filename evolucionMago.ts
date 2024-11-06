import { Mago } from "./mago";

export class evolucionMago extends Mago{
    public constructor(nombre: string){
        super(nombre);
    }
    public defEvolucionNigromante() {
        this.setVelocidad(this.getVelocidad() + 40);
        this.setVida(this.getVida() + 480);
        this.setDañoFisico(this.getDañoFisico() + 21);
        this.setDañoMagico(this.getDañoMagico() + 310);
        this.setFuerza(this.getFuerza() + 13);
        this.setInteligencia(this.getInteligencia() + 490);
    }

    public defNigromante() {
        if (this.getNivel() >= 50) {
            return this.defEvolucionNigromante();
        } else{
            return false;
        }
    }
}