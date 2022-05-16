export interface Pelicula {
    id:number;
    nombre:string;
    tipo:string; // { terror, comedia, amor, otros }
    fechaEstreno:string; // ¿O Date?
    cantidadPublico:number;
    foto:string;
}