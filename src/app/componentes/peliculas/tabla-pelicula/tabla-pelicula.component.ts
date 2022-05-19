import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pelicula } from 'src/app/modelos/Pelicula';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.scss']
})
export class TablaPeliculaComponent implements OnInit {

  @Input() peliculas: Array<Pelicula> = [];
  @Output() peliculaSeleccionada: EventEmitter<any> = new EventEmitter<any>();

  grilla:boolean = false;

  constructor() { }

  ngOnInit(): void { }

  onDetallesClick(pelicula: Pelicula) {
      this.peliculaSeleccionada.emit(pelicula);
  }

}
