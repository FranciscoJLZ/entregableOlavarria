import { StatMain } from "./statMain";

export class mago extends StatMain {
    public constructor(nombre: string) {
        super(nombre);
    }
    //methods----
    public establecerStats(): void {
        this.setVelocidad(20);
        this.setVida(150);
        this.setDañoFisico(13);
        this.setDañoMagico(100);
        this.setFuerza(7);
        this.setInteligencia(80);
    }
    public level(): void {
        this.nivel = 1;
        if (this.experiencia > 600) {
            this.nivel = this.nivel + 1;
        }
    }
    public totalExp(): void {
        this.experiencia = 0;
    }

    public defEvolucionNigromante() {
        this.getVelocidad() + 40;
        this.getVida() + 480;
        this.getDañoFisico() + 21;
        this.getDañoMagico() + 310;
        this.getFuerza() + 13;
        this.getInteligencia() + 490;
    }

    public defNigromante() {
        if (this.getNivel() >= 50) {
            return this.defEvolucionNigromante();
        } else{
            return false;
        }
    }
    public abrirCaja() {
        let cajaAbierta: boolean;
        if (cajaAbierta = true) {
            let i = Math.floor(Math.random() * this.cofre.length);
            this.habilidades.push(this.cofre[i]);
            console.log("Aprendiste la habilidad: ", +this.cofre[i]);
        }
    }
    public atacar() {
        this.getDañoMagico() + this.getInteligencia();
    }
    public defender() {
        this.getVida() + this.getInteligencia();
    }
    public usarHabilidad(i: string) {
        parseInt(i);
        return this.habilidades[i];
    }
}