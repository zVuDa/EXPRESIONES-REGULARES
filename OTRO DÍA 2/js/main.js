//DEFINIR/CREAR OBJETOS EN JAVASCRIPT
//PINTAR PANTALLA
const muestra = document.querySelector(".muestra");
//IMPORTAR PERSONA
import { Persona } from "./Persona.js";

const p1 = new Persona(
  "Cristiano Ronaldo",
  "Dos Santos Aveiro",
  "25",
  "Transgénero"
);
const p2 = new Persona("Lionel Andrés", "Messi Cuticcini", "Asexual");
const p3 = new Persona("Anderson", "Pereira", "32", "Pansexual");
// console.log(p1.getNombreCompleto())
// console.log(p2.getNombreCompleto())
// console.log(p3.getNombreCompleto())
// p3.setNombre(prompt("Dame tu nombre"))
// console.log(p3.getNombreCompleto())
console.log(p1.getNombre());
console.log(p1.getApellido());
console.log(p1.getEdad());
console.log(p1.getGenero());

document.querySelector("#enlace").onclick = (e) => {
  e.preventDefault();
  //Objeto
  // console.log(typeof Persona)
  muestra.innerHTML = `Nombre: ${p1.getNombre()}<br>Apellido: ${p1.getApellido()}<br>Edad: ${p1.getEdad()}<br>Género: ${p1.getGenero()}<br><br><br>Nombre: ${p2.getNombre()}<br>Apellido: ${p2.getApellido()}<br>Edad: ${p2.getEdad()}<br>Género: ${p2.getGenero()}<br><br><br>Nombre: ${p3.getNombre()}<br>Apellido: ${p3.getApellido()}<br>Edad: ${p3.getEdad()}<br>Género: ${p3.getGenero()}`;
};
