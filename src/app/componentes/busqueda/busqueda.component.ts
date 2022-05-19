import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/servicios/peliculas.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent implements OnInit {

  peliculas: Array<any> = [];
  pelicula: any;

  constructor(private peliculasService: PeliculasService) { }

  ngOnInit(): void {    
    this.peliculasService.llenarLista(this.peliculas);
  }

  onBorrarHandler() {
    this.peliculasService.eliminar(this.pelicula.id);

    this.pelicula = null;
    this.peliculas = [];
    this.peliculasService.llenarLista(this.peliculas);
  }

  onModificarHandler(pelicula:any) {
    this.pelicula = pelicula;
  }
}
