export class Motos {
    private arrMotos: Motos[]=[];
    private marcaMoto: string;
    private modeloMoto: string;
    private valorMoto: string;
    //-----------------
    constructor(marcaMoto: string, modeloMoto: string, valorMoto: string){
        this.marcaMoto= marcaMoto;
        this.modeloMoto=modeloMoto;
        this.valorMoto=valorMoto;
    }
    //pseudo,getters----
    getMarca(){
        return this.marcaMoto;
    }
    getModelo(){
        return this.modeloMoto;
    }
    getValor(){
        return this.valorMoto;
    }
    //psudo,setters----
    setMarca(marcaMoto: string){
        this.marcaMoto = marcaMoto;
    }
    setModelo(modeloMoto: string) {
        this.modeloMoto = modeloMoto;
    }
    setValor(valorMoto:string){
        this.valorMoto=valorMoto;
    }
    //Methods----
    public agregarMoto(marcaMoto:string,modeloMoto:string,valorMoto:string){
        const nuevaMoto: Motos = new Motos(marcaMoto,modeloMoto,valorMoto);
        this.arrMotos.push(nuevaMoto);
        console.log("Se agregó la nueva Moto ",+marcaMoto);
    }
    public modificarMoto(nuevaMarca:string, nuevoModelo: string, nuevoValor: string,i: number) {
        if(i>=0 && i< this.arrMotos.length) {
            const moto: Motos = this.arrMotos[i];
            moto.setMarca(nuevaMarca);
            moto.setModelo(nuevoModelo);
            moto.setValor(nuevoValor);
            console.log("Se ha modificado el vehiculo con exito.")
        }else{
            console.log("Iterador inválido.")
        }
    }
    public darDeBaja(i: number): void {
        if (i >= 0 && i < this.arrMotos.length) {
            this.arrMotos.splice(i, 1);
            console.log("Se ha dado de baja el auto en el índice ", i);
        } else {
            console.log("Iterador inválido.");
        }
    }
}