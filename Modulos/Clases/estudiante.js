import Persona from './persona.js';

export default class Persona {
    constructor() {
        super();
        this.carrera = "";
    }

    estudiar() {
        return `${this.nombre} está estudiando ${this.carrera}.`;
    }
    #calcularPromedio() {
        return 65;
    }
    verPromedio() {
        return `Promedio: ${this.#calcularPromedio()}`

    }
}