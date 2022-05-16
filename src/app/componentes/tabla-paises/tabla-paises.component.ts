import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PaisesService } from 'src/app/servicios/paises.service';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.scss']
})
export class TablaPaisesComponent implements OnInit {

  paises: Array<any> = [];
  @Output() paisSeleccionado: EventEmitter<any> = new EventEmitter<any>();

  constructor(private paisesService: PaisesService) { }

  ngOnInit(): void {    
    this.paisesService.todos().subscribe(
        t => {
          this.paises = t.slice(0, 3);
          // console.log(this.paises);
        }
      );
  }

  onBanderaClick(pais: any) {
    this.paisSeleccionado.emit(pais);
  }

}
