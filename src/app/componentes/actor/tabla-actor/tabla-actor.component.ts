import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActoresService } from 'src/app/servicios/actores.service';

@Component({
  selector: 'app-tabla-actor',
  templateUrl: './tabla-actor.component.html',
  styleUrls: ['./tabla-actor.component.scss']
})
export class TablaActorComponent implements OnInit {

  actores: Array<any> = [];
  @Output() actorSeleccionado: EventEmitter<any> = new EventEmitter<any>();

  constructor(private actoresService: ActoresService) { }

  ngOnInit(): void {    
    this.actoresService.llenarLista(this.actores);
  }

  onActorClick(actor: any) {
    this.actorSeleccionado.emit(actor);
  }

}
