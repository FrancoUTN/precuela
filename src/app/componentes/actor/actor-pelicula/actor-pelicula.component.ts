import { Component, OnInit } from '@angular/core';
import { ActoresService } from 'src/app/servicios/actores.service';

@Component({
  selector: 'app-actor-pelicula',
  templateUrl: './actor-pelicula.component.html',
  styleUrls: ['./actor-pelicula.component.scss']
})
export class ActorPeliculaComponent implements OnInit {

  actores: Array<any> = [];
  actor: any;

  constructor(private actoresService: ActoresService) { }

  ngOnInit(): void {
    this.actoresService.llenarLista(this.actores);
  }
}
