import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/servicios/peliculas.service';
import { Pelicula } from 'src/app/modelos/Pelicula';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent implements OnInit {

  peliculas: Array<Pelicula> = [];
  pelicula: Pelicula|undefined;

  constructor(private peliculasService: PeliculasService) { }

  ngOnInit(): void {    
    this.peliculasService.llenarLista(this.peliculas);
  }

}
