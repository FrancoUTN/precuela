import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.scss']
})
export class TablaPeliculaComponent implements OnInit {

  @Input() peliculas: Array<any> = [];
  @Output() peliculaSeleccionada: EventEmitter<any> = new EventEmitter<any>();

  grilla:boolean = false;

  constructor() { }

  ngOnInit(): void { }

  onDetallesClick(pelicula: any) {
      this.peliculaSeleccionada.emit(pelicula);
  }

}
