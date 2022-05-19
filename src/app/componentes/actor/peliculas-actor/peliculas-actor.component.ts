import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PeliculasService } from 'src/app/servicios/peliculas.service';

@Component({
  selector: 'app-peliculas-actor',
  templateUrl: './peliculas-actor.component.html',
  styleUrls: ['./peliculas-actor.component.scss']
})
export class PeliculasActorComponent implements OnInit {

  @Input() actor:any;
  peliculas:Array<any> = [];

  constructor(private peliculasService: PeliculasService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.peliculas = [];

    this.peliculasService.retornarColeccion().subscribe(
      (qs) => {
        qs.forEach(
          (doc) => {
            if (doc.data().actor.id == this.actor.id) {
              this.peliculas.push(doc.data());
            }
          }
        )
      }
    );
  }

}
