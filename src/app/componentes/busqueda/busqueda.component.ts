import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/servicios/peliculas.service';
import { Pelicula } from 'src/app/modelos/Pelicula';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent implements OnInit {

  jsonPeliculas: Array<Pelicula> = [];
  pelicula: Pelicula|undefined;

  constructor(private peliculasService: PeliculasService) { }

  ngOnInit(): void {
    // this.peliculasService.todos().subscribe(
    //     t => this.peliculas = t
    //   );
    
    this.peliculasService.todas().subscribe(
        t => {
          this.jsonPeliculas = t;
          console.log(this.jsonPeliculas)
        }
      );
  }

}
