export class patentes {
  private patente: string;
  //---------
  constructor(patente: string) {
    this.patente = patente;
  }
  //getters--------
  getPatente() {
    return this.patente;
  }
  //setters--------
  setPatente(patente: string) {
    this.patente = patente;
  }
  //Methods-----
  public asignarPatente() {
    const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numeros = "0123456789";
    let patente = "";

    // Genera 3 letras aleatorias
    for (let i = 0; i < 3; i++) {
      patente += letras.charAt(Math.floor(Math.random() * letras.length));
    }

    // Genera 3 números aleatorios
    for (let i = 0; i < 3; i++) {
      patente += numeros.charAt(Math.floor(Math.random() * numeros.length));
    }

    return patente;
  }
}
