 export class Vehiculos {
     protected arrVehiculos:Vehiculos[]=[];
     protected valor: string;
     protected modelo: string;
     protected marca: string;
    //-----------------
     constructor(marca: string, modelo: string, valor: string){         this.marca= marca;
         this.modelo=modelo;
         this.valor=valor;
     }
     //pseudo,getters----
     getMarca(){         return this.marca;
     }
     getModelo(){
         return this.modelo;
     }
     getValor(){
         return this.valor;
     }
     //psudo,setters----
     setMarca(marca: string): void{
         this.marca = marca;
     }
     setModelo(modelo: string): void {
         this.modelo = modelo;
     }
     setValor(valor:string): void{
         this.valor=valor;
     }
 }

