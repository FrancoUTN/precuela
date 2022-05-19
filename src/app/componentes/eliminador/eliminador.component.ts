import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PeliculasService } from 'src/app/servicios/peliculas.service';

@Component({
  selector: 'app-eliminador',
  templateUrl: './eliminador.component.html',
  styleUrls: ['./eliminador.component.scss']
})
export class EliminadorComponent implements OnInit {

  @Input() pelicula:any;
  @Output() peliculaEliminada:EventEmitter<any> = new EventEmitter<any>();

  constructor(private peliculasService:PeliculasService) { }

  ngOnInit(): void {
  }

  borrar() {
    this.peliculaEliminada.emit();
  }
}
