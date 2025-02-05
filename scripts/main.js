"use strict";

import { coleccion } from "./coleccion.js";
import { disco } from "./disco.js";
import { autor } from "./autor.js";

const micoleccion = new coleccion();

// Método para interactuar con el usuario y agregar un disco
function agregardiscousuario(coleccion) {
    const nombre = prompt("Introduce el nombre del disco:");
    const nombreautor = prompt("Introduce el nombre del autor:");
    const fechanacimiento = prompt("Introduce la fecha de nacimiento del autor (yyyy-mm-dd):");
    const fechapublicacion = prompt("Introduce la fecha de publicación del disco (yyyy-mm-dd):");
    const tipo = prompt("Introduce el tipo de disco:");
    const estado = prompt("Introduce el estado del disco (disponible/prestado):");
    const localizacion = prompt("Introduce la localización del disco:");

    // Crear el autor y el disco con los datos proporcionados
    const autorinstancia = new autor(nombreautor, fechanacimiento);
    const discoinstancia = new disco(nombre, autorinstancia, fechapublicacion, tipo, estado, localizacion);

    // Agregar el disco a la colección
    coleccion.agregardisco(discoinstancia);
    alert("Disco agregado con éxito.");
}

// Mostrar el menú de opciones al usuario
function mostrarmenu() {
    console.log("1. Agregar un disco");
    console.log("2. Listar la colección");
    console.log("3. Mostrar discos por tipo");
    console.log("4. Listar autores y sus discos");
    console.log("5. Prestar un disco");
    console.log("6. Devolver un disco");
    console.log("7. crear 20 discos");
    console.log("8. borar disco");
    console.log("9. Salir");
}

// Función principal para gestionar el programa
function main() {
    let opcion = "";
    do {
        mostrarmenu();
        opcion = prompt("Introduce una opción (1-8):\n" +
            "1: Agregar un disco\n" +
            "2: Listar la colección\n" +
            "3: Mostrar discos por tipo\n" +
            "4: Listar autores y sus discos\n" +
            "5: Prestar un disco\n" +
            "6: Devolver un disco\n" +
            "7: crear 20 discos\n" +
            "8: borar disco\n" +
            "9: Salir");

        switch (opcion) {
            case "1":
                agregardiscousuario(micoleccion);
                break;

            case "2":
                console.log("Colección completa:");
                micoleccion.listarcoleccion();
                break;

            case "3":
                console.log("Discos agrupados por tipo:");
                micoleccion.mostrarportipo();
                break;

            case "4":
                console.log("Autores y sus discos:");
                micoleccion.listarautores();
                break;

            case "5":
                const discoprestar = prompt("Introduce el nombre del disco a prestar:");
                micoleccion.prestardisco(discoprestar);
                break;

            case "6":
                const discodevolver = prompt("Introduce el nombre del disco a devolver:");
                micoleccion.devolverdisco(discodevolver); 
                break;

            case "7":
                micoleccion.precargardiscos();
                break;

            case "8":
                const borrardisco = prompt("Introduce el nombre del disco a borrar:");
                break;

            case "9":
                console.log("Saliendo del programa...");
                break;

            default:
                console.log("Opción no válida. Inténtalo de nuevo.");
                break;
        }
    } while (opcion !== "9");
}

// Ejecutar el programa principal
main();
