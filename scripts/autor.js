"use strict";

export class autor {
    constructor(nombre, fechaNacimiento) {
        this.nombre = nombre; //nombre del autor
        this.fechaNacimiento = fechaNacimiento; //fecha  del autor
        this.discosPublicados = []; //discos publicados 
    }

    agregarDisco(disco) {
        this.discosPublicados.push(disco); //agregar disco a la lista 
    }
}
