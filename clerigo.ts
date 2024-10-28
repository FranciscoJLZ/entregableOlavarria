import { StatMain } from "./statMain";

export class clerigo extends StatMain {
    public constructor(nombre: string) {
        super(nombre);
    }
    //methods----
    public establecerStats(): void {
        this.setVelocidad(70);
        this.setVida(210);
        this.setDañoFisico(15);
        this.setDañoMagico(90);
        this.setFuerza(10);
        this.setInteligencia(110);
    }
    public level(): void {
        this.nivel = 1;
        if (this.experiencia > 600) {
            this.nivel = this.nivel + 1;
        }
    }
    public totalExp(): void {
        this.experiencia += 0;
    }
    public defEvolucionSanador() {
            this.getVelocidad() + 80;
            this.getVida() + 380;
            this.getDañoFisico() + 20;
            this.getDañoMagico() + 210;
            this.getFuerza() + 23;
            this.getInteligencia() + 90;
    }
    public asignarSanador() {
        if (this.nivel >= 50) {
            return this.defEvolucionSanador();
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
        this.getDañoFisico() + this.getFuerza();
    }
    public defender() {
        this.getVida() + this.getFuerza();
    }
    public usarHabilidad(i: string) {
        parseInt(i);
        return this.habilidades[i];
    }
}