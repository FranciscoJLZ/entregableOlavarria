import { StatMain } from "./statMain";

export class barbaro extends StatMain {
    //----
    public constructor(nombre: string) {
        super(nombre);
    }
    //methods----
    public establecerStats(): void {
        this.setVelocidad(20);
        this.setVida(380);
        this.setDañoFisico(98);
        this.setDañoMagico(0);
        this.setFuerza(80);
        this.setInteligencia(8);
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
    public asignarBerserker() {
        if (this.getNivel() >= 50) {
            return this.establecerStats();
        } else{
            return false;
        }
    }
    public defEvolucionBerserker() {
            this.getVelocidad() + 90;
            this.getVida() + 1080;
            this.getDañoFisico() + 310;
            this.getDañoMagico() + 0;
            this.getFuerza() + 210;
            this.getInteligencia() + 1;
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