export default class Persona {
    constructor(nombre = "", edad = 0) {
        this.nombre = nombre;
        this.edad = edad;
        this.id = this.#generarId();
    }
    //Metodos privados
    #generarId() {
        return Math.floor(Math.random() * 1000);
    }
    //Metodos publico
    saludar() {
        return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`;
}