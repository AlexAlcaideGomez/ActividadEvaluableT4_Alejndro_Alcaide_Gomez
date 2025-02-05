"use strict";

import { disco } from "./disco.js";
import { autor } from "./autor.js";

export class coleccion {
    constructor() {
        this.estanterias = [[]]; // Inicializar la colección con una estantería vacía
        this.limite = 10; // Límite de discos por estantería
    }

    // Método para agregar un disco
    agregardisco(disco) {
        const ultimaestanteria = this.estanterias[this.estanterias.length - 1]; // Obtiene la última estantería

        // Verificar si la última estantería tiene espacio
        if (ultimaestanteria.length < this.limite) {
            ultimaestanteria.push(disco); // Agregar el disco
        } else {
            this.estanterias.push([disco]); // Crea una nueva estantería y agrega el disco
        }
    }

    // Método para mostrar discos agrupados por tipo
    mostrarportipo() {
        const tipos = {};
        this.estanterias.flat().forEach(disco => {
            if (!tipos[disco.tipo]) {
                tipos[disco.tipo] = []; 
            }
            tipos[disco.tipo].push(disco); // Mover fuera del if
        });
        // Muestra en la consola los discos agrupados por tipo
        for (const tipo in tipos) {
            console.log(`tipo: ${tipo}`);
            tipos[tipo].forEach(disco => console.log(` - ${disco.nombre}`));
        }
    }

    // Metodo para listar los autores y sus discos publicados
    listarautores() {
        const autores = {};
        this.estanterias.flat().forEach(disco => {
            if (!autores[disco.autor.nombre]) {
                autores[disco.autor.nombre] = [];
            }
            autores[disco.autor.nombre].push(disco.nombre);
        });
        console.log(autores);
    }

    // Metodo para listar la colección completa
    listarcoleccion() {
        console.log(this.estanterias);
    }

    // Metodo para borrar un disco de la colección
    borrardisco(nombredisco) {
        for (let i = 0; i < this.estanterias.length; i++) {
            const estanteria = this.estanterias[i];
            const index = estanteria.findIndex(disco => disco.nombre === nombredisco);
            if (index !== -1) {
                estanteria.splice(index, 1); // Eliminar el disco
                console.log(`disco "${nombredisco}" eliminado.`);
                return true;
            }
        }
        console.log(`disco "${nombredisco}" no encontrado.`);
        return false;
    }

    // Metodo para prestar un disco
    prestardisco(nombre) {
        for (const estanteria of this.estanterias) {
            const disco = estanteria.find(disco => disco.nombre === nombre);
            if (disco && disco.estado === "disponible") {
                disco.estado = "prestado"; // Cambiar estado a prestado
                console.log(`disco "${nombre}" prestado.`);
                return true;
            }
        }
        console.log(`disco "${nombre}" no disponible para prestar.`);
        return false;
    }

    // Metodo para devolver un disco
    devolverdisco(nombre) {
        for (const estanteria of this.estanterias) {
            const disco = estanteria.find(disco => disco.nombre === nombre);
            if (disco && disco.estado === "prestado") {
                disco.estado = "disponible"; // Cambiar estado a disponible
                console.log(`disco "${nombre}" devuelto.`);
                return true;
            }
        }
        console.log(`disco "${nombre}" no se encontró o ya está disponible.`);
        return false;
    }

    // Método para generar 20 discos en la colección
    precargardiscos() {
        for (let i = 1; i <= 20; i++) {
            const autorinstancia = new autor(`autor ${i % 5}`, `fecha ${i % 5}`);
            const discoinstancia = new disco(
                `disco ${i}`, autorinstancia, `fecha ${i}`, `tipo ${i % 3}`, "disponible", `estantería ${Math.floor(i / this.limite) + 1}`);
            this.agregardisco(discoinstancia);
        }
        console.log("20 discos precargados en la colección.");
    }

    // Metodo para mostrar todos los discos
    mostrardiscos() {
        this.listarcoleccion();
    }
}
