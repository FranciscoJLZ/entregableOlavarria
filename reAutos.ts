export class Autos {
    private arrAutos: Autos[]=[];
    private marcaAuto: string;
    private modeloAuto: string;
    private valorAuto: string;
    //-----------------
    constructor(marcaAuto: string, modeloAuto: string, valorAuto: string){
        this.marcaAuto= marcaAuto;
        this.modeloAuto=modeloAuto;
        this.valorAuto=valorAuto;
    }
    //pseudo,getters----
    getMarca(){
        return this.marcaAuto;
    }
    getModelo(){
        return this.modeloAuto;
    }
    getValor(){
        return this.valorAuto;
    }
    //psudo,setters----
    setMarca(marcaAuto: string): void{
        this.marcaAuto = marcaAuto;
    }
    setModelo(modeloAuto: string): void {
        this.modeloAuto = modeloAuto;
    }
    setValor(valorAuto:string): void{
        this.valorAuto=valorAuto;
    }
    //methods----
    public agregarAuto(marcaAuto:string,modeloAuto:string,valorAuto:string){ 
        const nuevoAuto = new Autos(marcaAuto,modeloAuto,valorAuto);
        this.arrAutos.push(nuevoAuto);
        console.log("Se agregó el nuevo auto ", nuevoAuto);
    }

    public modificarAuto(nuevaMarca:string, nuevoModelo: string, nuevoValor: string,i: number) {
        if(i>=0 && i< this.arrAutos.length) {
            const auto: Autos = this.arrAutos[i];
            auto.setMarca(nuevaMarca);
            auto.setModelo(nuevoModelo);
            auto.setValor(nuevoValor);
            console.log("Se ha modificado el vehiculo con exito.")
        }else{
            console.log("Iterador inválido.")
        }
    }
    public darDeBaja(i: number): void {
        if (i >= 0 && i < this.arrAutos.length) {
            this.arrAutos.splice(i, 1);
            console.log("Se ha dado de baja el auto en el índice ", i);
        } else {
            console.log("Iterador inválido.");
        }
    }
}
/*
if(this.marcaAuto!=undefined&&this.modeloAuto!=undefined&&this.valorAuto!=undefined) {
            console.log("Se requiere ingresar más datos para inscribir un nuevo vehiculo")
        }else if(this.valorAuto!=numero) {
            console.log("EL valor ingresado no es correcto")
        }else if(this.modeloAuto!=string&&this.marcaAuto!=string){
            console.log("Los datos ingresados son incorrectos")
        }else{
            this.arrAutos.push();
        }
*/