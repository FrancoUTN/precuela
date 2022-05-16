import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/servicios/peliculas.service';
import { Pelicula } from 'src/app/modelos/Pelicula';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.scss']
})
export class TablaPeliculaComponent implements OnInit {

  peliculas: Array<Pelicula> = [];

  constructor(private peliculasService: PeliculasService) { }

  ngOnInit(): void {
    // this.peliculasService.todos().subscribe(
    //     t => this.peliculas = t
    //   );
    
    this.peliculasService.todas().subscribe(
        t => {
          this.peliculas = t;
          console.log(this.peliculas)
        }
      );
  }

  onDetallesClick(pelicula: Pelicula) {

  }

}
