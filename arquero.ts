import { StatMain } from "./statMain";

export class Arquero extends StatMain {
    public constructor(nombre: string) {
        super(nombre);
    }
    //methods----
    public establecerStats(): void {
        this.setVelocidad(100);
        this.setVida(90);
        this.setDañoFisico(79);
        this.setDañoMagico(0);
        this.setFuerza(30);
        this.setInteligencia(50);
    }  
    public atacar() {
        this.getDañoFisico() + this.getInteligencia();
    }
    public defender() {
        this.getVida() + this.getFuerza();
    }
}