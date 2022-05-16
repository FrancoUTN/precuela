export interface Pelicula {
    id:number;
    Nombre:string;
    tipo:string; // { terror, comedia, amor, otros }
    fechaEstreno:string; // ¿O Date?
    cantidadPublico:number;
    foto:string;
}