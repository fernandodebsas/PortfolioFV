export class persona{
    id?: number;
    nombre: String;
    apellido: String;
    url_foto: String;
    sobre_mi: String;
    
    constructor(nombre: String,apellido: String, url_foto: String, sobre_mi: String){
        this.nombre = nombre;
        this.apellido = apellido;
        this.url_foto = url_foto;
        this.sobre_mi = sobre_mi;
    }
}