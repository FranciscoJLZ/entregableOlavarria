 export class Vehiculos {
     protected arrVehiculos:Vehiculos[]=[];
     protected valor: string;
     protected modelo: string;
     protected marca: string;
    //-----------------
     constructor(marca: string, modelo: string, valor: string){         
        this.marca= marca;
        this.modelo=modelo;
        this.valor=valor;
     }
     //pseudo,getters----
    public getMarca(){         
        return this.marca;
     }
    public getModelo(){
         return this.modelo;
     }
    public getValor(){
         return this.valor;
     }
     //psudo,setters----
    public setMarca(marca: string): void{
         this.marca = marca;
     }
    public setModelo(modelo: string): void {
         this.modelo = modelo;
     }
    public setValor(valor:string): void{
         this.valor=valor;
     }
 }

