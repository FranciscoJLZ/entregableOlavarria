import { Clerigo } from "./clerigo";

export class evolucionClerigo extends Clerigo {
    public constructor(nombre: string){
        super(nombre);
    }
    public defEvolucionClerigo() {
        this.setVelocidad(this.getVelocidad() + 80);
        this.setVida(this.getVida() + 380);
        this.setDañoFisico(this.getDañoFisico() + 20);
        this.setDañoMagico(this.getDañoMagico() + 210);
        this.setFuerza(this.getFuerza() + 23);
        this.setInteligencia(this.getInteligencia() + 90);
}
public asignarSanador() {
    if (this.nivel >= 50) {
        return this.defEvolucionClerigo();
    } else{
        return false;
    }
}
}