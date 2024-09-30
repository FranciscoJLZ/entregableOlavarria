export class Camionetas {
    private arrCamionetas: Camionetas[]=[];
    private marcaCamioneta: string;
    private modeloCamioneta: string;
    private valorCamioneta: string;
    //-----------------
    constructor(marcaCamioneta: string, modeloCamioneta: string, valorCamioneta: string){
        this.marcaCamioneta= marcaCamioneta;
        this.modeloCamioneta=modeloCamioneta;
        this.valorCamioneta=valorCamioneta;
    }
    //pseudo,getters----
    getMarca(){
        return this.marcaCamioneta;
    }
    getModelo(){
        return this.modeloCamioneta;
    }
    getValor(){
        return this.valorCamioneta;
    }
    //psudo,setters----
    setMarca(marcaCamioneta: string){
        this.marcaCamioneta = marcaCamioneta;
    }
    setModelo(modeloCamioneta: string) {
        this.modeloCamioneta = modeloCamioneta;
    }
    setValor(valorCamioneta:string){
        this.valorCamioneta=valorCamioneta;
    }
    //Methods-------
    public agregarCamioneta(marcaCamioneta:string,modeloCamioneta:string,valorCamioneta:string){
        const nuevaCamioneta = new Camionetas(marcaCamioneta,modeloCamioneta,valorCamioneta)
        this.arrCamionetas.push(nuevaCamioneta);
        console.log("Se agregó la nueva camioneta: ",+marcaCamioneta);
    }
    public modificarMoto(nuevaMarca:string, nuevoModelo: string, nuevoValor: string,i: number) {
        if(i>=0 && i< this.arrCamionetas.length) {
            const camioneta: Camionetas = this.arrCamionetas[i];
            camioneta.setMarca(nuevaMarca);
            camioneta.setModelo(nuevoModelo);
            camioneta.setValor(nuevoValor);
            console.log("Se ha modificado el vehiculo con exito.")
        }else{
            console.log("Iterador inválido.")
        }
    }
    public darDeBaja(i: number): void {
        if (i >= 0 && i < this.arrCamionetas.length) {
            this.arrCamionetas.splice(i, 1);
            console.log("Se ha dado de baja el auto en el índice ", i);
        } else {
            console.log("Iterador inválido.");
        }
    }
}