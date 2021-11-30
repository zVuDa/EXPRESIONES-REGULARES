//DEFINIR/CREAR OBJETOS EN JAVASCRIPT

class Persona{//LAS CLASES POR CONVENCIÓN PRIMERA LETRA EN MAYÚSCULA
    constructor(){
        this.nombre = "NameLess";
        this.apellido = "NameLess";

    }
}

document.querySelector("#enlace").onclick = e => {
    e.preventDefault();
    //Objeto
    const persona = {
        nombre: "Cristiano Ronaldo",
        apellido: "Dos Santos Aveiro",

    }
}