import { Luchador } from "./luchador";

export class evolucionLuchador extends Luchador{
    public constructor(nombre: string){
        super(nombre);
    }
    public defEvolucionLuchador() {
        this.setVelocidad(this.getVelocidad() + 40);
        this.setVida(this.getVida() + 1800);
        this.setDañoFisico(this.getDañoFisico() + 280);
        this.setDañoMagico(this.getDañoMagico() + 30);
        this.setFuerza(this.getFuerza() + 180);
        this.setInteligencia(this.getInteligencia() + 30);
}
public asignarPaladin() {
    if (this.getNivel() >= 50) {
        return this.defEvolucionLuchador();
    } else{
        return false;
    }
}
}