import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/servicios/peliculas.service';
import { Pelicula } from 'src/app/modelos/Pelicula';
import { FotosService } from 'src/app/servicios/fotos.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent implements OnInit {

  peliculas: Array<Pelicula> = [];
  pelicula: Pelicula|undefined;

  constructor(
    private peliculasService: PeliculasService,
    private fotosService: FotosService) { }

  ngOnInit(): void {    
    this.peliculasService.llenarLista(this.peliculas);
  }

  // traerColeccion() {
  //   this.peliculasService.retornarColeccion().subscribe(
  //     (qs) => {
  //       qs.forEach(
  //         (doc) => {
            
  //           this.peliculas.push({id: doc.id, ...doc.data()})

  //         }
  //       );
  //     }
  //   );
  // }

}
