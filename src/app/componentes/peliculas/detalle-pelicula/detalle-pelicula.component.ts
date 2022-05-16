import { Component, OnInit, Input } from '@angular/core';
import { Pelicula } from 'src/app/modelos/Pelicula';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.scss']
})
export class DetallePeliculaComponent implements OnInit {

  @Input() pelicula: Pelicula|undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
