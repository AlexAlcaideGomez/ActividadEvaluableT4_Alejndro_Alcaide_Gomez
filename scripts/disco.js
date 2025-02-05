"use strict";
import { autor } from "./autor.js"; 

export class disco {
    constructor(nombre, autor, fechaPublicacion, tipo, estado, localizacion) {
        this.nombre = nombre; // nombre del disco
        this.autor = autor; // autor del disco
        this.fechaPublicacion = fechaPublicacion; // fecha de publicación del disco
        this.tipo = tipo; // tipo de disco
        this.localizacion = localizacion; // localización del disco
        this.estado = estado; // estado del disco
    }

    // metodo para prestar el disco
    prestamo() {
        if (this.estado === "disponible") {
            this.estado = "prestado";
            return "El disco ha sido prestado";
        }
    }

    // metodo para devolver el disco
    devolucion() {
        if (this.estado === "prestado") {
            this.estado = "disponible";
            return "El disco ha sido devuelto";
        }
    }
}
