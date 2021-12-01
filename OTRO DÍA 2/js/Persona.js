export class Persona{//LAS CLASES POR CONVENCIÓN PRIMERA LETRA EN MAYÚSCULA
    /**
     * METODO CONSTRUCTOR DE LA CLASE PERSONA
     * @param (string) nombre COMPLETO DE UNA PERSONA
     * @param(string) apellido COMPLETO DE UNA PERSONA
     */

//METODO "OBTENER DETALLES" QUE MUESTRE LOS RESULTADOS POR PANTALLA    

    constructor(nombre = "Sin nombre", apellido= "Sin apellido", edad="Sin edad", genero="Sin género"){
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        this._genero = genero

    }
    /**
     * METODO QUE RETORNA NOMBRE COMPLETO
     * @returns (string) nombre COMPLETO DE UNA PERSONA
     * @returns (string) apellido COMPLETO DE UNA PERSONA
     * @returns (string) edad COMPLETO DE UNA PERSONA
     * @returns (string) genero COMPLETO DE UNA PERSONA
    */
     obtDetalles(){ return `Nombre: ${this._nombre}<br>Apellido: ${this._apellido}<br>Edad: ${this._edad}<br>Género: ${this._genero}`
        return `${this._nombre} ${this._apellido}`;
        // return this.nombre+" "+this.apellido; //LO MISMO PERO MAS ENROLLADO
}

    
    //GETTER
    getNombreCompleto(){
            return `${this._nombre} ${this._apellido}`;
            // return this.nombre+" "+this.apellido; //LO MISMO PERO MAS ENROLLADO
    }

    getNombre(){ // = get Nombre()
        return this._nombre
    }
    getApellido(){ // = get Nombre()
        return this._apellido
    }
    getEdad(){ // = get Nombre()
        return this._edad
    }
    getGenero(){ // = get Nombre()
        return this._genero
    }


    /**
     * SETTER QUE MODIFICA EL NOMBRE DE UNA PERSONA
     * @param {String} nombre 
     */

    setNombre(nombre){ // = ,set Nombre()
        this._nombre = nombre;
    }
}