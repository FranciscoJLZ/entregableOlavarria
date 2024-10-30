import { Personaje } from "./personaje"; 
import { Asesino } from "./asesino"; 
import { Mago } from "./mago"; 
import { Barbaro } from "./barbaro"; 
import { Luchador } from "./luchador"; 
import { Arquero } from "./arquero"; 
import { Clerigo } from "./clerigo";

export abstract class StatMain extends Personaje {
    protected cofre: string[] = ["acelerar","adivinacion","agarre electrizante",
        "agrandar","reducir","alarma","Aliado planar","Alterar el propio aspecto",
        "Alternar los recuerdos","Alzar a los muertos","Animar objetos"];
    protected habilidades: string[] = [];
    protected velocidad: number;
    protected vida: number;
    protected dañoFisico: number;
    protected dañoMagico: number;
    protected fuerza: number;
    protected inteligencia: number;
    protected nivel: number;
    protected experiencia: number;
    //----
    public constructor(nombre: string) {
        super(nombre);
    }
    //getters----
    public getVelocidad() {
        return this.velocidad;
    }
    public getVida() {
        return this.vida;
    }
    public getDañoFisico() {
        return this.dañoFisico;
    }
    public getDañoMagico() {
        return this.dañoMagico;
    }
    public getFuerza() {
        return this.fuerza;
    }
    public getInteligencia() {
        return this.inteligencia;
    }
    public getNivel() {
        return this.nivel;
    }
    public getExperiencia() {
        return this.experiencia;
    }
    //setters----
    public setVelocidad(velocidad: number) {
        return this.velocidad;
    }
    public setVida(vida: number) {
        return this.vida;
    }
    public setDañoFisico(dañoFisico: number) {
        return this.dañoFisico;
    }
    public setDañoMagico(dañoMagico: number) {
        return this.dañoMagico;
    }
    public setFuerza(fuerza: number) {
        return this.fuerza;
    }
    public setInteligencia(inteligencia: number) {
        return this.inteligencia;
    }
    public setNivel(nivel: number) {
        return this.nivel;
    }
    public setExperiencia(experiencia: number) {
        return this.experiencia;
    }
    //Methods----
    abstract establecerStats(): void;

    abstract atacar(): void;

    abstract defender(): void;

    public abrirCaja() {
        let cajaAbierta: boolean;
        if (cajaAbierta = true) {
            let i = Math.floor(Math.random() * this.cofre.length);
            this.habilidades.push(this.cofre[i]);
            console.log("Aprendiste la habilidad: ", +this.cofre[i]);
        }
    }

    public level(): void {
        this.setNivel(1);
        if (this.getExperiencia() > 600) {
            this.getNivel() + 1;
        }
    }

    public totalExp(): void {
        this.setExperiencia(0);
    }
    
    public usarHabilidad(i: string) {
        parseInt(i);
        return this.habilidades[i];
    }
}

