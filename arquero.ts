import { StatMain } from "./statMain";

export class arquero extends StatMain {
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
    public level(): void {
        this.nivel = 1;
        if (this.experiencia > 600) {
            this.nivel = this.nivel + 1;
        }
    }
    public totalExp(): void {
        this.experiencia = 0;
    }
    public asignarTirador() {
        if (this.getNivel() >= 50) {
            return this.defEvolucionTirador();
        } else{
            return false;
        }
    }
    public defEvolucionTirador() {
            this.getVelocidad() + 90;
            this.getVida() + 130;
            this.getDañoFisico() + 160;
            this.getDañoMagico() + 0;
            this.getFuerza() + 70;
            this.getInteligencia() + 30;
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
        this.getDañoFisico() + this.getInteligencia();
    }
    public defender() {
        this.getVida() + this.getFuerza();
    }
    public usarHabilidad(i: string) {
        parseInt(i);
        return this.habilidades[i];
    }
}